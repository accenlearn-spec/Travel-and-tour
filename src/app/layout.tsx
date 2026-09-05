import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Murugan Holidays | Tourist Bus & Travels",
  description: "Travel comfortably. Explore confidently. Create unforgettable journeys with Sri Murugan Holidays.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

