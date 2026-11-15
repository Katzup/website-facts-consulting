import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import SubscribeBox from '@/components/SubscribeBox';
import { sportsEdgeSubscribe } from '@/data/subscribe';

const whatYouGet = [
  {
    title: 'One email each morning',
    body: 'The day’s picks for the leagues in season: NBA, NFL, MLB, NHL and college basketball.',
  },
  {
    title: 'Picks from models, not hunches',
    body: 'Each pick comes from a statistical model or a rule applied to the betting market’s own odds. The method does not change because of a hot streak or a bad week.',
  },
  {
    title: 'Every pick graded',
    body: 'Each pick is recorded before the game and graded against the final score afterwards, wins and losses alike.',
  },
];

const notList = [
  'Not betting advice. The picks are the output of models I am testing, shared for information and entertainment.',
  'Not a sportsbook. No wagers are taken and no money changes hands here.',
  'Not a promise of profit. Some of these models have losing records, and a winning record so far does not predict the next game.',
];

const SportsEdge = () => (
  <div className="min-h-screen bg-light-bg">
    <Navigation />

    <main className="pt-24 pb-24">
      <div className="relative bg-dark-blue py-16 mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/"
              className="inline-flex items-center text-text-secondary hover:text-accent-gold transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">SportsEdge Picks</h1>
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              A daily email of sports picks produced by prediction models, with every pick graded against the
              final score.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">What you get</h2>
          <div className="space-y-4">
            {whatYouGet.map((w) => (
              <div key={w.title} className="bg-white rounded-xl p-5 shadow-card">
                <h3 className="font-semibold text-dark-blue mb-2">{w.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{w.body}</p>
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
          <h2 className="text-2xl font-bold text-dark-blue mb-4">Subscribe</h2>
          {sportsEdgeSubscribe.formAction ? (
            <SubscribeBox
              action={sportsEdgeSubscribe.formAction}
              emailField={sportsEdgeSubscribe.emailField}
              blurb="Free. One email a day with that day's picks. You confirm by email and can unsubscribe at any time."
            />
          ) : (
            <p className="text-gray-700 leading-relaxed">Sign-up is not open yet.</p>
          )}
        </section>

        <p className="text-xs text-gray-500 leading-relaxed">
          For adults aged 21 and over, where sports betting is legal. Information and entertainment only, not
          betting advice. Past results do not predict future results. If you or someone you know has a gambling
          problem, call 1-800-GAMBLER.
        </p>
      </div>
    </main>

    <Footer />
  </div>
);

export default SportsEdge;
