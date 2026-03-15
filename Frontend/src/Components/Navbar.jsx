import React, { useState } from "react";
import { Link } from "react-router-dom";
import MagneticButton from "./Systems/MagneticButton.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about_club" },
    { name: "Team", link: "/#team" },
    { name: "Contact", link: "/#contact_us" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-dark-ink)]/60 backdrop-blur-2xl border-b border-white/5 shadow-[var(--shadow-neon)] text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group hover-magnetic cursor-none">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 shadow-[0_0_15px_rgba(120,255,207,0.2)] group-hover:border-[var(--color-mint-blast)] transition-colors duration-300">
               <img src="/images/logo-grand-final.png" alt="CodeCraft Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-crystal-white)] to-[var(--color-mint-blast)] drop-shadow-[0_0_8px_rgba(120,255,207,0.5)]">
              CodeCraft
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover-magnetic relative text-gray-400 hover:text-[var(--color-mint-blast)] transition-colors duration-300 overflow-hidden group cursor-none"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-mint-blast)] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--color-mint-blast)]"></span>
              </a>
            ))}
            
            {/* Prominent Events Link */}
            <Link to="/events" className="cursor-none">
              <MagneticButton variant="primary" className="!px-6 !py-2 !text-sm !rounded-full">
                Events
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-rose-ember)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-rose-ember)] shadow-[0_0_10px_var(--color-rose-ember)]"></span>
                </span>
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/events">
              <MagneticButton variant="primary" className="!px-4 !py-1.5 !text-xs !rounded-full">
                Events
              </MagneticButton>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-[var(--color-mint-blast)] transition-colors duration-300 focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[var(--color-dark-ink)]/95 backdrop-blur-2xl border-t border-white/5 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4 text-center text-lg font-bold tracking-widest uppercase">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block py-2 rounded-md text-gray-400 hover:text-[var(--color-mint-blast)] hover:bg-white/5 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
