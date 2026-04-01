import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Group } from 'three';
import gsap from 'gsap';

const ProjectModule = ({ position, rotation, name, stack, link, color }: { position: [number, number, number], rotation: [number, number, number], name: string, stack: string, link: string, color: string }) => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    if (!hovered) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.15;
      groupRef.current.rotation.y += 0.002;
    } else {
      // stabilize rotation when hovered
      groupRef.current.rotation.y = groupRef.current.rotation.y * 0.95;
    }
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (!groupRef.current) return;
    
    // Zoom toward the project. Requires pausing ScrollTrigger scrub temporarily, 
    // or just animate an offset. For a simple version, we can animate camera to look at the module.
    // However, since CameraRig controls the camera based on scroll, we might just rely on Hover interactions
    // to keep it clean, but per requirements: "Clicking one zooms the camera..."
    // We can animate the fov or shift the camera slightly.
    gsap.to(camera, { fov: 30, duration: 1, onUpdate: () => camera.updateProjectionMatrix() });
    
    // Reset after some time
    setTimeout(() => {
      gsap.to(camera, { fov: 45, duration: 1, onUpdate: () => camera.updateProjectionMatrix() });
    }, 4000);
  };

  return (
    <group 
      ref={groupRef} 
      position={position} 
      rotation={rotation}
      onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
      onClick={handleClick}
    >
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color={color} 
          wireframe
          emissive={hovered ? color : "#000000"} 
          emissiveIntensity={0.5} 
        />
      </mesh>
      
      {hovered && (
        <Html center position={[0, -1.5, 0]}>
          <div className="bg-black/80 border border-white/20 p-4 rounded-lg w-48 text-center backdrop-blur-md">
            <h4 className="text-white font-bold mb-1">{name}</h4>
            <p className="text-xs text-[#88aaff] mb-2">{stack}</p>
            <a href={link} target="_blank" rel="noreferrer" className="text-xs bg-white text-black px-3 py-1 rounded inline-block">
              View GitHub
            </a>
          </div>
        </Html>
      )}
    </group>
  );
};

export default function ProjectNebula() {
  return (
    <group position={[0, 0, -30]}>
      <ProjectModule 
        position={[-1.5, 0.5, 0]} 
        rotation={[0.2, 0, 0]} 
        name="PolySol" 
        stack="Solidity, React Native" 
        link="https://github.com/PolySol" 
        color="#8800ff" 
      />
      <ProjectModule 
        position={[2, -0.5, -2]} 
        rotation={[-0.2, 0.5, 0]} 
        name="Tradiverse" 
        stack="Three.js, Web3.js" 
        link="https://github.com/Tradiverse" 
        color="#00aaff" 
      />
      <ProjectModule 
        position={[0, 1.5, -4]} 
        rotation={[0.1, -0.3, 0]} 
        name="AI Analytics Engine" 
        stack="Python, Next.js" 
        link="https://github.com/AI-Engine" 
        color="#ff0088" 
      />
    </group>
  );
}
