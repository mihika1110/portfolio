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
          
          {/* Global Lightning Strike Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => {
              // Random starting positions across the entire screen
              const startX = `${Math.random() * 100}%`;
              const startY = `${Math.random() * 100}%`;
              const angle = Math.random() * 360; // Random angle from 0 to 360 degrees
              
              const colors = [
                'rgba(34,211,238,0.9)', // Bright cyan
                'rgba(147,51,234,0.8)', // Bright purple
                'rgba(59,130,246,0.8)', // Bright blue
                'rgba(236,72,153,0.8)', // Bright pink
                'rgba(16,185,129,0.8)', // Bright green
                'rgba(245,158,11,0.8)', // Bright orange
              ];
              const color = colors[i % colors.length];
              
              return (
                <div
                  key={`lightning-${i}`}
                  className="absolute animate-lightning-strike"
                  style={{
                    left: startX,
                    top: startY,
                    width: '6px', // Slightly thinner
                    height: '300px', // Shorter height for faster travel
                    background: `linear-gradient(45deg, ${color} 0%, ${color.replace('0.9', '0.7').replace('0.8', '0.6')} 20%, ${color.replace('0.9', '0.4').replace('0.8', '0.3')} 50%, ${color.replace('0.9', '0.2').replace('0.8', '0.1')} 80%, transparent 100%)`,
                    transform: `rotate(${angle}deg)`,
                    filter: `blur(${Math.random() * 2 + 1}px)`, // Reduced blur
                    animationDuration: `${3 + Math.random() * 2}s`, // Faster animation
                    opacity: 0,
                    transformOrigin: 'top center',
                    '--start-x': startX,
                    '--start-y': startY,
                    '--angle': `${angle}deg`,
                  } as React.CSSProperties & { 
                    '--start-x': string;
                    '--start-y': string;
                    '--angle': string;
                  }}
                />
              );
            })}
          </div>
          
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
          
          {/* Enhanced moving light globs with orbital and spiral paths */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => {
              const animationType = i % 3;
              const animationClass = animationType === 0 ? 'animate-float-orbital' : 
                                   animationType === 1 ? 'animate-float-spiral' : 
                                   'animate-float1';
              
              const colors = [
                'rgba(100, 150, 255, 0.4)',
                'rgba(150, 100, 255, 0.3)',
                'rgba(255, 100, 150, 0.3)',
                'rgba(100, 255, 150, 0.3)',
                'rgba(255, 200, 100, 0.3)',
                'rgba(150, 255, 200, 0.3)'
              ];
              
              return (
                <div
                  key={i}
                  className={`absolute rounded-full blur-xl ${animationClass} animate-glow-breathe`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 120 + 60}px`,
                    height: `${Math.random() * 120 + 60}px`,
                    background: `radial-gradient(circle, ${colors[i % colors.length]} 0%, transparent 70%)`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${20 + Math.random() * 15}s`,
                    filter: `blur(${Math.random() * 20 + 15}px)`,
                  }}
                />
              );
            })}
          </div>
          
          {/* Enhanced floating blurred shapes with varied movements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float-orbital" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-float-spiral" />
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl animate-float1" />
          <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-pink-500/15 rounded-full blur-3xl animate-float2" />
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-green-500/20 rounded-full blur-2xl animate-float3" />
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
