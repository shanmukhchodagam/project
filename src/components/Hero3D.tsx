import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useMousePosition } from '../hooks/useParallax';
import ParallaxSection from './ParallaxSection';
import profileImage from '../assets/profile.jpg';

const Hero3D = () => {
  const mousePosition = useMousePosition();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] animate-pulse"></div>
      
      {/* 3D Floating Orbs - Responsive sizes */}
      <ParallaxSection speed={0.3} className="absolute inset-0" rotate={true} intensity={1.5}>
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full blur-xl animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-xl animate-float-delayed">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full blur-xl animate-float-slow">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-ping"></div>
        </div>
      </ParallaxSection>

      {/* Additional Parallax Elements */}
      <ParallaxSection speed={0.2} className="absolute inset-0" scale={true} intensity={2}>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float-delayed"></div>
      </ParallaxSection>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* 3D Avatar - Responsive sizing */}
            <div className="mt-12 sm:mt-16">  {/* ← Add this wrapper with top margin */}
  <motion.div 
    className="mb-0 sm:mb-0 perspective-1000"
    style={{
      transform: `rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="w-56 h-56 sm:w-48 md:w-56 sm:h-48 md:h-56 mx-auto mb-0 sm:mb-0 relative transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
      <div className="absolute inset-1.5 sm:inset-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full overflow-hidden">
        <img 
          src={profileImage} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
    </div>
  </motion.div>
</div>
            <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
  {/* 3D Text Effects - Responsive typography */}
  <motion.h1 
    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    style={{
      textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
      transform: `perspective(1000px) rotateX(${mousePosition.y * 1}deg)`
    }}
  >
    IAM <span className="text-blue-400">SHANMUKH</span>
  </motion.h1>
  
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    className="mb-6 sm:mb-8"
  >
    <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-3 sm:mb-4 font-light">
      Full-Stack Developer & 3D Experience Creator
    </p>
    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg sm:max-w-xl mx-auto leading-relaxed">
      Crafting immersive digital experiences with cutting-edge technologies, 
      beautiful animations, and pixel-perfect design.
    </p>
  </motion.div>
  
  {/* 3D Buttons - Mobile optimized */}
  <motion.div 
    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    <motion.button 
      className="group px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-xl transform-gpu transition-all duration-300 text-sm sm:text-base"
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      style={{ transformStyle: 'preserve-3d' }}
      onClick={scrollToAbout}
    >
      <span className="flex items-center justify-center">
        View My Work
        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-1 transition-transform" />
      </span>
    </motion.button>
    
    {/* Social links and download button moved to the main section above */}
  </motion.div>

  <motion.div 
    className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.8 }}
  >
    <motion.a
      href="https://github.com/shanmukhchodagam"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 sm:p-3 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-md transform-gpu transition-all duration-300"
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        rotateX: 15,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.9 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </motion.a>

    <motion.a
      href="https://in.linkedin.com/in/shanmukha-siva-sri-venkat-chodagam-6b6b43343"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md transform-gpu transition-all duration-300"
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        rotateX: 15,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.9 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </motion.a>

    <motion.a
      href="mailto:shanmukh_csd@srkrec.edu.in"
      className="p-2 sm:p-3 bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-md transform-gpu transition-all duration-300"
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        rotateX: 15,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.9 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </motion.a>
  </motion.div>
</div>
            
            {/* Animated Scroll Indicator */}
            <motion.button
              onClick={scrollToAbout}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Social links and download button moved to the main section above */}
    </section>
  );
};

export default Hero3D;