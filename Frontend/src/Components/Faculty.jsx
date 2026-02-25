import React, { useRef } from "react";
import gsap from "gsap";

const facultyData = [
  { name: "Dr. Archana Ajit Chaugule", role: "Chairperson", img: "/images/hod-comp-dept-pccoer-2.jpg" },
  { name: "Prof. Mahendra B. Salunke", role: "Faculty Sponsor", img: "/images/salunke-sir.jpg" },
  { name: "Prof. Sudarshan Shirale", role: "Faculty Sponsor", img: "/images/shirale-sir.jpg" },
];

const FacultyCard = ({ member }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;

    gsap.to(cardRef.current, { rotateY: x, rotateX: -y, ease: "power2.out", duration: 0.5 });
    gsap.to(imageRef.current, { x: x * 1.5, y: y * 1.5, ease: "power2.out", duration: 0.5 });
    gsap.to(textRef.current, { x: x * 2, y: y * 2, z: 40, ease: "power2.out", duration: 0.5 });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to([cardRef.current, imageRef.current, textRef.current], { 
      rotateY: 0, rotateX: 0, x: 0, y: 0, z: 0, ease: "elastic.out(1, 0.5)", duration: 1.2 
    });
  };

  return (
    <div className="perspective-1000 h-[480px]">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full rounded-[2.5rem] bg-[var(--color-dark-ink)] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden cursor-none group flex flex-col items-center justify-end pb-8"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-emerald-neo)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

        {/* Circular image floating */}
        <div ref={imageRef} className="absolute top-10 w-48 h-48 rounded-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-4 border-[var(--color-dark-ink)] group-hover:border-[var(--color-emerald-neo)] transition-colors duration-500 z-10 bg-[var(--color-dark-ink)]">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-110"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop"; }}
          />
        </div>

        {/* Text Layer */}
        <div ref={textRef} className="relative z-20 text-center w-[85%] bg-white/[0.03] backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform-gpu">
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-[var(--color-mint-blast)] transition-colors">
            {member.name}
          </h3>
          <div className="h-px w-16 bg-[var(--color-emerald-neo)] mx-auto mb-3" />
          <p className="text-[var(--color-emerald-neo)] font-bold text-sm tracking-[0.2em] uppercase">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
};

function Faculty() {
  return (
    <section className="py-32 bg-[var(--color-dark-ink)] text-white relative z-0 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute -top-[20%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-mint-blast)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mint-blast)] to-[var(--color-emerald-neo)]">
            Faculty Sponsors
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[var(--color-emerald-neo)] to-transparent mx-auto shadow-[0_0_15px_var(--color-emerald-neo)]" />
          <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            Guiding the CodeCraft vision with experience and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {facultyData.map((faculty, idx) => (
            <FacultyCard key={idx} member={faculty} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;
