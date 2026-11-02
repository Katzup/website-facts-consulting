import type { ComponentType } from 'react';

// Charts drawn from each study's own published numbers (see src/data/researchStudies.ts for sources).
// Bars are measured from zero; the finding gets the dark accent, everything else stays grey.

const INK = '#1a1f2e';
const MUTED = '#b8bfcc';
const AXIS = '#6b7280';
const TEXT2 = '#4b5563';

const pct = (v: number, digits = 2): string => `${v > 0 ? '+' : ''}${v.toFixed(digits)}`;

// Kronos-1: top-fifth minus bottom-fifth 20-day excess return, average per year, in percent.
// Source: Kronos-1 stage1_report.txt (2026-10-04), per-year spread in basis points / 100.
const kronosYears = [
  { year: 2016, spread: 1.844 },
  { year: 2017, spread: -1.107 },
  { year: 2018, spread: -0.271 },
  { year: 2019, spread: -0.775 },
  { year: 2020, spread: -2.272 },
  { year: 2021, spread: 1.023 },
  { year: 2022, spread: 0.003 },
  { year: 2023, spread: -1.383 },
  { year: 2024, spread: -2.029 },
  { year: 2025, spread: -1.042 },
  { year: 2026, spread: -2.42, partial: true },
];

export const KronosYearChart = () => {
  const negative = kronosYears.filter((r) => r.spread < 0).length;
  const left = 44, right = 620, zero = 100, scale = 42; // px per percentage point
  const band = (right - left) / kronosYears.length, w = band * 0.62;
  const x = (i: number) => left + i * band + (band - w) / 2;
  return (
    <figure className="bg-white rounded-xl p-5 shadow-card mb-10">
      <figcaption className="mb-3">
        <div className="font-semibold text-dark-blue">Kronos's top picks lagged its bottom picks in most years</div>
        <div className="text-sm text-gray-600">
          Top fifth minus bottom fifth: average 20-day return gap within each year, in percentage points; negative in {negative} of{' '}
          {kronosYears.length} years
        </div>
      </figcaption>
      <svg viewBox="0 0 640 252" role="img" aria-labelledby="kronos-chart-desc" className="w-full h-auto">
        <desc id="kronos-chart-desc">
          {kronosYears.map((r) => `${r.year}: ${pct(r.spread)}%`).join('; ')}
        </desc>
        <line x1={left} x2={right} y1={zero} y2={zero} stroke={AXIS} strokeWidth="1" />
        <text x={left - 6} y={zero + 4} textAnchor="end" fontSize="13" fill={TEXT2}>0</text>
        {kronosYears.map((r, i) => {
          const h = Math.max(1.5, Math.abs(r.spread) * scale);
          const y = r.spread >= 0 ? zero - h : zero;
          return (
            <g key={r.year}>
              <rect x={x(i)} y={y} width={w} height={h} rx="2" fill={r.spread < 0 ? INK : MUTED}>
                <title>{`${r.year}${r.partial ? ' (January–April)' : ''}: ${pct(r.spread)}% per 20 days`}</title>
              </rect>
              <text
                x={x(i) + w / 2}
                y={r.spread >= 0 ? y - 6 : y + h + 15}
                textAnchor="middle"
                fontSize="12"
                fill={INK}
              >
                {pct(r.spread, 1)}
              </text>
              <text x={x(i) + w / 2} y="245" textAnchor="middle" fontSize="13" fill={TEXT2}>
                {`'${String(r.year).slice(2)}${r.partial ? '*' : ''}`}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="text-xs text-gray-500 mt-2">
        * 2026 covers January to April. A working signal would sit above zero in most years. Source: Kronos-1 results,
        538 weekly forecast dates.
      </p>
    </figure>
  );
};

// Practicum: the tournament's recency-weighted percentile score for three allocation rules.
// Source: Visual Trading System final report, Table 4 (step = 1, 3,076 rolling 365-day windows, 2016–2025).
const practicumRows = [
  { label: 'Chart-reading neural network', score: 41.43 },
  { label: 'Buy the same amount daily', score: 41.94, baseline: true },
  { label: 'Trend z-score signal (final)', score: 44.95, best: true },
];

export const PracticumScoreChart = () => {
  const left = 230, right = 600, max = 50, rowH = 48, y0 = 14;
  const x = (v: number) => left + (v / max) * (right - left);
  const ticks = [0, 10, 20, 30, 40, 50];
  return (
    <figure className="bg-white rounded-xl p-5 shadow-card mb-10">
      <figcaption className="mb-3">
        <div className="font-semibold text-dark-blue">
          The simple trend signal scored 3 points above buying daily; the neural network scored below it
        </div>
        <div className="text-sm text-gray-600">
          Tournament score: where a strategy's Bitcoin bought per dollar falls between the lowest and highest possible
          in each rolling 365-day window (0% = lowest, 100% = highest), averaged over 3,076 windows from 2016 to 2025
          with recent windows weighted more. It is not a return and not a win rate.
        </div>
      </figcaption>
      <svg viewBox="0 0 640 200" role="img" aria-labelledby="practicum-chart-desc" className="w-full h-auto">
        <desc id="practicum-chart-desc">{practicumRows.map((r) => `${r.label}: ${r.score}%`).join('; ')}</desc>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={x(t)} x2={x(t)} y1={y0 - 4} y2={y0 + rowH * practicumRows.length - 10} stroke="#e5e7eb" />
            <text x={x(t)} y={y0 + rowH * practicumRows.length + 8} textAnchor="middle" fontSize="12" fill={TEXT2}>
              {`${t}%`}
            </text>
          </g>
        ))}
        {practicumRows.map((r, i) => {
          const y = y0 + i * rowH;
          return (
            <g key={r.label}>
              <text x={left - 10} y={y + 19} textAnchor="end" fontSize="14" fill={INK}>
                {r.label}
              </text>
              <rect x={left} y={y} width={x(r.score) - left} height="28" rx="2" fill={r.best ? INK : MUTED}>
                <title>{`${r.label}: ${r.score}%`}</title>
              </rect>
              <text x={x(r.score) + 6} y={y + 19} fontSize="14" fontWeight={r.best ? 700 : 400} fill={INK}>
                {`${r.score.toFixed(2)}%`}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="text-xs text-gray-500 mt-2">
        The baseline buys the same dollar amount every day. Source: Visual Trading System final practicum report,
        Georgia Tech OMSA, April 2026, Table 4.
      </p>
    </figure>
  );
};

export const studyCharts: Record<string, ComponentType> = {
  'kronos-1': KronosYearChart,
  'visual-trading-system': PracticumScoreChart,
};
