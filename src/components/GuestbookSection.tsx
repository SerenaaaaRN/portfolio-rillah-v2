"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send, MessageSquare, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

interface GuestbookMessage {
  id: number | string;
  name: string;
  message: string;
  created_at: string;
}

export const GuestbookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Fetch data dari Supabase saat komponen mount
  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching messages:", error);
      } else {
        setMessages(data || []);
      }
      setIsLoading(false);
    };

    fetchMessages();
  }, []);

  // handler untuk submit pesan ke Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in both name and message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { data, error } = await supabase
      .from("reviews")
      .insert([
        {
          name: name.trim(),
          message: message.trim(),
        },
      ])
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Supabase Error:", error);
    } else {
      if (data) {
        setMessages([data[0], ...messages]);
      }
      setName("");
      setMessage("");
      toast({
        title: "Message sent! 🎉",
        description: "Thanks for leaving a message!",
      });
    }

    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section id="guestbook" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Leave a message</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-2">
            Guest<span className="text-gradient">book</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sign my guestbook and leave a message! I&apos;d love to hear from
            you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">
                      Leave a message
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Your message will appear below
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Messages List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-primary">Recent Messages</span>
              <span className="text-sm text-muted-foreground">
                ({messages.length})
              </span>
            </h3>

            <div className="space-y-3 max-h-125 overflow-y-auto pr-2 custom-scrollbar">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin mb-4" />
                  <p>Loading messages...</p>
                </div>
              ) : messages.length === 0 ? (
                <p className="text-center py-12 text-muted-foreground">
                  No messages yet. Be the first!
                </p>
              ) : (
                messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center shrink-0">
                        <User className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-medium text-sm truncate">
                            {msg.name}
                          </span>
                          <span className="text-xs text-muted-foreground shrink-0">
                            {formatDate(msg.created_at)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground wrap-break-word">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
