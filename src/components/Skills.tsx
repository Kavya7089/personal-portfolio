import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { skills } from '../data/skills';
import { Skill as SkillType } from '../types';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categories = ['frontend', 'backend', 'design', 'other', 'programming'];

  // Group skills by category
  const skillsByCategory = categories.reduce<Record<string, SkillType[]>>((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category);
    return acc;
  }, {});

  return (
    <section 
      id="skills" 
      className="py-20 md:py-32 dark:bg-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            My Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            These are the technologies and tools I work with to bring ideas to life.
          </motion.p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 capitalize text-gray-800 dark:text-gray-200">
                {category === 'frontend' ? 'Frontend Development' : 
                 category === 'backend' ? 'Backend Development' :
                 category === 'programming' ? 'Programming Languages' :
                 category === 'design' ? 'Design Tools' : 'Other Skills'}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {skillsByCategory[category].map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;