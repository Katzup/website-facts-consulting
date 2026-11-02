import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';

const stages = [
  {
    step: '1',
    title: 'Frameworks',
    body: 'Executive decision frameworks drawn from my SMB C-suite book series: nineteen books, about a hundred questions each, across the C-suite roles. Each framework is encoded as structured logic: what triggers it, which inputs it needs, and the thresholds the books set.',
  },
  {
    step: '2',
    title: 'Archetypes',
    body: 'The same question has a different decisive number in a different kind of business. Pricing in a subscription company turns on churn and net revenue retention; in a product company, on landed-cost margin and channel fees; in a professional-services firm, on realized rates; in a manufacturer, on what the constrained capacity is spent on. The engine classifies the business first, and when a business type is not yet covered, it says so rather than borrowing the wrong economics.',
  },
  {
    step: '3',
    title: 'Decision analysis',
    body: 'Cross-cutting boardroom decisions built on a small set of reusable pieces: the decisive number judged against a benchmark, a resilience test across scenarios instead of one point estimate, option value for staging a commitment, and a rule for declining to answer that tightens as decisions become harder to reverse.',
  },
];

const boardroom = [
  'Break-even',
  'Pricing power',
  'Cash reserve',
  'Customer concentration',
  'Debt vs. equity',
  'Firing a customer',
];

const nextBoardroom = ['Cost reduction', 'Capital allocation', 'Reseller vs. direct', 'Build, buy or partner'];

const reversals = [
  {
    title: 'A busy firm that should not hire',
    body: 'Fully booked and turning away work, the firm wants to hire. The realized economics say it is underpriced, not understaffed. Hiring would scale a margin problem with permanent payroll attached.',
  },
  {
    title: 'A positive-return project a board should not approve',
    body: 'The base case pays back quickly. The downside case is not survivable for the balance sheet. The answer is not "no" but "stage it": spend a little to remove the risk before committing the full amount.',
  },
  {
    title: 'A full plant that should not expand',
    body: 'Utilization is high, so the request is new capacity. But the constraint is occupied by low-value work. Fix the mix and the pricing first; the capital case waits until the cheaper fix is exhausted.',
  },
  {
    title: 'And when it should decline',
    body: 'When the inputs needed to decide responsibly are missing, it names what to measure first and does not answer. On an irreversible decision, a smaller true answer beats a larger false one.',
  },
];

const checklist = [
  {
    title: 'Decisive-number discipline',
    body: 'Does it hunt for the figure that actually governs the decision, or summarize the situation?',
  },
  {
    title: 'Input integrity',
    body: 'Does it challenge the numbers it is given, or build confidently on whatever it is told?',
  },
  {
    title: 'Calibrated confidence',
    body: 'Does it decline when the data is not there, or answer everything with equal assurance?',
  },
  {
    title: 'Reproducibility',
    body: 'Same inputs, same answer, every line traceable to a board? Or ask twice, get two answers?',
  },
];

const Card = ({ title, body }: { title: string; body: string }) => (
  <div className="bg-white rounded-xl p-5 shadow-card">
    <h3 className="font-semibold text-dark-blue mb-2">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
  </div>
);

const CxoAdvisor = () => (
  <div className="min-h-screen bg-light-bg">
    <Navigation />

    <main className="pt-24 pb-24">
      <div className="relative bg-dark-blue py-16 mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/#research"
              className="inline-flex items-center text-text-secondary hover:text-accent-gold transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Research
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
              The FACTS CxO Advisor
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              Ask a general-purpose AI whether to hire, raise prices or approve a project, and you get a confident,
              well-written answer. That fluency is the risk. A polished recommendation built on an unexamined
              assumption is more dangerous than an obvious error, because nothing signals that it is wrong.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">A different design</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            The CxO Advisor computes its recommendation instead of generating it. Encoded executive judgment is
            applied the same way every time, so the same inputs always give the same answer, and every conclusion
            traces back to a stated reason. A language model may review a finished recommendation for clarity and
            missing caveats. It never writes the decision.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            The judgment it encodes is not scraped from the internet. It comes from decades of CFO, FP&amp;A, CIO and
            consulting work across several economic cycles, which is why each line can be audited and defended rather
            than merely produced.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">How the research has built up</h2>
          <div className="space-y-4">
            {stages.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-5 shadow-card flex gap-4">
                <div className="w-9 h-9 bg-accent-gold/15 rounded-full flex items-center justify-center flex-shrink-0 text-dark-blue font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-dark-blue mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-card">
              <h3 className="font-semibold text-dark-blue mb-3">Boardroom decisions, settled</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {boardroom.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-card">
              <h3 className="font-semibold text-dark-blue mb-3">In progress</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {nextBoardroom.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">What it looks like in practice</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            In each of these, the disciplined answer reverses the one most people, and most general AI, would give.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {reversals.map((r) => (
              <Card key={r.title} title={r.title} body={r.body} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">How it is tested</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            The engine is tested the way the SentientEdge studies are: against sealed cases built to fool it, with
            answer keys written by a human expert and never by the system under test. In the latest blind round, on
            cases it had never seen and graded by an independent model, it scored 3.59 out of 5. All three pairs of
            cases that looked alike on the surface but had opposite economics got opposite recommendations.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Where the engine and the expert disagree, the disagreement is treated as a finding: it is adjudicated, the
            logic is sharpened, and the settled case becomes a permanent test, so the engine cannot drift without
            someone deciding it should.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            One limit, stated plainly. This shows the engine applies the encoded judgment consistently. It does not
            yet show those decisions turn out well over time. That record is built one real engagement at a time.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">Four questions for any AI decision tool</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Whether or not you ever use this engine, these are the questions I would ask of any AI tool your company
            is considering for decisions that involve real money.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {checklist.map((c) => (
              <Card key={c.title} title={c.title} body={c.body} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">What it is not</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Not a decision-maker to obey. You decide and own the decision; the engine makes it sharper.</li>
            <li>Not unsupervised. Every memo is reviewed by an experienced advisor before it reaches a client.</li>
            <li>Not a forecast or a valuation, and not a substitute for legal, tax or compliance advice.</li>
          </ul>
        </section>

        <div className="bg-dark-blue rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Facing a decision like these?</h2>
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            The CxO Advisor supports FACTS engagements with founder-led companies that do not have a full-time
            strategic CFO.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-accent-gold text-dark-blue font-semibold px-6 py-3 rounded-lg hover:bg-accent-gold-hover transition-colors"
          >
            Start a conversation
          </Link>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed mt-8">
          Informational, not professional advice. Legal, tax and compliance questions are flagged for review by a
          licensed professional.
        </p>
        <p className="text-sm text-gray-600 mt-4">
          The same evidence-first approach, applied to investment ideas:{' '}
          <Link to="/sentientedge" className="text-accent-gold font-medium hover:text-accent-gold-hover">
            SentientEdge
          </Link>
          .
        </p>
      </div>
    </main>

    <Footer />
  </div>
);

export default CxoAdvisor;
