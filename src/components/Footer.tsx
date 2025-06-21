import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">shanmukh Developer</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Building beautiful and functional web experiences with modern technologies. 
                Always learning, always creating.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                  <motion.a 
                    key={index}
                    href={`#${link.toLowerCase()}`} 
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Let's Connect</h4>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <motion.a
                href="mailto:shanmukh.developer@email.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base break-all inline-block"
                whileHover={{ scale: 1.02 }}
              >
                shanmukhsiva54@gmail.com
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t border-gray-800 pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                © 2025 shanmukh chodagam. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm flex items-center">
                Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 text-red-500 animate-pulse" /> and lots of effort
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;