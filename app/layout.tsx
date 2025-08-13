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
          

          
          {/* Enhanced moving stars with varied animations */}
          <div className="absolute inset-0">
            {[...Array(80)].map((_, i) => {
              const animationType = i % 4;
              const animationClass = animationType === 0 ? 'animate-dot-float' : 
                                   animationType === 1 ? 'animate-dot-pulse' : 
                                   animationType === 2 ? 'animate-pulse' : 'animate-dot-float';
              
              return (
                <div
                  key={i}
                  className={`absolute w-1 h-1 bg-white rounded-full ${animationClass}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                    opacity: Math.random() * 0.8 + 0.2,
                    boxShadow: `0 0 ${Math.random() * 12 + 6}px rgba(255, 255, 255, 0.7)`,
                    transform: `scale(${Math.random() * 0.5 + 0.5})`,
                  }}
                />
              );
            })}
          </div>
          

          

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
