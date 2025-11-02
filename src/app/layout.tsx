import type { Metadata } from "next";
import { Fira_Code, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const fontSans = Manrope({
  variable: "--font-sans",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fontMono = Fira_Code({
  variable: "--font-mono",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Maksim Isaev",
    default: "Maksim Isaev — Personal Trainer",
  },
  description:
    "Personal training and coaching for strength, mobility, and confidence in English and Russian.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
