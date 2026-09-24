// Bob Katz's own published work, recovered from the original factservices.com
// WordPress media library (retired 2026). Files live in /public/publications.
// Descriptions use each piece's own opening lines or teaser.

export interface Publication {
  title: string;
  date: string; // YYYY-MM, for display and ordering
  label: string; // issue number, or the kind of piece
  description: string;
  file: string;
  format: 'PDF' | 'PowerPoint';
}

export const newsletterIssues: Publication[] = [
  {
    title: 'Hands On, Hands Off',
    date: '2017-04',
    label: 'Volume 4 · Number 1',
    description:
      'Are you a 21st century leader? How to improve decision making in your organization in an age of increasing complexity and volatility.',
    file: '/publications/just-the-facts-v4n1-hands-on-hands-off-2017-04.pdf',
    format: 'PDF',
  },
  {
    title: 'When Boy Meets Grail',
    date: '2016-05',
    label: 'Volume 3 · Number 4',
    description:
      "Are you strategic enough? The longstanding technological role of the CFO in today's business environment.",
    file: '/publications/just-the-facts-v3n4-when-boy-meets-grail-2016-05.pdf',
    format: 'PDF',
  },
  {
    title: "The Future Ain't What It Used to Be",
    date: '2016-04',
    label: 'Volume 3 · Number 3',
    description:
      'Baseball season, Yogi Berra, and what it means to make your teammates winners.',
    file: '/publications/just-the-facts-v3n3-the-future-aint-what-it-used-to-be-2016-04.pdf',
    format: 'PDF',
  },
  {
    title: 'Procrastination',
    date: '2016-03',
    label: 'Volume 3 · Number 2',
    description:
      'A first foray into town politics as a library trustee, and a conversation about obsessive habits.',
    file: '/publications/just-the-facts-v3n2-procrastination-2016-03.pdf',
    format: 'PDF',
  },
  {
    title: 'Show Me the Curve',
    date: '2016-02',
    label: 'Volume 3 · Number 1',
    description:
      '"Life is what happens when you\'re making other plans." A consulting engagement in San Francisco and a pointed question over dinner.',
    file: '/publications/just-the-facts-v3n1-show-me-the-curve-2016-02.pdf',
    format: 'PDF',
  },
];

export const papersAndPresentations: Publication[] = [
  {
    title: 'What Were You Thinking? Navigating the Blind Spots in the Entrepreneurial Journey',
    date: '2017-12',
    label: 'Presentation',
    description:
      'How founders actually decide: heuristics, biases and the blind spots that come with them, drawing on Tversky and Kahneman.',
    file: '/publications/what-were-you-thinking-2017.pdf',
    format: 'PDF',
  },
  {
    title: '10 Principles of Successful Systems Implementation',
    date: '2013-10',
    label: 'White paper',
    description:
      'Ten lessons from implementing planning and BI systems, beginning with "Think like a CEO (but ask a lot of dumb questions)."',
    file: '/publications/10-principles-of-successful-systems-implementation-2013.pdf',
    format: 'PDF',
  },
  {
    title: 'Driving Operational Performance and Consolidation with Adaptive Planning',
    date: '2013-09',
    label: 'Presentation · with Jim Roller, CFO, SyntheZyme',
    description:
      'A case study from the Adaptive Planning roadshow: how a startup gold miner with atypical operating challenges built its planning and consolidation.',
    file: '/publications/driving-operational-performance-and-consolidation-2013.pptx',
    format: 'PowerPoint',
  },
];

export const formatPublicationDate = (ym: string): string => {
  const [y, m] = ym.split('-').map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};
