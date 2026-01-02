"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface GuestbookMessage {
  id: number | string;
  name: string;
  message: string;
  created_at: string;
}

export const useGuestbook = () => {
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching messages:", error);
        toast({
          title: "Error",
          description: "Failed to load messages.",
          variant: "destructive",
        });
      } else {
        setMessages(data || []);
      }

      setIsLoading(false);
    };

    fetchMessages();
  }, [supabase, toast]); 

  const submitMessage = async (name: string, message: string) => {
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in both name and message.",
        variant: "destructive",
      });
      return false;
    }

    setIsSubmitting(true);
    const { data, error } = await supabase
      .from("reviews")
      .insert([{ name: name.trim(), message: message.trim() }])
      .select("*")
      .order("created_at", { ascending: false });

    setIsSubmitting(false);

    if (error) {
      console.error("Supabase Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      return false;
    }

    if (data) {
      setMessages((prev) => [data[0], ...prev]);
      toast({
        title: "Message sent! 🎉",
        description: "Thanks for leaving a message!",
      });
      return true;
    }
  };

  return {
    messages,
    isLoading,
    isSubmitting,
    submitMessage,
  };
};
