import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { getResearchStudyBySlug, researchStudies, formatStudyDate } from '@/data/researchStudies';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import ResearchDisclaimer from '@/components/ResearchDisclaimer';
import { studyCharts } from '@/components/charts/StudyCharts';

const ResearchStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getResearchStudyBySlug(slug) : undefined;

  if (!study) {
    return (
      <div className="min-h-screen bg-light-bg">
        <Navigation />
        <main className="pt-32 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-dark-blue mb-4">Study Not Found</h1>
            <Link to="/#research" className="text-accent-gold font-medium">
              Back to Research
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const others = researchStudies.filter((s) => s.slug !== study.slug);
  const Chart = studyCharts[study.slug];

  return (
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
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent-gold text-dark-blue text-sm font-semibold rounded-full">
                  {study.verdict}
                </span>
                <span className="flex items-center gap-1 text-text-secondary text-sm">
                  <Calendar className="h-4 w-4" />
                  {formatStudyDate(study.date)}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">{study.title}</h1>
              <p className="text-text-secondary text-lg max-w-3xl">
                <span className="text-white font-medium">The question: </span>
                {study.question}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl font-semibold text-dark-blue mb-8 leading-relaxed">{study.answer}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {study.keyNumbers.map((k) => (
                  <div key={k.label} className="bg-white rounded-xl p-5 shadow-card">
                    <div className="text-2xl font-bold text-dark-blue">{k.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{k.label}</div>
                  </div>
                ))}
              </div>

              {Chart && <Chart />}

              {study.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">{section.heading}</h2>
                  {section.paragraphs?.map((p, i) => (
                    <p key={i} className="mb-4 text-gray-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
                      {section.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">Limitations</h2>
              <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-2">
                {study.limitations.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">Sources</h2>
              <ul className="mb-10 space-y-2">
                {study.sources.map((s) =>
                  s.url ? (
                    <li key={s.label}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1 text-dark-blue hover:text-accent-gold transition-colors"
                      >
                        {s.label}
                        <ExternalLink className="h-4 w-4 mt-1 flex-shrink-0" />
                      </a>
                    </li>
                  ) : (
                    <li key={s.label} className="text-gray-700">
                      {s.label}
                    </li>
                  )
                )}
              </ul>

              <div className="pt-6 border-t border-gray-200">
                <ResearchDisclaimer />
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-card mb-6">
                <h3 className="text-lg font-bold text-dark-blue mb-2">What is SentientEdge?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  The research platform behind these studies, and how it is used today.
                </p>
                <Link to="/sentientedge" className="text-accent-gold text-sm font-medium hover:text-accent-gold-hover">
                  Read more →
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="text-lg font-bold text-dark-blue mb-4">Other studies</h3>
                <div className="space-y-4">
                  {others.map((s) => (
                    <Link key={s.slug} to={`/research/${s.slug}`} className="block group">
                      <h4 className="text-sm font-medium text-dark-blue group-hover:text-accent-gold transition-colors">
                        {s.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {s.verdict} · {formatStudyDate(s.date)}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResearchStudy;
