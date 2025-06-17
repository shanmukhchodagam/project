import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ArtSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Sample art pieces (replace with your actual art)
  const artPieces = [
    {
      title: "Abstract Dreams",
      description: "A journey through colors and emotions",
      image: "https://source.unsplash.com/random/400x300?abstract",
      style: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "Nature's Canvas",
      description: "Capturing the beauty of landscapes",
      image: "https://source.unsplash.com/random/400x300?landscape",
      style: "bg-gradient-to-br from-green-500 to-blue-500"
    },
    {
      title: "Urban Stories",
      description: "City life through my lens",
      image: "https://source.unsplash.com/random/400x300?city",
      style: "bg-gradient-to-br from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen relative py-20">
      <motion.div 
        className="container mx-auto px-4"
        style={{ y, opacity }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Art Gallery
          </span>
        </h2>

        {/* Paint Splatter Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transform -rotate-12" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl transform rotate-12" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {artPieces.map((piece, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{piece.title}</h3>
                  <p className="text-gray-300">{piece.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Art Journey Description */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">My Artistic Journey</h3>
          <p className="text-gray-300">
            Through various mediums and styles, I explore the intersection of creativity and expression.
            Each piece tells a unique story, capturing moments of inspiration and emotion.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ArtSection; 