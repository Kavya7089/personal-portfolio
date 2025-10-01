import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { galleryImages } from '../data/galleryImages';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (galleryRef.current) {
      if (direction === 'prev') {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, galleryImages.length - 1));
      }
    }
  };

  useEffect(() => {
    if (galleryRef.current) {
      const galleryWidth = galleryRef.current.scrollWidth;
      const itemWidth = galleryWidth / galleryImages.length;
      galleryRef.current.scrollTo({
        left: itemWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section 
      id="gallery" 
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
            Photo Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A collection of moments from my professional journey.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            ref={galleryRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 snap-center`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className={`w-full h-auto aspect-[${image.width}/${image.height}] object-cover`}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button 
            onClick={() => navigateGallery('prev')}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
          
          <button 
            onClick={() => navigateGallery('next')}
            disabled={currentIndex === galleryImages.length - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              currentIndex === galleryImages.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-primary-600 dark:bg-primary-500' 
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;