import { Brain, Server, Trophy, Users, Coffee, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const timelineNodes = [
  {
    time: '09:00 AM',
    title: 'Registration & Briefing',
    description: 'Arrival, lab allocation & system checks',
    icon: <Users className="w-8 h-8" />,
    color: '#34C759',
    details: [
      'Focus on real-world DSA application',
      'Evaluation: Logic, Complexity & Scalability',
      'Refactoring > blind rewriting'
    ],
  },
  {
    time: '09:30 AM',
    title: 'Breakfast Break',
    description: 'Refreshments and networking',
    icon: <Coffee className="w-8 h-8" />,
    color: '#AF52DE',
  },
  {
    time: '10:15 AM',
    title: 'ROUND 1 – MindForge',
    description: 'Conceptual Qualifier (25 Questions)',
    icon: <Brain className="w-8 h-8" />,
    color: '#007AFF',
    details: [
      'Algorithm selection & Edge-case awareness',
      'Logical debugging & mental execution',
      'Precision under time pressure'
    ],
  },
  {
    time: '11:30 AM',
    title: 'ROUND 2 – Real-World DSA',
    description: 'Constraint-driven Efficiency Challenge',
    icon: <Server className="w-8 h-8" />,
    color: '#FF9500',
    details: [
      'Single core real-world problem',
      'Efficiency and scalability focus',
      'Simulation of engineering conditions'
    ],
  },
  {
    time: '02:00 PM',
    title: 'Judge Deliberation',
    description: 'Insight Session & Optimal Approaches',
    icon: <Brain className="w-8 h-8" />,
    color: '#5856D6',
    details: [
      'Discussion of common failure points',
      'Real-world industry use cases'
    ],
  },
  {
    time: '02:30 PM',
    title: 'Prize Distribution',
    description: 'Felicitation & Winner Announcement',
    icon: <Trophy className="w-8 h-8" />,
    color: '#FF3B30',
  },
  {
    time: '03:00 PM',
    title: 'Closing Ceremony',
    description: 'Vote of Thanks & Group Photos',
    icon: <Camera className="w-8 h-8" />,
    color: '#8E8E93',
  },
];

export function ArenaFlow() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % timelineNodes.length);
    }, 4000); // Slightly slower to allow for reading more details

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="arena-flow" className="py-16 md:py-24 px-4 md:px-6 relative bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The <span className="text-blue-500">Arena</span> Flow
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A journey through algorithmic mastery at CodeArena 4.0
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-800 opacity-50"></div>

          {/* Nodes */}
          <div className="space-y-16 md:space-y-24">
            {timelineNodes.map((node, index) => (
              <motion.div
                key={index}
                className={`flex items-start md:items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                  <motion.div
                    className={`p-4 md:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${
                      activeNode === index ? 'border-white/30 scale-105' : 'opacity-70'
                    }`}
                    style={{
                      boxShadow: activeNode === index ? `0 0 20px ${node.color}20` : 'none',
                    }}
                    onMouseEnter={() => setActiveNode(index)}
                  >
                    <div className="text-xs md:text-sm text-gray-500 mb-2 font-mono font-bold" style={{ color: node.color }}>
                        {node.time}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{node.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-3">{node.description}</p>
                    
                    {node.details && (
                      <ul className={`space-y-1 text-xs md:text-sm text-gray-500 flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        {node.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                            {index % 2 !== 0 && <span style={{ color: node.color }}>•</span>}
                            {detail}
                            {index % 2 === 0 && <span className="hidden md:inline" style={{ color: node.color }}>•</span>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>

                {/* Center Icon Node */}
                <div className="absolute left-8 md:relative md:left-auto z-10 -translate-x-1/2 md:translate-x-0">
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 border-black"
                    style={{
                      backgroundColor: node.color,
                      boxShadow: activeNode === index ? `0 0 40px ${node.color}` : `0 0 20px ${node.color}60`,
                    }}
                    animate={{
                      scale: activeNode === index ? 1.15 : 1,
                    }}
                  >
                    <div className="text-white">{node.icon}</div>
                  </motion.div>
                </div>

                {/* Desktop Spacer */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}