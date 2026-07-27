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
  title: "Learn Quran Online with Tajweed | Shoaib Quran Academy",
  description:
    "Join Shoaib Quran Academy for online Quran, Tajweed, Arabic language and Islamic studies classes. Learn with experienced instructors, flexible schedules, and a supportive global community.",
  openGraph: {
    title: "Learn Quran Online with Tajweed | Shoaib Quran Academy",
    description:
      "Join Shoaib Quran Academy for online Quran, Tajweed, Arabic language and Islamic studies classes. Learn with experienced instructors, flexible schedules, and a supportive global community.",
    url: "https://shoaib-quran-arabic-academy.com",
    siteName: "Shoaib Quran Academy",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shoaib Quran Academy online Quran classes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Quran Online with Tajweed | Shoaib Quran Academy",
    description:
      "Online Quran, Tajweed, Arabic language and Islamic studies classes for global learners.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}