import { motion, useReducedMotion } from 'framer-motion';
import { Calculator, PieChart, Briefcase, Zap, Brain, BookOpen } from 'lucide-react';

// The six FACTS service pillars — kept in sync with Services.tsx.
// Each rides a slowly-rotating ring around the central hub and rises to
// prominence (scale + glow) as it reaches the front of the orbit.
const services = [
  { icon: Calculator, label: 'Financial Advisory' },
  { icon: PieChart, label: 'Data Analytics' },
  { icon: Briefcase, label: 'Business Consulting' },
  { icon: Zap, label: 'FP&A Technology' },
  { icon: Brain, label: 'AI Services' },
  { icon: BookOpen, label: 'Accounting' },
];

const ORBIT_DURATION = 32; // seconds for one full revolution — slow and premium

const ServicesOrbit = () => {
  const prefersReduced = useReducedMotion();
  const count = services.length;
  const radius = 150; // px from center to each node

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[480px]"
      role="img"
      aria-label="FACTS Consulting services: Financial Advisory, Data Analytics, Business Consulting, FP&A Technology, AI Services, and Accounting orbiting a central hub."
    >
      {/* Ambient glow behind the whole system */}
      <div className="absolute inset-0 rounded-full bg-accent-gold/5 blur-3xl" />

      {/* Decorative orbit rings */}
      <div className="absolute inset-[8%] rounded-full border border-accent-gold/10" />
      <div className="absolute inset-[22%] rounded-full border border-accent-gold/[0.07]" />

      {/* Rotating ring carrying the service nodes */}
      <motion.div
        className="absolute inset-0"
        animate={prefersReduced ? undefined : { rotate: 360 }}
        transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      >
        {services.map((service, i) => {
          const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const Icon = service.icon;

          return (
            <div
              key={service.label}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
            >
              {/* Counter-rotate each node so icons stay upright as the ring spins */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={prefersReduced ? undefined : { rotate: -360 }}
                transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent-gold/20 bg-card-bg shadow-card"
                  animate={
                    prefersReduced
                      ? undefined
                      : { boxShadow: [
                          '0 4px 20px rgba(0,0,0,0.15)',
                          '0 0 24px rgba(201,169,98,0.35)',
                          '0 4px 20px rgba(0,0,0,0.15)',
                        ] }
                  }
                  transition={{
                    duration: ORBIT_DURATION / count,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: (i * ORBIT_DURATION) / count,
                  }}
                >
                  <Icon className="h-6 w-6 text-accent-gold" />
                </motion.div>
                <span className="whitespace-nowrap text-xs font-medium text-text-secondary">
                  {service.label}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Central FACTS hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-2xl border border-accent-gold/30 bg-dark-blue shadow-2xl"
          animate={prefersReduced ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-2xl font-bold tracking-tight text-accent-gold">
            FACTS
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesOrbit;