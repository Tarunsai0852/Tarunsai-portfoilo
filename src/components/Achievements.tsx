import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Star, Zap, ShieldCheck, Activity, Rocket, Cloud, Globe, Target, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const topImpact = [
    { label: "API Stability", value: "31%", icon: <Zap size={20} />, color: "text-amber-400" },
    { label: "Deployment Failures", value: "-24%", icon: <ShieldCheck size={20} />, color: "text-emerald-400" },
    { label: "Release Cycles", value: "-38%", icon: <Star size={20} />, color: "text-purple-400" },
  ];

  return (
    <section id="achievements" className="relative py-32 px-6 overflow-hidden">
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03]" 
        style={{ background: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)' }} 
      />

      {/* Background Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Game UI Corners */}
        <div className="absolute -top-10 -left-10 h-20 w-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl hidden lg:block" />
        <div className="absolute -top-10 -right-10 h-20 w-20 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl hidden lg:block" />
        <div className="absolute -bottom-10 -left-10 h-20 w-20 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl hidden lg:block" />
        <div className="absolute -bottom-10 -right-10 h-20 w-20 border-b-2 border-r-2 border-primary/20 rounded-br-3xl hidden lg:block" />

        {/* Top Impact Strip */}
        <div
          className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {topImpact.map((item, i) => (
            <div
              key={item.label}
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div>
                <p className="mb-1 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{item.label}</p>
                <h4 className={`text-4xl font-black tracking-tighter ${item.color} italic`}>{item.value}</h4>
              </div>
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${item.color} transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]`}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mb-20 text-center"
        >
          {/* Section Logo / Emblem */}
          <div className="relative mx-auto mb-10 h-32 w-32">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/30" />
            <div className="absolute inset-4 animate-spin-reverse-slow rounded-full border border-secondary/30" />
            <div className="absolute inset-6 rounded-full border-2 border-primary/50 bg-primary/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.4)]">
              <div className="relative">
                <Target size={48} className="text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2"
                >
                  <Award size={20} className="text-amber-400" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Milestones Unlocked</span>
          </div>
          <h2 className="mb-4 text-5xl font-black tracking-tighter text-white md:text-7xl uppercase italic">
            Achieve<span className="text-primary">ments</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-medium text-white/40">
            A record of critical impact, technical mastery, and professional conquests.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {RESUME_DATA.achievements.map((achievement, idx) => (
            <div
              key={achievement.title}
              className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              {/* Card Header Decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-12 bg-primary/20 rounded-b-full group-hover:bg-primary/60 transition-colors" />
              
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                {idx === 0 && <Activity size={36} />}
                {idx === 1 && <Rocket size={36} />}
                {idx === 2 && <Cloud size={36} />}
                {idx === 3 && <Globe size={36} />}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-3xl font-black text-white italic tracking-tighter">
                  {achievement.metric}
                </p>
                <div className="h-px w-12 bg-white/10 mx-auto" />
                <p className="text-xs font-medium text-white/40 leading-relaxed px-2">
                  {achievement.context}
                </p>
              </div>
              
              {/* Bottom UI Detail */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1">
                  <div className="h-1 w-1 bg-primary rounded-full animate-pulse" />
                  <div className="h-1 w-1 bg-primary/60 rounded-full animate-pulse delay-75" />
                  <div className="h-1 w-1 bg-primary/30 rounded-full animate-pulse delay-150" />
                </div>
              </div>

              <div className="absolute inset-0 -z-10 bg-primary/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
