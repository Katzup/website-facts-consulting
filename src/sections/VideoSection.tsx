import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

interface Video {
  id: string;        // YouTube video ID
  label: string;     // card label — the question the video answers
  duration?: string;
}

// Featured video shows large at the top; the rest fill the thumbnail row below.
const featured: Video = {
  id: 'sKvXDsvDOyA',
  label: "Why isn't faster AI enough for better financial decisions?",
};

const videos: Video[] = [
  {
    id: 'JbY6jFH8E78',
    label: 'Which customers are actually profitable once you count the cost to serve them?',
  },
  {
    id: 'sGPdQnnJ1no',
    label: 'How do you raise prices without losing your best customers?',
  },
  {
    id: 'VvI1cPaXksM',
    label: 'The FACTS approach to business transformation',
  },
];

const VideoCard = ({ video, index }: { video: Video; index: number }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden border border-accent-gold/10 bg-card-bg"
    >
      <div className="relative aspect-video bg-navy">
        {!playing ? (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Play: ${video.label}`}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.label}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/70 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-dark-blue ml-0.5" fill="currentColor" />
              </span>
            </span>
          </button>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.label}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        )}
      </div>
      <p className="text-white text-sm font-medium p-4 leading-snug">{video.label}</p>
    </motion.div>
  );
};

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

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
            Short explainer videos on the questions SMB leaders actually ask —
            pricing, profitability, and getting real value from AI.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent-gold/20">
            {!playing ? (
              <div className="relative aspect-video bg-navy">
                <img
                  src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`}
                  alt={featured.label}
                  className="w-full h-full object-cover opacity-60"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${featured.id}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPlaying(true)}
                    className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-accent-gold/30 transition-shadow duration-300"
                    aria-label={`Play: ${featured.label}`}
                  >
                    <Play className="w-8 h-8 text-dark-blue ml-1" fill="currentColor" />
                  </motion.button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium">
                    Featured
                  </span>
                  <h3 className="text-white text-xl font-semibold mt-2">{featured.label}</h3>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video bg-navy">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${featured.id}?autoplay=1`}
                  title={featured.label}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
                <button
                  onClick={() => setPlaying(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-dark-blue/80 rounded-full flex items-center justify-center text-white hover:bg-dark-blue transition-colors z-10"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Video grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6 mt-8"
          >
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
