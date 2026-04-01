import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function CameraRig() {
  const { camera } = useThree();

  useEffect(() => {
    // Define the camera path as a CatmullRomCurve3
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 5),     // Start / Hero
      new THREE.Vector3(0, 0, -5),    // Moving into Experience
      new THREE.Vector3(-5, 2, -15),  // Experience Point 1
      new THREE.Vector3(5, -2, -25),  // Project Nebula
      new THREE.Vector3(0, 0, -40)    // Personal Core
    ]);

    const dummyCamera = new THREE.Object3D();
    dummyCamera.position.copy(curve.getPointAt(0));

    // An object to animate progress from 0 to 1
    const progressObj = { progress: 0 };

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // Smooth scrub
      onUpdate: (self: any) => {
        progressObj.progress = self.progress;
      }
    });

    const updateCamera = () => {
      // Get position on curve
      const pos = curve.getPointAt(progressObj.progress);
      
      // Look slightly ahead
      const lookAtPos = curve.getPointAt(Math.min(progressObj.progress + 0.05, 1.0));
      
      camera.position.lerp(pos, 0.05);
      
      dummyCamera.position.copy(camera.position);
      dummyCamera.lookAt(lookAtPos);
      
      camera.quaternion.slerp(dummyCamera.quaternion, 0.05);
    };

    gsap.ticker.add(updateCamera);

    return () => {
      gsap.ticker.remove(updateCamera);
      st.kill();
    };
  }, [camera]);

  return null;
}
