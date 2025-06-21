import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Underdevelopment = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex flex-col items-center justify-center p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Floating construction elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-500 opacity-20 blur-xl"
        variants={floatingVariants}
        animate="float"
        style={{ x: -50 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-20 blur-xl"
        variants={floatingVariants}
        animate="float"
        style={{ x: 50, y: 50 }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="w-32 h-32 mx-auto mb-6 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl"
            variants={floatingVariants}
            animate="float"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="M9.5 9h5" />
              <path d="M9.5 12h5" />
              <path d="M9.5 15h5" />
            </svg>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500"
            variants={itemVariants}
          >
            Under Construction
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-blue-100 mb-8"
            variants={itemVariants}
          >
            Working to bring you something amazing. Stay tuned!
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Back
          </motion.button>
          <motion.button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-medium shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Return Home
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Responsive footer */}
      <motion.div
        className="absolute bottom-4 text-blue-200 text-sm"
        variants={itemVariants}
      >
        © {new Date().getFullYear()} 
      </motion.div>
    </motion.div>
  );
};

export default Underdevelopment;