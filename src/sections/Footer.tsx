import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Financial Advisory',
    'Data Analytics',
    'Business Consulting',
    'Digital Transformation',
  ];

  return (
    <footer className="bg-dark-blue border-t border-accent-gold/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-4 mb-4">
              <img 
                src="/images/facts-logo-inverted.png" 
                alt="FACTS" 
                className="h-48 w-auto"
              />
            </a>
            <p className="text-text-secondary text-sm mb-2">
              Finance | Analytics | Consulting | Transformation Services
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Strategic consulting partner for financial transformation and business growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-text-secondary text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@factsconsulting.com"
                  className="text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  info@factsconsulting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/factservicesfirm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-gold/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © 2025 FACTS Consulting. All rights reserved.
            </p>
            <p className="text-text-secondary text-sm">
              Made with precision and expertise
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
