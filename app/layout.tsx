import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { NavigationSection } from "@/components/custom-components/core/NavigationSection";
import { FooterSection } from "@/components/custom-components/core/FooterSection";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courier Services",
  description: "This is demo project for courier services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <NavigationSection/>
        {children}
        <FooterSection/>
        </body>
    </html>
  );
}
