import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import gsap from "gsap";
import MagneticButton from "./Systems/MagneticButton.jsx";
import { weeklyEventsData } from "../constants/weeklyEventsData.js";
import { eventsList } from "../constants/constants";

const EventCard = ({ event, index }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { scale: 1.05, zIndex: 10, duration: 0.4, ease: "back.out(1.5)" });
    // Blur siblings
    const siblings = document.querySelectorAll('.event-card');
    siblings.forEach(el => {
      if (el !== cardRef.current) {
        gsap.to(el, { filter: "blur(8px)", opacity: 0.5, scale: 0.95, duration: 0.4 });
      }
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { scale: 1, zIndex: 1, duration: 0.4 });
    // Restore siblings
    const siblings = document.querySelectorAll('.event-card');
    siblings.forEach(el => {
      gsap.to(el, { filter: "blur(0px)", opacity: 1, scale: 1, duration: 0.4 });
    });
  };

  return (
    <div 
      ref={cardRef} 
      className="event-card relative flex flex-col h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-none transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-mint-blast)]/5 to-[var(--color-rose-ember)]/5 rounded-3xl pointer-events-none" />
      
      <h3 className="text-3xl font-black mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        {event.title}
      </h3>
      <p className="text-gray-400 text-lg mb-8 flex-grow font-medium">
        {event.desc}
      </p>
      
      <div className="mt-auto z-10">
        <Link to={`/events/${event.id}`}>
          <MagneticButton 
            variant={event.type === "external" ? "primary" : "secondary"} 
            className={`w-full ${event.type !== "external" ? "text-white bg-white/5 border-white/20 hover:bg-white/10" : ""}`}
          >
            {event.id === "code-with-us" ? "See Weekly Updates" : "Know More"}
          </MagneticButton>
        </Link>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="min-h-screen bg-[var(--color-dark-ink)] text-white pt-24 pb-16 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-[20%] w-[800px] h-[800px] bg-[var(--color-mint-blast)]/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center">
        
        {/* Floating 3D Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-6xl text-[var(--color-mint-blast)] opacity-20 font-black drop-shadow-[0_0_20px_var(--color-mint-blast)]"
        >
          {"{"}
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 text-6xl text-[var(--color-rose-ember)] opacity-20 font-black drop-shadow-[0_0_20px_var(--color-rose-ember)]"
        >
          {"}"}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 tracking-tighter"
        >
          Where Coders Become <span className="text-[var(--color-mint-blast)] drop-shadow-[0_0_15px_rgba(120,255,207,0.4)]">Champions</span>
        </motion.h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-medium">
          Compete, collaborate, and push the boundaries of what you can build. 
          Discover our upcoming global hackathons and local bootcamps.
        </p>

        <MagneticButton variant="primary" className="!px-10 !py-4 !text-lg !rounded-full">
          View Schedule
        </MagneticButton>
      </section>

      {/* Events List Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10" onMouseLeave={() => {
        gsap.to('.event-card', { filter: "blur(0px)", opacity: 1, scale: 1, duration: 0.4 });
      }}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6">
            Flagship Events
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[var(--color-mint-blast)] to-transparent mx-auto shadow-[0_0_15px_var(--color-mint-blast)]" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {eventsList.map((event, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "back.out(1.2)" }}
              key={event.id}
              className="h-full"
            >
              <EventCard event={event} index={index} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Code With Us Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <h2 className="text-3xl font-black mb-10 text-[var(--color-emerald-neo)] track-wide">
          Recent Bootcamps Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {weeklyEventsData.slice(0, 4).map((week, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={week.id}
            >
              <div className="h-full bg-white/[0.02] backdrop-blur-lg border border-white/5 rounded-2xl p-4 transition-transform duration-500 hover:-translate-y-2 hover:border-[var(--color-emerald-neo)]/50 group cursor-none">
                <div className="overflow-hidden rounded-xl mb-4 relative">
                  <div className="absolute inset-0 bg-[var(--color-emerald-neo)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img src={week.image} alt={week.weekTitle} className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">{week.weekTitle}</h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-medium">{week.description}</p>
                <div className="text-[var(--color-emerald-neo)] font-bold text-xs uppercase tracking-wider">
                  Winners: <span className="text-white">{week.winnerList[0]}</span> & more
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Events;
