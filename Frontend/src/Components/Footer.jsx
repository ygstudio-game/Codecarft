import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[var(--color-graphite-blue)] text-white pt-24 pb-10 relative overflow-hidden border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] z-10">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[var(--color-mint-blast)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-rose-ember)]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-6xl lg:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--color-graphite-blue)] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mix-blend-screen" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
              CodeCraft
            </h2>
            <p className="text-gray-400 text-lg max-w-sm mx-auto md:mx-0 font-medium leading-relaxed">
              Empowering students at PCCOE&R to innovate, build, and conquer the tech world under the neon lights.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-2xl font-black mb-8 text-white tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Club', 'Events', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '_')}`} className="text-gray-400 hover:text-[var(--color-mint-blast)] transition-colors relative group font-bold inline-block overflow-hidden py-1 cursor-none">
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-mint-blast)] -translate-x-full transition-transform duration-300 group-hover:translate-x-0 shadow-[0_0_8px_var(--color-mint-blast)]" />
                  </a>
                </li>
              ))}
              <li>
                <a href="https://www.pccoer.com/about-pccoer.php" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--color-mint-blast)] transition-colors relative group font-bold inline-block overflow-hidden py-1 cursor-none">
                  About College
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-mint-blast)] -translate-x-full transition-transform duration-300 group-hover:translate-x-0 shadow-[0_0_8px_var(--color-mint-blast)]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 text-center md:text-left">
            <h4 className="text-2xl font-black mb-8 text-white tracking-widest uppercase">Reach Out</h4>
            <div className="space-y-6 text-gray-400 font-medium">
              <p className="flex items-start justify-center md:justify-start gap-4 hover:text-white transition-colors duration-300">
                <span className="text-[var(--color-mint-blast)] mt-1 drop-shadow-[0_0_8px_var(--color-mint-blast)]">📍</span>
                <span>Plot No. B, Sector no. 110, Gate no.1; Laxminagar, Ravet, Haveli, Pune - 412101</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-4 hover:text-white transition-colors duration-300">
                <span className="text-[var(--color-mint-blast)] drop-shadow-[0_0_8px_var(--color-mint-blast)]">📞</span>
                <span>8237238080</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-4 hover:text-white transition-colors duration-300">
                <span className="text-[var(--color-mint-blast)] drop-shadow-[0_0_8px_var(--color-mint-blast)]">✉️</span>
                <span>pccoer.ravet@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-[var(--color-mint-blast)] rounded-full shadow-[0_0_15px_var(--color-mint-blast)]" />
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-500 font-bold tracking-wide text-sm uppercase">
            © {new Date().getFullYear()} CodeCraft x PCCOER. Built with ❤️
          </p>
          
          <div className="flex items-center gap-6">
            {[
              { icon: "instagram", link: "https://www.instagram.com/codecraft.pccoer_?igsh=MTUwZm9mZWNkeHBvZw==" },
              { icon: "whatsapp", link: "https://wa.me/918237238080" },
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-gray-400 hover:text-[var(--color-mint-blast)] hover:-translate-y-2 hover:border-[var(--color-mint-blast)]/30 hover:shadow-[0_15px_30px_rgba(120,255,207,0.2)] transition-all duration-300 cursor-none"
              >
                <i className={`fab fa-${social.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
