import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Container, 
  Cpu, 
  Globe, 
  Layers, 
  Lock, 
  MessageSquare, 
  Monitor, 
  Server, 
  Settings, 
  Shield, 
  Terminal, 
  Zap,
  Box,
  Braces,
  GitBranch,
  Layout
} from 'lucide-react';

const techIcons = [
  { icon: <Code2 size={24} />, color: '#8b5cf6' }, // Java/React
  { icon: <Server size={24} />, color: '#3b82f6' }, // Spring
  { icon: <Cloud size={24} />, color: '#0ea5e9' }, // AWS
  { icon: <Container size={24} />, color: '#2563eb' }, // Docker/K8s
  { icon: <Database size={24} />, color: '#4f46e5' }, // Postgres/MySQL
  { icon: <Terminal size={24} />, color: '#7c3aed' }, // CLI/Linux
  { icon: <MessageSquare size={24} />, color: '#6366f1' }, // Kafka
  { icon: <Zap size={24} />, color: '#8b5cf6' }, // Redis
  { icon: <Globe size={24} />, color: '#3b82f6' }, // Frontend
  { icon: <Lock size={24} />, color: '#4f46e5' }, // Security
  { icon: <Settings size={24} />, color: '#6366f1' }, // DevOps
  { icon: <Monitor size={24} />, color: '#7c3aed' }, // UI/UX
];

const Keyboard3D: React.FC = () => {
  return (
    <motion.div
      initial={{ rotateX: 45, rotateZ: -35, y: 50, opacity: 0 }}
      animate={{ 
        rotateX: [35, 38, 35], 
        rotateZ: [-25, -28, -25], 
        y: [0, -15, 0],
        opacity: 1 
      }}
      transition={{ 
        duration: 1.2, 
        ease: "easeOut",
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className="relative h-[320px] w-[360px] rounded-[48px] bg-[#0f0f0f] p-8 shadow-[50px_80px_150px_rgba(0,0,0,0.9)] border border-white/5 will-change-transform"
    >
      {/* Light Illumination Glow */}
      <div className="absolute inset-0 rounded-[48px] bg-primary/5 blur-2xl pointer-events-none" />
      {/* Keyboard Base Depth (Thick side) */}
      <div 
        className="absolute inset-0 -z-10 rounded-[48px] bg-[#050505]" 
        style={{ transform: 'translateZ(-40px)' }}
      />
      <div 
        className="absolute inset-0 -z-10 rounded-[48px] bg-[#1a1a1a] border-r border-b border-white/10" 
        style={{ transform: 'translateZ(-20px)' }}
      />

      <div className="grid grid-cols-4 gap-4">
        {techIcons.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, translateZ: 30 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative h-14 w-14 will-change-transform"
          >
            {/* Keycap Body (Depth) */}
            <div 
              className="absolute inset-0 rounded-xl"
              style={{ 
                backgroundColor: tech.color,
                filter: 'brightness(0.4)',
                transform: 'translateZ(0px)',
                height: '100%',
                width: '100%',
              }}
            />
            
            {/* Keycap Top */}
            <div 
              className="absolute inset-0 flex items-center justify-center rounded-xl text-white"
              style={{ 
                backgroundColor: tech.color,
                transform: 'translateZ(10px)', // Reduced depth
                boxShadow: `
                  inset 0 2px 4px rgba(255,255,255,0.3),
                  0 4px 8px rgba(0,0,0,0.4)
                ` // Simplified shadow
              }}
            >
              <div className="drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
                {tech.icon}
              </div>
            </div>

            {/* Side Glow (Light Illumination) */}
            <div 
              className="absolute inset-0 rounded-xl opacity-30 blur-xl"
              style={{ 
                backgroundColor: tech.color,
                transform: 'translateZ(-10px)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Ambient Glow under the board */}
      <div className="absolute -inset-20 -z-30 bg-primary/10 blur-[150px] rounded-full opacity-40" />
    </motion.div>
  );
};

export default Keyboard3D;
