"use client";

import React, { useRef, useEffect } from "react";

const STAR_COUNT = 120;
const STAR_COLOR = "rgba(255,255,255,0.85)";
const STAR_SIZE = 1.2;
const STAR_SPEED = 0.15;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef(
    Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      vx: 0,
      vy: 0,
    }))
  );
  const pointer = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let animationId: number;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = STAR_COLOR;
      for (const star of stars.current) {
        // Project 3D to 2D
        const sx = (star.x - 0.5) * width * 1.2 + width / 2;
        const sy = (star.y - 0.5) * height * 1.2 + height / 2;
        ctx.beginPath();
        ctx.arc(sx, sy, STAR_SIZE + 1.5 * (1 - star.z), 0, 2 * Math.PI);
        ctx.fill();
      }
      ctx.restore();
    }

    function update() {
      for (const star of stars.current) {
        // Move stars toward pointer for interactivity
        const dx = pointer.current.x - star.x;
        const dy = pointer.current.y - star.y;
        star.vx += dx * 0.0005 * (1 - star.z);
        star.vy += dy * 0.0005 * (1 - star.z);
        star.x += (star.vx + (Math.random() - 0.5) * STAR_SPEED) * (0.5 + 0.5 * (1 - star.z));
        star.y += (star.vy + (Math.random() - 0.5) * STAR_SPEED) * (0.5 + 0.5 * (1 - star.z));
        // Wrap around
        if (star.x < 0) star.x = 1;
        if (star.x > 1) star.x = 0;
        if (star.y < 0) star.y = 1;
        if (star.y > 1) star.y = 0;
        // Dampen velocity
        star.vx *= 0.96;
        star.vy *= 0.96;
      }
    }

    function animate() {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    function handlePointer(e: MouseEvent | TouchEvent) {
      let x = 0.5, y = 0.5;
      if (e instanceof MouseEvent) {
        x = e.clientX / width;
        y = e.clientY / height;
      } else if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX / width;
        y = e.touches[0].clientY / height;
      }
      pointer.current.x = x;
      pointer.current.y = y;
    }
    window.addEventListener("mousemove", handlePointer);
    window.addEventListener("touchmove", handlePointer);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointer);
      window.removeEventListener("touchmove", handlePointer);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default StarfieldBackground; 