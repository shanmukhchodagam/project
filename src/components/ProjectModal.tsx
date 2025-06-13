import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Users, Award } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: React.ReactNode;
  github: string;
  live: string;
  featured: boolean;
  gradient: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  results?: string[];
  duration?: string;
  team?: string;
  role?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          {/* Blurred Background Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: 'blur(12px)' }}
            exit={{ backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform-gpu"
            initial={{ scale: 0.8, opacity: 0, rotateX: 15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[95vh] sm:max-h-[90vh] custom-scrollbar">
              {/* Hero Image Section */}
              <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Project Icon */}
                <motion.div
                  className={`absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${project.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-2xl`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                >
                  {project.icon}
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <motion.div
                  className="mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {project.title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </motion.div>

                {/* Project Meta Info */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.duration && (
                    <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  {project.team && (
                    <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Team Size</p>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{project.team}</p>
                      </div>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl sm:col-span-2 lg:col-span-1">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2 sm:mr-3" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">My Role</p>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{project.role}</p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Technologies */}
                <motion.div
                  className="mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs sm:text-sm font-medium shadow-lg`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Key Features */}
                {project.features && (
                  <motion.div
                    className="mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm sm:text-base">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Challenges & Solutions */}
                {project.challenges && (
                  <motion.div
                    className="mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Challenges & Solutions</h3>
                    <div className="space-y-3 sm:space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          className="p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg sm:rounded-r-xl"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <p className="text-gray-700 text-sm sm:text-base">{challenge}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Results & Impact */}
                {project.results && (
                  <motion.div
                    className="mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Results & Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {project.results.map((result, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm sm:text-base">{result}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg text-sm sm:text-base"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View Source Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg sm:rounded-xl font-semibold shadow-lg text-sm sm:text-base`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View Live Demo
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;