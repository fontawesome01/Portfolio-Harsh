'use client';
import React from 'react';

export default function Backgroundcircles() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      {/* Large glowing rings */}
      <div
        className="rounded-full border border-[#00FFFF]/30 absolute animate-pulse opacity-100"
        style={{
          width: '90vmin ',
          height: '90vmin ',
          boxShadow:
            '0 0 80px rgba(0,255,255,0.1)',
        }}
      />
      <div
        className="rounded-full border border-[#00FFFF]/20 absolute  animate-ping"
        style={{
          width: '80vmin',
          height: '80vmin',
          boxShadow:
            '0 0 60px rgba(0,255,255,0.1)',
        }}
      />
      <div
        className="rounded-full border border-[#00FFFF]/10 absolute hidden md:block"
        style={{
          width: '60vmin',
          height: '60vmin',
          //   boxShadow:
          //     '0 0 40px rgba(0,255,255,0.1)',
        }}
      />
    </div>
  );
}
