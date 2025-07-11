import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import StarfieldBackground from "@/components/ui/StarfieldBackground";
import ScrollProgressLine from "@/components/ui/Mascot";
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
        <StarfieldBackground />
        {/* Minimalist animated dot background with floating blurred shapes */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-black-100">
          {/* Square grid background */}
          <div className="absolute inset-0 w-full h-full opacity-10 animate-[moveGrid_60s_linear_infinite] bg-[url('/footer-grid.svg')] bg-repeat" style={{ backgroundSize: '60px 60px' }} />
          
          {/* Moving stars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  opacity: Math.random() * 0.8 + 0.2,
                  boxShadow: `0 0 ${Math.random() * 8 + 4}px rgba(255, 255, 255, 0.6)`,
                }}
              />
            ))}
          </div>
          
          {/* Moving light globs */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full blur-xl animate-float1"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  background: `radial-gradient(circle, rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 255, 0.3) 0%, transparent 70%)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
          
          {/* Floating blurred shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float1" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-float2" />
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl animate-float3" />
          <ScrollProgressLine />
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
