import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { RESUME_DATA } from '../constants';
import { Mail, Pause, Play } from 'lucide-react';
import CinematicLayer from './CinematicLayer';
import styles from './VideoIntro.module.css';

const Hero: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasVideo, setHasVideo] = useState(true);
  const [firstName, ...rest] = RESUME_DATA.basics.name.split(' ');
  const lastName = rest.join(' ');

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      gsap.from('[data-video-hero]', {
        y: 34,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from('[data-play-button]', {
        scale: 0.72,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.8)',
        delay: 0.58,
      });
    }, root);

    const video = videoRef.current;
    if (video && hasVideo) {
      video.muted = false;
      video.play().catch(() => {
        setIsPlaying(false);
      });
    }

    return () => context.revert();
  }, [hasVideo]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video || !hasVideo) return;

    if (video.paused) {
      if (video.ended) video.currentTime = 0;
      video.muted = false;
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={rootRef} className={styles.videoHero}>
      {hasVideo ? (
        <video
          ref={videoRef}
          className={styles.fullVideo}
          src="/cinematic-intro.mp4"
          muted={false}
          playsInline
          autoPlay
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onError={() => setHasVideo(false)}
        />
      ) : (
        <div className={styles.videoFallback} />
      )}

      <CinematicLayer />
      <div className={styles.videoShade} />

      <a data-video-hero className={styles.emailButton} href={`mailto:${RESUME_DATA.basics.email}`}>
        Email me
        <Mail size={14} />
      </a>

      <div className={styles.heroNameBlock}>
        <p data-video-hero className={styles.portfolioYear}>Portfolio 2026</p>
        <h1 data-video-hero className={styles.videoName}>
          <span>{firstName}</span>
          <span>{lastName}</span>
        </h1>
        <p data-video-hero className={styles.videoRole}>
          {RESUME_DATA.basics.title}
        </p>
      </div>

      <button
        data-play-button
        className={styles.centerPlay}
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause intro video' : 'Play intro video'}
      >
        {isPlaying ? <Pause size={34} /> : <Play size={38} />}
      </button>

      <button
        data-video-hero
        className={styles.scrollText}
        type="button"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Scroll
      </button>

      <div data-video-hero className={styles.cornerControls}>
        <button type="button" onClick={togglePlay} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
    </section>
  );
};

export default Hero;
