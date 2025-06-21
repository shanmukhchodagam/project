import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import resumeFile from '../assets/resume.pdf';
const About3D = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "3D Design",
      description: "Creating immersive 3D experiences and animations",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Collaboration",
      description: "Working effectively in team environments",
      color: "from-green-500 to-emerald-500"
    }
  ];

 const stats = [
  { number: "10", label: "Porjects Built", icon: Award },
  { number: "6", label: "Certifications Earned", icon: Code },
  { number: "300+", label: "Hours Coding", icon: Coffee },
];


  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <ParallaxSection speed={0.4} className="absolute inset-0" rotate={true} scale={true} intensity={1.5}>
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-ping"></div>
        </div>
      </ParallaxSection>

      {/* Additional Parallax Elements */}
      <ParallaxSection speed={0.2} className="absolute inset-0" rotate={true} intensity={2}>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float-delayed"></div>
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
           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4 sm:mb-6">
  About Me
</h2>

            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          </motion.div>
          
    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="order-2 lg:order-1"
  >
    <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
      Full Stack Web Developer with Hands-On Project Experience
    </h3>

    <p className="text-gray-800 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
      Hello! I'm Shanmukh, a full-stack web developer skilled in building scalable web applications using React, Angular, TypeScript, and PHP. I focus on writing clean, efficient code and bringing real-world projects to life—from e-commerce platforms to productivity tools.
    </p>

    <p className="text-gray-800 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
      My journey began in 2021, and since then I've grown from building static websites to developing full-fledged web applications using modern frameworks like React, Angular, and Django. I've worked on real-world projects like M-Cart, a feature-rich e-commerce platform, and internal tools for student and team management.
    </p>
    <p className="text-gray-800 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
      When I'm not building applications, I'm exploring backend systems, improving my problem-solving skills on LeetCode, or learning new tools to stay ahead in the ever-evolving world of web development.
    </p>

    {/* Download Resume Button */}
  <motion.a
  href={resumeFile}
  download="Shanmukh_Resume.pdf" // This will be the filename when downloaded
  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Download Resume
</motion.a>

    <div className="flex flex-wrap gap-2 sm:gap-3">
      {["React & Next.js", "Three.js & WebGL", "TypeScript", "PHP", "Node.js & ExpressJs", "MySql & Firebase"].map((skill, index) => (
        <motion.span
          key={index}
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
  
  <motion.div 
    className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 order-1 lg:order-2"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {highlights.map((highlight, index) => (
      <motion.div
        key={index}
        className={`p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu`}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${highlight.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg`}>
          {highlight.icon}
        </div>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          {highlight.title}
        </h4>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          {highlight.description}
        </p>
      </motion.div>
    ))}
  </motion.div>
</div>

          {/* 3D Stats Section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg transform-gpu"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About3D;