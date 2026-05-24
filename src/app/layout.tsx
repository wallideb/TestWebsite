import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RaptorNest — Global Birds of Prey Nest Tracker",
  description:
    "Track birds of prey nests in real-time across Europe. Interactive map with live cameras, species profiles, conservation status, and scientific data.",
  keywords: "birds of prey, raptors, nest tracking, eagle, falcon, vulture, osprey, conservation, live camera, ornithology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-white font-[var(--font-inter)]">
        <Header />
        <main className="flex-1 pt-14">{children}</main>
      </body>
    </html>
  );
}
