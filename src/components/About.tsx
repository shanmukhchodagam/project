import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Software Developer",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively in team environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Passionate Developer with 5+ Years of Experience
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hello! I'm Shanmukh, a full-stack developer based in San Francisco. I specialize in 
                building exceptional digital experiences that combine beautiful design with 
                robust functionality.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in web development started in 2019, and since then I've had the 
                privilege of working with startups, agencies, and established companies. I'm 
                constantly learning new technologies and love tackling complex problems.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new hiking trails, 
                experimenting with photography, or contributing to open-source projects.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  React & Next.js
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Node.js & Express
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  AWS & Docker
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;