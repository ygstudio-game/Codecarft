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
      --surface-dark: #0f1115;
    }
    
    body {
      background-color: var(--void-black);
      color: #e5e7eb;
      font-family: 'Inter', sans-serif;
    }

    .glass-card {
      background: var(--surface-dark);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.06);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    }
  `}</style>
);

const CodeArena4Event = () => {
  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-[--void-black] text-white relative overflow-x-hidden pt-16 font-sans">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden px-4 md:py-20 py-12">
          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <motion.div 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight relative drop-shadow-[0_0_20px_rgba(155,248,211,0.2)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="absolute inset-0 blur-[40px] bg-gradient-to-r from-teal-500/20 to-emerald-500/20 pointer-events-none rounded-full scale-150"></div>
              <DecryptedText 
                text="CODEARENA 4.0" 
                className="bg-gradient-to-r from-[#9bf8d3] via-[#ffffff] to-[#5bedb6] bg-clip-text text-transparent relative z-10"
              />
            </motion.div>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Where <span className="text-[--logic-blue]">DSA</span> is tested as a <span className="text-[--optimization-green]">thinking skill</span>.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-6 text-xs sm:text-sm font-semibold text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[ 
                { text: 'Feb 5, 2026', color: 'bg-[--logic-blue]', shadow: 'shadow-[0_0_8px_#007aff]' }, 
                { text: 'Fully offline', color: 'bg-[--optimization-green]', shadow: 'shadow-[0_0_8px_#00ff41]' }, 
                { text: 'Solo Teams', color: 'bg-[--complexity-red]', shadow: 'shadow-[0_0_8px_#ff3b30]' } 
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                  <div className={`w-1.5 h-1.5 rounded-full animate-[pulse_2s_ease-in-out_infinite] ${tag.color} ${tag.shadow}`}></div>
                  <span className="tracking-wide">{tag.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Subtle Background Glows */}
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-[--logic-blue] opacity-[0.08] blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-[--optimization-green] opacity-[0.08] blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        </section>

        {/* --- CHALLENGE TYPES SECTION --- */}
        <section id="challenges" className="py-12 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
               <motion.h2
                className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Arena
              </motion.h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[--logic-blue] to-[--optimization-green] mx-auto rounded-full mt-3 opacity-80"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {challenges.map((challenge, idx) => (
                <motion.div
                  key={challenge.id}
                  className={`glass-card p-5 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="relative z-10 flex items-start gap-4 h-full">
                    <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${challenge.iconBg} relative`}>
                      <div className="absolute inset-0 bg-black/20 rounded-xl backdrop-blur-sm"></div>
                      <div className="relative z-10">
                        {React.cloneElement(challenge.icon, { className: 'w-6 h-6 text-white drop-shadow-md' })}
                      </div>
                    </div>
                    
                    <div className="flex flex-col h-full justify-center">
                      <h3 className="text-base sm:text-lg font-bold mb-1.5 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">{challenge.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {challenge.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WINNERS GALLERY --- */}
        <section id="winners-gallery" className="py-12 md:py-16 px-4 relative z-10 bg-white/[0.01] border-y border-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Champions Gallery
              </motion.h2>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mt-4 opacity-80"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {winners.map((winner, idx) => (
                <motion.div
                  key={winner.id}
                  className={`glass-card p-2 rounded-[24px] border ${winner.border.replace('30', '20')} relative overflow-hidden group hover:border-white/30`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: winner.delay * 0.5, duration: 0.4 }}
                  whileHover={{ y: -6 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${winner.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 w-full aspect-[4/5] flex items-center justify-center overflow-hidden rounded-[20px] bg-black/50">
                    <img 
                      src={winner.image} 
                      alt="CodeArena Winner" 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      onError={(e) => {
                         e.target.src = 'https://via.placeholder.com/600x800/111/fff?text=Winner';
                      }}
                    />
                    
                    {/* Compact Badge Overlay */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                       {React.cloneElement(winner.icon, { className: 'w-4 h-4' })}
                       <span className="font-bold text-white text-xs tracking-wider uppercase">{winner.track}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRIZE POOL SECTION --- */}
        <section id="prizes" className="py-16 md:py-20 px-4 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Prize <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">Pool</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-5 py-2 rounded-full mt-2 text-emerald-400 font-semibold tracking-wide text-sm"
              >
                Total Rewards Pool: ₹9,000
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6">
              {prizes.map((prize, index) => (
                <motion.div
                  key={index}
                  className={`w-full max-w-[300px] md:w-1/3 ${prize.mobileOrder} md:order-none relative`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: prize.delay * 0.4, type: "spring", stiffness: 100, damping: 20 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.04, y: -6 }}
                    className={`glass-card rounded-[2rem] p-8 flex flex-col items-center justify-center relative overflow-hidden group border border-white/5`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-[0.03] group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="mb-5 relative z-10 group-hover:animate-bounce-short">
                      <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} blur-xl opacity-40`} />
                      <div className={`relative ${prize.iconColor} drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]`}>
                        {React.cloneElement(prize.icon, { className: 'w-14 h-14' })}
                      </div>
                    </div>

                    <div className={`text-4xl font-extrabold mb-1 bg-gradient-to-b ${prize.gradient} bg-clip-text text-transparent`}>
                      {prize.place}
                    </div>
                    <div className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">{prize.title}</div>
                    
                    <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-xl text-2xl font-bold text-white shadow-inner group-hover:bg-white/10 transition-colors">
                      {prize.value}
                    </div>
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
