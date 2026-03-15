import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Text } from "@react-three/drei";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import gsap from "gsap";
import MagneticButton from "./Systems/MagneticButton.jsx";

// 3D Floating CP Elements
const FloatingObject = ({ position, text, color, speed }) => {
  const mesh = useRef(null);
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t * speed) * 0.2;
    mesh.current.rotation.y = Math.cos(t * speed) * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <Text
        ref={mesh}
        position={position}
        fontSize={1}
        color={color}
        font="https://fonts.gstatic.com/s/firacode/v27/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_NprFVc.ttf"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor={color}
      >
        {text}
      </Text>
    </Float>
  );
};

// Moving Binary Stream
const BinaryStream = ({ position, speed }) => {
  const mesh = useRef(null);
  const textVal = Array(10).fill(0).map(() => Math.round(Math.random())).join('');
  
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] - (t * speed) % 10;
  });

  return (
    <Text
      ref={mesh}
      position={position}
      fontSize={0.5}
      color="var(--color-emerald-neo)"
      opacity={0.3}
      font="https://fonts.gstatic.com/s/firacode/v27/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sFVc.ttf"
      rotation={[0, 0, Math.PI / 2]}
    >
      {textVal}
    </Text>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
        
        {/* Floating CP Nodes */}
        <FloatingObject position={[-5, 3, -2]} text="{ }" color="var(--color-mint-blast)" speed={1.5} />
        <FloatingObject position={[5, -2, -1]} text="< />" color="var(--color-rose-ember)" speed={2} />
        <FloatingObject position={[-4, -3, -3]} text="[ i ]" color="var(--color-emerald-neo)" speed={1.2} />
        <FloatingObject position={[4, 3, -4]} text="0xFA" color="var(--color-sand-glow)" speed={1.8} />

        <BinaryStream position={[-7, 5, -5]} speed={2} />
        <BinaryStream position={[7, 5, -3]} speed={1.5} />
      </Canvas>
    </div>
  );
};

function Hero() {
  const containerRef = useRef(null);
  
  // Motion values for Logo 3D tilt
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [15, -15]);
  const rotateY = useTransform(x, [0, 400], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    animate(x, 200, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 200, { type: "spring", stiffness: 300, damping: 20 });
  }

  useEffect(() => {
    // Parallax scrolling
    gsap.to(containerRef.current, {
      y: 150,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--color-dark-ink)] overflow-hidden flex items-center justify-center pt-24 perspective-1000">
      
      {/* 3D Cosmic Background Layer */}
      <ThreeBackground />

      {/* Radial Light Shafts from center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,111,84,0.15)_0%,rgba(12,15,20,1)_80%)] pointer-events-none z-0" />

      {/* Main Container */}
      <div ref={containerRef} className="container mx-auto px-4 z-10 relative flex flex-col items-center justify-center text-center">
        
        {/* Interactive Logo Area */}
        <motion.div
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-8 cursor-none flex items-center justify-center rounded-3xl group"
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Neon back glow */}
          <div className="absolute inset-0 bg-[var(--color-mint-blast)]/20 rounded-full blur-[60px] group-hover:bg-[var(--color-mint-blast)]/40 transition-colors duration-500 pointer-events-none" style={{ transform: "translateZ(-50px)" }} />
          
          <img 
            src="/images/Asset 21-8.png" 
            alt="CodeCraft Logo" 
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            style={{ transform: "translateZ(50px)" }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />

          {/* Glitch Overlay Effect on hover */}
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" style={{ transform: "translateZ(60px)" }} />
        </motion.div>

        {/* Big Glassmorphic Text Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative max-w-4xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.02)]"
        >
          {/* Terminal Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 rounded-t-[2.5rem] border-b border-white/5 flex items-center px-6 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
            <span className="ml-4 text-xs font-mono text-gray-500">root@codecraft:~</span>
          </div>

          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Where Coders</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mint-blast)] to-[var(--color-emerald-neo)] drop-shadow-[0_0_15px_rgba(120,255,207,0.3)]">Become Champions</span>
              <span className="animate-pulse text-[var(--color-mint-blast)] ml-1">_</span>
            </h1>

            <p className="font-mono text-sm md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto tracking-widest uppercase">
              {'<'} Competitive Programming {'/>'}
              <span className="text-[var(--color-rose-ember)] mx-3">|</span> 
              {'<'} Hackathons {'/>'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton variant="primary" className="text-lg">
                Join the Network
              </MagneticButton>
              <MagneticButton variant="outline" className="text-lg bg-white/5 border-white/20 hover:bg-white/10 text-white">
                View Leaderboard
              </MagneticButton>
            </div>
          </div>
        </motion.div>

      </div>
      
    </div>
  );
}

export default Hero;
