import { Brain, Server, Trophy, Users, Coffee, ClipboardCheck, Lightbulb, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const timelineNodes = [
  {
    time: '09:00 - 09:30 AM',
    title: 'Registration & Briefing',
    description: 'Lab allocation, system checks & objective overview',
    icon: <Users className="w-8 h-8" />,
    color: '#34C759', // Green
    details: [
      'Focus: Real-world DSA application',
      'Evaluation: Logic, Complexity & Scalability',
      'Rule: Refactoring > Blind rewriting'
    ],
  },
  {
    time: '09:30 - 10:15 AM',
    title: 'Breakfast Break',
    description: 'Fuel up for the mental marathon',
    icon: <Coffee className="w-8 h-8" />,
    color: '#FF9500', // Orange
  },
  {
    time: '10:15 AM - 12:00 PM',
    title: 'Round 1: MindForge',
    description: 'Conceptual Qualifier (25 Questions)',
    icon: <Brain className="w-8 h-8" />,
    color: '#007AFF', // Blue
    details: [
      'DSA Reasoning & Algorithm Selection',
      'Edge-case awareness & Logical debugging',
      'Precision under time pressure'
    ],
  },
  {
    time: '11:00 - 11:30 AM',
    title: 'Evaluation & Review',
    description: 'Judges review Round 1 submissions',
    icon: <ClipboardCheck className="w-8 h-8" />,
    color: '#AF52DE', // Purple
    details: [
      'Comparison of complexity approaches',
      'Hydration break (Water distribution)'
    ],
  },
  {
    time: '11:30 AM - 02:00 PM',
    title: 'Round 2: Real-World Challenge',
    description: 'Constraint-driven Engineering Simulation',
    icon: <Server className="w-8 h-8" />,
    color: '#FF3B30', // Red
    details: [
      'Single core real-world problem',
      'Focus: Efficiency & Scalability',
      'Simulation of engineering conditions'
    ],
  },
  {
    time: '02:00 - 02:30 PM',
    title: 'Deliberation & Insights',
    description: 'Results finalization & Knowledge sharing',
    icon: <Lightbulb className="w-8 h-8" />,
    color: '#FFD60A', // Yellow
    details: [
      'Optimal approaches shared',
      'Discussion on common failure points',
      'Industry use-cases of DSA'
    ],
  },
  {
    time: '02:30 - 03:00 PM',
    title: 'Prize Distribution',
    description: 'Winners Announcement (Pool: ₹10,000)',
    icon: <Trophy className="w-8 h-8" />,
    color: '#34C759', // Green
  },
  {
    time: '03:00 - 03:15 PM',
    title: 'Closing Ceremony',
    description: 'Vote of Thanks & Group Photos',
    icon: <Camera className="w-8 h-8" />,
    color: '#8E8E93', // Gray
  },
];

export function ArenaFlow() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % timelineNodes.length);
    }, 4000); // 4 seconds per slide to read details

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="arena-flow" className="py-16 md:py-24 px-4 md:px-6 relative">
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
            The <span className="text-[--logic-blue]">Arena</span> Flow
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Thinking in Data Structures, Performing Under Constraints
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[--logic-blue] via-[--optimization-green] to-[--complexity-red] opacity-30"></div>

          {/* Nodes */}
          <div className="space-y-16 md:space-y-24">
            {timelineNodes.map((node, index) => (
              <motion.div
                key={index}
                className={`flex items-start md:items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                  <motion.div
                    className={`glass-card glass-noise p-4 md:p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer ${
                      activeNode === index ? 'ring-2' : ''
                    }`}
                    style={{
                      ringColor: activeNode === index ? node.color : 'transparent',
                    }}
                    onMouseEnter={() => setActiveNode(index)}
                    whileHover={{ y: -5 }}
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
                      boxShadow: activeNode === index ? `0 0 30px ${node.color}80` : `0 0 15px ${node.color}40`,
                    }}
                    animate={{
                      scale: activeNode === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 1, repeat: activeNode === index ? Infinity : 0 }}
                  >
                    <div style={{ color: '#ffffff' }}>{node.icon}</div>
                  </motion.div>

                  {/* Animated Beam to next node */}
                  {index < timelineNodes.length - 1 && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 md:h-24 origin-top"
                      style={{
                        background: `linear-gradient(to bottom, ${node.color}, ${
                          timelineNodes[index + 1].color
                        })`,
                      }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  )}
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