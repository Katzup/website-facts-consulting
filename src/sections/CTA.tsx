import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-accent-gold" />
            <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
              Get Started
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-text-secondary text-lg mb-10 leading-relaxed">
            Let's discuss how FACTS can help you achieve your goals. Schedule a
            consultation with our team of experts and discover the difference
            strategic consulting can make.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => window.open('https://calendly.com/bobkatz', '_blank')}
              className="bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold px-8 py-6 text-base animate-pulse-glow"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => window.location.href = 'mailto:info@factsconsulting.com'}
              variant="outline"
              className="border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 font-semibold px-8 py-6 text-base"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
