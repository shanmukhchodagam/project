import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Music, Calendar, Users, ArrowRight, Instagram } from 'lucide-react';
import EventsModal from './EventsModal';

interface Event {
  title: string;
  date: string;
  venue: string;
  description: string;
}

interface CardSection {
  title: string;
  description: string;
  image: string;
  link: string;
}

const events: Event[] = [
  {
    title: "Summer Music Festival",
    date: "July 2023",
    venue: "City Center Amphitheater",
    description: "Headlined the main stage with Lolo band, performing original compositions"
  },
  {
    title: "Local Band Competition",
    date: "March 2023",
    venue: "The Underground",
    description: "Won first place in the regional band competition"
  },
  {
    title: "Charity Concert",
    date: "December 2022",
    venue: "Community Hall",
    description: "Organized and performed in a charity concert for local causes"
  }
];

const cardSections: CardSection[] = [
  {
    title: "Live Performances",
    description: "Experience the energy of our live shows through these memorable moments. From intimate venues to large festivals, each performance tells a unique story.",
    image: "/images/live-performance.jpg",
    link: "/gallery/live"
  },
  {
    title: "Events",
    description: "Explore our journey through various events and performances. From local gigs to major festivals, each event has contributed to our musical growth and success.",
    image: "/images/events.jpg",
    link: "/gallery/events"
  },
  {
    title: "Band Journey",
    description: "Follow our journey from the early days to where we are now. See how we've grown as musicians and as a band over the years.",
    image: "/images/band-journey.jpg",
    link: "/gallery/journey"
  }
];

const MusicSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Guitar string animation
  const animateString = (stringRef: React.RefObject<SVGPathElement>) => {
    if (!stringRef.current) return;
    
    const animation = stringRef.current.animate([
      { d: 'M 50,100 Q 100,80 150,100' },
      { d: 'M 50,100 Q 100,120 150,100' },
      { d: 'M 50,100 Q 100,80 150,100' }
    ], {
      duration: 1000,
      iterations: 1,
      easing: 'ease-in-out'
    });

    animation.onfinish = () => {
      if (stringRef.current) {
        stringRef.current.setAttribute('d', 'M 50,100 Q 100,80 150,100');
      }
    };
  };

  const stringRefs = [
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null)
  ];

  const handleEventCardClick = (link: string) => {
    if (link === '/gallery/events') {
      setIsEventsModalOpen(true);
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen relative py-20">
      <motion.div 
        className="container mx-auto px-4"
        style={{ y, opacity }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Music & Guitar Journey
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Guitar and Stats */}
          <div className="space-y-8">
            {/* Guitar SVG */}
            <div className="relative">
              <svg
                viewBox="0 0 200 300"
                className="w-full max-w-md mx-auto"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  if (x > 50 && x < 150) {
                    const stringIndex = Math.floor((y - 50) / 30);
                    if (stringIndex >= 0 && stringIndex < 6) {
                      animateString(stringRefs[stringIndex]);
                    }
                  }
                }}
              >
                {/* Guitar Body */}
                <path
                  d="M 50,150 Q 100,200 150,150 L 150,250 Q 100,300 50,250 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                
                {/* Guitar Neck */}
                <rect x="90" y="50" width="20" height="100" fill="none" stroke="white" strokeWidth="2" />
                
                {/* Guitar Strings */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <path
                    key={i}
                    ref={stringRefs[i]}
                    d="M 50,100 Q 100,80 150,100"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    transform={`translate(0, ${i * 30})`}
                  />
                ))}
              </svg>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3">
                  <Music className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-medium text-white">Experience</h4>
                </div>
                <p className="text-2xl font-bold text-purple-400 mt-2">3 Years</p>
                <p className="text-gray-300 text-sm mt-1">Playing Guitar</p>
              </motion.div>

              <motion.div 
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-medium text-white">Band</h4>
                </div>
                <p className="text-2xl font-bold text-purple-400 mt-2">Lolo</p>
                <p className="text-gray-300 text-sm mt-1">Lead Guitarist</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Content and Events */}
          <div className="space-y-8">
            {/* Band Introduction */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">Lolo Band</h3>
              <p className="text-gray-300 mb-4">
                As the lead guitarist of Lolo band, I've been part of numerous performances and events, 
                bringing our unique sound to audiences across various venues. Our music combines elements 
                of rock, blues, and contemporary styles, creating an engaging and dynamic experience.
              </p>
              <div className="flex items-center space-x-4">
                <button 
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* New Card Sections */}
        <div className="mt-20 space-y-16">
          {cardSections.map((section, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => handleEventCardClick(section.link)}
            >
              <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Text Content */}
                  <div className="flex-1 p-8 space-y-4">
                    <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {section.description}
                    </p>
                    <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition-transform pt-4">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 relative min-h-[300px] lg:min-h-[400px]">
                    <motion.div
                      className="h-full"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:opacity-0 transition-opacity z-10" />
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Section */}
        <motion.div 
          className="mt-20 mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block">
            <motion.a
              href="https://instagram.com/shannu_grovees"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-4 px-8 py-6 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
              <div className="text-left">
                <p className="text-gray-300 text-sm">Follow me on</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                  @shannu_grovees
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Events Timeline */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-6">Notable Events</h3>
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white">{event.title}</h4>
                  <p className="text-purple-300 text-sm">{event.date} • {event.venue}</p>
                  <p className="text-gray-300 mt-2">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Events Modal */}
        <EventsModal 
          isOpen={isEventsModalOpen} 
          onClose={() => setIsEventsModalOpen(false)} 
        />
      </motion.div>
    </section>
  );
};

export default MusicSection; 