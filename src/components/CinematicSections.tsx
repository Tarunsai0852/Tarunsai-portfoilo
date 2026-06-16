import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Award, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import styles from './CinematicSections.module.css';

const useReveal = () => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll('[data-cinema-reveal]');
    gsap.set(items, { opacity: 0, y: 34 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
        });
        observer.disconnect();
      },
      { threshold: 0.18 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return ref;
};

const getInitials = () => RESUME_DATA.basics.name.split(' ').map((part) => part[0]).join('').slice(0, 2);

export const CinematicAbout: React.FC = () => {
  const sectionRef = useReveal();
  const [avatarFailed, setAvatarFailed] = useState(false);
  const skills = Object.values(RESUME_DATA.skills).flat().slice(0, 14);
  const achievements = RESUME_DATA.achievements.slice(0, 3);

  return (
    <section id="about" ref={sectionRef} className={`${styles.section} ${styles.orangeSection}`}>
      <div className={styles.orangeNav}>
        <span>OH, USA</span>
        <nav>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href={`mailto:${RESUME_DATA.basics.email}`}>Contact</a>
        </nav>
        <a href={`mailto:${RESUME_DATA.basics.email}`}>Email me</a>
      </div>

      <div className={styles.orangeInner}>
        <aside data-cinema-reveal className={styles.socialRail}>
          {RESUME_DATA.basics.links.map((link) => <a key={link.label} href={link.url}>{link.label}</a>)}
          <span>Scroll down</span>
        </aside>

        <div className={styles.orangeContent}>
          <div data-cinema-reveal className={styles.orangeGreeting}>
            <span>Hi, I'm</span>
            <strong>Full Stack Developer</strong>
          </div>

          <h2 data-cinema-reveal className={styles.orangeName}>
            <span>Tarun Sai</span>
            <span>Madimi</span>
          </h2>

          <div data-cinema-reveal className={styles.orangePills}>
            {['Cloud Native', 'Full Stack Engineer', 'Fintech Systems', 'React + Python'].map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>

          <a data-cinema-reveal className={styles.orangeCta} href="#projects">
            View Projects <ArrowUpRight size={16} />
          </a>

          <div data-cinema-reveal className={styles.orangeStats}>
            {achievements.map((item) => (
              <div key={item.title}>
                <strong>{item.metric}</strong>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div data-cinema-reveal className={styles.orangeCards}>
          <div className={styles.orangeNote}>
            <strong>Building scalable digital systems with modern web technologies and cloud infrastructure.</strong>
            <span>Available for full-time software engineering opportunities.</span>
          </div>
          <div className={styles.orangeNote}>
            <strong>Available for work</strong>
            <span>Based in {RESUME_DATA.basics.location}</span>
          </div>
        </div>

        <div data-cinema-reveal className={styles.orangePortrait}>
          <div className={styles.orangeBlob} />
          <div className={styles.orangeMedia}>
            {!avatarFailed ? (
              <img
                className={styles.orangeAvatar}
                src="/cinematic-avatar.jpg"
                alt={RESUME_DATA.basics.name}
                onError={() => setAvatarFailed(true)}
              />
            ) : (
              <video src="/cinematic-intro.mp4" autoPlay muted loop playsInline />
            )}
          </div>
        </div>
      </div>

      <div data-cinema-reveal className={styles.orangeSkillMarquee}>
        {[...skills, ...skills].map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export const CinematicExperience: React.FC = () => {
  const sectionRef = useReveal();

  return (
    <section id="experience" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.timelineHeader}>
          <div>
            <span data-cinema-reveal className={styles.kicker}>Work Experience</span>
            <h2 data-cinema-reveal className={styles.title}>Professional Timeline</h2>
          </div>
          <p data-cinema-reveal className={`${styles.muted} max-w-sm text-sm leading-relaxed`}>
            Enterprise engineering across real-time operations, financial systems, cloud infrastructure, and secure distributed services.
          </p>
        </div>

        <div className={styles.timeline}>
          {RESUME_DATA.experience.map((exp, index) => (
            <article data-cinema-reveal key={exp.company} className={styles.expCard}>
              <div className={styles.timelineDot}><span>0{index + 1}</span></div>
              <span className={styles.expNum}>0{index + 1}</span>
              <div className={styles.expMeta}>
                <span className={styles.chip}>{exp.dates}</span>
                <span className={styles.chip}><MapPin size={12} /> {exp.location}</span>
              </div>
              <h3 className={styles.company}>{exp.company}</h3>
              <p className={styles.role}>{exp.role}</p>
              <ul className={styles.bullets}>
                {exp.bullets.slice(0, 5).map((bullet) => (
                  <li key={bullet} className={styles.bullet}>{bullet}</li>
                ))}
              </ul>
              <div className={`${styles.tagList} mt-8`}>
                {exp.metrics.map((metric) => (
                  <span key={metric.label} className={styles.tag}>{metric.value} {metric.label}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CinematicProjects: React.FC = () => {
  const sectionRef = useReveal();

  return (
    <section id="projects" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.projectsHeader}>
          <div>
            <span data-cinema-reveal className={styles.kicker}>Selected Projects</span>
            <h2 data-cinema-reveal className={styles.title}>Build Archive</h2>
          </div>
          <p data-cinema-reveal className={`${styles.muted} max-w-sm text-sm leading-relaxed`}>
            Cinematic project slides inspired by premium portfolio storytelling, adapted around your actual resume projects.
          </p>
        </div>

        <div className={styles.projectRail}>
          {RESUME_DATA.projects.map((project, index) => (
            <article data-cinema-reveal key={project.title} className={styles.projectSlide}>
              <div className={styles.projectBg}>
                <img src={project.imageUrl} alt="" aria-hidden="true" />
              </div>
              <div className={styles.projectContent}>
                <span className={styles.projectNum}>0{index + 1} / 0{RESUME_DATA.projects.length}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.summary}</p>
              </div>
              <div className={styles.projectAside}>
                <span className={styles.cardEyebrow}>{project.category}</span>
                <p className={styles.impact}>{project.impact}</p>
                <div className={styles.tagList}>
                  {project.stack.map((tech) => <span key={tech} className={styles.tag}>{tech}</span>)}
                </div>
                {project.liveUrl && (
                  <a className={styles.liveLink} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CinematicSkills: React.FC = () => {
  const sectionRef = useReveal();

  return (
    <section id="skills" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.skillsHeader}>
          <div>
            <span data-cinema-reveal className={styles.kicker}>Tech Stack</span>
            <h2 data-cinema-reveal className={styles.title}>Engineering Arsenal</h2>
          </div>
          <p data-cinema-reveal className={`${styles.muted} max-w-sm text-sm leading-relaxed`}>
            A modern cloud, data, frontend, backend, and security toolkit shaped by real production systems.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
            <article data-cinema-reveal key={category} className={styles.skillCard}>
              <h3 className={styles.skillTitle}>{category}</h3>
              <div className={styles.tagList}>
                {skills.map((skill) => <span key={skill} className={styles.tag}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CinematicEducation: React.FC = () => {
  const sectionRef = useReveal();

  return (
    <section id="education" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <span data-cinema-reveal className={styles.kicker}>Education</span>
        <h2 data-cinema-reveal className={styles.title}>Academic Foundation</h2>
        <div className={styles.educationGrid}>
          {RESUME_DATA.education.map((edu) => (
            <article data-cinema-reveal key={edu.institution} className={styles.eduCard}>
              <span className={styles.cardEyebrow}>{edu.dates}</span>
              <h3>{edu.institution}</h3>
              <p className={styles.muted}>{edu.degree}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CinematicCertifications: React.FC = () => {
  const sectionRef = useReveal();

  return (
    <section id="certifications" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <span data-cinema-reveal className={styles.kicker}>Certifications</span>
        <h2 data-cinema-reveal className={styles.title}>Verified Learning</h2>

        <div className={styles.certGrid}>
          {RESUME_DATA.certifications.map((certification, index) => (
            <article data-cinema-reveal key={certification} className={styles.certCard}>
              <div className={styles.certIcon}>
                <Award size={28} />
              </div>
              <span className={styles.cardEyebrow}>Credential 0{index + 1}</span>
              <h3>{certification}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CinematicFooter: React.FC = () => {
  const sectionRef = useReveal();
  const [first, ...rest] = RESUME_DATA.basics.name.split(' ');

  return (
    <footer ref={sectionRef as React.RefObject<HTMLElement>} className={styles.footer}>
      <div className={styles.inner}>
        <span data-cinema-reveal className={styles.kicker}>Final Frame</span>
        <h2 data-cinema-reveal className={styles.footerName}>
          {first}<br />
          <span className={styles.accentName}>{rest.join(' ')}</span>
        </h2>

        <div data-cinema-reveal className={styles.footerGrid}>
          <p className={`${styles.muted} max-w-xl text-base leading-relaxed`}>
            Open to full-stack roles, cloud-native engineering work, and product teams building reliable, high-impact software.
          </p>
          <div className={styles.contactLinks}>
            <a className={styles.chip} href={`mailto:${RESUME_DATA.basics.email}`}><Mail size={14} /> Email</a>
            <a className={styles.chip} href="https://github.com/Tarunsai0852" target="_blank" rel="noopener noreferrer"><Github size={14} /> GitHub</a>
            <a className={styles.chip} href="https://www.linkedin.com/in/tarunsaimadimi/" target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
