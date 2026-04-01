import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Group } from 'three';

export default function PersonalCore() {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Slow, whimsical rotation for the Sketchbook/Mic concept
    groupRef.current.rotation.y += 0.01;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <group position={[0, 0, -45]}>
      {/* 3D Representation (A floating Sketchbook or Mic stand) */}
      <group 
        ref={groupRef}
        onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
      >
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
          <meshStandardMaterial 
            color="#ffff00" 
            emissive={hovered ? "#ffffdd" : "#000000"} 
            emissiveIntensity={0.2} 
            metalness={0.5} 
            roughness={0.2} 
          />
        </mesh>
        
        {/* 'Mic' top part or Sketch pole */}
        <mesh position={[0, 0.5, 0]}>
          <capsuleGeometry args={[0.2, 0.6, 16, 16]} />
          <meshStandardMaterial 
            color="#aaaaaa" 
            metalness={0.9} 
            roughness={0.1} 
          />
        </mesh>

        {hovered && (
          <Html center position={[0, -1.2, 0]}>
            <div className="bg-white/10 p-3 rounded-lg backdrop-blur shadow-2xl border border-white/20 text-center w-48">
              <h4 className="text-[#ffff00] font-bold">Personal Core</h4>
              <p className="text-sm text-gray-200 mt-1">Stand-up Comedy & Digital Art</p>
            </div>
          </Html>
        )}
      </group>
      
      {/* Platform/Node indicator */}
      <mesh position={[0, -2, 0]} receiveShadow>
        <circleGeometry args={[3, 32]} />
        <meshBasicMaterial color="#333333" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}
