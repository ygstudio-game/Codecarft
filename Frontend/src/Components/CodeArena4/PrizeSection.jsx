import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { Trophy, Award, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

const prizes = [
  {
    place: '2nd',
    title: 'Silver',
    value: 3000,
    amount: '₹3,000',
    icon: <Award className="w-12 h-12 md:w-16 md:h-16" />,
    gradient: 'from-gray-300 via-gray-100 to-gray-400',
    iconColor: 'text-gray-300',
    height: 'h-64 md:h-80', // Equal Height
    delay: 0.2,
    float: { y: [-8, 8], duration: 4 },
    mobileOrder: 'order-2',
    glow: 'shadow-[0_0_30px_-5px_rgba(192,192,192,0.3)]'
  },
  {
    place: '1st',
    title: 'Gold',
    value: 4000,
    amount: '₹4,000',
    icon: <Trophy className="w-16 h-16 md:w-20 md:h-20" />,
    gradient: 'from-yellow-300 via-yellow-100 to-yellow-500',
    iconColor: 'text-yellow-400',
    height: 'h-64 md:h-80', // Equal Height
    delay: 0,
    float: { y: [-12, 12], duration: 5 },
    mobileOrder: 'order-1',
    glow: 'shadow-[0_0_40px_-5px_rgba(255,215,0,0.4)]'
  },
  {
    place: '3rd',
    title: 'Bronze',
    value: 2000,
    amount: '₹2,000',
    icon: <Star className="w-10 h-10 md:w-14 md:h-14" />,
    gradient: 'from-orange-300 via-orange-100 to-orange-500',
    iconColor: 'text-orange-400',
    height: 'h-64 md:h-80', // Equal Height
    delay: 0.4,
    float: { y: [-6, 6], duration: 4.5 },
    mobileOrder: 'order-3',
    glow: 'shadow-[0_0_30px_-5px_rgba(205,127,50,0.3)]'
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

function CountUp({ to }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [to, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function PrizePodium() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-28 relative">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
          >
            Prize <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Pool</span>
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

        {/* Podium Container */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-12 mb-24 cursor-default">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              className={`w-full max-w-[340px] md:flex-1 md:min-w-[220px] md:max-w-[300px] ${prize.mobileOrder} md:order-none relative z-10`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: prize.delay
              }}
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
                whileHover={{ scale: 1.05, y: -10 }}
                className={`glass-card ${prize.height} ${prize.glow} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-between relative overflow-hidden group border border-white/10`}
              >
                {/* Internal Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${prize.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center flex-1 justify-center w-full">
                  {/* Icon Container */}
                  <motion.div
                    className="mb-8 relative z-20"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} blur-2xl opacity-20`} />
                    <div className={`relative ${prize.iconColor} drop-shadow-md`}>
                      {prize.icon}
                    </div>
                  </motion.div>

                  {/* Place Number */}
                  <div className={`text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-b ${prize.gradient} bg-clip-text text-transparent opacity-90`}>
                    {prize.place}
                  </div>

                  {/* Title */}
                  <div className="text-xl md:text-2xl font-semibold mb-6 text-gray-200 tracking-wide">
                    {prize.title}
                  </div>

                  {/* Amount with CountUp */}
                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-1">
                    ₹<CountUp to={prize.value} />
                  </div>
                </div>

                {/* Glossy Sheen Effect */}
                <motion.div
                  className="absolute inset-0 skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                    width: '200%',
                    left: '-50%'
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 0.5 // Add pause between sweeps
                  }}
                />

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Special Awards */}
        <div className="max-w-5xl mx-auto px-4">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Evaluation Criteria
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {specialAwards.map((award, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/5 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start gap-5">
                  <span className="text-4xl md:text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 block">
                    {award.icon}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-white transition-colors">
                      {award.title}
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                      {award.description}
                    </p>
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
