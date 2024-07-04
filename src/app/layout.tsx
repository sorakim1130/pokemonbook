import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "나만의 포켓몬 도감일세 무려 1세대라구!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="w-full bg-amber-200 h-[80px] text-center flex justify-center items-center">포켓몬 도감!</header>
      {children}
      </body>
    </html>
  );
}
