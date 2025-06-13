import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Database, Globe, Smartphone } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { icon: Code, x: '10%', y: '20%', delay: 0 },
    { icon: Palette, x: '85%', y: '15%', delay: 0.5 },
    { icon: Zap, x: '15%', y: '70%', delay: 1 },
    { icon: Database, x: '80%', y: '65%', delay: 1.5 },
    { icon: Globe, x: '5%', y: '45%', delay: 2 },
    { icon: Smartphone, x: '90%', y: '40%', delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: Element.x, top: Element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            delay: Element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Element.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;