import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, Play, Pause } from 'lucide-react';
import StatCounter from '@/components/StatCounter';
import { useState, useRef } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  const onEnded = () => setIsPlaying(false);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
  };

  return (
    <div className="bg-card-bg rounded-xl p-4 border border-accent-gold/20 mb-8 flex items-center gap-4">
      <audio
        ref={audioRef}
        src="/audio/BobKatzIntro.mp3"
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
      <button
        onClick={toggle}
        className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0 hover:bg-accent-gold-hover transition-colors"
      >
        {isPlaying
          ? <Pause className="w-4 h-4 text-dark-blue" fill="currentColor" />
          : <Play className="w-4 h-4 text-dark-blue ml-0.5" fill="currentColor" />
        }
      </button>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium mb-1">Meet Bob Katz</p>
        <div
          className="h-1.5 bg-white/10 rounded-full cursor-pointer"
          onClick={seek}
        >
          <div
            className="h-full bg-accent-gold rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Award className="w-5 h-5" />,
      text: 'Industry-specialized knowledge',
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'People-first approach',
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: 'Outcome-driven solutions',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: 'Proven track record',
    },
  ];

  const stats = [
    { value: 100, suffix: '+', label: 'Clients Served' },
    { value: 25, suffix: '+', label: 'Years Experience' },
    { value: 50, suffix: '+', label: 'Adaptive Planning Implementations' },
    { value: 25, suffix: '+', label: 'Industries Served' },
  ];

  return (
    <section id="about" className="py-24 bg-navy">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Images */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/team-meeting.jpg"
                alt="FACTS Consulting Team"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium">
                  Our Team
                </span>
                <p className="text-white text-sm mt-1">Expert consultants at work</p>
              </div>
            </div>
          </motion.div>

          {/* Partnership Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/partnership.jpg"
                alt="Business Partnership"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium">
                  Partnership
                </span>
                <p className="text-white text-sm mt-1">Building lasting relationships</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-accent-gold" />
              <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
                Why FACTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Choose FACTS?
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We combine deep industry expertise with innovative approaches to deliver
              measurable results. Our team of seasoned professionals brings decades of
              experience across finance, analytics, and transformation.
            </p>

            {/* Audio intro */}
            <AudioPlayer />

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-accent-gold">{benefit.icon}</div>
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="bg-card-bg rounded-2xl p-6 border border-accent-gold/10 text-center"
              >
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
