import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  isTransitioning: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, isTransitioning }) => {
  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-full h-full bg-black" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isTransitioning ? 0 : 1
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut",
          delay: isTransitioning ? 0 : 0.5 // Add delay when fading back in
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition; 