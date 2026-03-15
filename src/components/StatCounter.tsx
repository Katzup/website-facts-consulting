import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const StatCounter = ({ value, suffix = '', label }: StatCounterProps) => {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-accent-gold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-text-secondary text-sm">{label}</div>
    </div>
  );
};

export default StatCounter;
