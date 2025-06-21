import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to dot position
  const dotY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

 const experiences = [
    {
      title: "Streaming Coordinator",
      company: "Bhimavaram Open",
      location: "Bhimavaram",
      duration: "Not specified",
      description: "Managed live streaming setup for tennis tournaments using OBS software and oversaw social media engagement.",
      achievements: [
        "Ensured efficient use of limited resources for live streaming",
        "Facilitated social media engagement and filmed match events",
        "Received honor award for tech support"
      ]
    },
    {
      title: "Full Stack Web Developer",
      company: "BO Smart Wash",
      location: "Andhra Pradesh",
      duration: "Not specified",
      description: "Developed web applications and collaborated with other developers to improve usability and functionality.",
      achievements: [
        "Built applications using HTML, CSS, and JavaScript",
        "Contributed ideas to enhance web application interfaces",
        "Participated in code reviews and bug fixes"
      ]
    },
    {
      title: "Web Developer",
      company: "SIGMA fest website",
      location: "SRKR Engineering College",
      duration: "Not specified",
      description: "Created a Squid Game-themed website for the Sigma 2K25 fest, enabling event registrations and showcasing fest highlights.",
      achievements: [
        "Developed the site using HTML, CSS, and JavaScript",
        "Hosted the site via WinSCP for campus-wide access",
        "Ensured smooth event registrations and user experience"
      ]
    },
    {
      title: "Contributor",
      company: "Social Summer of Code (SSOC) Season 4",
      location: "Open-source (Remote)",
      duration: "2025",
      description: "Contributed to EventMapper, an open-source project, collaborating with a global developer community.",
      achievements: [
        "Used HTML, CSS, JavaScript, and Firebase",
        "Built real-world solutions as part of SSOC 2025"
      ]
    },
    {
      title: "C Programming Mentor",
      company: "SRKR Engineering College",
      location: "Bhimavaram",
      duration: "2024-25",
      description: "Educated learners on C programming and organized team-building events.",
      achievements: [
        "Enhanced team morale and working relationships",
        "Provided guidance on C programming concepts"
      ]
    },
    {
      title: "React Developer (Personal Project)",
      company: "Personal Portfolio",
      location: "Remote",
      duration: "2025",
      description: "Built a fully responsive, interactive portfolio using React, TypeScript, Three.js, and EmailJS to showcase skills and projects.",
      achievements: [
        "Implemented parallax effects and 3D visuals with Three.js",
        "Enabled direct email communication via EmailJS integration",
        "Designed with a focus on UI/UX and mobile responsiveness"
      ]
    }
];

  return (
    <section ref={sectionRef} id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <ParallaxSection speed={0.4} className="absolute inset-0">
        <>
          <div className="absolute top-20 sm:top-40 left-10 sm:left-20 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </>
      </ParallaxSection>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Work Experience
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-blue-200 max-w-2xl mx-auto text-base sm:text-lg">
              My journey in web development blends technical expertise with creative problem-solving. From building dynamic e-commerce apps in Angular to contributing to open-source projects with Firebase, I thrive on crafting scalable, user-centric solutions. As a mentor and team collaborator, I enjoy sharing knowledge while pushing the boundaries of modern web tech—whether through live streaming innovation at Bhimavaram Open or designing immersive portfolios with Three.js.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line with parallax effect */}
            <ParallaxSection speed={0.2} className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/50 to-purple-400/50 hidden sm:block">
              <div className="w-full h-full"></div>
            </ParallaxSection>
            
            {/* Animated dot that follows the timeline */}
            <motion.div 
              className="absolute left-[18px] sm:left-[30px] w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-gray-900 shadow-lg hidden sm:block"
              style={{ 
                top: dotY,
                transform: 'translateY(-50%)',
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
              }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full bg-blue-400/30"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <div className="space-y-8 sm:space-y-12">
              {experiences.map((experience, index) => (
                <motion.div 
                  key={index} 
                  className="relative flex items-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot with parallax effect */}
                  <ParallaxSection speed={0.3} className="absolute left-5 sm:left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 shadow-lg hidden sm:block">
                    <div className="w-full h-full"></div>
                  </ParallaxSection>
                  
                  <motion.div 
                    className="w-full sm:ml-16 bg-white/10 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg border border-white/10"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-blue-300 font-semibold text-base sm:text-lg">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                        <div className="flex items-center text-blue-200 mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{experience.duration}</span>
                        </div>
                        <div className="flex items-center text-blue-200">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-blue-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {experience.description}
                    </p>
                    
                    <div>
                      <div className="flex items-center mb-3">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2" />
                        <span className="font-semibold text-white text-sm sm:text-base">Key Achievements</span>
                      </div>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start text-blue-100 text-sm sm:text-base"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-1.5 sm:mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;