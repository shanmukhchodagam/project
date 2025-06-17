import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TravelSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Sample travel destinations (replace with your actual travel history)
  const destinations = [
    {
      location: "Paris, France",
      year: "2023",
      description: "Exploring the city of love and its rich cultural heritage",
      coordinates: { x: 48, y: 20 }
    },
    {
      location: "Tokyo, Japan",
      year: "2022",
      description: "Immersing in the unique blend of tradition and innovation",
      coordinates: { x: 85, y: 35 }
    },
    {
      location: "New York, USA",
      year: "2021",
      description: "Experiencing the vibrant energy of the Big Apple",
      coordinates: { x: 20, y: 30 }
    }
  ];

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = length.toString();
      pathRef.current.style.strokeDashoffset = length.toString();
    }
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative py-20">
      <motion.div 
        className="container mx-auto px-4"
        style={{ y, opacity }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Travel Adventures
          </span>
        </h2>

        {/* World Map with Animated Path */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-auto"
            style={{ filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))' }}
          >
            {/* Background Map (simplified) */}
            <path
              d="M 10,50 Q 50,10 90,50 Q 50,90 10,50"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />

            {/* Animated Travel Path */}
            <motion.path
              ref={pathRef}
              d={`M ${destinations[0].coordinates.x},${destinations[0].coordinates.y} 
                  Q 50,50 ${destinations[1].coordinates.x},${destinations[1].coordinates.y}
                  Q 50,50 ${destinations[2].coordinates.x},${destinations[2].coordinates.y}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              style={{
                strokeDasharray: "100%",
                strokeDashoffset: useTransform(pathLength, (value) => `${(1 - value) * 100}%`)
              }}
            />

            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>

            {/* Destination Points */}
            {destinations.map((dest, index) => (
              <motion.circle
                key={index}
                cx={dest.coordinates.x}
                cy={dest.coordinates.y}
                r="1"
                fill="white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            ))}
          </svg>
        </div>

        {/* Travel Timeline */}
        <div className="max-w-3xl mx-auto">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline Line */}
              {index < destinations.length - 1 && (
                <div className="absolute left-3 top-0 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>

              {/* Content */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{dest.location}</h3>
                  <span className="text-purple-300">{dest.year}</span>
                </div>
                <p className="text-gray-300">{dest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Travel Philosophy */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">My Travel Philosophy</h3>
          <p className="text-gray-300">
            Travel is not just about visiting new places; it's about immersing yourself in different cultures,
            creating memories, and growing as a person. Each journey adds a new chapter to my story.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TravelSection; 