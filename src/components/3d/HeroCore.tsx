import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MathUtils } from 'three';

export default function HeroCore() {
  const crystalRef = useRef<Mesh>(null);
  
  // Float and bob animation
  useFrame((state) => {
    if (!crystalRef.current) return;
    
    // Slow rotation
    crystalRef.current.rotation.y += 0.005;
    crystalRef.current.rotation.x += 0.002;
    
    // Bobbing effect
    crystalRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    
    // Cursor interaction (slight tilt based on mouse position)
    const targetRotX = (state.mouse.y * Math.PI) / 8;
    const targetRotY = (state.mouse.x * Math.PI) / 8;
    
    crystalRef.current.rotation.x = MathUtils.lerp(crystalRef.current.rotation.x, targetRotX, 0.05);
    crystalRef.current.rotation.y = MathUtils.lerp(crystalRef.current.rotation.y, targetRotY, 0.05);
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={crystalRef} castShadow receiveShadow>
        <octahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial 
          color="#aa44ff" 
          emissive="#220055"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={true}
        />
      </mesh>
      
      {/* Inner glowing core */}
      <mesh>
        <octahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe={false} />
      </mesh>
    </group>
  );
}
