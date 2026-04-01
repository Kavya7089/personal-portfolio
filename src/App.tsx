import { useState, useEffect, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import Scene from './components/3d/Scene';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import Cursor from './components/Cursor';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Lock in dark mode permanently
    document.documentElement.classList.add('dark');

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* 3D Antigravity Background Scene */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 dark text-white min-h-screen transition-colors duration-300 pointer-events-none">
        {/* Enable pointer events on children so user can interact with both layers */}
        <div className="pointer-events-auto">
          {!isMobile && <Cursor />}
          <Navbar />

          <main className="px-4 md:px-12 lg:px-24">
            <Hero />
            <About />
            <Skills />
            <Projects openProject={openProject} />
            <Gallery />
            <Contact />
          </main>

          <AnimatePresence>
            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={closeProject}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;