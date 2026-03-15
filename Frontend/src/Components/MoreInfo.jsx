import React, { useRef } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import MagneticButton from "./Systems/MagneticButton.jsx";

function MoreInfo() {
  const imageRef = useRef(null);

  const redirectToContact = () => {
    const contactSection = document.getElementById("contact_us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current || window.innerWidth < 1024) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    gsap.to(imageRef.current, {
      rotateY: x,
      rotateX: -y,
      ease: "power2.out",
      duration: 0.5,
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current || window.innerWidth < 1024) return;
    gsap.to(imageRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: "elastic.out(1, 0.5)",
      duration: 1.2
    });
  };

  return (
    <section id="about_club" className="py-24 bg-[var(--color-dark-ink)] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[var(--color-mint-blast)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-emerald-neo)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-24">
          
          {/* Left Column: 3D Image Presentation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full xl:w-5/12 flex justify-center order-2 xl:order-1"
          >
            <div 
              className="relative w-full max-w-md aspect-square md:aspect-auto md:h-[500px] perspective-1000 group cursor-none"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glow Behind Image */}
              <div className="absolute inset-4 bg-[var(--color-mint-blast)]/20 rounded-[3rem] blur-2xl group-hover:bg-[var(--color-mint-blast)]/40 transition-all duration-700" />
              
              {/* Image Container */}
              <div 
                ref={imageRef}
                className="relative w-full h-full rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                {/* Tech Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--color-mint-blast)]/50 rounded-tl-[3rem] -translate-x-1 -translate-y-1" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--color-emerald-neo)]/50 rounded-br-[3rem] translate-x-1 translate-y-1" />
                
                <img
                  alt="About CodeCraft"
                  className="w-full h-full object-cover rounded-[2.5rem] mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                  src="/images/about.gif"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"; }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full xl:w-7/12 flex flex-col items-center xl:items-start text-center xl:text-left order-1 xl:order-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-crystal-white)]/70">
              What is <span className="text-[var(--color-mint-blast)] drop-shadow-[0_0_15px_rgba(120,255,207,0.3)]">CodeCraft?</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-mint-blast)] to-transparent mb-8 xl:mx-0 shadow-[0_0_10px_var(--color-mint-blast)]" />
            
            <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] mb-10 w-full relative group">
                {/* Subtle border trace on hover */}
                <div className="absolute inset-0 rounded-[2rem] border border-[var(--color-mint-blast)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium tracking-wide">
                    CodeCraft, designed for engineering students, tailors its activities to newcomers 
                    and those seeking to enhance coding skills. The club provides intensive workshops 
                    on various powerful programming languages, frameworks, and Data Structures, led 
                    by experienced mentors and faculty. 
                    <br /><br />
                    Additionally, regular <span className="text-[var(--color-mint-blast)] font-bold">competitive coding challenges</span> and <span className="text-[var(--color-emerald-neo)] font-bold">48-hour hackathons</span> offer 
                    unparalleled opportunities to build logic, stress-test your skills, and collaborate 
                    on real-world projects. CodeCraft is the ultimate arena to forge connections with 
                    elite peers and transform into an industry-ready developer.
                </p>
            </div>

            <div onClick={redirectToContact}>
              <MagneticButton variant="primary" className="!px-10 !py-4 text-lg">
                Join the Network
              </MagneticButton>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default MoreInfo;
