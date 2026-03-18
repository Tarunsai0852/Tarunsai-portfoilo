import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children, id }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // 3D Game-like transition:
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [15, 0, 0, -15]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  const zIndex = useTransform(scrollYProgress, [0, 0.5, 1], [1, 10, 1]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ 
        opacity,
        scale,
        rotateX,
        y,
        zIndex,
        perspective: "1200px",
        transformStyle: "preserve-3d",
        willChange: "transform, opacity"
      }}
      className="relative overflow-hidden"
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection;
