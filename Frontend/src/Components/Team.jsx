import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { motion } from "motion/react";
import MagneticButton from "./Systems/MagneticButton.jsx";
import { teamMembers } from "../constants/constants";

const DeepProfileCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;

    // Card Tilt with deeper perspective
    gsap.to(cardRef.current, { rotateY: x * 1.2, rotateX: -y * 1.2, ease: "power2.out", duration: 0.5 });
    // Image Parallax (Pop out)
    gsap.to(imageRef.current, { x: x * 2, y: y * 2, scale: 1.05, ease: "power2.out", duration: 0.5 });
    // Text Parallax (Pop out further)
    gsap.to(textRef.current, { x: x * 3, y: y * 3, z: 80, ease: "power2.out", duration: 0.5 });
    // Glow follows mouse intensely
    gsap.to(glowRef.current, { x: e.clientX - left - 100, y: e.clientY - top - 100, opacity: 0.8, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || window.innerWidth < 768) return;
    gsap.to([cardRef.current, textRef.current], { 
      rotateY: 0, rotateX: 0, x: 0, y: 0, z: 0, ease: "elastic.out(1, 0.5)", duration: 1.2 
    });
    gsap.to(imageRef.current, { x: 0, y: 0, scale: 1, ease: "elastic.out(1, 0.5)", duration: 1.2 });
    gsap.to(glowRef.current, { opacity: 0, duration: 0.5 });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5), ease: "easeOut" }}
      className="h-full px-2 py-4 md:px-4 md:py-8 perspective-1000"
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[350px] md:h-[450px] rounded-[2.5rem] bg-gradient-to-b from-[var(--color-dark-ink)] to-[#061114] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden cursor-none group hover:border-[var(--color-mint-blast)]/30 transition-colors duration-500"
        style={{ transformStyle: window.innerWidth >= 768 ? "preserve-3d" : "flat" }}
      >
        {/* Dynamic Glow */}
        <div ref={glowRef} className="absolute w-[200px] h-[200px] bg-[var(--color-mint-blast)]/40 rounded-full blur-[80px] opacity-0 pointer-events-none z-0 hidden md:block mix-blend-screen" />
        
        {/* Background Depth lines */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 mix-blend-overlay z-0" />

        <div className="relative w-full h-full flex flex-col items-center justify-end pb-6 md:pb-8 z-10" style={{ transformStyle: window.innerWidth >= 768 ? "preserve-3d" : "flat" }}>
          
          {/* Layer 1: Floating Image */}
          <div ref={imageRef} className="absolute top-6 w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.6)] border-2 border-white/10 group-hover:border-[var(--color-mint-blast)] transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-ink)] via-transparent to-transparent opacity-60 z-10" />
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover scale-110 md:group-hover:scale-100 transition-transform duration-700"
              onError={(e) => { e.target.src = "https://via.placeholder.com/200"; }}
            />
          </div>

          {/* Layer 2: Text Panel */}
          <div ref={textRef} className="text-center bg-white/[0.02] backdrop-blur-xl w-[90%] p-4 md:p-6 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform-gpu">
            <h3 className="text-lg md:text-2xl font-black text-white mb-1 tracking-tight md:group-hover:text-[var(--color-crystal-white)] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              {member.name}
            </h3>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
              {member.team}
            </p>
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-[var(--color-mint-blast)] to-transparent mx-auto mb-2 md:mb-3" />
            <p className="text-[var(--color-mint-blast)] font-bold text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase">
              {member.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      slidesToScroll: 1,
      dragFree: true
    },
    // [Autoplay({ delay: 800, stopOnInteraction: true })]
  );
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <section id="team" className="py-20 md:py-32 bg-[var(--color-graphite-blue)] text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-emerald-neo)]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Our <span className="text-[var(--color-mint-blast)] drop-shadow-[0_0_15px_rgba(120,255,207,0.4)]">Core Team</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-[var(--color-mint-blast)] to-transparent mx-auto shadow-[0_0_15px_var(--color-mint-blast)]" />
          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            The driving force behind the Code Club, orchestrating the complexity into reality.
          </p>
        </motion.div>

        {/* Unified Embla Carousel Viewport */}
        <div className="relative group/carousel w-full">
          <div className="overflow-hidden p-4 -mx-4 md:mx-0" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0">
                  <DeepProfileCard member={member} index={idx} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls - Visible on hover on larger screens */}
          <div className="flex justify-between absolute top-1/2 -left-2 -right-2 md:-left-6 md:-right-6 -translate-y-1/2 md:opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            <MagneticButton 
              variant="outline" 
              className="!p-3 !bg-[var(--color-dark-ink)] !border-white/10 !rounded-full pointer-events-auto shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-md hover:!bg-white/10 opacity-100"
              onClick={scrollPrev}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </MagneticButton>
            <MagneticButton 
              variant="outline" 
              className="!p-3 !bg-[var(--color-dark-ink)] !border-white/10 !rounded-full pointer-events-auto shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-md hover:!bg-white/10 opacity-100"
              onClick={scrollNext}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </MagneticButton>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Team;