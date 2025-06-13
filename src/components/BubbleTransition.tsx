import React from 'react';
import { motion } from 'framer-motion';

interface BubbleTransitionProps {
  onComplete: () => void;
}

const BubbleTransition: React.FC<BubbleTransitionProps> = ({ onComplete }) => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Large Bubbles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full"
          style={{
            width: '200%',
            height: '200%',
            left: `${-50 + i * 25}%`,
            top: `${-50 + i * 15}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            if (i === 4) onComplete();
          }}
        />
      ))}

      {/* Small Bubbles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full"
          style={{
            width: '100%',
            height: '100%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 1],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BubbleTransition; 