import { DecryptedText } from './DecryptedText';
import { MagneticButton } from './MagneticButton';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const scrollToTimeline = () => {
    document.getElementById('arena-flow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main Title */}
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DecryptedText 
            text="CODEARENA 4.0" 
            className="bg-gradient-to-r from-[--logic-blue] via-white to-[--logic-blue] bg-clip-text text-transparent"
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-3 md:mb-4 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Where <span className="text-[--logic-blue]">DSA</span> is tested as a{' '}
          <span className="text-[--optimization-green]">thinking skill</span>, not just a coding skill.
        </motion.p>

        {/* Additional Info */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 text-xs sm:text-sm md:text-base text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[--logic-blue] rounded-full animate-pulse"></div>
            <span>January 18, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[--optimization-green] rounded-full animate-pulse"></div>
            <span>Fully Virtual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[--complexity-red] rounded-full animate-pulse"></div>
            <span>Teams of 2-3</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <MagneticButton 
            className="group px-6 py-3 md:px-10 md:py-5 bg-[--logic-blue] hover:bg-[#0066DD] text-white rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(0,122,255,0.3)] hover:shadow-[0_0_50px_rgba(0,122,255,0.6)]"
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-2 md:gap-3 text-base md:text-lg font-semibold">
              Deploy Your Team
              <span className="text-xl md:text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToTimeline}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[--logic-blue] transition-colors cursor-pointer"
          aria-label="Scroll to timeline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 0.6, delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[--logic-blue] opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[--complexity-red] opacity-10 blur-[120px] rounded-full"></div>
    </section>
  );
}