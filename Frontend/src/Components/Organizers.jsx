import React, { useRef } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import { facultyData } from "../constants/constants";

const FacultyCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;

    gsap.to(cardRef.current, { rotateY: x, rotateX: -y, ease: "power2.out", duration: 0.5 });
    gsap.to(imageRef.current, { x: x * 1.5, y: y * 1.5, ease: "power2.out", duration: 0.5 });
    gsap.to(textRef.current, { x: x * 2, y: y * 2, z: 40, ease: "power2.out", duration: 0.5 });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || window.innerWidth < 768) return;
    gsap.to([cardRef.current, imageRef.current, textRef.current], { 
      rotateY: 0, rotateX: 0, x: 0, y: 0, z: 0, ease: "elastic.out(1, 0.5)", duration: 1.2 
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="perspective-1000 h-[380px] md:h-[480px]"
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full rounded-[2.5rem] bg-[var(--color-dark-ink)] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden cursor-none group flex flex-col items-center justify-end pb-6 md:pb-8"
        style={{ transformStyle: window.innerWidth >= 768 ? "preserve-3d" : "flat" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-mint-blast)]/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-0" />

        {/* Circular image floating */}
        <div ref={imageRef} className="absolute top-6 md:top-10 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-4 border-[var(--color-dark-ink)] group-hover:border-[var(--color-mint-blast)] transition-colors duration-500 z-10 bg-[var(--color-dark-ink)]">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover mix-blend-luminosity md:group-hover:mix-blend-normal transition-all duration-700 md:group-hover:scale-110"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop"; }}
          />
        </div>

        {/* Text Layer */}
        <div ref={textRef} className="relative z-20 text-center w-[90%] md:w-[85%] bg-white/[0.03] backdrop-blur-md p-4 md:p-6 rounded-[2rem] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform-gpu">
          <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tight group-hover:text-[var(--color-emerald-neo)] transition-colors">
            {member.name}
          </h3>
          <div className="h-px w-10 md:w-16 bg-[var(--color-mint-blast)] mx-auto mb-2 md:mb-3" />
          <p className="text-[var(--color-mint-blast)] font-bold text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

function Organizers() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-dark-ink)] text-white relative z-0 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[var(--color-emerald-neo)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24 px-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Our Organizers
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto" />
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            The visionary leaders empowering our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0">
          {facultyData.map((faculty, idx) => (
            <FacultyCard key={idx} index={idx} member={faculty} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizers;
