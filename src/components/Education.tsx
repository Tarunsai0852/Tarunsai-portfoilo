import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Award, BookOpen, Library, Medal, Star, ShieldCheck } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-32 px-6 overflow-hidden">
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03]" 
        style={{ background: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)' }} 
      />

      {/* Background Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1000px] w-[1000px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Game UI Corners */}
        <div className="absolute -top-10 -left-10 h-24 w-24 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl hidden lg:block" />
        <div className="absolute -top-10 -right-10 h-24 w-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl hidden lg:block" />
        <div className="absolute -bottom-10 -left-10 h-24 w-24 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl hidden lg:block" />
        <div className="absolute -bottom-10 -right-10 h-24 w-24 border-b-2 border-r-2 border-primary/20 rounded-br-3xl hidden lg:block" />

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Education Section */}
          <div>
            <div
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-16 w-16">
                  <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/40" />
                  <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                    <Library size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-primary">Academic Database</span>
                  </div>
                  <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">
                    Edu<span className="text-primary">cation</span>
                  </h2>
                </div>
              </div>
              <p className="text-sm font-medium text-white/40 leading-relaxed max-w-md">
                Foundational knowledge systems and theoretical frameworks acquired through rigorous academic training.
              </p>
            </div>

            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group relative flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                >
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="h-1 w-8 bg-primary/30 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: [-32, 32] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="h-full w-4 bg-primary"
                      />
                    </div>
                  </div>

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white italic tracking-tight group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="mb-3 text-sm font-bold text-white/60 uppercase tracking-wide">{edu.degree}</p>
                    <div className="inline-flex items-center gap-2 rounded-md bg-white/5 px-2 py-1 border border-white/5">
                      <span className="text-[10px] font-mono text-white/40">{edu.dates}</span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 -z-10 bg-primary/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-16 w-16">
                  <div className="absolute inset-0 animate-spin-reverse-slow rounded-full border border-dashed border-secondary/40" />
                  <div className="absolute inset-2 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/30">
                    <Medal size={24} className="text-secondary" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 mb-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-secondary">Skill Validation</span>
                  </div>
                  <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">
                    Certifi<span className="text-secondary">cations</span>
                  </h2>
                </div>
              </div>
              <p className="text-sm font-medium text-white/40 leading-relaxed max-w-md">
                Professional endorsements and specialized certifications validating technical mastery across the stack.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-secondary/40 hover:bg-secondary/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:border-secondary/40 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <Award size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-black text-white/80 leading-tight group-hover:text-white transition-colors">
                      {cert}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-0.5 w-2 bg-secondary/30 rounded-full" />
                      ))}
                    </div>
                  </div>

                  {/* Badge Corner Detail */}
                  <div className="absolute top-0 right-0 p-1">
                    <ShieldCheck size={10} className="text-secondary/20 group-hover:text-secondary transition-colors" />
                  </div>

                  <div className="absolute inset-0 -z-10 bg-secondary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>

            {/* Mastery Level Indicator */}
            <div 
              className="mt-12 p-6 rounded-2xl border border-white/5 bg-white/2 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Star size={20} className="text-amber-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Mastery Status</span>
              </div>
              <div className="flex gap-2">
                <div className="h-1.5 w-12 bg-secondary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="h-1.5 w-12 bg-secondary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="h-1.5 w-12 bg-secondary/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
