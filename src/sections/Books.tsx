import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ExternalLink } from 'lucide-react';

// ─── C-Suite Playbook Books ───────────────────────────────────────────────────

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
    description: 'A comprehensive guide for CEOs of small and medium businesses. Covers everything from financial metrics to team performance, giving you the questions you need to ask—and the frameworks to find the answers.',
    targetAudience: 'CEOs of SMBs (50–500 employees)',
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
    description: 'The essential guide for CFOs looking to transform their finance function with analytics, AI, and modern tools.',
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
    description: 'Practical frameworks for operations leaders who need to scale efficiently without losing quality.',
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
    description: 'A comprehensive guide for technology leaders covering infrastructure, security, team building, and digital transformation.',
    targetAudience: 'CTOs, CIOs, VP of Engineering',
    format: ['Hardcover', 'Paperback', 'Kindle'],
    price: '$34.99',
    amazonLink: '#',
    coverImage: '/images/book-cover-cto.png',
    status: 'coming-soon',
  },
];

// ─── Fiction Series Data ───────────────────────────────────────────────────────

interface FictionBook {
  id: string;
  title: string;
  coverImage: string;
}

const thrillers: FictionBook[] = [
  { id: 'anomaly_detection',  title: 'Anomaly Detection',  coverImage: '/images/anomaly_detection_cover.png' },
  { id: 'dead_reckoning',     title: 'Dead Reckoning',     coverImage: '/images/dead_reckoning_cover.png' },
  { id: 'gradient_descent',   title: 'Gradient Descent',   coverImage: '/images/gradient_descent_cover.png' },
  { id: 'katz_centrality',    title: 'Katz Centrality',    coverImage: '/images/katz_centrality_cover.png' },
  { id: 'latent_factor',      title: 'Latent Factor',      coverImage: '/images/latent_factor_cover.png' },
  { id: 'markov_chain',       title: 'Markov Chain',       coverImage: '/images/markov_chain_cover.png' },
  { id: 'monte_carlo',        title: 'Monte Carlo',        coverImage: '/images/monte_carlo_cover.png' },
  { id: 'null_hypothesis',    title: 'Null Hypothesis',    coverImage: '/images/null_hypothesis_cover.png' },
  { id: 'overfitting',        title: 'Overfitting',        coverImage: '/images/overfitting_cover.png' },
  { id: 'selection_bias',     title: 'Selection Bias',     coverImage: '/images/selection_bias_cover.png' },
  { id: 'survivorship_bias',  title: 'Survivorship Bias',  coverImage: '/images/survivorship_bias_cover.png' },
];

const mysteries: FictionBook[] = [
  { id: 'the_confidence_interval', title: 'The Confidence Interval', coverImage: '/images/the_confidence_interval_cover.png' },
  { id: 'the_deduction',           title: 'The Deduction',           coverImage: '/images/the_deduction_cover.png' },
  { id: 'the_false_positive',      title: 'The False Positive',      coverImage: '/images/the_false_positive_cover.png' },
  { id: 'the_hidden_variable',     title: 'The Hidden Variable',     coverImage: '/images/the_hidden_variable_cover.png' },
  { id: 'the_holdout',             title: 'The Holdout',             coverImage: '/images/the_holdout_cover.png' },
  { id: 'the_outlier',             title: 'The Outlier',             coverImage: '/images/the_outlier_cover.png' },
  { id: 'the_posterior',           title: 'The Posterior',           coverImage: '/images/the_posterior_cover.png' },
  { id: 'the_prior',               title: 'The Prior',               coverImage: '/images/the_prior_cover.png' },
  { id: 'type_ii',                 title: 'Type II',                 coverImage: '/images/type_ii_cover.png' },
  { id: 'null_and_void',           title: 'Null and Void',           coverImage: '/images/null_and_void_cover.png' },
  { id: 'ground_truth',            title: 'Ground Truth',            coverImage: '/images/ground_truth_cover.png' },
  { id: 'regression',              title: 'Regression',              coverImage: '/images/regression_cover.png' },
  { id: 'signal_to_noise',         title: 'Signal to Noise',         coverImage: '/images/signal_to_noise_cover.png' },
  { id: 'the_black_swan',          title: 'The Black Swan',          coverImage: '/images/the_black_swan_cover.png' },
];

const sfSeries: FictionBook[] = [
  { id: 'bayesian_prior',      title: 'Bayesian Prior',      coverImage: '/images/bayesian_prior_cover.png' },
  { id: 'causal_inference',    title: 'Causal Inference',    coverImage: '/images/causal_inference_cover.png' },
  { id: 'convergence',         title: 'Convergence',         coverImage: '/images/convergence_cover.png' },
  { id: 'decision_tree',       title: 'Decision Tree',       coverImage: '/images/decision_tree_cover.png' },
  { id: 'ensemble',            title: 'Ensemble',            coverImage: '/images/ensemble_cover.png' },
  { id: 'entropy',             title: 'Entropy',             coverImage: '/images/entropy_cover.png' },
  { id: 'the_eigenvalue',      title: 'The Eigenvalue',      coverImage: '/images/the_eigenvalue_cover.png' },
  { id: 'the_gradient',        title: 'The Gradient',        coverImage: '/images/the_gradient_cover.png' },
  { id: 'overfitting_sf',      title: 'Overfitting',         coverImage: '/images/overfitting_sf_cover.png' },
  { id: 'principal_components',title: 'Principal Components',coverImage: '/images/principal_components_cover.png' },
  { id: 'random_walk',         title: 'Random Walk',         coverImage: '/images/random_walk_cover.png' },
  { id: 'signal',              title: 'Signal',              coverImage: '/images/signal_cover.png' },
];

// ─── Fiction Book Card ────────────────────────────────────────────────────────

const FictionBookCard = ({ book, index }: { book: FictionBook; index: number }) => (
  <motion.div
    key={book.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.04 }}
    className="group cursor-pointer"
  >
    <div className="aspect-[2/3] relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
        <span className="text-white text-xs font-medium leading-tight">{book.title}</span>
      </div>
    </div>
    <p className="mt-2 text-text-secondary text-xs text-center leading-tight line-clamp-2">
      {book.title}
    </p>
  </motion.div>
);

// ─── Series Section ───────────────────────────────────────────────────────────

const FictionSeries = ({
  title,
  description,
  books,
  accentColor,
  delay = 0,
}: {
  title: string;
  description: string;
  books: FictionBook[];
  accentColor: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="mb-16"
  >
    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
      <span className={`w-2 h-8 ${accentColor} rounded-full`} />
      {title}
    </h3>
    <p className="text-text-secondary mb-8 ml-5">{description}</p>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
      {books.map((book, i) => (
        <FictionBookCard key={book.id} book={book} index={i} />
      ))}
    </div>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Books = () => {
  return (
    <section id="books" className="py-24 bg-dark-blue relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── C-Suite Playbooks ── */}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card-bg border border-accent-gold/20 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-[2/3] relative overflow-hidden">
                {book.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4 bg-accent-gold text-dark-blue text-xs font-bold px-3 py-1 rounded-full z-10">
                    Coming Soon
                  </div>
                )}
                <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">{book.description}</p>
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

        {/* ── Fiction Series Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-accent-gold" />
            <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
              Fiction Series
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Data Science Fiction
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Where algorithms meet narrative — three fiction series that bring data science concepts
            to life through gripping stories.
          </p>
        </motion.div>

        {/* ── Analytics Thrillers ── */}
        <FictionSeries
          title="Analytics Thrillers"
          description="11 gripping thrillers where data science, statistics, and machine learning collide with crime and conspiracy."
          books={thrillers}
          accentColor="bg-purple-500"
          delay={0}
        />

        {/* ── Data Science Mysteries ── */}
        <FictionSeries
          title="Data Science Mysteries"
          description="14 mysteries in the tradition of Agatha Christie, Raymond Chandler, and Stieg Larsson — solved with data."
          books={mysteries}
          accentColor="bg-accent-gold"
          delay={0.1}
        />

        {/* ── Analytics SF Series ── */}
        <FictionSeries
          title="Analytics SF Series"
          description="12 science fiction novels exploring AI, algorithms, and the future of humanity through the lens of data science."
          books={sfSeries}
          accentColor="bg-blue-500"
          delay={0.2}
        />

        {/* ── Bulk Orders CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-center"
        >
          <div className="bg-card-bg border border-accent-gold/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Bulk Orders & Corporate Licensing</h3>
            <p className="text-text-secondary mb-6">
              Interested in purchasing multiple copies for your leadership team or organization?
              Contact us for volume discounts and corporate licensing options.
            </p>
            <Button
              onClick={() => (window.location.href = 'mailto:books@factsconsulting.com')}
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
