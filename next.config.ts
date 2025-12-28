import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};
console.log("Supabase URL Check:", !!process.env.NEXT_PUBLIC_SUPABASE_URL);

export default nextConfig;
