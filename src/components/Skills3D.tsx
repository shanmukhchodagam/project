import React from 'react';
import { motion } from 'framer-motion';
import ParallaxSection from './ParallaxSection';

const Skills3D = () => {
  const skillCategories = [
    {
      title: "Frontend & 3D",
      skills: [
        { name: "React", level: 79 },
        { name: "html & css", level: 90 },
        { name: "TypeScript", level: 70 },
        { name: "Javascript", level: 85 },
        { name: "Angular", level: 30 },
        {name:"React-Native",level:70}
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "ExpressJs", level: 85 },
        { name: "Php", level: 70 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "SQl", level: 75 },
      ]
    },
    {
      title: "Tools & Animation",
      skills: [
        { name: "Git", level: 90 },
        { name: "Vercel", level: 75 },
        { name: "puppeteer", level: 70 },
        { name: "taiwindcss", level: 75 },
        { name: "bootstrap", level: 85 },
        {name:"Android-Studio",level:70}
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Parallax Background (unchanged) */}
      <ParallaxSection speed={0.4} className="absolute inset-0">
        <div className="absolute top-20 sm:top-40 left-10 sm:left-20 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Skills & Technologies
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-blue-200 max-w-2xl mx-auto text-base sm:text-lg px-4">
              Cutting-edge technologies and tools I use to create immersive digital experiences 
              that push the boundaries of modern web development.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 transform-gpu"
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2 sm:mb-3">
                        <span className="text-white font-medium text-base sm:text-lg">
                          {skill.name}
                        </span>
                        <span className="text-blue-200 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-white/20 rounded-full h-2.5 sm:h-3 overflow-hidden">
                          <motion.div
  className="h-full bg-gradient-to-r from-white to-gray-200 rounded-full"
  initial={{ width: 0 }}
  whileInView={{ width: `${skill.level}%` }}
  transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
  viewport={{ once: true }}
  style={{
    boxShadow: `
      0 0 8px rgba(255, 255, 255, 0.8),
      0 0 16px rgba(255, 255, 255, 0.6),
      0 0 24px rgba(255, 255, 255, 0.4)
    `,
    filter: 'brightness(10.1)'
  }}
/>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-shimmer"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills3D;     