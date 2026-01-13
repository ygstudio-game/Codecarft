import { SpotlightCard } from './SpotlightCard';
import { Search, TrendingUp, Bug, Target, Zap, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Search className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Output Prediction',
    description: 'Tricky loops, recursion & pointer logic. Test your mental execution skills.',
    gradient: 'from-[--logic-blue] to-blue-600',
  },
  {
    icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Complexity Detective',
    description: 'Analyze time and space complexity with precision. O(n) vs O(n²) matters.',
    gradient: 'from-[--optimization-green] to-green-600',
  },
  {
    icon: <Bug className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Fix the Logic',
    description: 'Debug broken algorithms and restore them to their optimal state.',
    gradient: 'from-[--complexity-red] to-red-600',
  },
  {
    icon: <Target className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Edge Case Hunter',
    description: 'Identify missing edge cases and failure scenarios in given solutions.',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    icon: <Code2 className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Algorithm Selection',
    description: 'Choose the best algorithm and data structure for the problem at hand.',
    gradient: 'from-orange-500 to-orange-700',
  },
  {
    icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />,
    title: 'Optimization Challenge',
    description: 'Refactor solutions under stress with tighter constraints and larger inputs.',
    gradient: 'from-yellow-500 to-yellow-700',
  },
];

export function FeatureGrid() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Challenge <span className="text-[--optimization-green]">Types</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Master six dimensions of algorithmic thinking
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <SpotlightCard>
                <div className="space-y-4">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{feature.description}</p>

                  {/* Decorative Line */}
                  <div className={`h-1 w-16 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Banner */}
        <motion.div
          className="mt-12 md:mt-16 glass-card glass-noise p-6 md:p-8 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-base md:text-lg text-gray-300">
            Each round tests your ability to <span className="text-[--logic-blue] font-semibold">think</span>{' '}
            like a computer scientist, not just{' '}
            <span className="text-[--complexity-red] font-semibold">code</span> like one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}