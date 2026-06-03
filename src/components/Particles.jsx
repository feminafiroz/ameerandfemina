"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset(startFromTop = false) {
        this.x = Math.random() * canvas.width;
        this.y = startFromTop
          ? -Math.random() * 40
          : Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = Math.random() * 0.6 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.25;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
        this.isGold = Math.random() > 0.6;
        // gentle sway
        this.swayAmplitude = Math.random() * 0.5 + 0.2;
        this.swaySpeed = Math.random() * 0.02 + 0.005;
        this.swayOffset = Math.random() * Math.PI * 2;
        this.age = 0;
      }

      update() {
        this.age++;
        this.x += this.speedX + Math.sin(this.age * this.swaySpeed + this.swayOffset) * this.swayAmplitude;
        this.y += this.speedY;
        this.opacity += this.fadeDirection * 0.003;

        if (this.opacity <= 0.05 || this.opacity >= 0.8) {
          this.fadeDirection *= -1;
        }

        // respawn from top when falling off bottom or drifting off sides
        if (
          this.y > canvas.height + 10 ||
          this.x < -20 ||
          this.x > canvas.width + 20
        ) {
          this.reset(true);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        if (this.isGold) {
          ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
          ctx.shadowColor = "rgba(212, 175, 55, 0.9)";
          ctx.shadowBlur = 15;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      particles = [];
       const count = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 140);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener("resize", () => {
      resize();
      init();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-canvas"
      aria-hidden="true"
    />
  );
}
