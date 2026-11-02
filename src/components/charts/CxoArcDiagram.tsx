// CxO Advisor architecture: frameworks feed vertical, archetype-specific logic; the Boardroom decisions
// are a horizontal layer that runs across every archetype; the output is one reviewed decision analysis.
// HTML rather than SVG so the text stays readable; phones get a stacked version of the same structure.
import type { ReactNode } from 'react';

const archetypes = [
  { name: 'Subscription', number: 'Churn and net revenue retention' },
  { name: 'Physical product', number: 'Landed-cost margin and channel fees' },
  { name: 'Professional services', number: 'Realized rate and utilization' },
  { name: 'Manufacturing', number: 'Margin per hour of the constraint' },
  { name: 'Extraction', number: 'Scenario value under commodity prices' },
];
const settled = ['Break-even', 'Pricing power', 'Cash reserve', 'Customer concentration', 'Debt vs. equity', 'Firing a customer'];
const inProgress = ['Cost reduction', 'Capital allocation', 'Reseller vs. direct', 'Build, buy or partner'];
const outputs = [
  'A defensible recommendation, traced to its decisive number',
  'Evidence gaps named, and a refusal to answer when they matter',
  'An executive decision analysis, reviewed by me before it goes to a client',
];

const Chip = ({ children, dashed = false }: { children: string; dashed?: boolean }) => (
  <span
    className={`inline-block px-2.5 py-1 rounded-full text-xs mr-1.5 mb-1.5 ${
      dashed ? 'border border-dashed border-white/50 text-white/80' : 'bg-white/15 text-white'
    }`}
  >
    {children}
  </span>
);

const Down = () => (
  <div className="text-center text-accent-gold text-xl leading-none py-1.5" aria-hidden="true">
    ↓
  </div>
);

const Label = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] font-semibold tracking-wider uppercase text-gray-500 mb-2">{children}</p>
);

const FrameworksBar = () => (
  <div className="bg-white rounded-xl p-4 shadow-card text-center">
    <p className="font-semibold text-dark-blue">Frameworks</p>
    <p className="text-sm text-gray-600">
      Judgment from 19 C-suite books (CEO, CFO, CRO, COO, CHRO, FP&amp;A), encoded as rules
    </p>
  </div>
);

const BoardroomBand = () => (
  <div className="bg-dark-blue rounded-xl p-4 shadow-lg ring-2 ring-accent-gold/60">
    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
      <p className="font-semibold text-white">Boardroom decisions</p>
      <p className="text-xs text-accent-gold">Horizontal: the same decisions, applied across every archetype</p>
    </div>
    <div>
      {settled.map((d) => (
        <Chip key={d}>{d}</Chip>
      ))}
      {inProgress.map((d) => (
        <Chip key={d} dashed>
          {d}
        </Chip>
      ))}
    </div>
    <p className="text-[11px] text-white/60 mt-1">Solid: settled and locked by tests. Dashed: in progress.</p>
  </div>
);

const OutputBar = () => (
  <div className="bg-white rounded-xl p-4 shadow-card border-t-4 border-accent-gold">
    <p className="font-semibold text-dark-blue mb-2 text-center">Output</p>
    <ul className="grid md:grid-cols-3 gap-2 text-sm text-gray-700">
      {outputs.map((o) => (
        <li key={o} className="bg-light-bg rounded-lg px-3 py-2">
          {o}
        </li>
      ))}
    </ul>
  </div>
);

const CxoArcDiagram = () => (
  <figure
    className="mb-8"
    aria-label="CxO Advisor architecture: frameworks feed archetype-specific logic for five business types; Boardroom decisions run across all of them; the output is a reviewed decision analysis"
  >
    <FrameworksBar />
    <Down />

    {/* Desktop: archetype columns, with the Boardroom band crossing all of them */}
    <div className="hidden md:block">
      <Label>Vertical: archetype-specific logic</Label>
      <div className="grid grid-cols-5 gap-x-3" style={{ gridTemplateRows: 'auto auto auto' }}>
        {archetypes.map((a, i) => (
          <div key={`bg-${a.name}`} className="bg-white rounded-xl shadow-card" style={{ gridColumn: i + 1, gridRow: '1 / 4' }} />
        ))}
        {archetypes.map((a, i) => (
          <p
            key={`h-${a.name}`}
            className="relative px-3 pt-3 pb-6 font-semibold text-dark-blue text-sm leading-snug"
            style={{ gridColumn: i + 1, gridRow: 1 }}
          >
            {a.name}
          </p>
        ))}
        <div className="relative z-10 -mx-2" style={{ gridColumn: '1 / 6', gridRow: 2 }}>
          <BoardroomBand />
        </div>
        {archetypes.map((a, i) => (
          <p
            key={`f-${a.name}`}
            className="relative px-3 pt-6 pb-4 text-xs text-gray-600 leading-snug"
            style={{ gridColumn: i + 1, gridRow: 3 }}
          >
            <span className="text-gray-400">Decisive number: </span>
            {a.number}
          </p>
        ))}
      </div>
    </div>

    {/* Phones: the same structure, stacked */}
    <div className="md:hidden space-y-3">
      <div className="bg-white rounded-xl p-4 shadow-card">
        <Label>Vertical: archetype-specific logic</Label>
        <ul className="space-y-1.5 text-sm">
          {archetypes.map((a) => (
            <li key={a.name}>
              <span className="font-semibold text-dark-blue">{a.name}: </span>
              <span className="text-gray-600">{a.number}</span>
            </li>
          ))}
        </ul>
      </div>
      <BoardroomBand />
    </div>

    <Down />
    <OutputBar />
  </figure>
);

export default CxoArcDiagram;
