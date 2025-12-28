import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Ini memaksa variabel masuk jika loading otomatis gagal
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  reactCompiler: true,
};
console.log("Supabase URL Check:", !!process.env.NEXT_PUBLIC_SUPABASE_URL);

export default nextConfig;
