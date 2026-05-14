import { motion } from 'framer-motion';
import { Play, X, ExternalLink, BookOpen } from 'lucide-react';
import { useState } from 'react';

interface Paper {
  title: string;
  venue: string;
  abstract: string;
  url?: string;
}

const papers: Paper[] = [
  {
    title: 'Visual Trading System: Bitcoin Accumulation Signal Engineering — Regime-Relative Dampening via OLS Z-Score',
    venue: 'Georgia Tech OMSA · CSE 6748 · Spring 2026 · Trilemma Foundation Practicum',
    abstract: 'A two-phase study of Bitcoin accumulation strategy. Phase 1 implemented a Gramian Angular Field CNN classifier that failed to outperform DCA (41.43% vs 41.94% RW). Phase 2 pivoted to OLS-based signal engineering — a 252-day rolling z-score achieving 44.95% RW and a persistent +3.01pp edge over neutral DCA across 3,076 rolling windows (2016–2025). Null results from two rejected variants are documented as a secondary scientific contribution.',
  },
];

const Research = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="research" className="py-24 bg-dark-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
              Research & Publications
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Academic Research
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Graduate research from Georgia Tech's MS in Analytics (OMSA) program — applying
            machine learning, signal engineering, and statistical methods to real-world financial
            problems. Practicum completed with Trilemma Foundation (CSE 6748, Spring 2026).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Practicum Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="text-white font-semibold text-lg mb-3">
              Practicum Project
            </h3>
            <div className="relative rounded-2xl overflow-hidden border border-accent-gold/20 shadow-2xl">
              {!videoOpen ? (
                <div className="relative aspect-video bg-navy">
                  <img
                    src={`https://img.youtube.com/vi/dPQTMGjO_cM/maxresdefault.jpg`}
                    alt="Bitcoin Win By Failing First"
                    className="w-full h-full object-cover opacity-70"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://img.youtube.com/vi/dPQTMGjO_cM/hqdefault.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setVideoOpen(true)}
                      className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Play className="w-6 h-6 text-dark-blue ml-1" fill="currentColor" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-2 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium">
                      Georgia Tech OMSA
                    </span>
                    <h4 className="text-white font-semibold mt-2">
                      Visual Trading System: Bitcoin Accumulation Signal Engineering
                    </h4>
                    <p className="text-text-secondary text-sm mt-1">
                      OMSA Practicum (CSE 6748) with Trilemma Foundation — regime-relative dampening via OLS Z-Score achieving a +3.01pp edge over neutral DCA across 3,076 rolling windows (2016–2025)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video bg-navy">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dPQTMGjO_cM?autoplay=1"
                    title="Bitcoin Win By Failing First"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                  <button
                    onClick={() => setVideoOpen(false)}
                    className="absolute top-3 right-3 w-8 h-8 bg-dark-blue/80 rounded-full flex items-center justify-center text-white hover:bg-dark-blue transition-colors z-10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Papers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="text-white font-semibold text-lg mb-3">
              Selected Papers
            </h3>
            {papers.length > 0 ? (
              <div className="space-y-4">
                {papers.map((paper, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-card-bg rounded-xl p-5 border border-accent-gold/10 hover:border-accent-gold/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BookOpen className="w-4 h-4 text-accent-gold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-white font-medium text-sm leading-snug">
                            {paper.title}
                          </h4>
                          {paper.url && (
                            <a
                              href={paper.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-gold hover:text-accent-gold-hover flex-shrink-0"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-accent-gold/70 text-xs mt-1">{paper.venue}</p>
                        <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                          {paper.abstract}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-card-bg rounded-xl p-6 border border-accent-gold/10 text-center">
                <BookOpen className="w-8 h-8 text-accent-gold/40 mx-auto mb-3" />
                <p className="text-text-secondary text-sm">Papers coming soon</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
