import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-32 px-6 overflow-hidden border-t border-white/5 bg-transparent">
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03]" 
        style={{ background: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)' }} 
      />

      {/* Background Illumination */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Game UI Corners */}
        <div className="absolute -top-10 -left-10 h-24 w-24 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl hidden lg:block" />
        <div className="absolute -top-10 -right-10 h-24 w-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl hidden lg:block" />

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-6">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-primary">Communication Channel</span>
              </div>
              <h2 className="mb-8 text-5xl font-black tracking-tighter text-white uppercase italic">
                Let's <span className="text-primary">Connect</span>
              </h2>
              <p className="max-w-md text-sm font-medium text-white/40 leading-relaxed">
                Open to discussing analytical dashboard projects, enterprise UX opportunities, or thoughtful approaches to data-heavy product design.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap gap-4">
              {/* Email Button */}
              <motion.a
                href={`mailto:${RESUME_DATA.basics.email}`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                </div>
                <Mail size={32} className="text-primary transition-all group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <span className="text-[8px] font-black uppercase tracking-widest text-primary">Send Message</span>
                </div>
              </motion.a>

              {/* Social Links Icons */}
              {RESUME_DATA.basics.links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-primary/40 hover:bg-primary/5"
                >
                  <div className="text-primary transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                    {link.label.toLowerCase().includes('linkedin') ? <Linkedin size={32} /> : <Github size={32} />}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-[8px] font-black uppercase tracking-widest text-primary">{link.label}</span>
                  </div>
                </motion.a>
              ))}

              {/* Location Badge */}
              <div className="group relative flex h-20 items-center gap-4 rounded-2xl border border-white/5 bg-white/2 px-6 backdrop-blur-xl">
                <MapPin size={24} className="text-white/20" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Location</span>
                  <span className="text-sm font-bold text-white/40">{RESUME_DATA.basics.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:items-end">
            <div className="relative">
              <motion.p 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.05, scale: 1 }}
                className="text-8xl font-black tracking-tighter text-white md:text-[15rem] select-none"
              >
                TM.
              </motion.p>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl -z-10" />
            </div>
            
            <div className="space-y-4 text-left lg:text-right">
              <div className="flex gap-2 lg:justify-end">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1 w-8 bg-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: [-32, 32] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                      className="h-full w-4 bg-primary/40"
                    />
                  </div>
                ))}
              </div>
              <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
                <p>© 2026 {RESUME_DATA.basics.name}</p>
                <p className="mt-2">Engineered with React // Tailwind // Motion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
