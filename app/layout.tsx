import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Revive Med Spa — Look as Good as You Feel.",
  description: "Board-certified medical spa in Milford, OH. Botox, fillers, laser treatments, chemical peels, microneedling, IV therapy, and weight loss programs. Book a free consultation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
