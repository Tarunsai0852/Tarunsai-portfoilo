import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import ScrollSection from './components/ScrollSection';
import TechMascot from './components/TechMascot';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen text-white selection:bg-white selection:text-black">
      <AnimatedBackground />
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
              
              <ScrollSection>
                <Hero />
              </ScrollSection>

              <ScrollSection id="oracle">
                <TechMascot />
              </ScrollSection>

              <ScrollSection id="experience">
                <Experience />
              </ScrollSection>

              <ScrollSection id="achievements">
                <Achievements />
              </ScrollSection>

              <ScrollSection id="skills">
                <Skills />
              </ScrollSection>

              <ScrollSection id="education">
                <Education />
              </ScrollSection>

              <ScrollSection>
                <Footer />
              </ScrollSection>
            </motion.main>
          </SmoothScroll>
        )}
      </AnimatePresence>
    </div>
  );
}
