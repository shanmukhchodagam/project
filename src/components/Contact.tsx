import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ success: false, message: 'Please fill all required fields' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,        // Changed from from_name to name
          email: formData.email,      // Changed from from_email to email
          subject: formData.subject || 'New message from contact form',
          message: formData.message,
          reply_to: formData.email    // Added explicit reply_to
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again or contact me directly at shanmukhsiva54@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      value: "shanmukhsiva54@gmail.com",
      link: "mailto:shanmukhsiva54@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Phone",
      value: "+91 9381758441",
      link: "tel:+919381758441"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Location",
      value: "AndhraPradesh, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: "GitHub",
      url: " https://github.com/shanmukhchodagam/workli.git",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: "LinkedIn",
      url: " https://in.linkedin.com/in/shanmukha-siva-sri-venkatchodagam-6b6b43343",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              I'm always interested in hearing about new opportunities and interesting projects. 
              Let's discuss how we can work together!
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                Let's start a conversation
              </h3>
              
              <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3 sm:mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">{info.title}</p>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                  Follow me on social media
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-black-600 transition-all duration-200 hover:bg-gray-200 ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;