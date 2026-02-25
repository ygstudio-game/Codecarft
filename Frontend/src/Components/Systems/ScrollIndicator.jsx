import React from "react";
import { motion, useScroll } from "motion/react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-mint-blast)] origin-left z-[100] shadow-[0_0_15px_var(--color-mint-blast)] pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollIndicator;
