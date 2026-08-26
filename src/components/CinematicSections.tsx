import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react';
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
        <span>{RESUME_DATA.basics.location}</span>
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
            <strong>Senior UX Designer</strong>
          </div>

          <h2 data-cinema-reveal className={styles.orangeName}>
            <span>Tarun Sai</span>
            <span>Madimi</span>
          </h2>

          <div data-cinema-reveal className={styles.orangePills}>
            {['Analytical Dashboards', 'Data Visualization', 'Design Systems', 'Enterprise UX'].map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>

          <p data-cinema-reveal className={styles.orangeSummary}>
            {RESUME_DATA.basics.summary}
          </p>

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
            <strong>Designing clear, data-heavy experiences for complex enterprise workflows.</strong>
            <span>{RESUME_DATA.basics.workAuthorization} · {RESUME_DATA.basics.availability}</span>
          </div>
          <div className={styles.orangeNote}>
            <strong>{RESUME_DATA.basics.availability}</strong>
            <span>{RESUME_DATA.basics.phone} · Based in {RESUME_DATA.basics.location}</span>
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
            UX design for complex analytical dashboards and enterprise workflows across finance, security, operations, and e-commerce.
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
                {exp.bullets.map((bullet) => (
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
            Selected dashboard work spanning fraud analytics, investigation workflows, and e-commerce fulfillment operations.
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
            A UX toolkit for information architecture, interaction design, visualization, research, and scalable design systems.
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
            Open to senior UX design opportunities focused on analytical dashboards, data visualization, enterprise workflows, and thoughtful design systems.
          </p>
          <div className={styles.contactLinks}>
            <a className={styles.chip} href={`mailto:${RESUME_DATA.basics.email}`}><Mail size={14} /> Email</a>
            {RESUME_DATA.basics.links.map((link) => (
              <a key={link.label} className={styles.chip} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label.toLowerCase().includes('linkedin') ? <Linkedin size={14} /> : null} {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
