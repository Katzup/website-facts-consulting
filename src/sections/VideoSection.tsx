import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-dark-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Learn More
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See How FACTS Can Transform Your Business
          </h2>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Watch our explainer video to understand how our comprehensive approach 
            to finance, analytics, consulting, and transformation delivers results.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent-gold/20">
            {/* Video Thumbnail / Placeholder */}
            {!isPlaying ? (
              <div className="relative aspect-video bg-navy">
                {/* Background Image */}
                <img
                  src="/images/analytics-visual.jpg"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-60"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/40 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-accent-gold/30 transition-shadow duration-300"
                  >
                    <Play className="w-8 h-8 text-dark-blue ml-1" fill="currentColor" />
                  </motion.button>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium">
                      Explainer Video
                    </span>
                    <span className="text-text-secondary text-sm">2:30 min</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold">
                    The FACTS Approach to Business Transformation
                  </h3>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video bg-navy">
                {/* Embedded Video - FACTS Explainer */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VvI1cPaXksM?autoplay=1"
                  title="FACTS Consulting Explainer Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-dark-blue/80 rounded-full flex items-center justify-center text-white hover:bg-dark-blue transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Video Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6 mt-8"
          >
            {[
              { title: 'Our Process', desc: 'How we work with clients' },
              { title: 'Success Stories', desc: 'Real results from real businesses' },
              { title: 'Get Started', desc: 'Your journey with FACTS' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card-bg rounded-xl p-6 border border-accent-gold/10 text-center"
              >
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
