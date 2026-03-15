import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Users, RefreshCw } from 'lucide-react';

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const PillarCard = ({ icon, title, description, index }: PillarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform"
    >
      <motion.div
        className="w-14 h-14 bg-dark-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gold transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-accent-gold group-hover:text-dark-blue transition-colors duration-300">
          {icon}
        </div>
      </motion.div>
      
      <h3 className="text-xl font-semibold text-dark-blue mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const FactsPillars = () => {
  const pillars = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Finance',
      description:
        'Strategic financial planning, FP&A, treasury management, and accounting optimization to strengthen your financial foundation.',
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: 'Analytics',
      description:
        'Data-driven insights, predictive analytics, and business intelligence to inform strategic decision-making.',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Consulting',
      description:
        'Expert advisory services for operational excellence, risk management, and sustainable business growth.',
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: 'Transformation',
      description:
        'End-to-end digital transformation, process reengineering, and change management for the modern enterprise.',
    },
  ];

  return (
    <section id="pillars" className="py-24 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-accent-gold" />
            <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
              Our Expertise
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            The FACTS Advantage
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We bring together four core disciplines to deliver comprehensive solutions
            that drive measurable business results.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsPillars;
