import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

// Konfigurasi font Outfit untuk body text
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Konfigurasi font Space Grotesk untuk heading/display text
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurora Dev Portfolio",
  description: "Personal portfolio built with Next.js and Aurora design system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            {/* Jika kamu sudah memindahkan Navbar.tsx, 
               kamu bisa pasang di sini agar muncul di semua halaman:
               <Navbar /> 
            */}
            <main className="flex-grow">
              {children}
            </main>
            {/* <Footer /> 
            */}
          </div>
        </Providers>
      </body>
    </html>
  );
}