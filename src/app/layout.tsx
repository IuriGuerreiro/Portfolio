import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { NavBar } from "@/components/navBar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bold = Geist({
  variable: "--font-bold",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iuri Guerreiro | Full Stack & AI Engineer",
  description: "Portfolio of Iuri Guerreiro - Specializing in Python, AI orchestration, and scalable web architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <NavBar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
