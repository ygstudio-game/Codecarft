import React from "react";
import { Link } from "react-router-dom";
import MagneticButton from "./Systems/MagneticButton.jsx";

const CollegeRivals = () => {
  const gamesList = [
    { name: "BGMI", platform: "MOBILE", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop" },
    { name: "VALORANT", platform: "PC", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" },
    { name: "FC25", platform: "CONSOLE", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop" }
  ];

  const galleryPlaceholders = [
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
  ];

  const sponsorsPlaceholders = [
    "Sponsor 1",
    "Sponsor 2",
    "Sponsor 3",
    "Sponsor 4"
  ];

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
          COLLEGE RIVALS X PCCOER
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
                (Having covered 8500+ kilometers in cities such as Delhi, Hyderabad, and Bengaluru, the mobile gaming truck by ‘College Rivals’ has now arrived in Pune. Here, it will oversee player selections and provide an immersive gaming experience.)
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-400 font-medium font-sans">
                More detailed information about the event format, schedule, and featured games will be announced soon. Stay tuned for exciting updates!
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">
                <a href="https://www.instagram.com/collegerivalsin/" target="_blank" rel="noopener noreferrer">
                  <MagneticButton variant="primary" className="!px-8">
                    Instagram
                  </MagneticButton>
                </a>
                <a href="https://collegerivals.com/" target="_blank" rel="noopener noreferrer">
                  <MagneticButton variant="secondary" className="!px-8">
                    Know More
                  </MagneticButton>
                </a>
              </div>
            </div>
          </section>

          {/* Featured Games */}
          <section>
            <h2 className="text-3xl font-black mb-6 flex items-center text-white tracking-tight">
              <span className="w-2 h-8 bg-[var(--color-mint-blast)] mr-4 rounded-full shadow-[0_0_10px_var(--color-mint-blast)]"></span>
              Featured Games
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {gamesList.map((game, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5 group aspect-[3/4] bg-[var(--color-dark-ink)] transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                  <img src={game.image} alt={game.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />

                  {/* Platform Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-[var(--color-mint-blast)] text-[var(--color-dark-ink)] text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_var(--color-mint-blast)] tracking-wider">
                    {game.platform}
                  </div>

                  {/* Game Name */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-2xl font-black text-white tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {game.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery Carousel / Grid */}
          <section>
            <h2 className="text-3xl font-black mb-6 flex items-center text-white tracking-tight">
              <span className="w-2 h-8 bg-[var(--color-rose-ember)] mr-4 rounded-full shadow-[0_0_10px_var(--color-rose-ember)]"></span>
              Gallery
            </h2>
            <div className="grid grid-cols-2 gap-4 perspective-1000">
              {galleryPlaceholders.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl shadow-[var(--shadow-neumorphic)] hover:-rotate-y-12 hover:-rotate-x-12 hover:scale-105 transition-all duration-500 cursor-none border border-white/5 bg-[var(--color-dark-ink)] transform-gpu group relative">
                  <div className="absolute inset-0 bg-[var(--color-mint-blast)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img src={img} alt={`Gallery Placeholder ${idx + 1}`} className="w-full h-48 md:h-64 object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Instagram & Sponsors */}
        <div className="space-y-12">

          {/* Instagram Reel */}
          <section>
            <h2 className="text-3xl font-black mb-6 flex items-center text-white tracking-tight">
              <span className="w-2 h-8 bg-gradient-to-t from-orange-500 via-pink-500 to-purple-500 mr-4 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>
              Watch Now
            </h2>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden flex justify-center bg-black/50">
              <iframe
                className="w-full aspect-[9/16] rounded-xl max-h-[500px]"
                src="https://www.instagram.com/reel/DT9t-73DdXm/embed"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-6 flex items-center text-white tracking-tight">
              <span className="w-2 h-8 bg-[var(--color-emerald-neo)] mr-4 rounded-full shadow-[0_0_10px_var(--color-emerald-neo)]"></span>
              Our Sponsors
            </h2>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-4">
              {sponsorsPlaceholders.map((sponsor, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center p-6 rounded-2xl transition-all duration-500 bg-white/5 border border-white/5 hover:bg-white/10 hover:translate-x-2"
                >
                  <span className="font-bold text-xl tracking-wide text-gray-400">
                    {sponsor}
                  </span>
                </div>
              ))}
              <div className="mt-4 p-4 text-center border border-dashed border-gray-600 rounded-xl">
                <p className="text-sm text-gray-500">More sponsors to be revealed later!</p>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default CollegeRivals;

