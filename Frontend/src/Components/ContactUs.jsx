import React, { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import MagneticButton from "./Systems/MagneticButton.jsx";

function ContactUs() {
  const formRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!formRef.current || window.innerWidth < 768) return;
    const { left, top, width, height } = formRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 30;
    const y = (e.clientY - top - height / 2) / 30;

    gsap.to(formRef.current, { rotateY: x, rotateX: -y, ease: "power2.out", duration: 0.5 });
  };

  const handleMouseLeave = () => {
    if (!formRef.current || window.innerWidth < 768) return;
    gsap.to(formRef.current, { rotateY: 0, rotateX: 0, ease: "elastic.out(1, 0.5)", duration: 1.2 });
  };

  const inputStyles = "w-full bg-[var(--color-dark-ink)]/80 text-white px-4 md:px-5 py-3 md:py-4 rounded-xl border border-white/10 shadow-[inner_0_0_10px_rgba(0,0,0,0.5)] focus:outline-none focus:border-[var(--color-mint-blast)] focus:shadow-[0_0_15px_rgba(120,255,207,0.3)] transition-all duration-300 placeholder-gray-500 font-medium backdrop-blur-md";
  const labelStyles = "block text-xs md:text-sm font-bold text-gray-300 mb-2 ml-1 tracking-wider uppercase font-mono";

  return (
    <section id="contact_us" className="py-20 md:py-32 bg-[var(--color-dark-ink)] text-white relative overflow-hidden flex justify-center items-center perspective-1000">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-20%] md:left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[var(--color-mint-blast)]/5 rounded-full blur-[150px] md:blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] md:right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[var(--color-rose-ember)]/5 rounded-full blur-[150px] md:blur-[200px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-20 text-white">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-emerald-neo)] drop-shadow-[0_0_20px_var(--color-emerald-neo)]">
            Ping Us
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-[var(--color-emerald-neo)] to-transparent mx-auto shadow-[0_0_15px_var(--color-emerald-neo)]" />
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto px-4">
            Have a question? Want to sponsor an event? Enter the terminal and reach out to us below.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "back.out(1.2)" }}
          className="max-w-3xl mx-auto transform-gpu"
        >
          <div 
            ref={formRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group"
            style={{ transformStyle: window.innerWidth >= 768 ? "preserve-3d" : "flat" }}
          >
            {/* Terminal Header */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--color-dark-ink)]/80 border-b border-white/10 flex items-center px-6 gap-2" style={{ transform: window.innerWidth >= 768 ? "translateZ(10px)" : "none" }}>
              <div className="w-3 h-3 rounded-full bg-red-500 pb-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 pb-0 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 pb-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              <span className="ml-4 font-mono text-[10px] md:text-xs text-gray-400 tracking-wider hidden sm:block">~/contact/send_message.sh</span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-mint-blast)]/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mt-10" />

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 md:space-y-8 relative z-10 mt-12 md:mt-8" style={{ transform: window.innerWidth >= 768 ? "translateZ(30px)" : "none" }}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="relative group/input">
                  <label htmlFor="first-name" className={labelStyles}>{'>'} String first_name;</label>
                  <input
                    id="first-name"
                    type="text"
                    required
                    className={inputStyles}
                    placeholder="init()"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-mint-blast)] scale-x-0 group-focus-within/input:scale-x-100 transition-transform origin-left shadow-[0_0_10px_var(--color-mint-blast)]" />
                </div>
                <div className="relative group/input">
                  <label htmlFor="last-name" className={labelStyles}>{'>'} String last_name;</label>
                  <input
                    id="last-name"
                    type="text"
                    required
                    className={inputStyles}
                    placeholder="init()"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-mint-blast)] scale-x-0 group-focus-within/input:scale-x-100 transition-transform origin-left shadow-[0_0_10px_var(--color-mint-blast)]" />
                </div>
              </div>

              <div className="relative group/input">
                <label htmlFor="email" className={labelStyles}>{'>'} String email_address;</label>
                <input
                  id="email"
                  type="email"
                  required
                  className={inputStyles}
                  placeholder="connection@domain.com"
                />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-mint-blast)] scale-x-0 group-focus-within/input:scale-x-100 transition-transform origin-left shadow-[0_0_10px_var(--color-mint-blast)]" />
              </div>

              <div className="relative group/input">
                <label htmlFor="message" className={labelStyles}>{'>'} String payload;</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className={`${inputStyles} resize-none`}
                  placeholder="Write your payload here..."
                ></textarea>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-mint-blast)] scale-x-0 group-focus-within/input:scale-x-100 transition-transform origin-left shadow-[0_0_10px_var(--color-mint-blast)]" />
              </div>

              <div className="pt-6 md:pt-8 text-center" style={{ transform: window.innerWidth >= 768 ? "translateZ(30px)" : "none" }}>
                <MagneticButton type="submit" variant="primary" className="w-full sm:w-auto !px-12 md:!px-16 !py-4 md:!py-5 font-black text-base md:text-lg">
                  Execute Transmission
                </MagneticButton>
              </div>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactUs;
