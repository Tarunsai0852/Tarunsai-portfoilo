import React, { useEffect, useRef } from 'react';

const CursorDot: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frameId = 0;

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-9 w-9 rounded-full border border-orange-300/45 mix-blend-difference md:block" />
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[121] hidden h-2.5 w-2.5 rounded-full bg-orange-300 shadow-[0_0_18px_rgba(255,174,93,0.9)] md:block" />
    </>
  );
};

export default CursorDot;
