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
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns with TypeScript.",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led migration from JavaScript to TypeScript across 5 major projects",
        "Mentored 4 junior developers and established best practices"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2020 - 2022",
      description: "Built scalable web applications from scratch using modern stack including React, Node.js, and PostgreSQL. Collaborated with design team to create exceptional user experiences.",
      achievements: [
        "Developed 3 major features that increased user engagement by 60%",
        "Reduced server response time by 35% through API optimization",
        "Implemented automated testing that caught 90% of bugs before production"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      duration: "2019 - 2020",
      description: "Created responsive websites and web applications for various clients. Worked closely with designers to implement pixel-perfect designs and ensure cross-browser compatibility.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Achieved 99% client satisfaction rate",
        "Reduced development time by 25% through component reusability"
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
              My professional journey in web development, where I've grown from a 
              junior developer to a senior role, leading projects and teams.
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