import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-magnetic")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Hide cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Terminal Caret / Core */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-5 bg-[var(--color-mint-blast)] pointer-events-none z-[9999] mix-blend-exclusion shadow-[0_0_8px_var(--color-mint-blast)]"
        animate={{
          x: position.x - 2,
          y: position.y - 10,
          scaleY: clicked ? 0.6 : hovered ? 1.2 : 1,
          opacity: [1, 0, 1], // Blinking effect
        }}
        transition={{ 
          x: { type: "tween", ease: "backOut", duration: 0.1 },
          y: { type: "tween", ease: "backOut", duration: 0.1 },
          opacity: { repeat: Infinity, duration: 0.8, ease: "linear" }
        }}
      />
      
      {/* Curly Brackets Context */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9998] mix-blend-screen flex items-center justify-between font-mono text-xl font-bold text-[var(--color-mint-blast)]"
        animate={{
          x: position.x - 32,
          y: position.y - 32,
          scale: clicked ? 0.8 : hovered ? 1.4 : 1,
          opacity: hovered ? 1 : 0.2,
          gap: hovered ? "20px" : "12px"
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <span className="drop-shadow-[0_0_5px_var(--color-mint-blast)]">{"{"}</span>
        <span className="drop-shadow-[0_0_5px_var(--color-mint-blast)]">{"}"}</span>
      </motion.div>

      {/* Crosshair selection lines (Subtle) */}
      <motion.div 
        className="fixed top-0 left-0 w-[1px] h-full bg-[var(--color-mint-blast)]/10 pointer-events-none z-[9997]"
        style={{ left: position.x }}
        animate={{ opacity: hovered ? 0.3 : 0 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-full h-[1px] bg-[var(--color-mint-blast)]/10 pointer-events-none z-[9997]"
        style={{ top: position.y }}
        animate={{ opacity: hovered ? 0.3 : 0 }}
      />
    </>
  );
};

export default CustomCursor;
