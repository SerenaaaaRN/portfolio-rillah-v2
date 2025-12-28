import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debugging sederhana: Kalau error, dia akan kasih tahu di console mana yang hilang
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase Env Variables:", {
    url: !!supabaseUrl,
    key: !!supabaseAnonKey,
  });
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");
