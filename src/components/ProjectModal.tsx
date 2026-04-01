import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Youtube } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.4, type: 'spring', stiffness: 300, damping: 30 } 
    },
    exit: { 
      opacity: 0, 
      y: 100, 
      scale: 0.95, 
      transition: { duration: 0.3 } 
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    } else if (e.key === 'ArrowRight') {
      setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <motion.div 
          className="backdrop-blur-3xl bg-black/60 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {project.images.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md border border-white/10 p-2 rounded-full hover:bg-black/80 hover:border-white/30 transition-all"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md border border-white/10 p-2 rounded-full hover:bg-black/80 hover:border-white/30 transition-all"
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex 
                        ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                        : 'bg-white/30 hover:bg-white/60'
                    } transition-colors`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <button 
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 p-2 rounded-full hover:bg-black/80 hover:border-white/30 transition-all z-10"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="p-6 sm:p-8">
            <h3 className="text-3xl font-bold mb-4 text-white">
              {project.title}
            </h3>
            
            <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-white">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-sm backdrop-blur-md bg-white/5 border border-white/10 text-gray-200 px-3 py-1.5 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 rounded-xl transition-all text-white font-medium"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              )}
              {project.demoVideo && (
                <a 
                  href={project.demoVideo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 rounded-xl transition-all text-white font-medium"
                >
                  <Youtube size={20} />
                  <span>View Demo</span>
                </a>
              )}
              
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 hover:-translate-y-1 rounded-xl transition-all duration-300 text-white font-medium overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;