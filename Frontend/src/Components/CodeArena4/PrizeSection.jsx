import { motion } from 'motion/react';
import { Trophy, Award, Star } from 'lucide-react';

const prizes = [
  {
    place: '2nd',
    title: 'Silver',
    amount: '₹3,000',
    icon: <Award className="w-12 h-12 md:w-16 md:h-16" />,
    gradient: 'from-gray-400 to-gray-600',
    height: 'h-48 md:h-64', // Adjusted for mobile
    delay: 0.2,
    float: { y: [-10, 10], duration: 3 },
    mobileOrder: 'order-2', // Silver second on mobile
  },
  {
    place: '1st',
    title: 'Gold',
    amount: '₹5,000',
    icon: <Trophy className="w-16 h-16 md:w-20 md:h-20" />,
    gradient: 'from-yellow-400 to-yellow-600',
    height: 'h-56 md:h-80', // Adjusted for mobile
    delay: 0,
    float: { y: [-15, 15], duration: 4 },
    mobileOrder: 'order-1', // Gold first on mobile
  },
  {
    place: '3rd',
    title: 'Bronze',
    amount: '₹2,000',
    icon: <Star className="w-10 h-10 md:w-14 md:h-14" />,
    gradient: 'from-orange-400 to-orange-600',
    height: 'h-40 md:h-56', // Adjusted for mobile
    delay: 0.4,
    float: { y: [-8, 8], duration: 3.5 },
    mobileOrder: 'order-3', // Bronze third on mobile
  },
];

const specialAwards = [
  {
    title: 'Best Algorithmic Design',
    description: 'Most elegant and efficient solution',
    icon: '🎯',
  },
  {
    title: 'Most Optimized Solution',
    description: 'Peak performance under constraints',
    icon: '⚡',
  },
  {
    title: 'Problem Decomposition',
    description: 'Exceptional analytical breakdown',
    icon: '🧩',
  },
  {
    title: 'Edge Case Master',
    description: 'Discovered the most hidden cases',
    icon: '🔍',
  },
];

export default function PrizePodium() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-20">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Prize <span className="text-[--optimization-green]">Pool</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Total Prize Pool: ₹10,000
          </motion.p>
        </div>

        {/* Podium Container */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-8 mb-16 md:mb-24">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              // Mobile: Full width, Order logic applied. Desktop: Flex-1, reset order.
              className={`w-full max-w-[320px] md:max-w-none md:flex-1 md:min-w-[200px] md:max-w-[280px] ${prize.mobileOrder} md:order-none`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: prize.delay }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                animate={{ y: prize.float.y }}
                transition={{
                  duration: prize.float.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                className={`glass-card glass-noise ${prize.height} rounded-xl p-4 md:p-6 flex flex-col items-center justify-between relative overflow-hidden group cursor-pointer shadow-lg`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center flex-1 justify-center w-full">
                  {/* Icon */}
                  <div className={`mb-3 md:mb-4 bg-gradient-to-br ${prize.gradient} bg-clip-text text-transparent transform scale-90 md:scale-100`}>
                    {prize.icon}
                  </div>

                  {/* Place Number */}
                  <div className="text-4xl md:text-6xl font-bold mb-1 md:mb-2">{prize.place}</div>

                  {/* Title */}
                  <div className={`text-lg md:text-xl font-semibold mb-2 md:mb-4 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                    {prize.title}
                  </div>

                  {/* Amount */}
                  <div className="text-2xl md:text-3xl font-bold tracking-tight">{prize.amount}</div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Special Awards */}
        <div className="max-w-4xl mx-auto px-2">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Evaluation Criteria
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {specialAwards.map((award, index) => (
              <motion.div
                key={index}
                className="glass-card glass-noise p-5 md:p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300 border border-white/5"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl md:text-4xl bg-white/5 p-2 rounded-lg">{award.icon}</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 text-gray-200">{award.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}