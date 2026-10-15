import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ojo Oladapo — Software Engineer & Product Builder",
  description:
    "Portfolio of Ojo Oladapo. Software Engineer specializing in high-performance web systems, mobile architecture, and product engineering.",
  keywords: [
    "Ojo Oladapo",
    "Software Engineer",
    "Full Stack Developer",
    "React Native",
    "Next.js",
    "Bookly.ng",
    "Daps Browser",
  ],
  authors: [{ name: "Ojo Oladapo" }],
  openGraph: {
    title: "Ojo Oladapo — Software Engineer & Product Builder",
    description:
      "Crafting resilient digital products with precision, clean code, and intentional software architecture.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#070708] text-zinc-100 selection:bg-zinc-100 selection:text-zinc-950 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
