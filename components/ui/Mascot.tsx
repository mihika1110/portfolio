"use client";

import React, { useEffect, useRef, useState } from "react";

const ScrollProgressLine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min((scrollY / maxScroll) * 100, 100);

      setScrollProgress(progress);
      setIsVisible(scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-8 z-20 pointer-events-none">
      {/* Background track */}
      <div className="absolute top-0 left-0 w-2 h-screen bg-gray-800/30 rounded-full" />

      {/* Solid progress line */}
      <div
        className="absolute top-0 left-0 w-2 bg-cyan-500 rounded-full transition-all duration-500 ease-out"
        style={{
          height: `${scrollProgress}vh`,
          opacity: isVisible ? 1 : 0,
          boxShadow:
            '0 0 60px rgba(34, 211, 238, 0.8), 0 0 100px rgba(34, 211, 238, 0.6), inset 0 0 40px rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Glow at the tip */}
        <div
          className="absolute bottom-0 left-1/2 w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.9) 0%, rgba(0,0,0,0) 70%)',
            transform: 'translateX(-50%)',
            filter: 'blur(20px)',
            opacity: 0.8,
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-24 h-24 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(0,0,0,0) 70%)',
            transform: 'translateX(-50%)',
            filter: 'blur(40px)',
            opacity: 0.6,
          }}
        />

        {/* Starfield particles */}
        <div
          ref={particlesRef}
          className="absolute bottom-0 left-1/2 w-0 h-0 overflow-visible"
          style={{ transform: 'translateX(-50%)' }}
        >
          {[...Array(30)].map((_, i) => {
            const size = Math.random() * 2 + 1.5;
            return (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-star"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 40 - 20}px`,
                  animationDelay: `${Math.random() * 1.5}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                  opacity: Math.random() * 0.6 + 0.4,
                  boxShadow: `0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(34,211,238,0.6)`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressLine;