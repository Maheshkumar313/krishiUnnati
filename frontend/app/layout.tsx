import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KrishiUnnati | Premium Indian Organic Farm",
  description: "Authentic, high-end organic products directly from Indian farms. Experience the purity of nature with KrishiUnnati.",
};

import StoreLayoutWrapper from "@/components/StoreLayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body selection:bg-accent/30 selection:text-white">
        <StoreLayoutWrapper>{children}</StoreLayoutWrapper>
      </body>
    </html>
  );
}
