import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const Icon = LucideIcons[skill.icon as keyof typeof LucideIcons] || LucideIcons.Code;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: {
      y: -10,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-primary-100  dark:bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
    >
      <div 
        className="absolute top-0 left-0 h-1 w-full" 
        style={{ backgroundColor: skill.color }}
      />
      
      <div className="flex items-center justify-center mb-4">
        <Icon 
          size={32} 
          style={{ color: skill.color }} 
          className="transition-transform group-hover:scale-110 duration-300" 
        />
      </div>
      
      <h3 className="text-center font-medium text-gray-900 dark:text-white">
        {skill.name}
      </h3>
      
      <div className="mt-3 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;