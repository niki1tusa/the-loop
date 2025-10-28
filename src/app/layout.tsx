import type { Metadata } from "next";
import { Rubik, Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rubikSans = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Loop",
  description: "app for tracker habit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${rubikSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
