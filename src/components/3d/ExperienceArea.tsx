import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group } from 'three';

const Terminal = ({ position, rotation, company, role, logs }: { position: [number, number, number], rotation: [number, number, number], company: string, role: string, logs: string[] }) => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle floating
    if (!hovered) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position} 
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshPhysicalMaterial 
          color="#0f0f15" 
          metalness={0.9} 
          roughness={0.1}
          emissive={hovered ? "#00ff88" : "#000000"}
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* Glow border */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[3.05, 2.05, 0.1]} />
        <meshBasicMaterial color={hovered ? "#00ff88" : "#333333"} wireframe />
      </mesh>
      
      {/* 3D Pure WebGL Text Content (Replaces DOM Html to fix overlaps) */}
      <group position={[-1.35, 0.75, 0.06]}>
        <Text
          position={[0, 0, 0]}
          color="#00ff88"
          fontSize={0.18}
          anchorX="left"
          anchorY="top"
          maxWidth={2.8}
        >
          {company}
        </Text>
        <Text
          position={[0, -0.3, 0]}
          color="#ffffff"
          fontSize={0.12}
          anchorX="left"
          anchorY="top"
          maxWidth={2.8}
        >
          {role}
        </Text>
        {logs.map((log, i) => (
          <Text
            key={i}
            position={[0, -0.6 - (i * 0.2), 0]}
            color="#00ff88"
            fontSize={0.09}
            anchorX="left"
            anchorY="top"
            maxWidth={2.8}
          >
            {`> ${log}`}
          </Text>
        ))}
      </group>
    </group>
  );
};

export default function ExperienceArea() {
  return (
    <group position={[0, 0, -15]}>
      {/* Left terminal */}
      <Terminal 
        position={[-2.5, 0, 0]} 
        rotation={[0, 0.4, 0]}
        company="Global Web3 Hackathon"
        role="Winner (Defi Track)"
        logs={[
          "Architected a decentralized lending protocol.",
          "Integrated smart contracts with React frontend.",
          "Deployed successfully to Ethereum testnet.",
        ]}
      />
      {/* Right terminal */}
      <Terminal 
        position={[2.5, -0.5, -3]} 
        rotation={[0, -0.4, 0]}
        company="AI Innovation Challenge"
        role="Lead Developer"
        logs={[
          "Built a live RAG-based document analyzer.",
          "Optimized inference time by 40%.",
          "Presented winning pitch to judging panel.",
        ]}
      />
    </group>
  );
}
