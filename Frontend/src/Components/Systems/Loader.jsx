import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const loadingTexts = [
  "INITIALIZING_WORKSPACE...",
  "COMPILING_ALGORITHMS...",
  "RUNNING_TEST_CASES...",
  "EVALUATING_COMPLEXITY...",
  "ACCEPTED"
];

const Loader = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Cycle through texts
    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < loadingTexts.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 600); // 600ms per text

    // Complete loader after text finishes
    const timer = setTimeout(() => {
      onComplete();
    }, (loadingTexts.length * 600) + 400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--color-dark-ink)]"
      >
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="relative flex flex-col items-center justify-center font-mono pb-10">
            {/* Terminal Window Decor */}
            <div className="mb-8 p-1 border border-[var(--color-mint-blast)]/30 rounded-[2rem] bg-white/[0.02] shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <div className="px-10 py-12 flex flex-col items-center justify-center gap-4">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-t-[3px] border-r-[3px] border-[var(--color-mint-blast)] rounded-full shadow-[0_0_20px_var(--color-mint-blast)] drop-shadow-[0_0_10px_var(--color-mint-blast)] mb-4"
                    />
                    
                    <div className="h-6 overflow-hidden mt-4 relative w-72 text-center text-[var(--color-mint-blast)] font-black text-sm tracking-[0.15em] drop-shadow-[0_0_8px_var(--color-mint-blast)]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={textIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute inset-0 block w-full text-center"
                            >
                                {">"} {loadingTexts[textIndex]}
                                <motion.span 
                                    animate={{ opacity: [1, 0, 1] }} 
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                    _
                                </motion.span>
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-64 h-[3px] mt-6 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-[var(--color-emerald-neo)] shadow-[0_0_10px_var(--color-emerald-neo)]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${((textIndex + 1) / loadingTexts.length) * 100}%` }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                    </div>
                </div>
                
            </div>
            
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--color-mint-blast)]/20 rounded-full blur-[60px] pointer-events-none -z-10"
            />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
