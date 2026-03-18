import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = (t: number, scroll: number) => {
      ctx.save();
      const pulse = Math.sin(t * 0.02) * 0.05 + 0.1;
      ctx.strokeStyle = `rgba(139, 92, 246, ${pulse})`;
      ctx.lineWidth = 1;

      const gridSize = 80;
      const horizon = canvas.height * 0.45;
      const move = (t * 0.8 + scroll * 0.2) % gridSize;

      // Vertical lines with perspective
      for (let x = -canvas.width; x < canvas.width * 2; x += gridSize) {
        ctx.beginPath();
        const xOffset = x - canvas.width / 2;
        ctx.moveTo(canvas.width / 2 + xOffset * 0.05, horizon);
        ctx.lineTo(canvas.width / 2 + xOffset * 5, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines with perspective
      for (let y = 0; y < canvas.height - horizon; y += gridSize) {
        const currentY = horizon + ((y + move) % (canvas.height - horizon));
        const ratio = (currentY - horizon) / (canvas.height - horizon);
        ctx.globalAlpha = Math.pow(ratio, 2) * 0.8;
        ctx.beginPath();
        ctx.moveTo(0, currentY);
        ctx.lineTo(canvas.width, currentY);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawNebula = (t: number, scroll: number) => {
      const glows = [
        { x: 0.1, y: 0.2, color: 'rgba(139, 92, 246, 0.12)', size: 0.6 },
        { x: 0.9, y: 0.8, color: 'rgba(59, 130, 246, 0.1)', size: 0.7 },
        { x: 0.5, y: 0.5, color: 'rgba(16, 185, 129, 0.04)', size: 0.8 },
        { x: 0.3, y: 0.7, color: 'rgba(236, 72, 153, 0.05)', size: 0.5 }
      ];

      glows.forEach((glow, i) => {
        const x = (glow.x * canvas.width + Math.sin(t * 0.0005 + i) * 150);
        let y = (glow.y * canvas.height + Math.cos(t * 0.0005 + i) * 150 - scroll * 0.15) % (canvas.height * 2);
        if (y < -canvas.height) y += canvas.height * 2;
        if (y > canvas.height) y -= canvas.height * 2;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, canvas.width * glow.size);
        gradient.addColorStop(0, glow.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.globalCompositeOperation = 'screen';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      ctx.globalCompositeOperation = 'source-over';
    };

    const stars: {x: number, y: number, s: number, o: number}[] = Array.from({length: 100}, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 2000,
      s: Math.random() * 2 + 0.5,
      o: Math.random()
    }));

    const drawStars = (scroll: number) => {
      ctx.fillStyle = '#fff';
      stars.forEach(star => {
        const x = star.x % canvas.width;
        const y = (star.y - scroll * 0.05) % canvas.height;
        ctx.globalAlpha = star.o * 0.5;
        ctx.beginPath();
        ctx.arc(x, y < 0 ? y + canvas.height : y, star.s, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      time++;
      ctx.fillStyle = '#020008';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawStars(scrollYRef.current);
      drawNebula(time, scrollYRef.current);
      drawGrid(time, scrollYRef.current);

      // Shooting star logic
      if (Math.random() < 0.01) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height / 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + 100, startY + 50);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    const handleResize = () => resize();
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default AnimatedBackground;
