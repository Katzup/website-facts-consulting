import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-dark-blue overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-dark-blue to-navy" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[2px] bg-accent-gold" />
              <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
                FP&A & Analytics Consulting
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Smarter Finance. Faster Close. Real ROI.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary mb-4"
            >
              <span className="text-accent-gold font-semibold">F</span>inance |{' '}
              <span className="text-accent-gold font-semibold">A</span>nalytics |{' '}
              <span className="text-accent-gold font-semibold">C</span>onsulting |{' '}
              <span className="text-accent-gold font-semibold">T</span>echnology{' '}
              <span className="text-accent-gold font-semibold">S</span>olutions
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed mb-8"
            >
              We help SMB finance teams build AI-augmented analytics, automate close and
              reporting workflows, and finally get real ROI from their data — without
              hiring a full data team.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => window.open('https://calendly.com/bobkatz', '_blank')}
                className="bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold px-8 py-6 text-base animate-pulse-glow"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('#services')}
                variant="outline"
                className="border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 font-semibold px-8 py-6 text-base"
              >
                Explore Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-visual.jpg"
                alt="Business Transformation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/30 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-card-bg border border-accent-gold/20 rounded-xl p-6 shadow-card"
            >
              <div className="text-3xl font-bold text-accent-gold">150+</div>
              <div className="text-text-secondary text-sm">Finance Teams Served</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('#pillars')}
        >
          <span className="text-text-secondary text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-accent-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
