import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endVal = parseInt(end, 10);
      const increment = endVal / (duration * 60); 
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= endVal) {
          setCount(endVal);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// 3D Tilt Card Effect
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return; // Disable on mobile for performance
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;

    gsap.to(cardRef.current, {
      rotateY: x,
      rotateX: -y,
      ease: "power1.out",
      transformPerspective: 1000,
      transformOrigin: "center"
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || window.innerWidth < 768) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 1
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-mint-blast)]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      <div className="relative z-10 w-full h-full p-6 md:p-8" style={{ transform: window.innerWidth >= 768 ? "translateZ(30px)" : "none" }}>
        {children}
      </div>
    </div>
  );
};

function About() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const objectives = [
    {
      title: "Algorithms & Logic",
      desc: "Fueling coding passion through rigorous algorithms and data structures.",
      icon: "⚡",
      color: "var(--color-mint-blast)"
    },
    {
      title: "Global Hackathons",
      desc: "Building real-world projects and competing in 48-hour innovation sprints.",
      icon: "🏆",
      color: "var(--color-emerald-neo)"
    },
    {
      title: "Tech Bootcamps",
      desc: "Immersive learning experiences in Web3, AI, and Full-Stack Development.",
      icon: "💻",
      color: "var(--color-rose-ember)"
    }
  ];

  useEffect(() => {
    gsap.to(".about-bg-orb", {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Staggered Cards Reveal
    if (cardsRef.current.length > 0) {
      gsap.fromTo(cardsRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="about_club" className="relative py-20 md:py-32 bg-[var(--color-dark-ink)] text-white overflow-hidden perspective-1000">
      
      {/* Moving Background Orbs */}
      <div className="about-bg-orb absolute top-0 left-[-20%] md:left-[-10%] w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] bg-[var(--color-emerald-neo)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="about-bg-orb absolute bottom-0 right-[-20%] md:right-[-10%] w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-[var(--color-rose-ember)]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            About the Club
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-[var(--color-mint-blast)] to-transparent mx-auto shadow-[0_0_15px_var(--color-mint-blast)]" />
          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            We are a community of driven developers and problem solvers, dedicated to mastering technology, building the future, and dominating global competitions.
          </p>
        </div>

        {/* What is CodeCraft Feature Panel */}
        <div className="mb-20 md:mb-32">
          <div className="relative rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[var(--color-emerald-neo)]/20 to-[var(--color-graphite-blue)] border border-white/5 p-8 md:p-16 overflow-hidden">
             <div className="absolute inset-0 bg-[url('/images/grid.svg')] mix-blend-overlay opacity-20 pointer-events-none" />
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--color-mint-blast)]/20 rounded-full blur-[80px] pointer-events-none" />
             
             <div className="relative z-10 md:w-2/3">
               <h3 className="text-3xl md:text-4xl font-black mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">What is CodeCraft?</h3>
               <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium mb-8">
                 CodeCraft is the premier technical club of PCCOE&R. We bridge the gap between academic learning and industry standards. Our core focus revolves around <span className="text-[var(--color-mint-blast)] font-bold">Competitive Programming</span>, where logical thinking meets speed, and hands-on <span className="text-[var(--color-rose-ember)] font-bold">Software Development</span>.
               </p>
               <div className="flex flex-wrap gap-4 font-mono text-sm">
                  <span className="px-4 py-2 bg-black/40 rounded-full border border-white/10 text-[var(--color-mint-blast)]">#Algorithms</span>
                  <span className="px-4 py-2 bg-black/40 rounded-full border border-white/10 text-[var(--color-emerald-neo)]">#DataStructures</span>
                  <span className="px-4 py-2 bg-black/40 rounded-full border border-white/10 text-[var(--color-rose-ember)]">#Hackathons</span>
               </div>
             </div>
          </div>
        </div>

        {/* 3D Objective Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
          {objectives.map((obj, idx) => (
            <div key={idx} ref={el => cardsRef.current[idx] = el} className="h-full transform-gpu">
              <TiltCard className="group hover:-translate-y-2 transition-transform duration-500">
                <div className="text-5xl md:text-6xl mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transform-gpu transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {obj.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-wide" style={{ color: obj.color }}>{obj.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                  {obj.desc}
                </p>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Animated Cyber Stats */}
        <div className="relative p-[2px] rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-white/5 via-white/20 to-white/5 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 bg-[var(--color-mint-blast)]/10 blur-2xl z-0" />
          <div className="relative z-10 flex flex-col md:flex-row bg-[var(--color-dark-ink)]/90 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 hover:bg-white/5 transition-colors duration-500">
              <div className="text-5xl md:text-6xl font-black text-[var(--color-mint-blast)] mb-3 drop-shadow-[0_0_20px_var(--color-mint-blast)]">
                <AnimatedCounter end="10000" suffix="+" />
              </div>
              <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-[0.2em] text-center">Participants</div>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 hover:bg-white/5 transition-colors duration-500">
              <div className="text-5xl md:text-6xl font-black text-[var(--color-emerald-neo)] mb-3 drop-shadow-[0_0_20px_var(--color-emerald-neo)]">
                <AnimatedCounter end="50" suffix="+" />
              </div>
              <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-[0.2em] text-center">Hackathons</div>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 hover:bg-white/5 transition-colors duration-500">
              <div className="text-5xl md:text-6xl font-black text-[var(--color-rose-ember)] mb-3 drop-shadow-[0_0_20px_var(--color-rose-ember)]">
                <AnimatedCounter end="200" suffix="+" />
              </div>
              <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-[0.2em] text-center">Global Winners</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
