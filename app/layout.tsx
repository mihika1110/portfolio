import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
// Minimalist animated grid background

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mihika's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {/* Minimalist animated grid background */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-black-100">
          <div className="absolute inset-0 w-full h-full opacity-10 animate-[moveGrid_60s_linear_infinite] bg-[url('/footer-grid.svg')] bg-repeat" style={{ backgroundSize: '60px 60px' }} />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
