import { motion } from 'framer-motion';
import { Calculator, PieChart, Briefcase, Zap, Brain, BookOpen, Check } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard = ({ icon, title, description, features, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
      className="group bg-card-bg rounded-2xl p-8 border border-transparent hover:border-accent-gold/30 transition-all duration-300 will-change-transform"
    >
      <div className="w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors duration-300">
        <div className="text-accent-gold">{icon}</div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      
      <p className="text-text-secondary mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
            <span className="text-text-secondary text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Financial Advisory',
      description: 'Expert guidance for complex financial challenges and strategic planning.',
      features: ['CFO Advisory Services', 'Financial Planning & Analysis', 'Treasury Management', 'M&A Support'],
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Data Analytics',
      description: 'Transform data into actionable business intelligence and insights.',
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Performance Metrics'],
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Business Consulting',
      description: 'Strategic consulting to drive operational excellence and growth.',
      features: ['Process Optimization', 'Risk Management', 'Compliance Advisory', 'Strategic Planning'],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Technology',
      description: 'Implement and optimize the technology stack that powers your finance function—from planning tools to AI-powered analytics.',
      features: ['Adaptive Planning & Anaplan', 'AI/ML Implementation', 'Workflow Automation', 'Systems Integration'],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Services',
      description: 'Leverage artificial intelligence to automate processes and gain competitive insights.',
      features: ['AI Strategy & Roadmap', 'Machine Learning Implementation', 'Process Automation', 'Intelligent Analytics'],
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Accounting Services',
      description: 'Accurate, timely, and compliant financial reporting and bookkeeping.',
      features: ['Bookkeeping', 'Financial Reporting', 'Audit Support', 'GAAP/IFRS Compliance'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-dark-blue">
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
              What We Offer
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, delivered by
            experienced professionals with a track record of success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
