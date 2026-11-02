import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { researchStudies, formatStudyDate } from '@/data/researchStudies';
import ResearchDisclaimer from '@/components/ResearchDisclaimer';

const dailyWork = [
  {
    title: 'Scores the market after every close',
    body: 'Imports end-of-day prices for U.S. stocks, ranks them, and runs the same scoring in shadow on eight international exchanges.',
  },
  {
    title: 'Labels the market regime',
    body: 'A breadth-and-concentration classifier tags each day as risk-on, risk-off or neutral, so results can be read against the conditions they came from.',
  },
  {
    title: 'Reads filings and news',
    body: 'Language models read new IPO filings and market-moving headlines. Each news forecast is logged and later checked against what the stock actually did.',
  },
  {
    title: 'Writes a daily briefing',
    body: 'A morning summary of markets, regime and notable moves, built from the same data.',
  },
];

const uses = [
  {
    title: 'A place to test claims before trusting them',
    body: 'Published papers, AI models and my own ideas get the same treatment: pass/fail rules written down first, point-in-time data, a simple baseline to beat, and the result published either way.',
  },
  {
    title: 'A control that new ideas have to beat',
    body: 'The original momentum ranking no longer claims to beat the market, but it still runs every day. Any new approach has to outperform it, going forward, before it replaces anything.',
  },
  {
    title: 'A working example for clients',
    body: 'Most companies now have AI pilots. Few have a way to tell a model that works from one that only looks good. The discipline here is the same one behind the FACTS CxO Advisor, which applies it to business decisions.',
  },
];

const notList = [
  'Not a stock-picking service. It makes no recommendations to anyone.',
  'Not trading real money. Its signals run only in a paper-trading account.',
  'Not a claim of beating the market. When an idea fails, the failure is published.',
];

const SentientEdge = () => (
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">SentientEdge</h1>
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              SentientEdge started as a stock picker. Eighteen years of point-in-time market data turned it into
              something more useful: a place where investment ideas, my own included, are tested before anyone
              trusts them.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">What it is</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            SentientEdge is a research platform I built for U.S. and international equities. It collects market
            data every day, keeps a point-in-time history so a backtest can only see what was knowable on each
            date, and runs studies under rules fixed before the data is examined.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Its first job was to rank stocks by momentum. In August 2026, an 18-year test of that ranking showed it
            trailing the S&amp;P 500 by almost seven points a year. The ranking kept running; the claim was
            retired. That result set the direction for everything since.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">What it does every day</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {dailyWork.map((d) => (
              <div key={d.title} className="bg-white rounded-xl p-5 shadow-card">
                <h3 className="font-semibold text-dark-blue mb-2">{d.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">How it is used now</h2>
          <div className="space-y-4">
            {uses.map((u) => (
              <div key={u.title} className="bg-white rounded-xl p-5 shadow-card">
                <h3 className="font-semibold text-dark-blue mb-2">{u.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{u.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">What it is not</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {notList.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">The studies so far</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Five studies so far, starting with my Georgia Tech practicum, whose test framework was built on early
            SentientEdge work. One found a small edge, with clear limits. Four did not survive.
          </p>
          <div className="space-y-3">
            {researchStudies.map((s) => (
              <Link
                key={s.slug}
                to={`/research/${s.slug}`}
                className="block bg-white rounded-xl p-5 shadow-card hover:shadow-lg transition-shadow group"
              >
                <p className="text-xs text-gray-500">
                  {s.verdict} · {formatStudyDate(s.date)}
                </p>
                <h3 className="font-semibold text-dark-blue group-hover:text-accent-gold transition-colors mt-1">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{s.answer}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="pt-6 border-t border-gray-200">
          <ResearchDisclaimer />
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default SentientEdge;
