import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "RuangDengar — Terapi Musik",
  description:
    "Platform sederhana untuk menikmati musik terapi, cek skala nyeri, dan membaca referensi ilmiah tentang terapi musik.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${fraunces.variable} ${inter.variable} ${mono.variable} bg-bg font-body text-ink antialiased`}
      >
        <Sidebar />
        <main className="min-h-screen px-5 pt-20 md:ml-[240px] md:px-9 md:pt-9">
          <div className="mx-auto max-w-[840px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
