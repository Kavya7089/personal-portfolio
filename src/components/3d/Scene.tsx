import React from 'react';
import CameraRig from './CameraRig';
import HeroCore from './HeroCore';
import ExperienceArea from './ExperienceArea';
import ProjectNebula from './ProjectNebula';
import PersonalCore from './PersonalCore';

export default function Scene() {
  return (
    <>
      <color attach="background" args={['#050505']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[0, 0, 0]} intensity={2} color="#8800ff" />
      
      {/* Main Camera Controller */}
      <CameraRig />
      
      {/* Portfolio Sections */}
      <HeroCore />
      <ExperienceArea />
      <ProjectNebula />
      <PersonalCore />
    </>
  );
}
