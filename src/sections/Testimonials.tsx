import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

const TestimonialCard = ({ quote, author, role, index }: TestimonialCardProps) => {
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
      className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform"
    >
      <div className="w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center mb-6">
        <Quote className="w-6 h-6 text-accent-gold" />
      </div>

      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        "{quote}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
          <span className="text-accent-gold font-semibold text-lg">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-semibold text-dark-blue">{author}</div>
          <div className="text-gray-500 text-sm">{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'Bob is the best person I have seen in my career to do financial modeling and business plan development.',
      author: 'Ellen Richstone',
      role: 'Public Company CFO & Board Member',
    },
    {
      quote:
        'Bob quickly understood our business needs and played an instrumental role in converting our Excel-based consolidation and planning process to Workday Adaptive Planning. As a public mining company with Brazilian operations and Canadian public accountants, the move to Adaptive significantly streamlined our close process and made our annual forecasting and budgeting cycles far more efficient. The SaaS-based platform eliminated the need to email, reconcile, and synchronize complex spreadsheets, giving us a more reliable and scalable planning solution.',
      author: 'Jim Roller',
      role: 'CFO, Jaguar Mining Inc.',
    },
  ];

  return (
    <section className="py-24 bg-light-bg">
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
              Testimonials
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by businesses across industries to deliver results that matter.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
