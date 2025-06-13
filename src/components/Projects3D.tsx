import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Palette, ShoppingCart, Cuboid as Cube } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import ProjectModal from './ProjectModal';

const Projects3D = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "3D E-Commerce Experience",
      description: "An immersive shopping platform with 3D product visualization, AR try-on features, and interactive product configurators that revolutionize online shopping.",
      longDescription: "A cutting-edge e-commerce platform that transforms online shopping through immersive 3D product visualization and augmented reality features. This project showcases the future of retail by allowing customers to interact with products in three-dimensional space, try them on virtually, and customize them in real-time.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Three.js", "WebXR", "Node.js", "WebGL", "MongoDB", "Express"],
      icon: <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6" />,
      github: "#",
      live: "#",
      featured: true,
      gradient: "from-blue-500 to-purple-600",
      duration: "6 months",
      team: "5 developers",
      role: "Lead Frontend Developer",
      features: [
        "360° product visualization with zoom and rotation",
        "AR try-on functionality using WebXR",
        "Real-time product customization",
        "Interactive 3D product configurator",
        "Seamless checkout integration",
        "Mobile-optimized 3D rendering"
      ],
      challenges: [
        "Optimizing 3D models for web performance while maintaining visual quality",
        "Implementing cross-platform AR compatibility",
        "Creating intuitive 3D navigation controls for all devices"
      ],
      results: [
        "40% increase in user engagement",
        "25% reduction in product returns",
        "60% improvement in conversion rates",
        "Featured in TechCrunch as innovative retail solution"
      ]
    },
    {
      title: "Interactive 3D Portfolio",
      description: "A stunning portfolio website featuring 3D animations, particle systems, and immersive storytelling that showcases creative work in an engaging way.",
      longDescription: "An award-winning portfolio website that pushes the boundaries of web design through innovative 3D animations and interactive storytelling. This project demonstrates advanced WebGL techniques and creative user experience design.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Three.js", "Framer Motion", "GSAP", "WebGL", "Blender"],
      icon: <Cube className="w-4 h-4 sm:w-6 sm:h-6" />,
      github: "#",
      live: "#",
      featured: true,
      gradient: "from-purple-500 to-pink-600",
      duration: "4 months",
      team: "Solo project",
      role: "Full-Stack Developer & 3D Artist",
      features: [
        "Immersive 3D scene navigation",
        "Interactive particle systems",
        "Smooth scroll-triggered animations",
        "Dynamic lighting effects",
        "Responsive 3D layouts",
        "Custom shader effects"
      ],
      challenges: [
        "Balancing visual complexity with performance across devices",
        "Creating smooth transitions between 3D scenes",
        "Optimizing particle systems for mobile devices"
      ],
      results: [
        "Won Awwwards Site of the Day",
        "95% performance score on mobile",
        "Featured in CSS Design Awards",
        "1000+ developer stars on GitHub"
      ]
    },
    {
      title: "VR Meeting Platform",
      description: "A virtual reality meeting space with spatial audio, 3D avatars, and collaborative tools that brings remote teams together in immersive environments.",
      longDescription: "A revolutionary virtual reality platform designed for remote collaboration, featuring realistic 3D environments, spatial audio, and intuitive collaboration tools that make virtual meetings feel natural and engaging.",
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["WebXR", "Three.js", "Socket.io", "WebRTC", "A-Frame", "Node.js"],
      icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />,
      github: "#",
      live: "#",
      featured: false,
      gradient: "from-green-500 to-teal-600",
      duration: "8 months",
      team: "8 developers",
      role: "VR/AR Specialist",
      features: [
        "Cross-platform VR compatibility",
        "Spatial audio with 3D positioning",
        "Customizable 3D avatars",
        "Virtual whiteboard and presentation tools",
        "Screen sharing in 3D space",
        "Real-time collaboration features"
      ],
      challenges: [
        "Ensuring low latency for real-time VR interactions",
        "Creating intuitive VR user interfaces",
        "Optimizing for various VR headsets and capabilities"
      ],
      results: [
        "Reduced meeting fatigue by 50%",
        "Increased team collaboration scores",
        "Adopted by 100+ remote companies",
        "Patent pending for spatial meeting technology"
      ]
    },
    {
      title: "3D Data Visualization",
      description: "An interactive data visualization platform that transforms complex datasets into beautiful 3D representations with real-time updates and smooth animations.",
      longDescription: "A sophisticated data visualization platform that brings complex datasets to life through interactive 3D representations, making data analysis more intuitive and engaging for business intelligence applications.",
      image: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["D3.js", "Three.js", "React", "WebGL", "Chart.js", "Python"],
      icon: <Palette className="w-4 h-4 sm:w-6 sm:h-6" />,
      github: "#",
      live: "#",
      featured: false,
      gradient: "from-orange-500 to-red-600",
      duration: "5 months",
      team: "4 developers",
      role: "Data Visualization Lead",
      features: [
        "Interactive 3D scatter plots and networks",
        "Real-time data streaming and updates",
        "Customizable visualization themes",
        "Export capabilities for presentations",
        "Multi-dimensional data filtering",
        "Collaborative annotation tools"
      ],
      challenges: [
        "Rendering large datasets without performance loss",
        "Creating intuitive 3D navigation for data exploration",
        "Maintaining visual clarity with complex data relationships"
      ],
      results: [
        "30% faster data analysis workflows",
        "Improved decision-making accuracy",
        "Adopted by Fortune 500 companies",
        "Reduced training time for new analysts"
      ]
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-100 to-blue-100 relative overflow-hidden">
        {/* Parallax Background */}
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </ParallaxSection>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6">
                Featured Projects
              </h2>
              <div className="w-20 sm:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg sm:text-xl px-4 font-medium">
                Immersive 3D experiences and cutting-edge web applications that push the 
                boundaries of what's possible in modern web development.
              </p>
            </motion.div>
          
            {/* Featured Projects */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20 mb-12 sm:mb-16 lg:mb-20">
  {featuredProjects.map((project, index) => (
    <motion.div
      key={index}
      className={`grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center relative group ${
        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
      }`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005 }} // Subtle container scale
    >
      {/* Image Container */}
      <motion.div 
        className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} order-1 lg:order-none`}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.03, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div 
          className="relative group-hover:shadow-3xl overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl transform-gpu cursor-pointer transition-all duration-500"
          onClick={() => openModal(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
          
          {/* Click to View Overlay */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-gray-900 font-semibold shadow-lg text-sm sm:text-base">
              Click to View Details
            </div>
          </motion.div>
          
          {/* 3D Overlay Effect */}
          <motion.div 
            className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white">
              {project.icon}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Content Container */}
      <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} order-2 lg:order-none`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="group-hover:[&>*:nth-child(1)]:translate-y-[-5px] group-hover:[&>*:nth-child(2)]:translate-y-[-3px] group-hover:[&>*:nth-child(3)]:translate-y-[-2px]"
        >
          {/* Project Badge */}
          <motion.div 
            className="flex items-center mb-4"
            whileHover={{ 
              scale: 1.05,
              transition: { delay: 0.1 }
            }}
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${project.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white mr-3 sm:mr-4 shadow-lg`}>
              {project.icon}
            </div>
            <span className="text-blue-700 font-bold text-sm sm:text-base uppercase tracking-wide">
              Featured Project
            </span>
          </motion.div>
          
          {/* Title */}
          <motion.h3 
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
            whileHover={{ 
              scale: 1.02,
              x: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            {project.title}
          </motion.h3>
          
          {/* Description */}
          <motion.div 
            className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6 border border-white/50 cursor-pointer"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              y: -3,
              transition: { delay: 0.05 }
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => openModal(project)}
          >
            <p className="text-gray-800 leading-relaxed text-base sm:text-lg lg:text-xl font-medium">
              {project.description}
            </p>
          </motion.div>
          
          {/* Technologies */}
          <motion.div 
            className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8"
            whileHover={{
              transition: { staggerChildren: 0.05 }
            }}
          >
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm sm:text-base font-semibold shadow-lg`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  zIndex: 5,
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <motion.span 
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-200 text-gray-600 rounded-full text-sm sm:text-base font-medium"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  backgroundColor: "#e5e7eb"
                }}
              >
                +{project.technologies.length - 4} more
              </motion.span>
            )}
          </motion.div>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6"
            whileHover={{
              transition: { staggerChildren: 0.1 }
            }}
          >
            <motion.button
              onClick={() => openModal(project)}
              className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/50 text-sm sm:text-base"
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View Details
            </motion.button>
            <motion.a
              href={project.live}
              className={`flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base`}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                transition: { delay: 0.05 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Live Demo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  ))}
</div>
            
            {/* Other Projects */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
             <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
  Other Projects
</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/50 transform-gpu cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 5,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={() => openModal(project)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                      
                      {/* Click overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-gray-900 font-medium text-xs sm:text-sm">
                          View Details
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center mb-3">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-white mr-3 shadow-lg`}>
                          {project.icon}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs sm:text-sm font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects3D;