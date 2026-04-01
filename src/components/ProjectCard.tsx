import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="backdrop-blur-2xl bg-black/40 border border-white/20 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(100,100,255,0.3)] hover:border-white/40 transition-all duration-500 flex flex-col h-full group cursor-pointer"
    >
      <div 
        className="relative  h-48 overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
        {project.featured && (
          <div className="absolute top-4 right-4 backdrop-blur-md bg-primary-600/80 border border-primary-400/50 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow relative z-10">
        <h3 
          className="text-2xl font-bold mb-3 text-gray-900 dark:text-white cursor-pointer group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
          onClick={onClick}
        >
          {project.title}
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="text-xs font-medium backdrop-blur-md bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-white/10 shadow-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs font-medium backdrop-blur-md bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-white/10 shadow-sm">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      <div className="px-6 pb-6 flex justify-between items-center mt-auto">
        <button 
          onClick={onClick}
          className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
        >
          View Details
        </button>
        
        <div className="flex space-x-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="View GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
          
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="View Live Project"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;