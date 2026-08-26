import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certs', href: '#certifications' },
  ];

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-500 ${
        isScrolled ? 'bg-[#050304]/78 py-4 opacity-100 backdrop-blur-xl border-b border-orange-300/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'pointer-events-none bg-transparent py-8 opacity-0'
      }`}
    >
      {/* Navbar Data Stream Border */}
      {isScrolled && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-300/70 to-transparent origin-center"
        />
      )}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Left Side: Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-bold tracking-wide text-white/58 transition-colors hover:text-white"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Right Side: Button & Logo */}
        <div className="flex items-center gap-6">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl transition-transform hover:scale-105 hover:border-orange-300/40"
          >
            <Download size={16} />
            Resume
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter text-white flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-300 to-amber-600 text-sm font-black text-black shadow-[0_0_24px_rgba(255,174,93,0.28)]">TM</div>
            <span className="hidden sm:inline">Tarunsai<span className="text-orange-300">.</span></span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/60"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white p-4 font-bold text-black"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
