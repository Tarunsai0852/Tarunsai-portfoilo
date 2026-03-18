import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Download, Github, Linkedin, MapPin } from 'lucide-react';
import Keyboard3D from './Keyboard3D';

const Hero: React.FC = () => {
  const [isBurst, setIsBurst] = useState(false);
  const nameParts = ["Tarunsai", "Madimi"];
  const firstName = nameParts[0];
  const lastName = nameParts[1];

  const handleBurst = () => {
    setIsBurst(true);
    setTimeout(() => setIsBurst(false), 1000);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden bg-transparent">
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03]" 
        style={{ background: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)' }} 
      />

      {/* Light Illumination Effects */}
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      {/* Background Stars/Particles */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white"
            style={{
              top: `${(i * 7) % 100}%`,
              left: `${(i * 13) % 100}%`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* Game UI Corners */}
      <div className="absolute top-24 left-10 h-24 w-24 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl hidden lg:block" />
      <div className="absolute top-24 right-10 h-24 w-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl hidden lg:block" />
      <div className="absolute bottom-10 left-10 h-24 w-24 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl hidden lg:block" />
      <div className="absolute bottom-10 right-10 h-24 w-24 border-b-2 border-r-2 border-primary/20 rounded-br-3xl hidden lg:block" />

      {/* Water Bubble Location Badge */}
      <AnimatePresence>
        {!isBurst && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
              opacity: 1 
            }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            onMouseEnter={handleBurst}
            className="absolute top-32 right-10 z-20 cursor-pointer items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 backdrop-blur-xl flex shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            <div className="h-8 w-8 overflow-hidden rounded-full bg-white/10">
              <img 
                src="https://picsum.photos/seed/avatar/100/100" 
                alt="Avatar" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Location</span>
              <span className="cracker-glow text-xs font-bold text-white flex items-center gap-1">
                <MapPin size={10} /> {RESUME_DATA.basics.location}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto flex max-w-7xl relative z-10 flex-col items-center gap-16 lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(139,92,246,1)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">System Online: Available</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-primary/60"
          >
            Identification: Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex flex-col text-7xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl leading-[0.85] uppercase italic"
          >
            <motion.span 
              className="drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              {firstName}
            </motion.span>
            <motion.span 
              className="text-primary drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              {lastName}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 max-w-lg text-lg font-medium text-white/40 md:text-xl leading-relaxed"
          >
            Crafting scalable <span className="text-white font-bold">Java Microservices</span> and immersive <span className="text-white font-bold">React Interfaces</span> for high-stakes enterprise systems.
          </motion.p>

          {/* Buttons & Socials */}
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/Tarunsai0852" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/tarun-sai-madimi-378435369/" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Keyboard */}
        <div className="relative flex items-center justify-center perspective-1000 will-change-transform">
          <div className="absolute inset-0 -z-10 bg-primary/10 blur-[80px]" />
          <Keyboard3D />
        </div>
      </div>
    </section>
  );
};

export default Hero;
