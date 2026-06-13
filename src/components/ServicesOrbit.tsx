import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calculator, PieChart, Briefcase, Zap, Brain, BookOpen } from 'lucide-react';

// The six FACTS service pillars — kept in sync with Services.tsx.
// Each node rides a tilted orbit and is scaled / brightened as it swings
// to the FRONT (bottom, nearest the viewer) and shrunk / dimmed at the BACK
// (top), faking 3D depth without a WebGL or 3D asset.
const services = [
  { icon: Calculator, label: 'Financial Advisory' },
  { icon: PieChart, label: 'Data Analytics' },
  { icon: Briefcase, label: 'Business Consulting' },
  { icon: Zap, label: 'FP&A Technology' },
  { icon: Brain, label: 'AI Services' },
  { icon: BookOpen, label: 'Accounting' },
];

const ORBIT_DURATION = 32_000; // ms for one full revolution
const RADIUS_X = 175;          // horizontal radius (px)
const RADIUS_Y = 70;           // vertical radius — smaller => stronger tilt/perspective

const ServicesOrbit = () => {
  const prefersReduced = useReducedMotion();
  const count = services.length;
  const [t, setT] = useState(0); // 0..1 progress through one revolution

  useEffect(() => {
    if (prefersReduced) return;
    let raf = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = (now - start) % ORBIT_DURATION;
      setT(elapsed / ORBIT_DURATION);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[480px]"
      role="img"
      aria-label="FACTS Consulting services: Financial Advisory, Data Analytics, Business Consulting, FP&A Technology, AI Services, and Accounting orbiting a central hub."
    >
      {/* Ambient glow behind the whole system */}
      <div className="absolute inset-0 rounded-full bg-accent-gold/5 blur-3xl" />

      {/* Tilted decorative orbit ring (ellipse) */}
      <div
        className="absolute left-1/2 top-1/2 rounded-[50%] border border-accent-gold/10"
        style={{
          width: RADIUS_X * 2,
          height: RADIUS_Y * 2,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Central FACTS hub — sits at depth midpoint */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-2xl border border-accent-gold/30 bg-dark-blue shadow-2xl"
          animate={prefersReduced ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-2xl font-bold tracking-tight text-accent-gold">FACTS</span>
        </motion.div>
      </div>

      {/* Service nodes positioned each frame from the shared progress `t` */}
      {services.map((service, i) => {
        const angle = (i / count) * 2 * Math.PI + t * 2 * Math.PI - Math.PI / 2;
        const x = Math.cos(angle) * RADIUS_X;
        const y = Math.sin(angle) * RADIUS_Y;

        // depth: sin(angle) = -1 at top (back), +1 at bottom (front)
        const depth = Math.sin(angle);              // -1..1
        const norm = (depth + 1) / 2;               // 0 (back) .. 1 (front)
        const scale = 0.7 + norm * 0.5;             // 0.7 back .. 1.2 front
        const opacity = 0.45 + norm * 0.55;         // 0.45 back .. 1.0 front
        const zIndex = Math.round(norm * 20);       // front nodes render above hub
        const Icon = service.icon;

        return (
          <div
            key={service.label}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`,
              opacity,
              zIndex,
              willChange: 'transform, opacity',
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent-gold/20 bg-card-bg"
                style={{
                  boxShadow:
                    norm > 0.75
                      ? `0 0 ${12 + norm * 16}px rgba(201,169,98,${0.25 + norm * 0.25})`
                      : '0 4px 20px rgba(0,0,0,0.15)',
                }}
              >
                <Icon className="h-6 w-6 text-accent-gold" />
              </div>
              {/* Label only legible on front-most nodes — hidden when far back */}
              <span
                className="whitespace-nowrap text-xs font-medium text-text-secondary transition-opacity"
                style={{ opacity: norm > 0.5 ? 1 : 0 }}
              >
                {service.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesOrbit;
