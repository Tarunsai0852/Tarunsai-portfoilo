import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Blocks, ArrowUpRight, Layers3, Sparkles, FolderGit2, CloudSun, ExternalLink, Lock } from 'lucide-react';

const projectIcons = [Layers3, Blocks, Sparkles, CloudSun];
const projectAccents = [
  'from-primary/20 via-primary/10 to-transparent',
  'from-secondary/20 via-secondary/10 to-transparent',
  'from-emerald-400/20 via-emerald-400/10 to-transparent',
  'from-sky-400/20 via-sky-400/10 to-transparent'
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32">
      <div
        className="pointer-events-none absolute inset-0 z-50 opacity-[0.03]"
        style={{ background: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)' }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="absolute -left-10 -top-10 hidden h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-primary/20 lg:block" />
        <div className="absolute -right-10 -top-10 hidden h-24 w-24 rounded-tr-3xl border-r-2 border-t-2 border-primary/20 lg:block" />
        <div className="absolute -bottom-10 -left-10 hidden h-24 w-24 rounded-bl-3xl border-b-2 border-l-2 border-primary/20 lg:block" />
        <div className="absolute -bottom-10 -right-10 hidden h-24 w-24 rounded-br-3xl border-b-2 border-r-2 border-primary/20 lg:block" />

        <div className="mb-20 text-center">
          <div className="relative mx-auto mb-10 h-32 w-32">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/30" />
            <div className="absolute inset-4 animate-spin-reverse-slow rounded-full border border-secondary/30" />
            <div className="absolute inset-6 flex items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10 backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.4)]">
              <div className="relative">
                <FolderGit2 size={48} className="text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                <motion.div
                  animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="absolute -right-2 -top-2"
                >
                  <ArrowUpRight size={20} className="text-secondary" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Build Archive</span>
          </div>
          <h2 className="mb-4 text-5xl font-black uppercase italic tracking-tighter text-white md:text-7xl">
            Pro<span className="text-primary">jects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-medium text-white/40">
            Selected builds spanning enterprise workflows, finance tooling, and polished web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {RESUME_DATA.projects.map((project, idx) => {
            const Icon = projectIcons[idx % projectIcons.length];
            const accent = projectAccents[idx % projectAccents.length];

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${accent} opacity-70 transition-opacity group-hover:opacity-100`} />

                <div className="relative mb-8 overflow-hidden rounded-[24px] border border-white/10 bg-black/30">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020008] via-[#020008]/35 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/45 text-primary backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]">
                    <Icon size={28} />
                  </div>
                </div>

                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black italic tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    {project.liveUrl ? 'Live Demo' : 'Private Build'}
                  </span>
                </div>

                <p className="mb-8 text-sm leading-relaxed text-white/60">
                  {project.summary}
                </p>

                <div className="mb-8 rounded-2xl border border-primary/20 bg-black/20 p-5">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/30">Impact</p>
                  <p className="text-lg font-black italic tracking-tight text-white">
                    {project.impact}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-white/30">Core Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                    Featured Build
                  </span>
                  {project.liveUrl ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary transition-colors hover:border-primary/50 hover:bg-primary/20"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </motion.a>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/30">
                      <Lock size={14} />
                      Link Pending
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
