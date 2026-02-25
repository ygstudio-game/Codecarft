import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxLayer = ({ children, speed = 1, className = "", zIndex = 0 }) => {
  const layerRef = useRef(null);

  useEffect(() => {
    const element = layerRef.current;
    if (!element) return;

    // A simple parallax effect using GSAP ScrollTrigger
    // Move the element negatively on the Y axis as we scroll down
    const yMovement = speed * 100; // Adjust multiplier for stronger effect
    
    gsap.to(element, {
      y: -yMovement,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [speed]);

  return (
    <div
      ref={layerRef}
      className={`absolute top-0 left-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex }}
    >
      {/* Enable pointer events on children if they need interaction */}
      <div className="relative w-full h-full pointer-events-auto">
        {children}
      </div>
    </div>
  );
};

export default ParallaxLayer;
