import React from "react";
import { useParams, Link } from "react-router-dom";
import MagneticButton from "./Systems/MagneticButton.jsx";

const EventPage = () => {
  const { eventId } = useParams();
  
  const eventDetails = {
    "college-rivals": {
      title: "COLLEGE RIVALS",
      description: "College Rivals is an inter-college championship designed to test the limits of algorithmic problem solving. Universities gather under the neon lights to battle for the ultimate coding crown. With a focus on speed, logic, and teamwork, this is the ultimate proving ground.",
      winners: [
        { rank: 1, name: "Varad Joshi" },
        { rank: 2, name: "Prathamesh Patil" },
        { rank: 3, name: "Sneha Sharma" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
      ]
    },
    "code-with-us": {
      title: "CODE WITH US",
      description: "Code With Us is our weekly intensive bootcamp aimed at junior developers. We cover Data Structures, popular web frameworks, and interview prep. It is an immersive hands-on session led by core members to bring everyone up to speed with industry standards.",
      winners: [
        { rank: 1, name: "Aditya Verma" },
        { rank: 2, name: "Riya Kapoor" },
        { rank: 3, name: "Kunal Singh" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop"
      ]
    }
  };

  const eventData = eventDetails[eventId] || {
    title: eventId ? eventId.replace(/-/g, " ").toUpperCase() : "EVENT TITLE",
    description: "This is a premium technical event hosted by CodeCraft PCCOER.",
    winners: [
      { rank: 1, name: "TBD" },
      { rank: 2, name: "TBD" },
      { rank: 3, name: "TBD" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    ]
  };

  return (
    <div className="min-h-screen bg-[var(--color-dark-ink)] text-white pt-24 pb-16 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-mint-blast)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-rose-ember)]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Event Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <Link to="/events" className="inline-block mb-8 text-gray-400 hover:text-[var(--color-mint-blast)] transition-colors uppercase tracking-widest text-sm font-bold">
          &larr; Back to Events
        </Link>
        <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-[0_0_20px_var(--color-mint-blast)] text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-mint-blast)] tracking-tighter">
          {eventData.title}
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[var(--color-mint-blast)] to-transparent mx-auto rounded-full mb-8 shadow-[0_0_15px_var(--color-mint-blast)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        
        {/* Left Column: About & Gallery */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* About Event Soft Card */}
          <section>
            <h2 className="text-3xl font-black mb-6 flex items-center text-white tracking-tight">
              <span className="w-2 h-8 bg-[var(--color-mint-blast)] mr-4 rounded-full shadow-[0_0_10px_var(--color-mint-blast)]"></span>
              About the Event
            </h2>
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <p className="text-lg leading-relaxed text-gray-400 font-medium font-sans">
                {eventData.description}
              </p>
              
              <div className="mt-10 flex gap-4 flex-wrap">
                {eventData.title.includes("CODEARENA") ? (
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <MagneticButton variant="secondary" className="!px-8">
                      Visit Official Site
                    </MagneticButton>
                  </a>
                ) : (
                  <MagneticButton variant="primary" className="!px-8">
                    Register Now
                  </MagneticButton>
                )}
              </div>
            </div>
          </section>

          {/* Gallery Carousel / Grid */}
          <section>
            <h2 className="text-3xl font-black mb-6 flex items-center text-white tracking-tight">
              <span className="w-2 h-8 bg-[var(--color-rose-ember)] mr-4 rounded-full shadow-[0_0_10px_var(--color-rose-ember)]"></span>
              Gallery
            </h2>
            <div className="grid grid-cols-2 gap-4 perspective-1000">
              {eventData.gallery.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl shadow-[var(--shadow-neumorphic)] hover:-rotate-y-12 hover:-rotate-x-12 hover:scale-105 transition-all duration-500 cursor-none border border-white/5 bg-[var(--color-dark-ink)] transform-gpu group relative">
                  <div className="absolute inset-0 bg-[var(--color-mint-blast)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-48 md:h-64 object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Winners */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-black mb-6 flex items-center text-white tracking-tight">
              <span className="w-2 h-8 bg-[var(--color-emerald-neo)] mr-4 rounded-full shadow-[0_0_10px_var(--color-emerald-neo)]"></span>
              Top Performers
            </h2>
            
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-4">
              {eventData.winners.map((winner, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center justify-between p-5 rounded-2xl transition-all duration-500 cursor-none hover:translate-x-2 ${
                    winner.rank === 1 
                      ? "bg-[var(--color-mint-blast)]/10 border border-[var(--color-mint-blast)]/50 drop-shadow-[0_0_15px_rgba(120,255,207,0.2)] scale-105" 
                      : "bg-white/5 border border-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-3xl font-black ${
                      winner.rank === 1 ? "text-[var(--color-mint-blast)] drop-shadow-[0_0_10px_var(--color-mint-blast)]" : "text-gray-600"
                    }`}>
                      #{winner.rank}
                    </span>
                    <span className={`font-bold text-lg tracking-wide ${winner.rank === 1 ? "text-white" : "text-gray-400"}`}>
                      {winner.name}
                    </span>
                  </div>
                  {winner.rank === 1 && (
                    <span className="text-2xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">🏆</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default EventPage;
