import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Zap, 
  Terminal, 
  Database,
  Quote,
  MousePointer2
} from 'lucide-react';

const QUOTES = [
  { text: "Technology is best when it brings people together.", author: "Matt Mullenweg" },
  { text: "The advance of technology is based on making it fit in so that you don't even notice it.", author: "Bill Gates" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
  { text: "The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.", author: "Tim Berners-Lee" },
  { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" }
];

const ICONS = [
  { icon: <Code2 size={20} />, color: '#8b5cf6' },
  { icon: <Cpu size={20} />, color: '#3b82f6' },
  { icon: <Globe size={20} />, color: '#0ea5e9' },
  { icon: <Zap size={20} />, color: '#f59e0b' },
  { icon: <Terminal size={20} />, color: '#10b981' },
  { icon: <Database size={20} />, color: '#ef4444' },
];

const TechMascot: React.FC = () => {
  const [activeQuote, setActiveQuote] = useState<typeof QUOTES[0] | null>(null);
  const [isPressing, setIsPressing] = useState(false);

  const handlePress = (index: number) => {
    setIsPressing(true);
    setActiveQuote(QUOTES[index % QUOTES.length]);
    setTimeout(() => setIsPressing(false), 500);
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-20 px-6">
      {/* HUD Frame Decoration */}
      <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-10 bottom-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute left-10 inset-y-10 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute right-10 inset-y-10 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl w-full relative">
        {/* Data Readouts */}
        <div className="absolute -top-10 left-0 text-[8px] font-mono text-primary/40 uppercase tracking-widest hidden lg:block">
          SYS_ORACLE_V2.0 // BUFFER_STABLE // SECTOR_7G
        </div>
        <div className="absolute -bottom-10 right-0 text-[8px] font-mono text-primary/40 uppercase tracking-widest hidden lg:block">
          LATENCY: 12ms // PACKETS: 100% // ENCRYPTION: AES-256
        </div>
        
        {/* Mascot Side */}
        <div className="relative flex-1 flex justify-center">
          {/* Standing Mascot - Stylized Avatar */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: isPressing ? [0, -8, 0] : 0,
                scale: isPressing ? 1.02 : 1
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="relative z-10"
            >
              <div className="relative h-80 w-64 overflow-hidden rounded-3xl border-4 border-primary/30 bg-black/40 backdrop-blur-lg shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                <img 
                  src="https://picsum.photos/seed/techman/400/600" 
                  alt="Tech Mascot" 
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Hand Icon */}
              <motion.div
                animate={isPressing ? { 
                  x: [0, 100, 0], 
                  y: [0, 50, 0], 
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5]
                } : { opacity: 0 }}
                className="absolute top-1/2 -right-10 z-30 text-primary drop-shadow-[0_0_10px_rgba(139,92,246,1)]"
              >
                <MousePointer2 size={40} fill="currentColor" />
              </motion.div>
            </motion.div>

          {/* Speech Bubble */}
          <AnimatePresence>
            {activeQuote && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20, x: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                className="absolute -top-20 -left-10 lg:-left-20 z-20 max-w-xs"
              >
                <div className="relative rounded-2xl bg-white p-6 text-black shadow-2xl">
                  <Quote className="absolute -top-3 -left-3 text-primary" size={24} fill="currentColor" />
                  <p className="text-sm font-bold italic leading-relaxed">"{activeQuote.text}"</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-primary/60">— {activeQuote.author}</p>
                  {/* Bubble Tail */}
                  <div className="absolute -bottom-2 right-10 h-4 w-4 rotate-45 bg-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Background Aura */}
          <div className="absolute inset-0 -z-10 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
        </div>

        {/* Calculator/Keypad Side */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <div className="mb-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white lg:text-5xl">
              The <span className="text-primary">Tech</span> Oracle
            </h2>
            <p className="text-white/40 font-medium mt-2">Press the keys to unlock wisdom</p>
          </div>

          <div className="grid grid-cols-3 gap-4 p-6 rounded-[32px] bg-[#0f0f0f] border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Calculator Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            {ICONS.map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.9, y: 2 }}
                onClick={() => handlePress(i)}
                className="relative h-20 w-20 rounded-2xl flex items-center justify-center transition-all group"
                style={{ 
                  backgroundColor: item.color + '15',
                  border: `1px solid ${item.color}33`
                }}
              >
                {/* Inner Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-md"
                  style={{ backgroundColor: item.color + '30' }}
                />
                
                <div 
                  className="relative z-10 text-white/60 group-hover:text-white transition-colors"
                  style={{ color: activeQuote === QUOTES[i % QUOTES.length] ? item.color : '' }}
                >
                  {item.icon}
                </div>

                {/* Key Depth Effect */}
                <div className="absolute -bottom-1 inset-x-2 h-1 bg-black/40 rounded-full blur-[1px]" />
              </motion.button>
            ))}

            {/* Extra Calculator Buttons */}
            <div className="col-span-3 grid grid-cols-2 gap-4 mt-2">
              <button className="h-12 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40 hover:bg-white/10 transition-all">
                Reset System
              </button>
              <button className="h-12 rounded-xl bg-primary/20 border border-primary/30 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/30 transition-all">
                Execute
              </button>
            </div>
          </div>

          {/* Status Bar */}
          <div className="mt-8 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>Mascot Active</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <span>Buffer: 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechMascot;
