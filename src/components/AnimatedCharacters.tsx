"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface AnimatedCharactersProps {
  text: string;
  className?: string;
  stagger?: number;
}

export const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({ 
  text, 
  className = "",
  stagger = 0.02
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.from(".char", {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: containerRef });

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          // 'char' class is used by GSAP to target these specific elements
          // 'inline-block' is required for transforms (like 'y') to work on spans
          className="char inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  );
};
