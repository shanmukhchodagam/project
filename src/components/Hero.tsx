import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              JD
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Shanmukh <span className="text-blue-600">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            I create beautiful, responsive web applications with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Download CV
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-800">
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;