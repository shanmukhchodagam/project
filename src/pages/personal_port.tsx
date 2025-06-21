import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMousePosition } from '../hooks/useParallax';
import MusicSection from '../components/personal/MusicSection';
import ArtSection from '../components/personal/ArtSection';
import TravelSection from '../components/personal/TravelSection';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/transitions/PageTransition';

const PersonalPortfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const mousePosition = useMousePosition();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    // Start fading in after a short delay
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    setIsTransitioning(true);
    // Wait for the fade to black to complete before navigating
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <PageTransition isTransitioning={isTransitioning}>
      <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        {/* Back Button */}
        <motion.button
          onClick={handleBack}
          className="fixed top-6 left-6 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={isTransitioning}
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>

        {/* Animated Background */}
        <motion.div 
          className="fixed inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"
          style={{ y: backgroundY }}
        />

        {/* Floating Elements */}
        <motion.div 
          className="fixed inset-0 pointer-events-none"
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20
          }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Content Sections */}
        <div className="relative z-10">
          <motion.div 
            className="h-screen flex items-center justify-center"
            style={{ opacity }}
          >
            <h1 className="text-6xl font-bold text-white text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creative Journey
              </span>
            </h1>
          </motion.div>

          <MusicSection />
          <ArtSection />
          <TravelSection />

          {/* Footer Section */}
          <motion.footer 
            className="relative z-10 py-12 mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
                  <p className="text-gray-300 hover:text-purple-400 transition-colors">
                    <a href="mailto:your.email@example.com">your.email@example.com</a>
                  </p>
                  <div className="flex justify-center md:justify-start space-x-4 mt-4">
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
                    </li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="text-center md:text-right">
                  <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
                  <p className="text-gray-300 mb-4">Subscribe to my newsletter for updates</p>
                  <form className="flex flex-col sm:flex-row gap-2 justify-center md:justify-end">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </PageTransition>
  );
};
export const working = true;  // Named export
export default PersonalPortfolio;  // Default export