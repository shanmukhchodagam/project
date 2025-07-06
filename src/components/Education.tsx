import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Ship } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Enhanced boat animations with fewer checkpoints
  const boatY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['0%', '700%', '1400%', '2100%', '2800%', '3500%'],
    {
      clamp: false
    }
  );
  const boatRotation = useTransform(scrollYProgress, [0, 0.5, 1], [0, 17.5, 0]);
  const boatScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1]);
  const boatOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const educationData = [
    {
      year: '2020 - 2021',
      degree: '10th Grade',
      institution: 'Bhashyam EM High School',
      description: 'Completed secondary education with distinction.',
      achievements: [
        'Scored 99% in Board Exams',
        'Won Science Exhibition',
        'Active participant in extracurricular activities'
      ]
    },
    {
      year: '2021 - 2023',
      degree: '12th Grade',
      institution: 'SRI Srinivasa Graviity',
      description: 'Specialized in Mathematics Physics & Chemistry',
      achievements: [
        'Scored 94.6% in Board Exams'
      ]
    },
    {
      year: '2023 - 2027',
      degree: 'B.Tech in Computer Science',
      institution: 'Sagi RamaKrishnam Raju Engineering college',
      description: 'pursuving 3rd year.',
      achievements: [
        'Graduating',
        'Completed major project in Web Development',
        'Participated in various hackathons and coding competitions'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="relative py-20 mt-20 overflow-hidden">
      {/* Ocean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-blue-900 to-sky-900">
        {/* Animated Waves */}
        <ParallaxSection speed={0.2} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-blue-500/10 to-transparent animate-pulse" />
        </ParallaxSection>

        {/* Wave Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNMCwyMjQuN2MxNDQtMjgsNDMyLTQ4LDcyMC0yN3M3MjAsMTI4LDcyMCwxMjh2MTI4SDBWMjI0Ljd6Ii8+PC9zdmc+')] bg-repeat-x bg-bottom opacity-20 animate-wave" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNMCwyMjQuN2MxNDQtMjgsNDMyLTQ4LDcyMC0yN3M3MjAsMTI4LDcyMCwxMjh2MTI4SDBWMjI0Ljd6Ii8+PC9zdmc+')] bg-repeat-x bg-bottom opacity-30 animate-wave-delayed" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNMCwyMjQuN2MxNDQtMjgsNDMyLTQ4LDcyMC0yN3M3MjAsMTI4LDcyMCwxMjh2MTI4SDBWMjI0Ljd6Ii8+PC9zdmc+')] bg-repeat-x bg-bottom opacity-40 animate-wave-slow" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Educational Journey</h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-sm md:text-base">
            From high school to engineering, my academic path has been a journey of continuous learning and growth.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Enhanced Animated Boat */}
          <motion.div
            style={{ 
              position: 'absolute',
              left: '50%',
              top: 0,
              y: boatY, 
              rotate: boatRotation,
              scale: boatScale,
              opacity: boatOpacity,
              transform: 'translateX(-50%)'
            }}
            className="z-20"
          >
            <div className="relative">
              <Ship className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-white/30 blur-xl rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full animate-ping" />
            </div>
          </motion.div>

          {/* Enhanced Timeline Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-300" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200/50 via-blue-300/50 to-blue-200/50 blur-sm" />
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                } w-full md:w-[calc(50%-1rem)]`}
              >
                <div className="relative">
                  {/* Enhanced Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:border-blue-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/20">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-400/20 flex items-center justify-center">
                          <Ship className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                        <p className="text-blue-200 text-sm md:text-base mb-1">{edu.institution}</p>
                        <p className="text-blue-100/80 text-xs md:text-sm mb-2">{edu.year}</p>
                        <p className="text-blue-50/90 text-sm md:text-base mb-2">{edu.description}</p>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-center gap-2 text-blue-50/80 text-xs md:text-sm"
                            >
                              <span className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-300 to-blue-400" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Timeline Dot */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-300 to-blue-400">
                    <div className="absolute inset-0 bg-blue-300/30 blur-md rounded-full animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
