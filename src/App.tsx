import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SmoothScroll from './components/SmoothScroll';
import CursorDot from './components/CursorDot';
import {
  CinematicAbout,
  CinematicEducation,
  CinematicExperience,
  CinematicFooter,
  CinematicProjects,
  CinematicSkills,
} from './components/CinematicSections';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen text-white selection:bg-white selection:text-black">
      <CursorDot />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
        ) : (
          <SmoothScroll>
            <motion.main
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 will-change-transform"
            >
              <Navbar />
              <Hero />
              <CinematicAbout />
              <CinematicProjects />
              <CinematicExperience />
              <CinematicSkills />
              <CinematicEducation />
              <CinematicFooter />
            </motion.main>
          </SmoothScroll>
        )}
      </AnimatePresence>
    </div>
  );
}
