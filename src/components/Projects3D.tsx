import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Palette, ShoppingCart, Cuboid as Cube } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import ProjectModal from './ProjectModal';
import tennis from '../assets/tennis.png';
import smawash from '../assets/smawash.png';
import pof from '../assets/pof.png';
import sigma2k25 from '../assets/sigma2k25.png';

const Projects3D = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
    title: "Smart Wash Website",
    description: "An efficient and eco-friendly laundry & dry cleaning service platform developed for a student-led startup.",
    longDescription: "Excited to share our work on Smart Wash – a laundry and dry cleaning service startup run by students! As SRKR CSD 2nd-year students, we built this platform to provide users with a seamless, eco-friendly laundry experience. It includes features like scheduling pickups, real-time updates, and a responsive design tailored for ease of use.",
    image: smawash , // You can replace with a Smart Wash-specific image if available
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />,
    github: "#", // Replace with actual GitHub repo if public
    live: "https://bosmartwash.in/",
    featured: true,
    gradient: "from-cyan-500 to-blue-600",
    duration: "2 months",
    team: "4 developers",
    role: "Web Developer",
    features: [
      "Pickup scheduling system",
      "User-friendly responsive design",
      "Service selection and order tracking",
      "Contact and feedback section",
      "Eco-friendly service messaging",
      "Seamless navigation"
    ],
    challenges: [
      "Integrating order scheduling with a clean UX",
      "Designing for performance on all devices",
      "Testing and debugging in live environment"
    ],
    results: [
      "Successfully launched during SRKR campus event",
      "Positive feedback from early users",
      "Improved digital visibility for the startup",
      "Valuable hands-on web dev experience for the team"
    ]
  },
    {
      title: "Interactive 3D Portfolio",
      description: "A stunning portfolio website featuring 3D animations, particle systems, and immersive storytelling that showcases creative work in an engaging way.",
      longDescription: "An award-winning portfolio website that pushes the boundaries of web design through innovative 3D animations and interactive storytelling. This project demonstrates advanced WebGL techniques and creative user experience design.",
      image: pof,
      technologies: ["React", "Three.js","TypeScript","EmailJs","framer-motion"],
      icon: <Cube className="w-4 h-4 sm:w-6 sm:h-6" />,
      github: "https://github.com/shanmukhchodagam/project",
      live: "#",
      featured: true,
    gradient: "from-cyan-500 to-blue-600",
      duration: " 1 week",
      team: "Solo project",
      role: "Full-Stack Developer & 3D Artist",
      features: [
  "Email integration using EmailJS for contact forms",
  "Dynamic data handling with React state and props",
  "Responsive layouts across devices",
  "Form validation and user feedback mechanisms",
  "API consumption for live data rendering",
  "Smooth scroll-triggered animations"
],
challenges: [
  "Deploying applications securely with environment variables and API keys",
  "Integrating third-party services like EmailJS in a production-ready app",
  "Debugging cross-platform layout inconsistencies"
],
results: [
  "Deployed on GitHub Pages with optimized build",
  "Received positive feedback from mentors and peers",
  "Improved understanding of API integration and deployment workflows"
]
    },
  {
  title: "SIGMA 2K25 Tech Fest Website",
  description: "An interactive website for SIGMA 2K25, the annual tech fest of CSD and CSIT at SRKR Engineering College, showcasing events, galleries, and registration.",
  longDescription: " Excited to announce that I and Likhitha noupada have successfully built a dynamic website for SIGMA 2K25 – the annual tech fest of CSD and CSIT at SRKR Engineering College! SIGMA 2K25 celebrates innovation through workshops, competitions, and tech talks. The platform we built offers smooth registration flows, stunning gallery visuals, and complete event details, giving users a seamless experience.",
  image: sigma2k25, // Optional: replace with actual SIGMA 2K25 image if available
  technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />,
  github: "#", // Replace with actual GitHub repo if available
  live: "https://srkrec.edu.in/sigma/#WebDevelopment",
  featured: true,
    gradient: "from-cyan-500 to-blue-600",
  duration: "1 month",
  team: "2 developers",
  role: "Frontend Developer",
  features: [
    "Interactive event registration system",
    "Smooth, responsive UI with animations",
    "Tech event schedule and descriptions",
    "Gallery showcasing highlights",
    "Mobile-friendly design",
    "Dynamic updates for event information"
  ],
  challenges: [
    "Delivering a high-performance UI under tight deadlines",
    "Capturing the festival's energy in the design",
    "Ensuring scalability for high user traffic during launch"
  ],
  results: [
    "Successfully launched for SRKR’s biggest fest",
    "Used by hundreds of students for event registration",
    "Highly appreciated by faculty and fest attendees",
    "Strengthened frontend development and teamwork skills"
  ]
}
,
    {
      title: "Live Streaming – Bhimavaram Open",
  description: "Managed OBS-based live streaming and filming for a regional tennis tournament with limited hardware.",
  longDescription: "As Streaming Coordinator for Bhimavaram Open, I led the setup and management of live streaming using OBS, filmed match events, and handled real-time tech adjustments. Despite hardware constraints, I ensured uninterrupted streams and drove engagement through active social media coordination.",
  image: tennis,
     technologies: ["OBS Studio", "YouTube Live", "Instagram", "Mobile Filming", "Basic Video Editing"],
  icon: <Palette className="w-4 h-4 sm:w-6 sm:h-6" />,
      github: "#",
      live: "https://www.youtube.com/@BhimavaramDigitals",
      featured: false,
      gradient: "from-blue-600 to-indigo-700",
      duration: "2 weeks",
      team: "4 members",
      role: "Streaming Coordinator",
      features: [
        "Live match streaming using OBS",
    "Filming match events and audience reactions",
    "Real-time social media updates and posts",
    "Tech setup and audio-video troubleshooting",
    "Optimized stream settings for limited hardware"
      ],
      challenges: [
        "Managing stream quality on low-spec machines",
    "Setting up outdoor streaming with unstable networks",
    "Balancing streaming, filming, and event coordination"
      ],
      results: [
        "Successfully streamed over 20 matches live",
    "Boosted Instagram visibility during the tournament",
    "Recognized by organizers for efficient coordination",
    "Gained hands-on expertise in event-based live streaming"
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
                     <h4 className="text-lg sm:text-xl font-bold text-black">
  {project.title}
</h4>
</div>
<p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">

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