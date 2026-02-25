import React, { useRef } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import { conductRules } from "../constants/constants";

const ConductCard = ({ item, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    gsap.to(cardRef.current, { rotateY: x, rotateX: -y, ease: "power2.out", duration: 0.5 });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || window.innerWidth < 768) return;
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, ease: "elastic.out(1, 0.5)", duration: 1.2 });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="perspective-1000 h-full"
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-[var(--color-mint-blast)]/50 transition-colors duration-500"
        style={{ transformStyle: window.innerWidth >= 768 ? "preserve-3d" : "flat" }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none -mr-16 -mt-16 group-hover:bg-[var(--color-mint-blast)]/10 transition-colors duration-500" />
        
        <div className="relative z-10 flex flex-col h-full" style={{ transform: window.innerWidth >= 768 ? "translateZ(30px)" : "none" }}>
          <div className="text-4xl md:text-5xl mb-4 md:mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 transform-origin-left">
            {item.icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[var(--color-mint-blast)] transition-colors">
            {index + 1}. {item.title}
          </h3>
          <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base flex-grow">
            {item.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

function CodeOfConduct() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-dark-ink)] text-white relative z-0 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[var(--color-rose-ember)]/5 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24 px-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            System <span className="text-[var(--color-mint-blast)] drop-shadow-[0_0_15px_rgba(120,255,207,0.4)]">Protocols</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-[var(--color-mint-blast)] to-transparent mx-auto shadow-[0_0_15px_var(--color-mint-blast)]" />
          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            The fundamental rules governing our ecosystem. Adherence is mandatory for an optimal environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {conductRules.map((item, idx) => (
            <ConductCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodeOfConduct;
