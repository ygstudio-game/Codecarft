import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const MagneticButton = ({ children, className = "", onClick, type = "button", variant = "primary" }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Styles based on variant
  const baseStyle = "relative inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl overflow-hidden transition-all duration-300";
  const glowStyle = isHovered ? "shadow-[0_0_20px_var(--color-mint-blast)] border-[var(--color-mint-blast)]" : "shadow-[var(--shadow-glass)] border-white/10";
  
  const variants = {
    primary: `bg-[var(--color-emerald-neo)]/80 text-[var(--color-crystal-white)] border backdrop-blur-md ${glowStyle}`,
    secondary: `bg-[var(--color-dark-ink)]/60 text-[var(--color-mint-blast)] border backdrop-blur-md hover:bg-[var(--color-dark-ink)]/90 ${glowStyle}`,
    outline: `bg-transparent text-[var(--color-crystal-white)] border hover:bg-white/5 ${glowStyle}`,
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hover-magnetic group ${baseStyle} ${variants[variant]} ${className}`}
      animate={{
        x: position.x * 0.2,
        y: position.y * 0.2,
        rotateX: position.y * -0.1,
        rotateY: position.x * 0.1,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Background Ripple / Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[var(--color-mint-blast)]/0 via-[var(--color-mint-blast)]/20 to-[var(--color-mint-blast)]/0 translate-x-[-100%]"
        animate={{
          translateX: isHovered ? "100%" : "-100%",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Text shifts upward slightly on hover */}
      <motion.span
        className="relative z-10 block"
        animate={{ y: isHovered ? -2 : 0, scale: isHovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default MagneticButton;
