import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ExternalLink } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  format: string[];
  price: string;
  amazonLink: string;
  coverImage: string;
  status: 'available' | 'coming-soon';
}

const books: Book[] = [
  {
    id: '1',
    title: "The SMB CEO's Data-Driven Playbook",
    subtitle: '100 Critical Questions with Analytical Frameworks for Success',
    description: 'A comprehensive guide for CEOs of small and medium businesses. This playbook covers everything from financial metrics to team performance, giving you the questions you need to ask—and the frameworks to find the answers.',
    targetAudience: 'CEOs of SMBs (50-500 employees)',
    format: ['Hardcover', 'Paperback', 'Kindle'],
    price: '$29.99',
    amazonLink: 'https://amazon.com',
    coverImage: '/images/book-cover-ceo.png',
    status: 'available',
  },
  {
    id: '2',
    title: "The SMB CFO's Financial Analytics Handbook",
    subtitle: 'Unlocking Profitability and Growth',
    description: 'Coming soon: The essential guide for CFOs looking to transform their finance function with analytics, AI, and modern tools.',
    targetAudience: 'CFOs, VPs of Finance, Controllers',
    format: ['Hardcover', 'Paperback', 'Kindle'],
    price: '$34.99',
    amazonLink: '#',
    coverImage: '/images/book-cover-cfo.png',
    status: 'coming-soon',
  },
  {
    id: '3',
    title: "The SMB COO's Operations Excellence Blueprint",
    subtitle: 'Mastering Processes, People & Profitability',
    description: 'Coming soon: Practical frameworks for operations leaders who need to scale efficiently without losing quality.',
    targetAudience: 'COOs, Operations Directors',
    format: ['Hardcover', 'Paperback', 'Kindle'],
    price: '$29.99',
    amazonLink: '#',
    coverImage: '/images/book-cover-coo.png',
    status: 'coming-soon',
  },
  {
    id: '4',
    title: "The SMB CTO's Technology Leadership Guide",
    subtitle: 'Practical Strategies for Small & Medium Businesses',
    description: 'Coming soon: A comprehensive guide for technology leaders in SMBs covering infrastructure, security, team building, and digital transformation.',
    targetAudience: 'CTOs, CIOs, VP of Engineering',
    format: ['Hardcover', 'Paperback', 'Kindle'],
    price: '$34.99',
    amazonLink: '#',
    coverImage: '/images/book-cover-cto.png',
    status: 'coming-soon',
  },
];

const Books = () => {
  return (
    <section id="books" className="py-24 bg-dark-blue relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-accent-gold" />
            <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
              Publications
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Data-Driven Playbooks for the C-Suite
          </h2>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Practical guides, frameworks, and questions to help executives make better decisions 
            and drive real ROI from their data.
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card-bg border border-accent-gold/20 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Book Cover Image */}
              <div className="aspect-[2/3] relative overflow-hidden">
                {book.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4 bg-accent-gold text-dark-blue text-xs font-bold px-3 py-1 rounded-full z-10">
                    Coming Soon
                  </div>
                )}
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Book Details */}
              <div className="p-6">
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {book.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent-gold">Target:</span>
                    <span className="text-text-secondary">{book.targetAudience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent-gold">Formats:</span>
                    <span className="text-text-secondary">{book.format.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent-gold">Price:</span>
                    <span className="text-white font-semibold">{book.price}</span>
                  </div>
                </div>

                {book.status === 'available' ? (
                  <Button
                    onClick={() => window.open(book.amazonLink, '_blank')}
                    className="w-full bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy on Amazon
                  </Button>
                ) : (
                  <Button
                    disabled
                    variant="outline"
                    className="w-full border-accent-gold/50 text-accent-gold/50 cursor-not-allowed"
                  >
                    Coming Soon
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bulk Orders / Inquiries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-card-bg border border-accent-gold/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              Bulk Orders & Corporate Licensing
            </h3>
            <p className="text-text-secondary mb-6">
              Interested in purchasing multiple copies for your leadership team or organization? 
              Contact us for volume discounts and corporate licensing options.
            </p>
            <Button
              onClick={() => window.location.href = 'mailto:books@factsconsulting.com'}
              variant="outline"
              className="border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 font-semibold px-8"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Contact for Bulk Orders
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Books;
