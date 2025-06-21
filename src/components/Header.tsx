import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          !menuButtonRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleItemHover = (id: string) => {
    if (windowWidth >= 1024) {
      setActiveHover(id);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 overflow-hidden ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      } transition-all duration-300`}
    >
      {isScrolled && (
        <motion.div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPositionX: [0, -40],
            backgroundPositionY: [0, -40],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        />
      )}

      <nav className="container mx-auto px-8 py-3 relative z-6">
        <div className="flex justify-between items-center">
          <motion.div
            className="relative"
            whileHover={{ scale: windowWidth >= 1024 ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-2xl font-bold text-blue-600 relative z-10">
              Portfolio
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 md:space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative"
                onHoverStart={() => handleItemHover(item.id)}
                onHoverEnd={() => setActiveHover(null)}
              >
                <motion.button
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative z-10 px-3 py-2 font-medium text-sm md:text-base"
                  style={{ color: '#111' }}
                  whileHover={{ 
                    color: '#2563eb',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeHover === item.id && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 500 }}
                    />
                  )}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button - Now properly moved left with ml-4 */}
          <motion.button
            ref={menuButtonRef}
            className="lg:hidden p-2 relative z-50 ml-4" // Changed to ml-4 for more noticeable shift
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  className="text-blue-600"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  className="text-blue-600"
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside menu from closing it
          >
           

            <div className="pt-24 px-6 h-full overflow-y-auto">
              <motion.div
                className="grid gap-6 pb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { x: -50, opacity: 0 },
                      visible: { x: 0, opacity: 1 }
                    }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }}
                      className="text-2xl font-bold text-white hover:text-blue-400 transition-colors text-left w-full"
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <motion.div
                className="text-center text-gray-400 text-sm pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                © {new Date().getFullYear()} Digital Portfolio
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;