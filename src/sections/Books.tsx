import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ShoppingCart, ChevronRight, Lock } from 'lucide-react';
import { smbBooks, fictionBooks, type Book } from '@/data/books';

type TabId = 'nonfiction' | 'sf' | 'thrillers' | 'mysteries';

interface BookCardProps {
  book: Book;
  index: number;
}

const BookCard = ({ book, index }: BookCardProps) => {
  const [imageError, setImageError] = useState(false);

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
      className="group relative bg-card-bg rounded-2xl overflow-hidden border border-transparent hover:border-accent-gold/30 transition-all duration-300"
    >
      {/* Cover Image */}
      <div className="relative aspect-[2/3] overflow-hidden bg-dark-blue">
        {!imageError ? (
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-dark-blue">
            <BookOpen className="w-16 h-16 text-accent-gold/30" />
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {book.status === 'available' && (
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              Available
            </Badge>
          )}
          {book.status === 'coming-soon' && (
            <Badge className="bg-accent-gold/20 text-accent-gold border-accent-gold/30">
              Coming Soon
            </Badge>
          )}
          {book.status === 'preorder' && (
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              Pre-Order
            </Badge>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-dark-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="outline"
            className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-dark-blue font-semibold"
            disabled={book.status === 'coming-soon'}
          >
            {book.status === 'coming-soon' ? (
              <>
                <Lock className="w-4 h-4 mr-2" />
                Notify Me
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Get the Book
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-accent-gold text-xs font-bold tracking-wider uppercase">
            {book.abbreviation}
          </span>
          <span className="text-text-secondary/50 text-xs">|</span>
          <span className="text-text-secondary text-xs">
            {book.series} #{book.seriesOrder}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 leading-tight group-hover:text-accent-gold transition-colors">
          {book.title}
        </h3>

        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {book.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-text-secondary/60">
            {book.role}
          </span>
          <ChevronRight className="w-4 h-4 text-text-secondary/40 group-hover:text-accent-gold group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

const TABS: { id: TabId; label: string; count: number }[] = [
  { id: 'nonfiction', label: 'SMB CxO Playbooks', count: smbBooks.length },
  { id: 'sf',        label: 'Analytics SF Series', count: fictionBooks.filter(b => b.series === 'Analytics SF Series').length },
  { id: 'thrillers', label: 'Analytics Thrillers', count: fictionBooks.filter(b => b.series === 'Analytics Thrillers Series').length },
  { id: 'mysteries', label: 'Data Science Mysteries', count: fictionBooks.filter(b => b.series === 'Data Science Mysteries Series').length },
];

const Books = () => {
  const [activeTab, setActiveTab] = useState<TabId>('nonfiction');

  const books: Book[] =
    activeTab === 'nonfiction' ? smbBooks :
    activeTab === 'sf'         ? fictionBooks.filter(b => b.series === 'Analytics SF Series') :
    activeTab === 'thrillers'  ? fictionBooks.filter(b => b.series === 'Analytics Thrillers Series') :
                                 fictionBooks.filter(b => b.series === 'Data Science Mysteries Series');

  return (
    <section id="books" className="py-24 bg-dark-blue">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-accent-gold" />
            <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
              Publications
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Books by Bob Katz
          </h2>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Comprehensive playbooks for SMB leaders and data science fiction across three series.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {TABS.map(tab => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              onClick={() => setActiveTab(tab.id)}
              className={
                activeTab === tab.id
                  ? 'bg-accent-gold text-dark-blue hover:bg-accent-gold-hover'
                  : 'border-accent-gold/30 text-text-secondary hover:text-accent-gold hover:border-accent-gold'
              }
            >
              {tab.id === 'nonfiction' && <BookOpen className="w-4 h-4 mr-2" />}
              {tab.label} ({tab.count})
            </Button>
          ))}
        </motion.div>

        {/* Books Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {books.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-4">
            Want to be notified when new books are released?
          </p>
          <Button
            onClick={() => window.location.href = '#contact'}
            className="bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold px-8 py-6 text-base"
          >
            Join the Early Access List
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Books;
