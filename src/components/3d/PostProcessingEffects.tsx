import React from 'react';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';

export default function PostProcessingEffects() {
  return (
    <EffectComposer>
      <Bloom 
        luminanceThreshold={0.5} 
        luminanceSmoothing={0.9} 
        intensity={1.5} 
      />
      <Noise 
        opacity={0.03} 
      />
    </EffectComposer>
  );
}
