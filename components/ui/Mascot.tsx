"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const ScrollProgressLine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastScrollY = useRef(0);

  const updateScrollProgress = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    const progress = Math.min((scrollY / maxScroll) * 100, 100);

    setScrollProgress(progress);
    setIsVisible(scrollY > 50);
    
    // Cancel the animation frame to prevent multiple updates
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        ticking = true;
        animationFrameRef.current = requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
      }
    }

    // Throttled scroll handler for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledScrollHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener("scroll", throttledScrollHandler, { passive: true });
    
    // Initial call
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, [updateScrollProgress]);

  return (
    <div className="fixed top-0 left-8 z-20 pointer-events-none">
      {/* Background track */}
      <div className="absolute top-0 left-0 w-2 h-screen bg-gray-800/30 rounded-full" />

      {/* Solid progress line */}
      <div
        className="absolute top-0 left-0 w-2 bg-cyan-500 rounded-full transition-all duration-300 ease-out"
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

        {/* 3D Starfield Globe - Optimized for smooth animation */}
        <div
          ref={particlesRef}
          className="absolute bottom-0 left-1/2 w-0 h-0 overflow-visible"
          style={{ 
            transform: 'translateX(-50%)',
            willChange: 'transform', // Optimize for animations
          }}
        >
          {[...Array(200)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const radius = 60 + Math.random() * 40; // Globe radius
            const latitude = (Math.random() - 0.5) * Math.PI; // -π/2 to π/2
            const longitude = Math.random() * 2 * Math.PI; // 0 to 2π
            const speed = 0.5 + Math.random() * 1.5; // Rotation speed
            const direction = Math.random() > 0.5 ? 1 : -1; // Random direction
            
            // Calculate 3D position on sphere surface
            const x = radius * Math.cos(latitude) * Math.cos(longitude);
            const y = radius * Math.sin(latitude);
            const z = radius * Math.cos(latitude) * Math.sin(longitude);
            
            return (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-globe-orbit"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${x}px`,
                  top: `${y}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${10 + speed * 5}s`,
                  animationDirection: direction > 0 ? 'normal' : 'reverse',
                  opacity: Math.random() * 0.8 + 0.2,
                  boxShadow: `0 0 8px rgba(255,255,255,0.9), 0 0 16px rgba(34,211,238,0.7)`,
                  transform: `translateZ(${z}px)`,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform', // Optimize for animations
                  backfaceVisibility: 'hidden', // Improve performance
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