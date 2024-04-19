import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gaucho Racing",
  description: "UCSB's Formula SAE team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
