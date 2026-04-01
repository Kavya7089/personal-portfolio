import React from 'react';

export default function UIOverlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold font-['Manrope'] mb-4 tracking-tighter text-white drop-shadow-lg">
        THE ORBITAL WALK
      </h1>
      <p className="text-gray-300 text-lg md:text-xl font-['Inter']">
        Full Stack Engineer | Blockchain & AI Specialist
      </p>
    </div>
  );
}
