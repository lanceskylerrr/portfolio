"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ShootingStarsAndStarsBackground = ({
  starColor = "#ffffff",
  trailColor = "#ddddff",
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 3000,
  maxDelay = 7000,
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  className,
}) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Parse colors
    const parseColor = (color) => {
      if (color.startsWith("#")) {
        const hex = color.slice(1);
        return {
          r: parseInt(hex.slice(0, 2), 16),
          g: parseInt(hex.slice(2, 4), 16),
          b: parseInt(hex.slice(4, 6), 16),
        };
      }
      return { r: 255, g: 255, b: 255 };
    };

    const starColorRGB = parseColor(starColor);
    const trailColorRGB = parseColor(trailColor);

    // Create stars
    const createStars = () => {
      const numStars = Math.floor(
        canvas.width * canvas.height * starDensity
      );
      starsRef.current = [];

      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    // Create shooting star
    const createShootingStar = () => {
      const side = Math.floor(Math.random() * 4);
      const offset = Math.random() * Math.max(canvas.width, canvas.height);
      let x, y, angle;

      switch (side) {
        case 0: // top
          x = offset;
          y = -10;
          angle = 45;
          break;
        case 1: // right
          x = canvas.width + 10;
          y = offset;
          angle = 135;
          break;
        case 2: // bottom
          x = offset;
          y = canvas.height + 10;
          angle = 225;
          break;
        case 3: // left
          x = -10;
          y = offset;
          angle = 315;
          break;
        default:
          x = 0;
          y = 0;
          angle = 45;
      }

      shootingStarsRef.current.push({
        x,
        y,
        angle: (angle * Math.PI) / 180,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        length: Math.random() * 80 + 50,
        opacity: 1,
        trail: [],
      });
    };

    // Draw stars
    const drawStars = () => {
      starsRef.current.forEach((star) => {
        if (allStarsTwinkle && Math.random() < twinkleProbability) {
          star.opacity += star.twinkleSpeed * star.twinkleDirection;
          if (star.opacity <= 0 || star.opacity >= 1) {
            star.twinkleDirection *= -1;
          }
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColorRGB.r}, ${starColorRGB.g}, ${starColorRGB.b}, ${star.opacity})`;
        ctx.fill();
      });
    };

    // Draw shooting stars
    const drawShootingStars = () => {
      shootingStarsRef.current = shootingStarsRef.current.filter((star) => {
        star.x += star.speed * Math.cos(star.angle);
        star.y += star.speed * Math.sin(star.angle);
        star.trail.push({ x: star.x, y: star.y });

        if (star.trail.length > star.length / 10) {
          star.trail.shift();
        }

        // Draw trail
        star.trail.forEach((point, index) => {
          const trailOpacity = (index / star.trail.length) * star.opacity * 0.5;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${trailColorRGB.r}, ${trailColorRGB.g}, ${trailColorRGB.b}, ${trailOpacity})`;
          ctx.fill();
        });

        // Draw head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColorRGB.r}, ${starColorRGB.g}, ${starColorRGB.b}, ${star.opacity})`;
        ctx.fill();

        return (
          star.x > -50 &&
          star.x < canvas.width + 50 &&
          star.y > -50 &&
          star.y < canvas.height + 50
        );
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawStars();
      drawShootingStars();
      animationId = requestAnimationFrame(animate);
    };

    createStars();
    animate();

    // Create shooting stars at intervals
    const scheduleShootingStar = () => {
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(() => {
        createShootingStar();
        scheduleShootingStar();
      }, delay);
    };

    scheduleShootingStar();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [
    starColor,
    trailColor,
    minSpeed,
    maxSpeed,
    minDelay,
    maxDelay,
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
    />
  );
};
