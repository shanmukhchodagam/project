import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  venue: string;
}

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const events: Event[] = [
  {
    title: "Annual Day Performance",
    date: "March 15, 2024",
    description: "Led the Lolo band in a spectacular performance at the college annual day, featuring a mix of contemporary and classical pieces.",
    image: "/images/annual-day.jpg",
    venue: "College Auditorium"
  },
  {
    title: "Swanandhra Cultural Event",
    date: "February 20, 2024",
    description: "Performed with the band at the cultural festival, showcasing our unique fusion of traditional and modern music.",
    image: "/images/swanandhra.jpg",
    venue: "City Cultural Center"
  },
  {
    title: "GDG Tech Event",
    date: "January 10, 2024",
    description: "Special performance at the Google Developer Group event, combining technology and music in an innovative way.",
    image: "/images/gdg-event.jpg",
    venue: "Tech Hub"
  },
  {
    title: "IT Department Event",
    date: "December 5, 2023",
    description: "Featured performance at the IT department's annual gathering, bringing together technology and musical creativity.",
    image: "/images/it-event.jpg",
    venue: "IT Department"
  }
];

const EventsModal: React.FC<EventsModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="w-full max-w-3xl"
            >
              <div className="bg-gradient-to-br from-slate-900/95 to-purple-900/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10">
                <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                    Our Events
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-1.5 hover:bg-white/10 rounded-full transition-colors duration-300"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="p-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {events.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="aspect-[16/9] relative overflow-hidden">
                          <motion.img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2">
                            <h3 className="text-base font-bold text-white">{event.title}</h3>
                            <p className="text-purple-300 text-xs">{event.date} • {event.venue}</p>
                          </div>
                        </div>
                        <div className="p-2">
                          <p className="text-gray-300 text-xs line-clamp-2">{event.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventsModal; 