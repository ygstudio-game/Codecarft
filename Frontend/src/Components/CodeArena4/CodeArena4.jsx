import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Twitter, Linkedin, Mail, 
  ChevronDown, Search, TrendingUp, Bug, 
  Target, Zap, Code2, Send, Code, Upload, 
  Smartphone, CheckCircle, Copy, User, 
  ExternalLink
} from 'lucide-react';
 import { MagneticButton } from '../CodeArena4/MagneticButton';
import { SpotlightCard } from '../CodeArena4/SpotlightCard';
import { DecryptedText } from '../CodeArena4/DecryptedText';
import {LoadingScreen} from '../CodeArena4/LoadingScreen';
import {MatrixRain} from '../CodeArena4/MatrixRain';
import { RegistrationForm } from '../CodeArena4/Form';
import {ArenaFlow} from '../CodeArena4/EventFlow';
import {HeroSection} from '../CodeArena4/HeroSection';
import {FeatureGrid} from '../CodeArena4/FeatureGrid';
import {Footer} from '../CodeArena4/Footer';
import {AnimatedGrid} from '../CodeArena4/AnimatedGrid';
import PrizePodium from './PrizeSection';
const GlobalStyles = () => (
  <style>{`
    :root {
      --logic-blue: #007aff;
      --optimization-green: #00ff41;
      --complexity-red: #ff3b30;
      --void-black: #050505;
    }
    
    body {
      background-color: var(--void-black);
      color: #e5e7eb;
      font-family: 'Inter', sans-serif;
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .glass-noise {
      position: relative;
    }
    
    .glass-noise::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
      opacity: 0.4;
      pointer-events: none;
      z-index: -1;
    }
  `}</style>
);


export default function CodeArena4() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(loading);
      
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <GlobalStyles />
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-[--void-black] text-white relative overflow-x-hidden">
          <AnimatedGrid />

             <HeroSection />
          {/* <Navbar /> */}
          <div id="arena-flow"> {/* Anchor for scroll to top/timeline */}
             <ArenaFlow />
          </div>
          <FeatureGrid />
          <PrizePodium />
          {/* <RegistrationForm /> */}
          {/* --- GOOGLE FORM REGISTRATION SECTION --- */}
          <section id="registration" className="py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card glass-noise p-8 md:p-12 rounded-2xl border border-gray-800"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to Enter the <span className="text-[--logic-blue]">Arena?</span>
                </h2>
                
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Secure your spot in CodeArena 4.0. Fill out the registration form to finalize your participation.
                </p>

                <div className="flex justify-center">
                  <MagneticButton 
                    className="group px-8 py-4 bg-gradient-to-r from-[--logic-blue] to-blue-700 text-white rounded-lg font-bold text-lg flex items-center gap-3 shadow-[0_0_30px_rgba(0,122,255,0.4)] hover:shadow-[0_0_50px_rgba(0,122,255,0.6)] transition-all"
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfeslmsEYSNVSf_KNggPUvllXK5MyDqGZpAgMvj9dqH7XWmyA/viewform", '_blank')}
                  >
                    <span>Register via Google Form</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </MagneticButton>
                </div>

                <p className="mt-6 text-sm text-[--optimization-green] font-mono">
                  // Slots filling fast. Don't wait.
                </p>
              </motion.div>
            </div>
          </section>
          <Footer />
        </motion.div>
      )}
    </>
  );
}