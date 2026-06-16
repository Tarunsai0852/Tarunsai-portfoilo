import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Cpu, Layout, Server, Cloud, Database, ShieldCheck, Terminal, Code2 } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiApache,
  SiApachekafka,
  SiApachespark,
  SiCelery,
  SiDocker,
  SiEslint,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiGrafana,
  SiGraphql,
  SiHelm,
  SiHibernate,
  SiJavascript,
  SiJenkins,
  SiJunit5,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpentelemetry,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiScikitlearn,
  SiSonarqubecloud,
  SiSpring,
  SiSpringboot,
  SiStripe,
  SiTerraform,
  SiTypescript,
  SiSocket,
} from 'react-icons/si';
import { FaAws, FaDatabase, FaJava, FaMicrosoft, FaShieldAlt } from 'react-icons/fa';
import { TbApi, TbBrandOauth, TbCloudComputing, TbFileAnalytics } from 'react-icons/tb';
import { MdOutlineSecurity, MdOutlineStream } from 'react-icons/md';

const categoryIcons: Record<string, any> = {
  "Programming": <Terminal size={24} />,
  "Backend & APIs": <Server size={24} />,
  "Frontend": <Layout size={24} />,
  "Data & ML": <Database size={24} />,
  "Databases & Cloud": <Cloud size={24} />,
  "DevOps & Quality": <ShieldCheck size={24} />,
  "Security & Architecture": <Cpu size={24} />
};

const skillIcons: Record<string, IconType> = {
  "Java": FaJava,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "SQL": FaDatabase,
  "FastAPI": SiFastapi,
  "Celery": SiCelery,
  "Spring Boot": SiSpringboot,
  "Spring WebFlux": SiSpring,
  "Spring Batch": SiSpring,
  "Express.js": SiExpress,
  "Node.js": SiNodedotjs,
  "Hibernate ORM": SiHibernate,
  "SQLAlchemy": FaDatabase,
  "R2DBC": FaDatabase,
  "Apache Camel": SiApache,
  "GraphQL": SiGraphql,
  "RESTful APIs": TbApi,
  "gRPC": TbApi,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Redux Toolkit": SiRedux,
  "React Query": SiReactquery,
  "WebSockets": SiSocket,
  "Server-Side Rendering": SiNextdotjs,
  "Apache Kafka": SiApachekafka,
  "Apache Spark": SiApachespark,
  "scikit-learn": SiScikitlearn,
  "ETL Pipelines": TbFileAnalytics,
  "Real-Time Streaming": MdOutlineStream,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Redis": SiRedis,
  "AWS Lambda": FaAws,
  "API Gateway": FaAws,
  "AWS SQS": FaAws,
  "AWS S3": FaAws,
  "CloudWatch": FaAws,
  "Azure AKS": FaMicrosoft,
  "Terraform": SiTerraform,
  "Docker": SiDocker,
  "Helm": SiHelm,
  "Jenkins": SiJenkins,
  "GitHub Actions": SiGithubactions,
  "OpenTelemetry": SiOpentelemetry,
  "Grafana Tempo": SiGrafana,
  "ELK Stack": FaDatabase,
  "JUnit": SiJunit5,
  "Mockito": Code2,
  "SonarQube": SiSonarqubecloud,
  "ESLint": SiEslint,
  "AWS Cognito": FaAws,
  "JWT Authentication": MdOutlineSecurity,
  "OAuth2": TbBrandOauth,
  "RBAC": FaShieldAlt,
  "OWASP Security Practices": MdOutlineSecurity,
  "VirusTotal API": MdOutlineSecurity,
  "MISP API": MdOutlineSecurity,
  "SIEM": MdOutlineSecurity,
  "Threat Intelligence": MdOutlineSecurity,
  "Microservices": TbCloudComputing,
  "Multi-Tenant Systems": TbCloudComputing,
  "Stripe": SiStripe,
  "Firebase": SiFirebase,
};

interface SkillIconProps {
  skill: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  const Icon = skillIcons[skill] || Code2;

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="group/skill relative flex flex-col items-center gap-2"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/5 bg-white/5 p-3 transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
        {/* 3D Effect Layers */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity" />

        <div className="text-primary/70 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:text-primary">
          <Icon size={34} />
        </div>
        
        {/* Glow on hover */}
        <div className="absolute inset-0 -z-10 rounded-xl bg-primary/20 opacity-0 blur-md transition-opacity group-hover/skill:opacity-100" />
      </div>
      <span className="text-[10px] font-bold text-white/40 text-center leading-tight group-hover/skill:text-white transition-colors">
        {skill}
      </span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
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

        <div
          className="mb-24 text-center"
        >
          {/* Section Logo / Emblem */}
          <div className="relative mx-auto mb-10 h-32 w-32">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/30" />
            <div className="absolute inset-4 animate-spin-reverse-slow rounded-full border border-secondary/30" />
            <div className="absolute inset-6 rounded-full border-2 border-primary/50 bg-primary/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.4)]">
              <div className="relative">
                <Cpu size={48} className="text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2"
                >
                  <Terminal size={20} className="text-emerald-400" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Arsenal Loaded</span>
          </div>
          <h2 className="mb-4 text-5xl font-black tracking-tighter text-white md:text-7xl uppercase italic">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-medium text-white/40">
            A battle-tested toolkit optimized for high-performance enterprise engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(RESUME_DATA.skills).map(([category, skills], idx) => (
            <div
              key={category}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-primary/5"
            >
              {/* Category Header */}
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  {categoryIcons[category] || <Cpu size={24} />}
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  <div className="h-0.5 w-8 bg-primary/20 mt-1 group-hover:w-full transition-all duration-500" />
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <SkillIcon 
                    key={skill} 
                    skill={skill}
                  />
                ))}
              </div>

              {/* Bottom UI Detail */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-1 w-3 bg-primary/30 rounded-full" />
                  ))}
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest">Level: Master</span>
              </div>

              <div className="absolute inset-0 -z-10 bg-primary/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
