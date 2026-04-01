import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import kavya from '../data/3dmy.png'; // Adjust the import path as necessary

const Hero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
      </div>

      <div className="container mx-auto px-6 z-10 mt-16 md:mt-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-16">
          
          {/* Image Section */}
          <motion.div 
            className="flex-1 flex justify-center w-full max-w-[16rem] md:max-w-xs lg:max-w-[22rem]"
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, rotateY: -10, rotateX: 5 }}
            style={{ perspective: 1000 }}
          >
                <img
                  src={kavya}
                  alt="Kavya Rajoria"
                  className="w-[85%] object-cover transform translate-y-2 group-hover:scale-110 transition-transform duration-700 ease-out brightness-110 contrast-125 drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
                />
            
          </motion.div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left pt-6 pb-16 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 backdrop-blur-md bg-white/5 text-sm font-medium text-gray-300 shadow-sm">
                Next-Gen Experiences
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg">
                Hi, I'm <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-[#da85ff] to-secondary-400 block mt-2">
                  Kavya Rajoria
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-300 tracking-wide">
                Developer <span className="text-primary-500 font-normal">&&</span> Creative Technologist
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-5"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-primary-600 overflow-hidden text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 hover:border-primary-400 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_30px_rgba(100,100,255,0.15)]"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.7, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.3
        }}
        ref={scrollRef}
        onClick={scrollToNext}
      >
        <div className="p-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-colors">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;