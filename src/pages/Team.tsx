import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Linkedin } from 'lucide-react';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';

type Leader = {
  name: string;
  title: string;
  photo: string;
  email?: string;
  linkedin?: string;
  bio: string[];
  education?: string[];
  service?: string[];
};

const leaders: Leader[] = [
  {
    name: 'Bob Katz',
    title: 'Founder and Principal',
    photo: '/images/bob-katz-headshot.jpg',
    email: 'bkatz@factservices.com',
    linkedin: 'https://www.linkedin.com/in/bob-katz-facts',
    bio: [
      'Bob Katz founded FACTS Consulting to bring finance, analytics, and transformation work to owner-led and mid-sized companies. He brings more than 25 years of hands-on experience, from Fortune 500 finance organizations to fast-growth startups, and has led more than 50 Adaptive Planning implementations.',
      'His prior corporate roles include the United Nations, Martin Marietta, W.R. Grace, Climax Molybdenum / AMAX, Schlumberger, Digital Equipment, Compaq, Brooks Automation, Azenta, and Thomas H. Lee Partners. He is the author of the SMB CxO Playbook series.',
    ],
  },
  {
    name: 'Irving Burday',
    title: 'Chief Information Officer',
    photo: '/images/irving-burday-headshot.jpg',
    email: 'iburday@factservices.com',
    bio: [
      'Irving Burday is an accomplished technology leader with over 30 years of experience working with emerging and mid-sized organizations to grow and scale their operating environments. Over the course of his career, he has held many leadership roles including Chief Information Officer, Chief Operating Officer, and VP of Corporate Planning, as well as extensive experience as a management consultant.',
      'Irving has expertise in several sectors including nonprofit, healthcare, financial services, and technology services, and provides fractional CIO services to organizations in the Boston area. He joined FACTS Consulting in 2026.',
    ],
    education: [
      'MBA in Finance, University of Southern California',
      'BS in Finance, Northeastern University',
    ],
    service: [
      'Board member, Great Bay Services, a human services nonprofit in New Hampshire',
      'Volunteer consultant, Empower Success Corps (ESC) of Massachusetts',
    ],
  },
];

const Team = () => (
  <div className="min-h-screen bg-light-bg">
    <Navigation />

    <main className="pt-24 pb-24">
      <div className="relative bg-dark-blue py-16 mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/#about"
              className="inline-flex items-center text-text-secondary hover:text-accent-gold transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to About
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">Leadership</h1>
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              The people behind FACTS Consulting: finance, analytics, and technology leadership for owner-led and
              mid-sized companies.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {leaders.map((person, index) => (
          <motion.section
            key={person.name}
            id={person.name.toLowerCase().replace(/\s+/g, '-')}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white rounded-2xl shadow-card p-6 sm:p-8 grid md:grid-cols-[240px_1fr] gap-8"
          >
            <div>
              <img
                src={person.photo}
                alt={`${person.name}, ${person.title}, FACTS Consulting`}
                className="w-full max-w-[240px] aspect-square object-cover object-top rounded-2xl"
              />
              <div className="mt-4 space-y-2 text-sm">
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-accent-gold transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">{person.email}</span>
                  </a>
                )}
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-accent-gold transition-colors"
                  >
                    <Linkedin className="w-4 h-4 flex-shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark-blue">{person.name}</h2>
              <p className="text-accent-gold text-sm font-medium tracking-wider uppercase mt-1 mb-5">{person.title}</p>
              {person.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {person.education && (
                <div className="mt-5">
                  <p className="text-xs font-medium tracking-wider uppercase text-gray-500 mb-2">Education</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                    {person.education.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {person.service && (
                <div className="mt-5">
                  <p className="text-xs font-medium tracking-wider uppercase text-gray-500 mb-2">Board and Community Service</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                    {person.service.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.section>
        ))}
      </div>
    </main>

    <Footer />
  </div>
);

export default Team;
