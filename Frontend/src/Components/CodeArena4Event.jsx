import React from "react";
import { motion } from 'motion/react';
import { Trophy, Award, Star, ChevronDown, User, Code2, Zap, Target, Search, TrendingUp, Bug, Code } from 'lucide-react';
import { DecryptedText } from './CodeArena4/DecryptedText';

/* --- CHALLENGES DATA --- */
const challenges = [
  {
    id: 1,
    title: "Output Prediction",
    desc: "Tricky loops, recursion & pointer logic. Test your mental execution skills.",
    icon: <Search className="w-8 h-8 text-blue-400" />,
    gradient: "from-blue-500/20 to-blue-600/5",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Complexity Detective",
    desc: "Analyze time and space complexity with precision. O(n) vs O(n²) matters.",
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    gradient: "from-green-500/20 to-green-600/5",
    glow: "shadow-[0_0_30px_rgba(34,197,94,0.15)]",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    id: 3,
    title: "Fix the Logic",
    desc: "Debug broken algorithms and restore them to their optimal state.",
    icon: <Bug className="w-8 h-8 text-red-400" />,
    gradient: "from-red-500/20 to-red-600/5",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.15)]",
    iconBg: "bg-gradient-to-br from-red-500 to-red-600",
  },
  {
    id: 4,
    title: "Edge Case Hunter",
    desc: "Identify missing edge cases and failure scenarios in given algorithms.",
    icon: <Target className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-500/20 to-purple-600/5",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    id: 5,
    title: "Algorithm Selection",
    desc: "Choose the best algorithm and data structure for the given problem context.",
    icon: <Code className="w-8 h-8 text-orange-400" />,
    gradient: "from-orange-500/20 to-orange-600/5",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
  },
  {
    id: 6,
    title: "Optimization Challenge",
    desc: "Refactor working but highly inefficient code to meet tight constraints.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    gradient: "from-yellow-500/20 to-yellow-600/5",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    iconBg: "bg-gradient-to-br from-yellow-500 to-yellow-600",
  }
];

/* --- WINNERS DATA --- */
const winners = [
  {
    id: 1,
    name: "Gold Winner",
    college: "PCCOER",
    score: "98.5",
    time: "45 mins",
    place: "1st Place",
    track: "Gold",
    image: "/images/winners/winner1.JPG",
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    gradient: "from-yellow-400/20 to-yellow-600/20",
    border: "border-yellow-400/30",
    delay: 0
  },
  {
    id: 2,
    name: "Silver Winner",
    college: "PCCOER",
    score: "95.0",
    time: "52 mins",
    place: "2nd Place",
    track: "Silver",
    image: "/images/winners/winner2.JPG",
    icon: <Award className="w-8 h-8 text-gray-300" />,
    gradient: "from-gray-300/20 to-gray-500/20",
    border: "border-gray-300/30",
    delay: 0.2
  },
  {
    id: 3,
    name: "Bronze Winner",
    college: "PCCOER",
    score: "92.5",
    time: "58 mins",
    place: "3rd Place",
    track: "Bronze",
    image: "/images/winners/winner3.JPG",
    icon: <Star className="w-8 h-8 text-orange-400" />,
    gradient: "from-orange-400/20 to-orange-600/20",
    border: "border-orange-400/30",
    delay: 0.4
  }
];

/* --- PRIZES DATA --- */
const prizes = [
  {
    place: '2nd',
    title: 'Silver',
    value: '₹3,000',
    icon: <Award className="w-12 h-12 md:w-16 md:h-16" />,
    gradient: 'from-gray-300 via-gray-100 to-gray-400',
    iconColor: 'text-gray-300',
    height: 'h-64 md:h-80',
    delay: 0.2,
    mobileOrder: 'order-2',
    glow: 'shadow-[0_0_30px_-5px_rgba(192,192,192,0.3)]'
  },
  {
    place: '1st',
    title: 'Gold',
    value: '₹4,000',
    icon: <Trophy className="w-16 h-16 md:w-20 md:h-20" />,
    gradient: 'from-yellow-300 via-yellow-100 to-yellow-500',
    iconColor: 'text-yellow-400',
    height: 'h-64 md:h-80',
    delay: 0,
    mobileOrder: 'order-1',
    glow: 'shadow-[0_0_40px_-5px_rgba(255,215,0,0.4)]'
  },
  {
    place: '3rd',
    title: 'Bronze',
    value: '₹2,000',
    icon: <Star className="w-10 h-10 md:w-14 md:h-14" />,
    gradient: 'from-orange-300 via-orange-100 to-orange-500',
    iconColor: 'text-orange-400',
    height: 'h-64 md:h-80',
    delay: 0.4,
    mobileOrder: 'order-3',
    glow: 'shadow-[0_0_30px_-5px_rgba(205,127,50,0.3)]'
  },
];

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
  `}</style>
);

const CodeArena4Event = () => {
  const scrollToWinners = () => {
    document.getElementById('winners-gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-[--void-black] text-white relative overflow-x-hidden pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-4">
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.div 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-tight relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Added cyan glow effect behind and on the text to match the requested image */}
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-teal-400 to-emerald-400 opacity-30 select-none pointer-events-none"></div>
              <DecryptedText 
                text="CODEARENA 4.0" 
                className="bg-gradient-to-r from-[#9bf8d3] to-[#5bedb6] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(155,248,211,0.6)] relative z-10"
              />
            </motion.div>

            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Where <span className="text-[--logic-blue]">DSA</span> is tested as a <span className="text-[--optimization-green]">thinking skill</span>, not just a coding skill.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm sm:text-base md:text-lg text-gray-300 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <div className="w-2 h-2 bg-[--logic-blue] rounded-full animate-pulse shadow-[0_0_10px_#007aff]"></div>
                <span>Feb 5, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <div className="w-2 h-2 bg-[--optimization-green] rounded-full animate-pulse shadow-[0_0_10px_#00ff41]"></div>
                <span>Fully offline</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <div className="w-2 h-2 bg-[--complexity-red] rounded-full animate-pulse shadow-[0_0_10px_#ff3b30]"></div>
                <span>Solo Teams</span>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.button
              onClick={scrollToWinners}
              className="mt-12 text-gray-500 hover:text-[--logic-blue] transition-colors cursor-pointer"
              aria-label="Scroll to winners"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ 
                opacity: { duration: 0.6, delay: 1.5 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <ChevronDown className="w-8 h-8 md:w-10 md:h-10 mx-auto" />
            </motion.button>
          </div>

          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[--logic-blue] opacity-20 blur-[120px] rounded-full point-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[--complexity-red] opacity-10 blur-[120px] rounded-full point-events-none"></div>
        </section>

        {/* --- CHALLENGE TYPES SECTION --- */}
        <section id="challenges" className="py-12 md:py-20 px-4 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.div 
                className="inline-block px-3 py-1 mb-4 rounded-full border border-[--logic-blue] bg-[--logic-blue]/10 text-[--logic-blue] text-xs font-bold uppercase tracking-widest"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                The Arena
              </motion.div>
              <motion.h2
                className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Challenge Types
              </motion.h2>
              <motion.p
                className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto uppercase tracking-widest font-mono"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Master six dimensions of algorithmic thinking
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {challenges.map((challenge, idx) => (
                <motion.div
                  key={challenge.id}
                  className={`glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group ${challenge.glow} hover:border-white/10 transition-all duration-300 bg-[#111318]`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${challenge.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${challenge.iconBg}`}>
                      {/* Icon inner container to give it that frosted look */}
                      <div className="bg-black/20 w-full h-full rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        {React.cloneElement(challenge.icon, { className: 'w-8 h-8 text-white drop-shadow-md' })}
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{challenge.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {challenge.desc}
                    </p>
                    
                    {/* Interactive glowing line at the bottom similar to the screenshot */}
                    <div className="mt-8 relative h-1 w-16 overflow-hidden rounded-full bg-white/5">
                       <div className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r ${challenge.iconBg.replace('bg-gradient-to-br', '')} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WINNERS GALLERY --- */}
        <section id="winners-gallery" className="py-12 md:py-24 px-4 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <motion.div 
                className="inline-block px-3 py-1 mb-4 rounded-full border border-[--optimization-green] bg-[--optimization-green]/10 text-[--optimization-green] text-xs font-bold uppercase tracking-widest"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Wall of Fame
              </motion.div>
              <motion.h2
                className="text-4xl md:text-6xl font-bold tracking-tight mb-4 relative block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Champions Gallery
              </motion.h2>
              <motion.p
                className="text-gray-400 text-lg max-w-2xl mx-auto block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Honoring the top minds who conquered CodeArena 4.0
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {winners.map((winner, idx) => (
                <motion.div
                  key={winner.id}
                  className={`glass-card p-4 md:p-5 rounded-2xl border ${winner.border} relative overflow-hidden group`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: winner.delay, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${winner.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Clean image showcase occupying maximal space */}
                  <div className="relative z-10 w-full h-[400px] md:h-[600px] flex items-center justify-center">
                    <img 
                      src={winner.image} 
                      alt="CodeArena Winner" 
                      className="w-full h-full object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500 shadow-[0_0_50px_rgba(255,255,255,0.15)] ring-1 ring-white/10"
                      onError={(e) => {
                         e.target.src = 'https://via.placeholder.com/600x800/111/fff?text=Winner+Photo'; // Fallback if image not found
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRIZE POOL SECTION --- */}
        <section id="prizes" className="py-12 md:py-24 px-4 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16 md:mb-20 relative">
              <motion.div 
                className="inline-block px-3 py-1 mb-4 rounded-full border border-yellow-400 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Rewards
              </motion.div>
              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                viewport={{ once: true }}
              >
                Prize <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_15px_rgba(167,243,208,0.4)]">Pool</span>
              </motion.h2>

              <motion.div
                className="inline-block relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-30" />
                <div className="relative px-6 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
                  <span className="text-xl md:text-2xl text-gray-200 font-medium">
                    Total Prize Pool: <span className="text-green-400 font-bold">₹9,000</span>
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-12 mb-24 cursor-default">
              {prizes.map((prize, index) => (
                <motion.div
                  key={index}
                  className={`w-full max-w-[340px] md:flex-1 md:min-w-[220px] md:max-w-[300px] ${prize.mobileOrder} md:order-none relative z-10`}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring", stiffness: 120, damping: 15, delay: prize.delay
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    animate={{ y: [-8, 8] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`glass-card ${prize.height} ${prize.glow} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-between relative overflow-hidden group border border-white/10`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-b ${prize.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500`} />

                    <div className="relative z-10 flex flex-col items-center flex-1 justify-center w-full">
                      <motion.div className="mb-8 relative z-20" whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} blur-2xl opacity-20`} />
                        <div className={`relative ${prize.iconColor} drop-shadow-md`}>
                          {prize.icon}
                        </div>
                      </motion.div>

                      <div className={`text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-b ${prize.gradient} bg-clip-text text-transparent opacity-90`}>
                        {prize.place}
                      </div>

                      <div className="text-xl md:text-2xl font-semibold mb-6 text-gray-200 tracking-wide">
                        {prize.title}
                      </div>

                      <div className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-1">
                        {prize.value}
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CodeArena4Event;
