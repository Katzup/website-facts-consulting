import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import StatCounter from '@/components/StatCounter';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Award className="w-5 h-5" />,
      text: 'Industry-specialized knowledge',
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'People-first approach',
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: 'Outcome-driven solutions',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: 'Proven track record',
    },
  ];

  const stats = [
    { value: 150, suffix: '+', label: 'Clients Served' },
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 25, suffix: '+', label: 'Years Experience' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-24 bg-navy">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Images */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/team-meeting.jpg"
                alt="FACTS Consulting Team"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium">
                  Our Team
                </span>
                <p className="text-white text-sm mt-1">Expert consultants at work</p>
              </div>
            </div>
          </motion.div>

          {/* Partnership Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/partnership.jpg"
                alt="Business Partnership"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium">
                  Partnership
                </span>
                <p className="text-white text-sm mt-1">Building lasting relationships</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-accent-gold" />
              <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
                Why FACTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Choose FACTS?
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We combine deep industry expertise with innovative approaches to deliver
              measurable results. Our team of seasoned professionals brings decades of
              experience across finance, analytics, and transformation.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-accent-gold">{benefit.icon}</div>
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="bg-card-bg rounded-2xl p-6 border border-accent-gold/10 text-center"
              >
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
