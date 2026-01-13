import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    'Initializing Arena...',
    'Loading Data Structures...',
    'Compiling Algorithms...',
    'Ready to Deploy',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress >= 25 && phase === 0) setPhase(1);
    if (progress >= 50 && phase === 1) setPhase(2);
    if (progress >= 75 && phase === 2) setPhase(3);
  }, [progress, phase]);

  return (
    <motion.div
      className="fixed inset-0 bg-[--void-black] z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full px-6">
        {/* Logo/Title */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[--logic-blue]">CODE</span>
            <span className="text-white">ARENA</span>
          </motion.h1>
          <motion.div
            className="text-2xl font-bold text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            4.0
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[--logic-blue] via-[--optimization-green] to-[--logic-blue]"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500 font-mono">
            <span>{progress}%</span>
            <span>Loading</span>
          </div>
        </div>

        {/* Phase Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            className="text-center text-gray-400 font-mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {phases[phase]}
          </motion.div>
        </AnimatePresence>

        {/* Binary Rain Effect */}
        <div className="mt-8 flex justify-center gap-1 opacity-30">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-[--logic-blue] rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}