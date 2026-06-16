import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { ChevronDown, ChevronUp, MapPin, Calendar, Sword, Shield, Zap, Briefcase, Target } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03]" 
        style={{ background: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)' }} 
      />

      {/* Background Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="mx-auto max-w-5xl relative z-10">
        {/* Game UI Corners */}
        <div className="absolute -top-10 -left-10 h-20 w-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl hidden lg:block" />
        <div className="absolute -top-10 -right-10 h-20 w-20 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl hidden lg:block" />
        <div className="absolute -bottom-10 -left-10 h-20 w-20 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl hidden lg:block" />
        <div className="absolute -bottom-10 -right-10 h-20 w-20 border-b-2 border-r-2 border-primary/20 rounded-br-3xl hidden lg:block" />

        <div
          className="mb-20 text-center"
        >
          {/* Section Logo / Emblem */}
          <div className="relative mx-auto mb-10 h-32 w-32">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/30" />
            <div className="absolute inset-4 animate-spin-reverse-slow rounded-full border border-secondary/30" />
            <div className="absolute inset-6 rounded-full border-2 border-primary/50 bg-primary/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.4)]">
              <div className="relative">
                <Briefcase size={48} className="text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2"
                >
                  <Zap size={20} className="text-amber-400" />
                </motion.div>
              </div>
            </div>
            {/* Floating Orbs */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3 + i, 
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute h-2 w-2 rounded-full bg-primary"
                style={{
                  top: `${20 + i * 20}%`,
                  left: i % 2 === 0 ? '-10%' : '110%',
                  filter: 'blur(2px)'
                }}
              />
            ))}
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Professional Journey</span>
          </div>
          <h2 className="mb-4 text-5xl font-black tracking-tighter text-white md:text-7xl uppercase italic">
            Experi<span className="text-primary">ence</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg font-bold text-primary uppercase tracking-widest italic">
            3 Years Experience Java Full Stack Developer
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-white/40">
            A chronological record of high-stakes missions and technical conquests.
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Timeline Line */}
          <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {RESUME_DATA.experience.map((exp, idx) => (
            <div
              key={exp.company}
              className="relative pl-0 md:pl-24"
            >
              {/* Timeline Node */}
              <div className="absolute left-[34px] top-10 hidden h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(139,92,246,0.8)] md:block" />

              <div 
                className={`group relative overflow-hidden rounded-[32px] border transition-all duration-500 ${
                  expandedIndex === idx 
                    ? 'border-primary/40 bg-primary/5 shadow-[0_0_50px_rgba(139,92,246,0.1)]' 
                    : 'border-white/5 bg-white/5 hover:border-white/20'
                } backdrop-blur-lg will-change-transform`}
              >
                {/* Rarity Indicator (Top Edge) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  className="flex w-full flex-col items-start justify-between p-8 text-left md:flex-row md:items-center relative group/btn"
                >
                  {/* Selection Ping Effect */}
                  <div className="absolute inset-0 bg-primary/0 group-hover/btn:bg-primary/5 transition-colors duration-300" />
                  
                  <div className="flex items-center gap-6 relative z-10">
                    {/* Mission Icon / Logo */}
                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 overflow-hidden ${
                      expandedIndex === idx ? 'border-primary/40 bg-primary/20' : 'border-white/10 bg-white/5'
                    }`}>
                      <span className={`text-xl font-black italic tracking-tighter ${expandedIndex === idx ? 'text-primary' : 'text-white/40'}`}>
                        {exp.company.split(' ').map((word) => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">{exp.role}</h3>
                        <div className={`rounded-md px-2 py-0.5 text-[10px] font-bold border ${
                          idx === 0 ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 
                          idx === 1 ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' : 
                          'bg-blue-500/10 text-blue-500 border-blue-500/20'
                        }`}>
                          {idx === 0 ? 'CURRENT' : idx === 1 ? 'FINTECH' : 'ARCHIVE'}
                        </div>
                      </div>
                      <p className="text-lg font-bold text-white/40 tracking-tight">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-6 md:mt-0">
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2 text-xs font-bold text-white/30 uppercase tracking-widest mb-1">
                        <Calendar size={12} />
                        {exp.dates}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                    <div className={`transition-transform duration-500 ${expandedIndex === idx ? 'rotate-180 text-primary' : 'text-white/20'}`}>
                      <ChevronDown size={28} />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {/* Syncing Animation */}
                      <div className="px-8 overflow-hidden">
                        <motion.div 
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
                        />
                      </div>

                      <div className="border-t border-white/5 p-8 pt-0">
                        {/* Quest Rewards (Metrics) */}
                        <div className="mb-10 grid grid-cols-2 gap-4 pt-8 md:grid-cols-4">
                          {exp.metrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="group/metric relative flex flex-col rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-primary/10 hover:border-primary/20"
                            >
                              <span className="mb-1 text-xl font-black text-white italic">{metric.value}</span>
                              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{metric.label}</span>
                              <Zap size={12} className="absolute top-4 right-4 text-primary opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                            </div>
                          ))}
                        </div>

                        {/* Mission Objectives */}
                        <div className="space-y-6">
                          <div className="flex flex-col gap-1">
                            <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-white/20">
                              <Target size={14} />
                              Mission Objectives
                            </h4>
                            <p className="text-xs font-bold text-primary/60 uppercase tracking-widest italic">Primary Objectives for this Campaign</p>
                          </div>
                          <ul className="space-y-5">
                            {exp.bullets.map((bullet, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 + 0.2 }}
                                className="flex items-start gap-4"
                              >
                                <div className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary/40 bg-primary/10">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                </div>
                                <p className="text-base font-medium text-white/60 leading-relaxed">
                                  {bullet}
                                </p>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* XP Reward Footer */}
                        <div className="mt-10 flex items-center justify-between rounded-2xl bg-primary/10 p-4 border border-primary/20">
                          <div className="flex items-center gap-3">
                            <Shield size={18} className="text-primary" />
                            <span className="text-xs font-black uppercase tracking-widest text-white">Skills Mastered</span>
                          </div>
                          <div className="flex gap-2">
                            <div className="h-1.5 w-24 rounded-full bg-white/10 overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-full bg-primary" 
                              />
                            </div>
                            <span className="text-[10px] font-black text-primary uppercase">+1000 XP</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
