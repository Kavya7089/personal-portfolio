import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import FloatingLaptop from './3d/FloatingLaptop';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mainControls}
            className="order-2 lg:order-1"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              About Me
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              I'm a passionate full-stack developer and creative technologist with a love for building innovative digital experiences. With expertise in modern web technologies, I bridge the gap between design and development to create meaningful and engaging applications.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              My journey in technology began with a curiosity for how things work, which evolved into a career building elegant solutions for complex problems. I specialize in creating responsive web applications with modern frameworks, interactive 3D experiences, and intuitive user interfaces.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-primary-600 dark:text-primary-400 font-medium">4+</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">Team Project</p>
              </div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-primary-600 dark:text-primary-400 font-medium">12+</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-primary-600 dark:text-primary-400 font-medium">15+</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">Hackathon Participation</p>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="order-1 lg:order-2 h-80 lg:h-96">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <Float 
                speed={1.5} 
                rotationIntensity={0.5} 
                floatIntensity={0.5}
              >
                <FloatingLaptop position={[0, 0, 0]} scale={1.5} />
              </Float>
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate 
                autoRotateSpeed={0.5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;