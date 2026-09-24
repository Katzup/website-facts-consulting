// Imported from the WordPress blog at factservices.com (2009–2018) on 2026-09-23.
// Original publication dates, text and images preserved; images copied to /public/images/blog/wp.
import type { BlogPost } from './blogPosts';

export const wordpressPosts: BlogPost[] = [
  {
    id: 'wp-910',
    title: 'Apple CPU Benchmarking',
    excerpt: 'In the midst of a computer upgrade cycle, I recently replaced my aging (circa 2013) iPhone 6 Plus with a new iPhone Xs Max. The performance improvement is quite dramatic so I looked at the Geekbench 4 benchmarks to…',
    content: `In the midst of a computer upgrade cycle, I recently replaced my aging (circa 2013) iPhone 6 Plus with a new iPhone Xs Max. The performance improvement is quite dramatic so I looked at the Geekbench 4 benchmarks to see how Apple’s RISC CPU architecture has improved, contrasted to Intel’s CPU performance since 2013. I also included my iPad Air and MacBook Pro, which also date back to the same 2013/2014 time frame. Performance benchmarks follow:

<div class="overflow-x-auto my-6"><table class="min-w-full text-sm border-collapse"><tr><td class="border border-gray-300 px-3 py-2 align-top">GeekBench 4</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">CPU</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">Single Core</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">Multi-Core</td><td class="border border-gray-300 px-3 py-2 align-top"></td></tr><tr><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">Model</td><td class="border border-gray-300 px-3 py-2 align-top">2013/14</td><td class="border border-gray-300 px-3 py-2 align-top">2018</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">2013/14</td><td class="border border-gray-300 px-3 py-2 align-top">2018</td><td class="border border-gray-300 px-3 py-2 align-top">% Increase</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">2013/14</td><td class="border border-gray-300 px-3 py-2 align-top">2018</td><td class="border border-gray-300 px-3 py-2 align-top">% Change</td></tr><tr><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td></tr><tr><td class="border border-gray-300 px-3 py-2 align-top">iPhone</td><td class="border border-gray-300 px-3 py-2 align-top">6 Plus</td><td class="border border-gray-300 px-3 py-2 align-top">A8 (Apple)</td><td class="border border-gray-300 px-3 py-2 align-top">A12</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">1418</td><td class="border border-gray-300 px-3 py-2 align-top">4796</td><td class="border border-gray-300 px-3 py-2 align-top">238%</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">2412</td><td class="border border-gray-300 px-3 py-2 align-top">11242</td><td class="border border-gray-300 px-3 py-2 align-top">366%</td></tr><tr><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td></tr><tr><td class="border border-gray-300 px-3 py-2 align-top">iPad</td><td class="border border-gray-300 px-3 py-2 align-top">Air (4,2)</td><td class="border border-gray-300 px-3 py-2 align-top">A7 (Apple)</td><td class="border border-gray-300 px-3 py-2 align-top">A12X</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">1326</td><td class="border border-gray-300 px-3 py-2 align-top">5030</td><td class="border border-gray-300 px-3 py-2 align-top">279%</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">2258</td><td class="border border-gray-300 px-3 py-2 align-top">18000</td><td class="border border-gray-300 px-3 py-2 align-top">697%</td></tr><tr><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top"></td></tr><tr><td class="border border-gray-300 px-3 py-2 align-top">MacBook Pro</td><td class="border border-gray-300 px-3 py-2 align-top">15″</td><td class="border border-gray-300 px-3 py-2 align-top">I7 (Intel)</td><td class="border border-gray-300 px-3 py-2 align-top">I9</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">3901</td><td class="border border-gray-300 px-3 py-2 align-top">5346</td><td class="border border-gray-300 px-3 py-2 align-top">37%</td><td class="border border-gray-300 px-3 py-2 align-top"></td><td class="border border-gray-300 px-3 py-2 align-top">14013</td><td class="border border-gray-300 px-3 py-2 align-top">22575</td><td class="border border-gray-300 px-3 py-2 align-top">61%</td></tr></table></div>

While not a definitive benchmark comparison and there are many other considerations, quite an increase in performance for Apple CPUs vs. Intel’s. At the recent Apple product announcement in Brooklyn, Tim Cook mentioned the new iPad performance is greater than 92% of all PC’s sold today.

A few takeaways from this analysis:

- Apple will be introducing its CPU’s into its own laptops/desktops, beginning within the next couple of years
- Apple’s OS software will be changing to support this CPU move; how soon is anyone’s guess but I would hope within the next 18 months. Good software takes a lot longer to produce than good hardware.
- Apple will be reconciling its “computer” strategy; too many, overlapping products making it confusing to the consumer as well as costly to support/maintain.

Let me know what you think.`,
    author: 'Bob Katz',
    date: '2018-11-14',
    category: 'Analytics',
    image: '/images/analytics-visual.jpg',
    readTime: '1 min',
    slug: 'apple-cpu-benchmarking',
  },
  {
    id: 'wp-893',
    title: 'The Future for Bitcoin et al?',
    excerpt: 'While I was headed home today with my teenage son Michael in tow, he informed me that he learned on Reddit that a CS:GO (that’s Counter-Strike Global Operations for you uninformed) Cloud 9 team player just sold a…',
    content: `While I was headed home today with my teenage son Michael in tow, he informed me that he learned on Reddit that a CS:GO (that’s Counter-Strike Global Operations for you uninformed) Cloud 9 team player just sold a skin (brand new with stickers) for a record price of $61,000.

I asked him if that was paid in real money; he nodded yes. So I asked him, “Why would anyone pay $61,ooo for a digital artifact that doesn’t exist in the real world?” At which point he got very excited and said buying a digital artifact is no different than buying a car. I protested by saying that “if computers didn’t exist, this item would have no value.” He countered “If they didn’t have car companies than cars wouldn’t exist.”

Go figure; there is a future for cryptocurrencies. I’m not sure those of us born before 1980 will understand that, though.

Meanwhile, back in the “real world” the stock market as measured by the DJIA finished at 23,858, down over 1000 points or 4.16% from yesterday thus entering correction territory (over 10% reduction from its high of 26,616). S&amp;P was down 3.9% to 6,777, down over 10% from its 7,505 high achieved in January. Bitcoin was trading at 8,285, up about 2% for the day but still down over 55% from its high in December of 19,870.`,
    author: 'Bob Katz',
    date: '2018-02-08',
    category: 'Finance',
    image: '/images/analytics-visual.jpg',
    readTime: '1 min',
    slug: 'the-future-for-bitcoin-et-al',
  },
  {
    id: 'wp-889',
    title: 'A Real-World Guide to Artificial Intelligence – Tom Davenport/Rajeev Ronanki – HBR Jan./Feb. 2018',
    excerpt: 'Practical advice on the practical applications of AI in business. Tom Davenport (Babson professor) and Raj Ronanski, prinicpal at Deloitte Consulting discuss how companies can successfully apply AI in their…',
    content: `<img src="/images/blog/wp/BR1801_500-242x300.png" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>

Practical advice on the practical applications of AI in business.  Tom Davenport (Babson professor) and Raj Ronanski, prinicpal at Deloitte Consulting discuss how companies can successfully apply AI in their organizations. The authors identify three types of AI:

- Robotic Process Automation (e.g. transferring data from e-mail systems, replacing lost credit cards, “reading” legal documents)
- Cognitive Insight (e.g. predictive analytics – what customer is likely to buy; identifying credit fraud in real time, analyzing warranty information to identify safety or quality problems
- Cognitive Engagement (e.g. intelligent agents offering 24/7 customer service, retail product and service recommendations as well as health treatment recommendations.

To then successfully apply AI, companies must:

- Understand the technologies relevant to their application
- Create a portfolio of projects that leverage AI in their organizations including removing bottlenecks, scaling the business and compensating for a lack of “firepower” to analyze the massive data sets
- Launch proof of concept pilot projects through a “cognitive center of excellence”
- Finally, scale up the projects within the organization including addressing change management issues`,
    author: 'Bob Katz',
    date: '2018-01-20',
    category: 'AI',
    image: '/images/blog/wp/BR1801_500-242x300.png',
    readTime: '1 min',
    slug: 'a-real-world-guide-to-artificial-intelligence-tom-davenportraj-ronanki-hbr-jan-feb-2018',
  },
  {
    id: 'wp-884',
    title: 'In case you missed this…',
    excerpt: 'While looking through Fortune magazine the other day, I discovered they changed their end page commentary last year to data analysis called Last Byte. The latest item (Jan. 1, 2018 edition) shows the leading…',
    content: `While looking through Fortune magazine the other day, I discovered they changed their end page commentary last year to data analysis called Last Byte. The latest item (Jan. 1, 2018 edition) shows the leading privately funded A.I. companies (as illustrated by the size of the bubble) grouped by sector. Informative and good use of data visualization.

<img src="/images/blog/wp/IMG_0542-225x300.png" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>`,
    author: 'Bob Katz',
    date: '2018-01-19',
    category: 'Analytics',
    image: '/images/blog/wp/IMG_0542-225x300.png',
    readTime: '1 min',
    slug: 'in-case-you-missed-this',
  },
  {
    id: 'wp-879',
    title: 'Seven Strategy Questions by Robert Simons',
    excerpt: 'Simons, a professor at Harvard Business School in accounting, management control, and strategic implementation employs a simple approach in his book toward helping organizations achieve better strategic execution.…',
    content: `<img src="/images/blog/wp/img_0541-205x300.jpg" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>

Simons, a professor at Harvard Business School in accounting, management control, and strategic implementation employs a simple approach in his book toward helping organizations achieve better strategic execution. This approach involves addressing seven key strategic questions (and their follow-ups in the back of the book) which should be in every executive’s playbook:

- Who is your primary customer?
- How do your core values prioritize shareholders, employees, and customers?
- What critical performance variables are you tracking?
- What strategic boundaries have you set?
- How are you generating creative tension?
- How committed are your employees to helping each other?
- What strategic uncertainties keep you awake at night?

Simon uses his experience consulting with large financial services, pharma and food companies, among others, to illustrate his points of view.

I found Question 5 (generating creative tension) to be of particular interest because it is one of the primary strategic execution drivers in any organization. How to create an “innovation culture” to motivate employees toward risk-taking as well as communicating and sharing those learnings across the enterprise are keys to unlocking and sustaining long-term business success.

A quick read and very instructive.`,
    author: 'Bob Katz',
    date: '2018-01-15',
    category: 'Consulting',
    image: '/images/blog/wp/img_0541-205x300.jpg',
    readTime: '1 min',
    slug: 'seven-strategy-questions-by-robert-simons',
  },
  {
    id: 'wp-838',
    title: '“What Were You Thinking?” – Decision Thinking for Entrepreneurs',
    excerpt: 'I enjoyed speaking to the Lowell/Lawrence EforAll accelerator (www.eforall.org) Winter 2017 class about entrepreneurial decision thinking with a talk called “What Were You Thinking?” – a guide to navigating the blind…',
    content: `<img src="/images/blog/wp/20171212_191449-e1514833005322-300x169.jpg" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>

I enjoyed speaking to the Lowell/Lawrence EforAll accelerator (<a href="http://www.eforall.org" class="text-navy underline" target="_blank" rel="noopener noreferrer">www.eforall.org</a>) Winter 2017 class about entrepreneurial decision thinking with a talk called “What Were You Thinking?” – a guide to navigating the blind spots in the entrepreneurial journey. Lot’s of energy; good discussion all around! You can get the slide deck <a href="/publications/what-were-you-thinking-2017.pdf" class="text-navy underline">here</a>.`,
    author: 'Bob Katz',
    date: '2017-12-28',
    category: 'Consulting',
    image: '/images/blog/wp/20171212_191449-e1514833005322-300x169.jpg',
    readTime: '1 min',
    slug: 'decision-thinking-for-entrepreneurs',
  },
  {
    id: 'wp-871',
    title: 'High Performance Habits by Brendon Burchard',
    excerpt: 'The basic premise of the enlightening book is that to become a high performer, one must adopt the habits of high performers, both personal and social including: Personal Social 1)',
    content: `<img src="/images/blog/wp/41JvZGidQcL._SX335_BO1204203200_-203x300.jpg" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>

The basic premise of the enlightening book is that to become a high performer, one must adopt the habits of high performers, both personal and social including:

<strong>Personal</strong>                                                        <strong>Social</strong>

1) Seek clarity                                                 1) Increase productivity<br/>
2) Generate energy                                       2) Develop influence<br/>
3) Raise necessity                                         3) Demonstrate courage

The book goes on to describe the actions to take to create these habits, each of which is made up of three separate actions.

While the book is well structured with many stories and examples to illustrate the author’s points, the processes one must meet to achieve high performance is complex (6 habits x 3 actions each = 18) and requires a significant commitment by the reader just to remember them all, let alone the time to master them so they become habits. However, it’s a good read and though provoking.`,
    author: 'Bob Katz',
    date: '2017-12-07',
    category: 'Transformation',
    image: '/images/blog/wp/41JvZGidQcL._SX335_BO1204203200_-203x300.jpg',
    readTime: '1 min',
    slug: 'high-performance-habits-by-brendon-burchard',
  },
  {
    id: 'wp-856',
    title: 'Real BI Conference – July 2017 – MIT Campus',
    excerpt: 'An interesting conference addressing the application of business intelligence to real-world situations. Among the guest lectures that were well received included Charles (Chuck) Hooper, author of 59 Minutes to Great…',
    content: `An interesting conference addressing the application of business intelligence to real-world situations. Among the guest lectures that were well received included Charles (Chuck) Hooper, author of <a href="https://www.amazon.com/59-Minutes-Great-Storytelling-1/dp/1523209232/ref=sr_1_fkmr0_1?s=books&amp;ie=UTF8&amp;qid=1514906928&amp;sr=1-1-fkmr0&amp;keywords=59+minutes+to+better+storytelling" class="text-navy underline" target="_blank" rel="noopener noreferrer">59 Minutes to Great Storytelling</a>, and Miko Yuk, CEO and co-founder of BI Brainz and author of <a href="https://www.amazon.com/Data-Visualization-Dummies-Mico-Yuk/dp/1118502892/ref=sr_1_1?ie=UTF8&amp;qid=1514906865&amp;sr=8-1&amp;keywords=data+visualization+for+dummies" class="text-navy underline" target="_blank" rel="noopener noreferrer">Data Visualization for Dummies</a> discussing how to create more effective KPIs (vs. metrics) for your organization. Their talks are located <a href="https://youtu.be/ZugXyQrIy5g" class="text-navy underline" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://youtu.be/FhAyCWBIOXM" class="text-navy underline" target="_blank" rel="noopener noreferrer">here</a>.`,
    author: 'Bob Katz',
    date: '2017-07-30',
    category: 'Analytics',
    image: '/images/analytics-visual.jpg',
    readTime: '1 min',
    slug: 'real-bi-conference-july-2017-mit-campus',
  },
  {
    id: 'wp-862',
    title: 'Making Advanced Analytics Work for You',
    excerpt: 'A practical, down-to-earth analytic approach to Big Data from the Dominic Barton and David Court published in the Harvard Business Review “way back” in 2012 that holds up well today (in fact an appropriate…',
    content: `A practical, down-to-earth analytic approach to Big Data from the Dominic Barton and David Court published in the Harvard Business Review “way back” in 2012 that holds up well today (in fact an appropriate methodology for all IT related projects). The article discusses the three steps to achieving higher performance analyzing data which include:

1) <strong>Choosing the right data to analyze and model</strong> – This step includes sourcing both external and internal data sources as well as upgrading IT infrastructure and architecture to leverage data usage in the organization.

2) <strong>Build models that predict and optimize business outcomes</strong> – Focus on the major drivers of performance (including metrics and KPIs) as well as balancing the complexity and simplicity of the tools/models to be used.

3) <strong>Transform Your company’s capabilities</strong> – Create simple and understandable tools for the folks in the organization that use them (and are consistent with management’s mission and objectives). But be sure to update and enhance the organization’s processes and capabilities to utilize these tools most effectively.

You can find the text of the article <a href="http://www.factservices.com/wp-admin/post.php?post=862&amp;action=edit" class="text-navy underline" target="_blank" rel="noopener noreferrer">here</a>.`,
    author: 'Bob Katz',
    date: '2014-01-03',
    category: 'Analytics',
    image: '/images/analytics-visual.jpg',
    readTime: '1 min',
    slug: 'making-advanced-analytics-work-for-you',
  },
  {
    id: 'wp-545',
    title: 'Adaptive Planning Road Show – September 16',
    excerpt: 'I recently had the opportunity to speak at the Boston Adaptive Planning Road Show on “Driving Operational Performance and Consolidation using Adaptive Planning” with my client and former CFO of Jaguar Mining, Jim…',
    content: `<img src="/images/blog/wp/Screen-Shot-2013-02-04-at-11.50.53-AM-150x150.png" alt="Screen Shot 2013-02-04 at 11.50.53 AM" class="my-6 max-w-full h-auto rounded" loading="lazy"/><br/>
I recently had the opportunity to speak at the Boston Adaptive Planning Road Show on “Driving Operational Performance and Consolidation using Adaptive Planning” with my client and former CFO of Jaguar Mining, Jim Roller. Jim presented the state of Jaguar Mining circa 2004 at the time he became CFO and the need to develop a Corporate Model, which became an “Excel Hell” until we implemented Adaptive (which Jaguar continues to use for consolidation and planning). Click on this <a href="/publications/driving-operational-performance-and-consolidation-2013.pptx" class="text-navy underline" target="_blank" rel="noopener noreferrer">link</a> for a copy of the presentation slides from our talk.`,
    author: 'Bob Katz',
    date: '2013-10-02',
    category: 'Analytics',
    image: '/images/blog/wp/Screen-Shot-2013-02-04-at-11.50.53-AM-150x150.png',
    readTime: '1 min',
    slug: 'adaptive-planning-road-show-september-16',
  },
  {
    id: 'wp-526',
    title: 'Batter Up!',
    excerpt: 'I’ve always had a soft spot for baseball; although handed down from generation to generation, the game now is very different from the one I grew up with. However its pace, strategies and unique focus on statistics or…',
    content: `I’ve always had a soft spot for baseball; although handed down from generation to generation, the game now is very different from the one I grew up with. However its pace, strategies and unique focus on statistics or saber-metrics has long been an attraction to many people.

As a boy growing up in Queens, New York, I used to play baseball board games regularly such as Big League Manager and Strat-O-Matic, anxiously awaiting each new season’s player cards and manually recording all player and league statistics in a Composition notebook. While playing the games were quite enjoyable, calculating performance statistics without benefit of a calculator (slide rules weren’t accurate enough) was quite painful. Although it seems rather comical now, one of the earliest self directed projects in NYU Engineering’s programming class was to develop a Fortran program to calculate and print batting and earned run averages (ERA) on a Univac 1108, at the time an $8,000,000 mainframe computer, saving considerable time and effort.

Thus, it seemed only natural that a couple years later, I developed a baseball computer simulation game (complete with over 2000 punch cards) using historical player statistics from the newly published first edition “Baseball Encyclopedia” to incorporate individual pitcher/batter player performance over a 154/162 game season (in an all-star league simulation, Babe Ruth hit 60 home runs). While not the first to develop a computer baseball simulation game (the Baseball Hall of Fame recognized Gary Cokins, a fellow Performance Management consultant, had developed the earliest known computer baseball game in 1971), the project enabled me to garner my first job with Martin Marietta’s Operations Research department.

Baseball statistics, it seems has given birth to many a career in performance management. Nate Silver, of the New York Times political blog, FiveThirtyEight and author of The Signal and the Noise about the job of prediction, got his start developing a computer system called PECOTA (Player Empirical Comparison and Optimization Test Algorithm) using saber-metrics back in 2002-2003 to predict future major league player performance (also serving as the backbone to a fantasy baseball league) with some interesting successes.

Michael Lewis’ 2003 book “Moneyball” about Billy Beane (played in the 2011 movie by Brad Pitt), general manager of the 2002 Oakland Athletics is a story ostensibly about the introduction of saber-metrics use in player selection and the management of baseball franchises. Peter Brand, the Yale intern that brings saber-metrics to the Billy Beane and the A’s, is adeptly played by Jonah Hill. Although the character is believed to represent Paul DePodesta, currently VP-Player development for the New York Mets and ex- LA Dodger GM, I can understand why I might not want my name associated with Jonah Hill, no offense vs. Brad Pitt.

Mr Brand’s character is a disciple from the Church of Big Data, whose increasing members believe that through the collection and analysis of vast amounts of baseball data, one could materially benefit the behavior and future outcome of people, businesses or organizations, especially those that had been dependent on more qualitative terms in the past. Saber-metrics (and its application) is a prime example of how Performance Management tools have grown more important over the years as more baseball teams (and now more sports) now employ some form of player performance/analysis in their organization. The Boston Red Sox 2004 World Series victory owes some credit (Theo Epstein is another disciple) to the application of saber-metrics to alter perceptions of player performance.

But while tools are important to create new models and understanding of how the world operates, equally important to the successful application of Performance Management is how Billy Beane was able to change the mindset of his management, coaches and players to incorporate the use of these statistics in their business affairs and work habits, at considerable risk to his career with the A’s. Effective people management, used in conjunction with “Big Data” tools and process management, combine to form a powerful strategy for effective execution for businesses and organizations.`,
    author: 'Bob Katz',
    date: '2013-06-18',
    category: 'Analytics',
    image: '/images/blog/wp/brad-pitt-moneyball.jpg',
    readTime: '3 min',
    slug: 'batter-up',
  },
  {
    id: 'wp-479',
    title: 'Best Practices in Financial Planning Seminar',
    excerpt: 'The Deloitte Q4 CFO Signals study indentified the number one challenge facing CFOs was a lacks of metrics, information and tools needed to make sound business decisions. Join me over lunch to learn how you can…',
    content: `<img src="/images/blog/wp/adaptiveplanning__use-e1359996116694.jpg" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>

<br/>






The Deloitte Q4 CFO Signals study indentified the number one challenge facing CFOs was a lacks of metrics, information and tools needed to make sound business decisions.
Join me over lunch to learn how you can empower your finance and management teams to automate budgeting, forecasting, reporting, consolidations and data visualization to ultimately drive better business decisions in the new year.
Hear about the key obstacles that can keep finance organizations from achieving their potential, and how businesses of all sizes have overcome these hurdles with leading-edge, cloud-based planning, reporting, and visual analysis solutions — solutions that are powerful yet easy to use, deploy in just weeks, and cost 75% less than traditional on-premise software.
Understand how leading companies and nonprofits, such as The Container Store, CORT Business Services, Konica Minolta, Pep Boys, Vail Resorts, and many more, have truly transformed their businesses — quickly, easily, and affordably.
<strong><a href="http://www.adaptiveplanning.com/about/events/event-registration/event-registration-new/?eventType=Seminar&amp;eventCity=waltham&amp;eventState=ma&amp;eventTime=February-13&amp;eventlastSFDCCampaignID=70160000000V7lR&amp;prl=FACTS-Consulting" class="text-navy underline" target="_blank" rel="noopener noreferrer">Register Today!</a></strong>
Earn CPE credit and learn how your organization can:





Reduce budgeting time by 90% — while eliminating errors





Deliver timely and accurate re-forecasts &amp; what-if scenarios





Drive better business decisions through improved reporting and analysis





Improve companywide participation and alignment





Increase the strategic value of finance




This event is co-sponsored by Financial Analysis and Control Technology Services LLC (F.A.C.T.S.) is a performancemanagement consultancy focused on helping businesses and organizations achieve their operating and financial goals.
Sign up today for this complimentary lunch seminar and learn how you, too, can transform your business performance management, by adopting best practice processes and tools, as you navigate 2013 and beyond.
<a href="http://www.adaptiveplanning.com/about/events/event-registration/event-registration-new/?eventType=Seminar&amp;eventCity=waltham&amp;eventState=ma&amp;eventTime=February-13&amp;eventlastSFDCCampaignID=70160000000V7lR&amp;prl=FACTS-Consulting" class="text-navy underline" target="_blank" rel="noopener noreferrer"><strong>Register Today!</strong></a>
For additional questions about the content of this lunch and learn, please contact me. I look forward to your participation!
Sincerely,
Jim McDonough<br/>
<a href="mailto:jmcdonough@adaptiveplanning.com" class="text-navy underline">jmcdonough@adaptiveplanning.com</a>



Lunch Details



Date:
<strong>February 13, 2013</strong>


Time:
<strong>11:30AM-1:30PM</strong>


Address:
<strong><a href="http://www.marriott.com/hotels/travel/boswm-courtyard-boston-waltham/" class="text-navy underline" target="_blank" rel="noopener noreferrer">Courtyard Boston Waltham</a></strong><br/>387 Winter Street<br/>Waltham, MA 02451







Featured Partner






Contact Us
<strong>Jim McDonough</strong><br/>
<a href="mailto:jmcdonough@adaptiveplanning.com" class="text-navy underline">jmcdonough@adaptiveplanning.com</a><br/>
                                                    (781) 376-4077










Adaptive Planning is registered with the National Association of State Boards of Accountancy (NASBA) as a sponsor of continuing professional education on the National Registry of CPE Sponsors. State boards of accountancy have final authority on the acceptance of individual courses for CPE credit. Complaints regarding registered sponsors may be submitted to the National Registry of CPE Sponsors through its website: www.learningmarket.org. This course does not require prerequisites.`,
    author: 'Bob Katz',
    date: '2013-02-04',
    category: 'Analytics',
    image: '/images/blog/wp/Screen-Shot-2013-02-04-at-11.50.53-AM.png',
    readTime: '2 min',
    slug: 'best-practices-in-financial-planning',
  },
  {
    id: 'wp-514',
    title: 'Successful ERP Implementation',
    excerpt: 'It is a rare occurrence when an Enterprise Resource Planning (ERP) implementation meets its initial project objectives, timing or business process goals. Either the implementation fails due to inadequate or dedicated…',
    content: `It is a rare occurrence when an Enterprise Resource Planning (ERP) implementation meets its initial project objectives, timing or business process goals. Either the implementation fails due to inadequate or dedicated implementation support and engagement (financial, operational and management) during periods of company growth or insufficient resources during periods of economic decline. Often the need to accommodate business process changes and clean up the transactional data can contribute to missed go-live dates, missing shipments and indirectly to the sale of a company.

I was recently <a href="https://soundcloud.com/bob-katz-3/sales-breakthrough-interview" class="text-navy underline" target="_blank" rel="noopener noreferrer">interviewed</a> by <a href="http://john-blake.com.au" class="text-navy underline" target="_blank" rel="noopener noreferrer">John Blake</a>, President and Founder of Sales Breakthrough Solutions from Perth, Australia as a result of a Pronto ERP system implementation by <a href="http://www.scopesystems.com.au" class="text-navy underline" target="_blank" rel="noopener noreferrer">Scope Systems</a>, an Australia-based ERP partner for Global Advanced Metals Pty (GAM). For those unfamiliar with the company, GAM world leading integrated tantalum supplier, with 2 mines in Western Australia. Tantalum’s primary use is for production of electronic components, mainly capacitors and high-powered resistors used in cellphones, computers and automotive electronics. GAM had recently purchased the two upstream processing plants in Boyertown, PA and Aizu, Japan from Cabot Corporation and had decided as part of the transition to replace their existing JD Edwards ERP system with Pronto, an enterprise class ERP system developed in Australia that specializes in the extraction industry but is not well known in the US. Scope Systems, the Australia-based implementation partner that had implemented Pronto for the GAM mining operations was also supporting the Japan implementation.

It was April 2012 and the primary project objective was clear: to implement Pronto by August 2012 otherwise significant financial penalties would accrue as a result of extending the JD Edwards/Oracle licensing. The Pronto implementation was significantly complicated by the presence of a third system, BPICS, an INFORS ERP application which served as the transactions processing hub for the Boyertown plant and interfaced with JD Edwards front end. Given the compressed implementation schedule, it was determined that BPICS would not be replaced in this phase of the project and programming interfaces needed to be built between Pronto and JD Edwards.

FACTS was thus engaged to project manage the implementation in Boyertown, PA and Japan to meet the time deadline. At the get go, any successful outcome was not assured when I initially met with the original US implementation partner to find they had not begun any substantive implementation work nor as I found out, had the programming capabilities to create the Pronto-BPICS interfaces itself.

The fact that the Pronto ERP implementation was successful at both Boyertown and Aizu plants is a testament to the dedication and engaged support of the full implementation team composed of Scope Systems, GAM-US/Japan personnel from senior financial and IT management to its plant operations staff with significant help from Cabot Corporation. The <a href="https://soundcloud.com/bob-katz-3/sales-breakthrough-interview" class="text-navy underline" target="_blank" rel="noopener noreferrer">interview</a> with Sales Breakthrough Solutions describes my project experiences with GAM/Scope and the critical elements of managing a successful IT or any project.`,
    author: 'Bob Katz',
    date: '2013-01-24',
    category: 'Analytics',
    image: '/images/blog/wp/rgb_72_465_189_manualProportional_1875_1875_0_5183.jpg',
    readTime: '2 min',
    slug: 'project-management',
  },
  {
    id: 'wp-469',
    title: 'Jerry Seinfeld – Management Consultant',
    excerpt: 'I recently had the opportunity of seeing Jerry Seinfeld live, performing at the MGM Hotel in Foxwoods, CT. Before starring in his own sitcom in the ’90s, Jerry was a renown stand-up comedian, appearing often on the…',
    content: `<img src="/images/blog/wp/Unknown.jpeg" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>I recently had the opportunity of seeing Jerry Seinfeld live, performing at the MGM Hotel in Foxwoods, CT.  Before starring  in his own sitcom in the ’90s, Jerry was a renown stand-up comedian, appearing often on the Tonight show (during the Johnny Carson days). So after his TV series end in 1998, Jerry set about getting married and having a family but came back out of “retirement” in the last few years to tour the comedy circuit again.

As a newly minted husband and father of three, he described his relationship with his wife  as being the “major league” as compared to the comparatively “easy” relationships he enjoyed as a bachelor.  To summarize this status change, Jerry said “All men are looking for from a woman is what they want out of a pair of underwear: a little support and a little freedom.”

As do management consultants.`,
    author: 'Bob Katz',
    date: '2012-12-23',
    category: 'Analytics',
    image: '/images/blog/wp/Unknown.jpeg',
    readTime: '1 min',
    slug: 'jerry-seinfeld-management-consultant',
  },
  {
    id: 'wp-462',
    title: 'Is punditry dead or the rise of data driven political forecasts',
    excerpt: 'Here’s a interesting link to a TechCrunch post by Gregory Feinstein discussing Nate Silver’s political forecast (from the NY Times 538Blog (fivethirtyeight.blogs.nytimes.com) and the author of “The Signal and the…',
    content: `Here’s a interesting link to a TechCrunch post by Gregory Feinstein discussing Nate Silver’s political forecast (from the NY Times 538Blog (fivethirtyeight.<strong>blogs</strong>.nytimes.com) and the author of “The Signal and the Noise”) using mathematical modeling to correctly predict the outcome of all 50 states in the recent 2012 Presidential election, far surpassing the performance of the more qualitative approach used by political pundits (especially those on the Republican/Conservative side).

While this result makes Nate a pundit in his own right (his book is now flying off the shelves at Amazon) and thus subject to intense scrutiny as to his true intentions/techniques, it does auger in the use of predictive tools to the political arena that has been largely subjective or has been burdened using old techniques (i.e. polling) to achieve less than stellar results.

http://techcrunch.com/2012/11/07/pundit-forecasts-all-wrong-silver-perfectly-right-is-punditry-dead/`,
    author: 'Bob Katz',
    date: '2012-11-07',
    category: 'Consulting',
    image: '/images/blog/wp/nate_silver_rect-460x307.jpg',
    readTime: '1 min',
    slug: 'is-punditry-dead-or-the-rise-of-data-driven-political-forecasts',
  },
  {
    id: 'wp-453',
    title: 'Take 2 Tablets and Call Me in the Morning',
    excerpt: 'As an Apple fanboy since the ’70s and having been one of the first people in the world to have purchased an iPad in March 2010 (owing to my location here on the US East Coast), I have been feeling quite vindicated…',
    content: `As an Apple fanboy since the ’70s and having been one of the first people in the world to have purchased an iPad in March 2010 (owing to my location here on the US East Coast), I have been feeling quite vindicated over the past several years as consumers and businesses have adopted Apple products and iPad and tablets in particular to replace PCs. The ease of use and user friendliness in addition to the range of applications available have made it a favorite computing platform both from a content consumption and content creation standpoint. I’ve even recommended it to my 85 year old mother-in-law to replace her Dell computer; she happily uses it for web, email and beating me at Words with Friends.

With the recent release of the iPad Mini, soon to be at an Apple store near you, more and more people and businesses will be incorporating tablets into their every day lives. The issue for Apple as it is for most technology companies is “What’s Next?” The current product transitions are more evolutionary than revolutionary despite the introduction of higher density displays, faster low power processors and full featured operating software and applications and Apple has demonstrated its ability to provide highly engineered products and ramp its global supply chain to produce these jewels at an outstanding rate.

- Where Apple seems to have its headaches now is in the creation of services that enhance the benefits of these devices to the benefit of its installed base. Missteps in the iCloud/Me.com, PING and Apple Maps illustrates the difficulty and challenge Apple faces in this area (Passbook looks promising but still very early to decide its real value). It is an area not even Steve Jobs understood well, being more hardware oriented (aside from iTunes where he played white knight to an industry having difficulty distributing its content). Even he was having difficulty getting access to the book publishers for iBooks and perhaps iTV (?); content is not an area that Tim Cook seems to be focused as he matures in his position as Apple’s CEO. The creation, acceptance and monetization of the services that people want and need to manage their lives will be Apple’s (and the industry’s) next big thing. In the afterglow of the product announcements this week, we’ll see what Apple management comes up with; it’s future depends on it.`,
    author: 'Bob Katz',
    date: '2012-10-25',
    category: 'Consulting',
    image: '/images/blog/wp/ipad-mini-1351017524.jpg',
    readTime: '2 min',
    slug: 'take-2-tablets-and-call-me-in-the-morning',
  },
  {
    id: 'wp-441',
    title: 'Environmental Innovators Contest for High Schoolers',
    excerpt: 'High School Students! The Intel-OARS Environmental Innovators Contest is for you! Our rivers, streams, and lakes face significant threats. With the increasing scarcity of clean water, we need innovative solutions and…',
    content: `<strong>High School Students!  The Intel-OARS Environmental Innovators Contest is for you! </strong>

Our rivers, streams, and lakes face significant threats.  With the increasing scarcity of clean water, we need innovative solutions and inspired people working for change.  We are challenging YOU to develop creative ideas on how to solve your local water problems!  Can YOU be the one to bring innovative solutions to your community?

<strong>Enter the 4th Annual Intel-OARS Environmental Innovators Contest and you can win up to $500! </strong> Details are available at <a href="http://www.oars3rivers.org/" class="text-navy underline" target="_blank" rel="noopener noreferrer">www.oars3rivers.org</a>.

Entry forms are due Friday, October 26.  Project proposals are due December 5 and final projects are due February 3, 2013.  Questions?  Email <a href="mailto:office@oars3rivers.org" class="text-navy underline">office@oars3rivers.org</a> or call OARS at 978-369-3956.`,
    author: 'Bob Katz',
    date: '2012-10-17',
    category: 'Consulting',
    image: '/images/blog/wp/EggRock_center.preview.jpg',
    readTime: '1 min',
    slug: 'environmental-innovators-contest-for-high-schoolers',
  },
  {
    id: 'wp-431',
    title: 'Say What? How to fix the presidential debates',
    excerpt: 'After viewing the first two presidential and one vice presidential debates, I think the time has come to make some improvement in the debating process. The performance of the moderators in controlling the content of…',
    content: `After viewing the first two presidential and one vice presidential debates, I think the time has come to make some improvement in the debating process. The performance of the moderators in controlling the content of the debates has been somewhat mixed as these debates have become more street fights than oratorial flights as the time to election gets closer. With all the punches and counter punches the candidates throw, it is difficult for the average viewer to discern who is telling the truth and who is misspeaking until after the fact checking talking heads get to dissect the debate after the fact. This is much too late in the process, if one can stay up that late at all. My suggestion would be to adopt a procedure currently used in the sports world to fix the problem; adopt the Instant Replay rule.

The process for Instant Replay would be much like it works in pro football; the coach (or candidate) would have the opportunity to throw a red flag (up to 3 a debate) if they believed that their opponent misspoke a point. When this happens, the officials (or fact checkers) would then get to work (within 2 minutes so as to allow time for commercials; someone needs to make money on this) to determine whether there was a error, misstatement or outright lie made by their opponent. If there was such a misstatement, the moderator would penalize the offending debater, depending on the egregiousness of the error, a certain amount of debating time while their opponent continued his statement/questioning. If vindicated, the candidate throwing the red flag would have their challenge restored but if they lost the appeal, they would lose one of their challenges.

If a red flag gets thrown at games end, the victor could use the opportunity to “ice” their opponent, effectively eliminating their ability to argue their own messages/closing points. It would also heighten the drama of the debate and allow viewers the real time opportunity to know the candidates true identities.

Let the games, err debates, begin!`,
    author: 'Bob Katz',
    date: '2012-10-17',
    category: 'Consulting',
    image: '/images/blog/wp/121003_romney_obama_debate_3_ap_605.jpg',
    readTime: '2 min',
    slug: 'say-what-how-to-fix-the-presidential-debates',
  },
  {
    id: 'wp-386',
    title: 'Strategy or Execution: Which Is More Important?',
    excerpt: 'Strategy or Execution: Which Is More Important? Many business leaders think they’d rather have great execution than superior strategies, but you can’t have the first without the second. by Ken Favaro, with Evan Hirsh…',
    content: `## Strategy or Execution: Which Is More Important?

## Many business leaders think they’d rather have great execution than superior strategies, but you can’t have the first without the second.

by Ken Favaro, with Evan Hirsh and Kasturi Rangan via: <a href="http://www.strategy-business.com/article/cs00005?gko=733e9&amp;cid=20121009enews&amp;utm_campaign=20121009enews" class="text-navy underline" target="_blank" rel="noopener noreferrer">www.strategy-business.com</a>

I once heard a business leader say, “Strategy is results.” He meant that strategy doesn’t matter as long as you are producing results. Many other business  leaders feel  the same way. Often, this is because they associate <em>strategy</em> with analysis and <em>execution</em> with getting things done, and they attribute more value to doing than to analyzing. From that perspective, a strategy is a lofty, self-evident statement such as “Our strategy is to maximize customer value” or “Our strategy is to become the market leader.” Such “strategies” don’t contribute much to producing results. Possibly, they motivate the troops, although even that is highly debatable.

On its surface, this view that strategy is less important than execution is hard to refute. If that’s all strategy is, execution is clearly more important.

But any seasoned strategist knows that strategy is not just sloganeering. It is the series of choices you make on where to play and how to win to maximize long-term value. Execution is producing results in the context of those choices.   nimbus cloud . Therefore, <em>you cannot have good execution without having good strategy</em>.

Most everyone would agree that you cannot achieve good results without having good execution; similarly, most would agree that having a good strategy alone is no surefire formula for success. But too many jump to the wrong conclusion that this makes execution more important than strategy.

Consider the Toyota Motor Corporation and General Motors Company. Yes, Toyota produced better results than GM for many years because it executed better than GM. But it was able to out-execute GM because it made much clearer and more coherent choices about where it would play and how it would compete. This included sharper choices about its target customers; its value proposition in terms of products, features, and price points; and the superior capabilities it needed to deliver that proposition to those customers. In other words, Toyota out-executed GM primarily because it had a clearer, better strategy than GM. The fact that Toyota faltered in 2010 and 2011 reinforces the point that good strategy alone isn’t enough; you have to have good execution too. But this shouldn’t be confused with the point that the quality of your execution depends a lot on the quality of your strategy.

The airlines industry provides another example. Southwest Airlines Company has outperformed American Airlines Inc. for decades. Is this because Southwest has executed better than American? Absolutely. But it’s no coincidence that Southwest also has a better strategy. It has a more sharply defined target market (the point-to-point economy traveler), a more compelling value proposition (lowest price, most convenient, and most passenger friendly), and a more coherent set of capabilities to deliver that proposition (maintaining a simpler fleet, running a point-to-point operation). Having a better strategy has made it possible for Southwest to consistently out-execute American.

In fact, no matter how much American Airlines improves its execution, it will never be enough to overcome the lousy economics of the airline industry and make it a big value creator. The company would have to find a more distinctive strategy. Likewise, no matter how much GM improves its decision-making culture, product development processes, or dealer operations, that effort won’t be enough to produce superior results without a coherent strategy. Fortunately, bankruptcy has given both companies breathing space to find distinctive and coherent strategies.

To be sure, both American and GM face challenging industry conditions in which earning an attractive level of profitability is reserved for only the most advantaged players. But even when industry economics are attractive, standout results do not come from standout execution alone.

Another example is retail banking. A typical retail bank doesn’t really need a distinctive strategy to produce an attractive return on capital as long as it executes well. Most retail banks have strategies that are virtually indistinguishable from one another. Their leaders all talk about targeting the same customers; having intimacy with those customers; and being the best at service, relationship management, product development, and risk management. However, the ones that truly excel have created distinctive, coherent strategies that enable them to have superior execution. Think of Wells Fargo in the U.S., Standard Chartered in Asia, and Lloyds Bank in the U.K. when Sir Brian Pitman was its chief executive.

So the next time you hear statements like these —

- “I’d rather have great execution with a mediocre strategy than the other way around.”
- “You don’t win by having a better strategy; you win through superior execution.”
- “We don’t need a new strategy to fix our performance; we just need to execute the one we have.”

— remember this: You need a good strategy to have good execution. Yes, having a good strategy alone isn’t enough to win, but your ability to execute well depends on how good your strategy is and how well it’s understood by everyone who makes major decisions for your business. <em>When your business or company is not executing well, take a look at your strategy</em>. Improving it — and your most important stakeholders’ understanding of it — may hold the key to unlocking better execution.`,
    author: 'Bob Katz',
    date: '2012-10-10',
    category: 'Consulting',
    image: '/images/blog/wp/strategy-or-execution.jpg',
    readTime: '4 min',
    slug: 'strategy-or-execution-which-is-more-important',
  },
  {
    id: 'wp-382',
    title: 'The Art of Prediction',
    excerpt: 'Nate Silver’s book “The Signal and the Noise” Reviewed by Mathew Yglesias, Slate Magazine Predictions are hard—especially about the future. It must have taken superhuman will for New York Times FiveThirtyEight…',
    content: `## Nate Silver’s book “The Signal and the Noise”

### Reviewed by Mathew Yglesias, Slate Magazine

Predictions are hard—especially about the future. It must have taken superhuman will for <a href="http://fivethirtyeight.blogs.nytimes.com/" class="text-navy underline" target="_blank" rel="noopener noreferrer"><em>New York Times</em> FiveThirtyEight</a> blogger and columnist Nate Silver to avoid quoting Yogi Berra in the course of writing his engaging and sophisticated new book, <a href="http://www.amazon.com/gp/product/159420411X/ref=as_li_ss_tl?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=159420411X&amp;linkCode=as2&amp;tag=slatmaga-20" class="text-navy underline" target="_blank" rel="noopener noreferrer"><strong>The Signal and the Noise</strong></a><em>,</em>especially because the line is so directly on point. The essential problem of prediction is that while forecasts are “about” the future, the <em>data</em> on which they’re based are generally data about the past. Modern technology makes it easy for any moderately trained person to throw a bunch of data points into a computer program and spit out a model that “explains” the data. Yet just because you can “predict” the past doesn’t mean you can predict the future. To take one example: Since World War I, no Democrat had won the White House without carrying West Virginia—until, in 2008, Obama won big nationally without coming close in coal country.

So what’s the difference between good models and bad ones?

In the course of this entertaining popularization of a subject that scares many people off, the signal of Silver’s own thesis tends to get a bit lost in the noise of storytelling. The asides and digressions are sometimes delightful, as in a chapter about the author’s brief adventures as a professional poker player, and sometimes annoying, as in some half-baked musings on the politics of climate change. But they distract from Silver’s core point: For all that modern technology has enhanced our computational abilities, there are still an awful lot of ways for predictions to go wrong thanks to bad incentives and bad methods.

Good forecasters are meticulous, open-minded, eager for more data, and rigorous in checking their ideas. You want foxes, in <a href="http://www.amazon.com/gp/product/1566630193/ref=as_li_ss_tl?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=1566630193&amp;linkCode=as2&amp;tag=slatmaga-20" class="text-navy underline" target="_blank" rel="noopener noreferrer">Isaiah Berlin’s terms</a>, rather than hedgehogs who simply assimilate new information into a strongly held big idea. Ideologues do a poor job of making political forecasts, presumably for reasons of bias. It’s easier to make good predictions when you have large samples of solid data, as in baseball, than when forced to deal with sketchy information or small samples. Forecasts may even be deliberately biased: The National Weather Service is pretty good at short-term weather predictions, but local TV newscasts deliberately and systematically overstate the chances of rain. This “wet bias” occurs because the audience is more upset when they’re caught in an unexpected shower without their umbrella than when predicted rain fails to materialize.

But while the factoids about best practices for gambling on NBA games are amusing, the argumentative core of the book is on the drier subject of the controversy between Bayesian and frequentist approaches to statistics. Don’t run away! The distinction is easy to master and can spare you some undue panic in real life.

,

Silver’s crucial point here is that growing technological sophistication is threatening to bury the world in the pseudo-sophistication of 95 percent confidence intervals and r-squared values. Silver illustrates by supposing that you find another woman’s panties in your dresser drawer. Viewed in isolation, this is damning evidence pointing strongly toward infidelity on the part of your husband. The Bayesian point is that this evidence has to be weighed in light of our prior understanding of the situation. Silver estimates that <em>if</em> your husband is cheating, then there’s perhaps a 50 percent chance of his lover’s underpants ending up in your drawer. If he’s not cheating, then the odds are much lower—say, 5 percent.

But how common is cheating in general? Silver notes studies that show that in any given year, about 4 percent of married partners cheat. Bayes’ theorem says we need to update our old estimate (<em>x</em>), in light of our new evidence (<em>y</em> and <em>z</em>), through the formula

<em>xy<br/>
</em>——————<br/>
<em>xy</em> + <em>z</em>(1-<em>x</em>)

So the odds that your husband is cheating are 29 percent—in light of the damning panties, much higher than the 4 percent of <em>all </em>spouses, but still well below 50.

More broadly, forecasts are hampered by “overfitting,” “the act of mistaking noise for signal.” Given a series of data points, an analyst can choose between a number of different formulae that “fit” the information on hand. Given the increasing ease with which complicated calculations can be undertaken, the temptation exists to devise elaborate models that fit the data very closely. After all, the more elaborate the model, the more impressive your abstract. But as Silver points out, this often results in over-emphasizing random fluctuations, leading to horrible predictions. In other words, we need some kind of <em>underlying theory</em> to guide our forecast, with the data increasing or decreasing our confidence. The level and sources of variation in the earth’s climate, for example, are so great that “there would be much reason to doubt claims about global warming were it not for their grounding in causality.” The case is persuasive <em>in light of the scientific basis for believing in a greenhouse effect</em>, but simply pulling temperature readings can lead to mistakes like the hype in the media (though not the scientific community) about “global cooling” in the 1970s.

Silver is particularly unimpressed with the performance of forecasters in my field of economics who, he notes, “have for a long time been much too confident in their ability to predict the direction of the economy.” On some level, this is a bit unfair. Economists have a hard time making accurate forecasts in part because to do it correctly you’d need to be able to forecast<em>political</em> outcomes: What will Mario Draghi say? Who will win the power struggle in the Japanese parliament? Salient events like financial crises are particularly hard to predict since if we could predict them reliably they wouldn’t happen. He goes easy on scientists’ inability to predict earthquakes reliably on the grounds that the task is genuinely difficult, and economists deserve some of the same forbearance.

But the failure to apply sound Bayesian methods is also a real problem. Somewhat counterintuitively, modern-day macroeconomists know a great deal about math and rather less about the economy (it’s hard, see above). But humility ill-suits the desire to publish exciting papers and get ahead. So a high premium is placed on what amount to sophisticated data-mining techniques. You can build elaborate models showing that past recessions can be accounted for by <a href="http://faculty.wcas.northwestern.edu/~yona/research/CEV.pdf" class="text-navy underline" target="_blank" rel="noopener noreferrer">“</a><a href="http://faculty.wcas.northwestern.edu/~yona/research/CEV.pdf" class="text-navy underline" target="_blank" rel="noopener noreferrer">shocks” </a><a href="http://faculty.wcas.northwestern.edu/~yona/research/CEV.pdf" class="text-navy underline" target="_blank" rel="noopener noreferrer">to technology</a> or <a href="http://noahpinionblog.blogspot.com/2011/12/i-shall-now-debunk-great-vacation-in.html" class="text-navy underline" target="_blank" rel="noopener noreferrer">people’s desire to work hard</a>. This “explains” the observed fluctuations in the business cycle in a mathematical sense, but it should be obvious that it doesn’t actually <em>explain</em> anything. It’s no coincidence that such methods are completely useless in producing policy-relevant forecasts, even as their fans are quite adept at continually fitting new events into the model.

To a perhaps surprising extent, then, one key to successful prediction turns out to be knowing what you’re talking about. From his perch at the <em>Times</em>, Silver stands out among political writers as unusually quantitatively adept. But he’s hardly the greatest mathematical genius in America. His journey from consulting to baseball analytics to professional poker to political prognosticating is very much that of a restless and curious mind. And this, more than number-crunching, is where real forecasting prowess comes from.

Author Nate Silver.Courtesy of the author.

In 2008, Silver’s general election forecast, while perfectly sound, was only a marginal improvement on crudely averaging a bunch of opinion polls. Where he really stood out was in the Clinton-Obama primaries where the unprecedented contours of the race were ruining pollsters’ models. Silver was able to see that in this case, state-level demographic information about race, age structure, and educational attainment could drastically improve forecasts. Putting it together took math, but this was fundamentally a substantive conjecture—and a good one—about the underlying structure of American politics.

These days FiveThirtyEight’s predictive content—essentially a daily reassurance to liberals that, yes, Obama is winning—is interspersed with little essays on the political geography of different states. Yet<em>The Signal and the Noise</em> is also a reminder that in a sense Silver’s skills are wasted on election forecasting. That epic primary battle aside, the conventional pollsters’ methods are pretty darn good at telling you who’s winning. But plenty of fields aren’t that good at predicting anything. Silver probably can’t crack the underlying science of earthquakes, but mainstream economic forecasting is an embarrassing mess despite a wealth of relevant data. A clever fox like Silver might be able to more greatly improve our understanding if he turned his attention to the problem in a more sustained way.`,
    author: 'Bob Katz',
    date: '2012-10-06',
    category: 'Transformation',
    image: '/images/blog/wp/crystalball.jpg',
    readTime: '7 min',
    slug: 'the-art-of-prdiction',
  },
  {
    id: 'wp-379',
    title: 'Why Startups Die',
    excerpt: 'Why Startups Die Editorâs note: This is a guest post by Andrew Montalenti. Andrew is the co-founder and CTO of Parse.ly, a technology startup that provides big data insights to the web’s best publishers. … via:…',
    content: `### Why Startups Die

Editorâs note: This is a guest post by Andrew Montalenti. Andrew is the co-founder and CTO of Parse.ly, a technology startup that provides big data insights to the web’s best publishers. …

via: <a href="http://thenextweb.com/entrepreneur/2012/10/03/why-startups-die/" class="text-navy underline" target="_blank" rel="noopener noreferrer">thenextweb.com</a>`,
    author: 'Bob Katz',
    date: '2012-10-03',
    category: 'Consulting',
    image: '/images/analytics-visual.jpg',
    readTime: '1 min',
    slug: 'why-startups-die',
  },
  {
    id: 'wp-377',
    title: 'Would Milton Friedman Approve Bernanke’s QE3?',
    excerpt: 'Would Milton Friedman Approve Bernanke’s QE3? – Business Insider But it doesn’t mean it’s not risky. via: www.businessinsider.com What would Milton do?',
    content: `### Would Milton Friedman Approve Bernanke’s QE3? – Business Insider

But it doesn’t mean it’s not risky.

via: <a href="http://www.businessinsider.com/would-milton-friedman-approve-bernankes-qe3-2012-10" class="text-navy underline" target="_blank" rel="noopener noreferrer">www.businessinsider.com</a>

What would Milton do?`,
    author: 'Bob Katz',
    date: '2012-10-02',
    category: 'Finance',
    image: '/images/blog/wp/200px-Portrait_of_Milton_Friedman.jpg',
    readTime: '1 min',
    slug: 'would-milton-friedman-approve-bernankes-qe3-business-insider',
  },
  {
    id: 'wp-371',
    title: 'Sir John Templeton 16 Rules For Investment Success | The Big Picture',
    excerpt: 'Sage advice from one of the legends in the investment business… Sir John Templeton 16 Rules For Investment Success | The Big Picture Interesting set of rules from legendary investor John Templeton: via:…',
    content: `Sage advice from one of the legends in the investment business…

### Sir John Templeton 16 Rules For Investment Success | The Big Picture

Interesting set of rules from legendary investor John Templeton:

via: <a href="http://www.ritholtz.com/blog/2012/09/16-rules-for-investment-success/?utm_source=dlvr.it&amp;utm_medium=twitter" class="text-navy underline" target="_blank" rel="noopener noreferrer">www.ritholtz.com</a>

1. Invest for maximum total real return

2. Invest — Don’t trade or speculate

3. Remain flexible and open minded about types of investment<br/>
4. Buy Low<br/>
5. When buying stocks, search for bargains among quality stocks.<br/>
6. Buy value, not market trends or the economic outlook<br/>
7. Diversify. In stocks and bonds, as in much else, there is safety in numbers<br/>
8. Do your homework or hire wise experts to help you<br/>
9. Aggressively monitor your investments<br/>
10. Don’t Panic<br/>
11. Learn from your mistakes<br/>
12. Begin with a Prayer<br/>
13. Outperforming the market is a difficult task<br/>
14. An investor who has all the answers doesn’t even understand all the questions<br/>
15. There’s no free lunch<br/>
16. Do not be fearful or negative too often

<strong>No. 1 INVEST FOR MAXIMUM TOTAL REAL RETURN</strong>

This means the return on invested dollars after taxes and after inflation. This is the only rational objective for most long-term investors. Any investment strategy that fails to recognize the insidious effect of taxes and inflation fails to recognize the true nature of the investment environment and thus is severely handicapped.<br/>
It is vital that you protect purchasing power. One of the biggest mistakes people make is putting too much money into fixed-income securities.

Today’s dollar buys only what 35 cents bought in the mid 1970s, what 21 cents bought in 1960, and what 15 cents bought after World War II. U.S. consumer prices have risen every one of the last 38 years.

If inflation averages 4%, it will reduce the buying power of a $100,000 portfolio to $68,000 in just 10 years. In other words, to maintain the same buying power, that portfolio would have to grow to $147,000— a 47% gain simply to remain even over a decade. And this doesn’t even count taxes.

<strong>No. 2 INVEST—DON’T TRADE OR SPECULATE</strong>

The stock market is not a casino, but if you move in and out of stocks every time they move a point or two, or if you continually sell short… or deal only in options…or trade in futures…the market will be your casino. And, like most gamblers, you may lose eventually—or frequently.

You may find your profits consumed by commissions. You may find a market you expected to turn down turning up—and up, and up—in defiance of all your careful calculations and short sales. Every time a Wall Street news announcer says, “This just in,” your heart will stop.

Keep in mind the wise words of Lucien Hooper, a Wall Street legend: “What always impresses me,” he wrote,“is how much better the relaxed, long-term owners of stock do with their portfolios than the traders do with their switching of inventory. The relaxed investor is usually better informed and more understanding of essential values; he is more patient and less emotional; he pays smaller capital gains taxes; he does not incur unnecessary brokerage commissions; and he avoids behaving like Cassius by ‘thinking too much.’”

<strong>No.3 REMAIN FLEXIBLE AND OPEN-MINDED ABOUT TYPES OF INVESTMENT</strong>

There are times to buy blue chip stocks, cyclical stocks, corporate bonds, U.S. Treasury instruments, and so on. And there are times to sit on cash, because sometimes cash enables you to take advantage of investment opportunities.<br/>
The fact is there is no one kind of investment that is always best. If a particular industry or type of security becomes popular with investors, that popularity will always prove temporary and—when lost—may not return for many years.

Having said that, I should note that, for most of the time, most of our clients’ money has been in common stocks. A look at history will show why. From January of 1946 through June of 1991, the Dow Jones Industrial Average rose by 11.4% average annually—including reinvestment of dividends but not counting taxes—compared with an average annual inflation rate of 4.4%. Had the Dow merely kept pace with inflation, it would be around 1,400 right now instead of over 3,000, a figure that seemed extreme to some 10 years ago, when I calculated that it was a very realistic possibility on the horizon.

Look also at the Standard and Poor’s (S&amp;P) Index of 500 stocks. From the start of the 1950s through the end of the 1980s—four decades altogether—the S&amp;P 500 rose at an average rate of 12.5%, compared with 4.3% for inflation, 4.8% for U.S. Treasury bonds, 5.2% for Treasury bills, and 5.4% for high-grade corporate bonds.

In fact, the S&amp;P 500 outperformed inflation, Treasury bills, and corporate bonds in every decade except the ’70s, and it outperformed Treasury bonds—supposedly the safest of all investments—in all four decades. I repeat: There is no real safety without preserving purchasing power.

<strong>No. 4 BUY LOW</strong>

Of course, you say, that’s obvious. Well, it may be, but that isn’t the way the market works. When prices are high, a lot of investors are buying a lot of stocks. Prices are low when demand is low. Investors have pulled back, people are discouraged and pessimistic.

When almost everyone is pessimistic at the same time, the entire market collapses. More often, just stocks in particular fields fall. Industries such as automaking and casualty insurance go through regular cycles. Sometimes stocks of companies like the thrift institutions or money-center banks fall out of favor all at once.

Whatever the reason, investors are on the sidelines, sitting on their wallets. Yes, they tell you: “Buy low, sell high.” But all too many of them bought high and sold low. Then you ask: “When will you buy the stock?” The usual answer: “Why, after analysts agree on a favorable outlook.”<br/>
This is foolish, but it is human nature. It is extremely difficult to go against the crowd—to buy when everyone else is selling or has sold, to buy when things look darkest, to buy when so many experts are telling you that stocks in general, or in this particular industry, or even in this particular company, are risky right now.<br/>
But, if you buy the same securities everyone else is buying, you will have the same results as everyone else. By definition, you can’t outperform the market if you buy the market. And chances are if you buy what everyone is buying you will do so only after it is already overpriced.

Heed the words of the great pioneer of stock analysis Benjamin Graham: “Buy when most people…including experts…are pessimistic, and sell when they are actively optimistic.”

Bernard Baruch, advisor to presidents, was even more succinct:

“Never follow the crowd.”

So simple in concept. So difficult in execution.

<strong>No. 5 WHEN BUYING STOCKS, SEARCH FOR BARGAINS AMONG QUALITY STOCKS</strong>

Quality is a company strongly entrenched as the sales leader in a growing market. Quality is a company that’s the technological leader in a field that depends on technical innovation. Quality is a strong management team with a proven track record. Quality is a well-capitalized company that is among the first into a new market. Quality is a wellknown trusted brand for a high-profit-margin consumer product.<br/>
Naturally, you cannot consider these attributes of quality in isolation. A company may be the low-cost producer, for example, but it is not a quality stock if its product line is falling out of favor with customers. Likewise, being the technological leader in a technological field means little without adequate capitalization for expansion and marketing.

Determining quality in a stock is like reviewing a restaurant. You don’t expect it to be 100% perfect, but before it gets three or four stars you want it to be superior.

<strong>No. 6 BUY VALUE, NOT MARKET TRENDS OR THE ECONOMIC OUTLOOK</strong>

A wise investor knows that the stock market is really a market of stocks. While individual stocks may be pulled along momentarily by a strong bull market, ultimately it is the individual stocks that determine the market, not vice versa. All too many investors focus on the market trend or economic outlook. But individual stocks can rise in a bear market and fall in a bull market.

The stock market and the economy do not always march in lock step. Bear markets do not always coincide with recessions, and an overall decline in corporate earnings does not always cause a simultaneous decline in stock prices. So buy individual stocks, not the market trend or economic outlook.

<strong>No. 7 DIVERSIFY. IN STOCKS AND BONDS, AS IN MUCH ELSE, THERE IS SAFETY IN NUMBERS</strong>

No matter how careful you are, you can neither predict nor control the future. A hurricane or earthquake, a strike at a supplier, an unexpected technological advance by a competitor, or a government-ordered product recall—any one of these can cost a company millions of dollars.   secure server  Then, too, what looked like such a well-managed company may turn out to have serious internal problems that weren’t apparent when you bought the stock.

So you diversify—by industry, by risk, and by country. For example, if you search worldwide, you will find more bargains— and possibly better bargains—than in any single nation.

<strong>No. 8 DO YOUR HOMEWORK OR HIRE WISE EXPERTS TO HELP YOU</strong>

People will tell you: Investigate before you invest. Listen to them. Study companies to learn what makes them successful.

Remember, in most instances, you are buying either earnings or assets. In free-enterprise nations, earnings and assets together are major influences on the price of most stocks. The earnings on stock market indexes—the fabled Dow Jones Industrials,for example—fluctuate around the replacement book value of the shares of the index. (That’s the money it would take to replace the assets of the companies making up the index at today’s costs.)

If you expect a company to grow and prosper, you are buying future earnings. You expect that earnings will go up, and because most stocks are valued on future earnings, you can expect the stock price may rise also.

If you expect a company to be acquired or dissolved at a premium over its market price, you may be buying assets. Years ago Forbes regularly published lists of these so-called “loaded laggards.” But remember, there are far fewer of these companies today. Raiders have swept through the marketplace over the past 10 to 15 years: Be very suspicious of what they left behind.

<strong>No. 9 AGGRESSIVELY MONITOR YOUR INVESTMENTS</strong>

Expect and react to change. No bull market is permanent. No bear market is permanent. And there are no stocks that you can buy and forget. The pace of change is too great. Being relaxed, as Hooper advised, doesn’t mean being complacent.

Consider, for example, just the 30 issues that comprise the Dow Jones Industrials. From 1978 through 1990, one of every three issues changed—because the company was in decline, or was acquired, or went private, or went bankrupt. Look at the 100 largest industrials on Fortune magazine’s list. In just seven years, 1983 through 1990, 30 dropped off the list. They merged with another giant company, or became too small for the top 100, or were acquired by a foreign company, or went private, or went out of business. Remember, no investment is forever.

<strong>No.10 DON’T PANIC</strong>

Sometimes you won’t have sold when everyone else is buying, and you’ll be caught in a market crash such as we had in 1987. There you are, facing a 15% loss in a single day. Maybe more.

Don’t rush to sell the next day. The time to sell is before the crash, not after. Instead, study your portfolio. If you didn’t own these stocks now, would you buy them after the market crash? Chances are you would. So the only reason to sell them now is to buy other, more attractive stocks. If you can’t find more attractive stocks, hold on to what you have.

<strong>No. 11 LEARN FROM YOUR MISTAKES</strong>

The only way to avoid mistakes is not to invest—which is the biggest mistake of all. So forgive yourself for your errors. Don’t become discouraged, and certainly don’t try to recoup your losses by taking bigger risks. Instead, turn each mistake into a learning experience. Determine exactly what went wrong and how you can avoid the same mistake in the future.

The investor who says, “This time is different,” when in fact it’s virtually a repeat of an earlier situation, has uttered among the four most costly words in the annals of investing.

The big difference between those who are successful and those who are not is that successful people learn from their mistakes and the mistakes of others.

<strong>No. 12 BEGIN WITH A PRAYER</strong>

If you begin with a prayer, you can think more clearly and make fewer mistakes.

<strong>No.13 OUTPERFORMING THE MARKET IS A DIFFICULT TASK</strong>

The challenge is not simply making better investment decisions than the average investor. The real challenge is making investment decisions that are better than those of the professionals who manage the big institutions.

Remember, the unmanaged market indexes such as the S&amp;P 500 don’t pay commissions to buy and sell stock. They don’t pay salaries to securities analysts or portfolio managers. And, unlike the unmanaged indexes, investment companies are never 100% invested, because they need to have cash on hand to redeem shares.

So any investment company that consistently outperforms the market is actually doing a much better job than you might think. And if it not only consistently outperforms the market, but does so by a significant degree, it is doing a superb job.

<strong>No. 14 AN INVESTOR WHO HAS ALL THE ANSWERS DOESN’T EVEN UNDERSTAND ALL THE QUESTIONS</strong>

A cocksure approach to investing will lead, probably sooner than later, to disappointment if not outright disaster. Even if we can identify an unchanging handful of investing principles, we cannot apply these rules to an unchanging universe of investments—or an unchanging economic and political environment. Everything is in a constant state of change, and the wise investor recognizes that success is a process of continually seeking answers to new questions.

<strong>No.15 THERE’S NO FREE LUNCH</strong>

This principle covers an endless list of admonitions. Never invest on sentiment. The company that gave you your first job, or built the first car you ever owned, or sponsored a favorite television show of long ago may be a fine company. But that doesn’t mean its stock is a fine investment. Even if the corporation is truly excellent, prices of its shares may be too high.

Never invest in an initial public offering (IPO) to “save” the commission. That commission is built into the price of the stock—a reason why most new stocks decline in value after the offering. This does not mean you should never buy an IPO.

Never invest solely on a tip. Why, that’s obvious, you might say. It is. But you would be surprised how many investors, people who are well-educated and successful, do exactly this. Unfortunately, there is something psychologically compelling about a tip. Its very nature suggests inside information, a way to turn a fast profit.

<strong>No. 16 DO NOT BE FEARFUL OR NEGATIVE TOO OFTEN</strong>

And now the last principle. Do not be fearful or negative too often. For 100 years optimists have carried the day in U.S. stocks. Even in the dark ’70s, many professional money managers—and many individual investors too—made money in stocks, especially those of smaller companies.

There will, of course, be corrections, perhaps even crashes. But, over time, our studies indicate stocks do go up…and up… and up.

With the fall of communism and the sharply reduced threat of nuclear war, it appears that the U.S. and some form of an economically united Europe may be about to enter the most glorious period in their history.

As national economies become more integrated and interdependent, as communication becomes easier and cheaper, business is likely to boom. Trade and travel will grow. Wealth will increase. And stock prices should rise accordingly.

By the time the 21st century begins—it’s just around the corner, you know—I think there is at least an even chance that the Dow Jones Industrials may have reached 6,000, perhaps more.

Chances are that certain other indexes will have grown even more. Despite all the current gloom about the economy, and about the future, more people will have more money than ever before in history. And much of it will be invested in stocks.<br/>
And throughout this wonderful time, the basic rules of building wealth by investing in stocks will hold true. In this century or the next it’s still “Buy low, sell high.”`,
    author: 'Bob Katz',
    date: '2012-10-02',
    category: 'Finance',
    image: '/images/analytics-visual.jpg',
    readTime: '14 min',
    slug: 'sir-john-templeton-16-rules-for-investment-success-the-big-picture',
  },
  {
    id: 'wp-298',
    title: 'FInancial Modeler’s Manifesto',
    excerpt: 'For all you financial business modelers of the world (from 2009). Paul Wilmott is a researcher, consultant and lecturer in quantitative finance. He is best known as the author of various academic and practitioner…',
    content: `For all you financial business modelers of the world (from 2009). Paul Wilmott is a researcher, consultant and lecturer in quantitative finance. He is best known as the author of various academic and practitioner texts on risk and derivatives.   twitter down  You can read more at <a href="http://www.wilmott.com" class="text-navy underline" target="_blank" rel="noopener noreferrer">www.wilmott.com</a>. Emanuel Derman is a South African-born academic, businessman and writer. He is best known as a quantitative analyst, and author of the book My Life as a Quant: Reflections on Physics and Finance; you can view his blog at <a href="http://www.ederman.com" class="text-navy underline" target="_blank" rel="noopener noreferrer">www.ederman.com</a>.

MODELERS OF ALL MARKETS, UNITE! You have nothing to lose but your illusions.

<strong>The Modelers’ Hippocratic Oath</strong>

~ I will remember that I didn’t make the world, and it doesn’t satisfy my equations.

~ Though I will use models boldly to estimate value, I will not be overly impressed by mathematics.

~ I will never sacrifice reality for elegance without explaining why I have done so.

~ Nor will I give the people who use my model false comfort about its accuracy. Instead, I will make explicit its assumptions and oversights.

~ I understand that my work may have enormous effects on society and the economy, many of them beyond my comprehension.

Emanuel Derman and Paul Wilmott January 7 2009`,
    author: 'Bob Katz',
    date: '2012-09-18',
    category: 'Analytics',
    image: '/images/blog/wp/facts-llc1-e1350397222215.gif',
    readTime: '1 min',
    slug: 'financial-modelers-manifesto',
  },
  {
    id: 'wp-278',
    title: 'The Perfect Watch?',
    excerpt: 'After 15 years, my search for the perfect watch ended in January. In a weak moment during an otherwise enjoyable Caribbean cruise, my wife talked me into getting a Citizen Eco-Drive. After years of looking at the…',
    content: `After 15 years, my search for the  perfect watch  ended in January. In a weak moment during an otherwise enjoyable Caribbean cruise, my wife talked me into getting a Citizen Eco-Drive. After years of looking at the Rolexes, Breitlings, Tag Heuers, Movado etc. costing much more, so why did I buy Citizen?

The Eco-Drive is solar powered, so it never needs batteries which always annoyed me every few years paying $20 or more to change batteries on my Sector watch. It has a larger face, allowing me to tell time with my diminishing eyesight. The watch is warrantied for use at 200 meters depth; my Sector was good to 300 meters (if I found myself at these depths, I would be crushed but my watch would continue working). So it works in all weather conditions; so far so good.

The best part of all about owning this watch (other than the fact that it costs a fraction) though is that it keeps perfect time in 24 time zones! With a perpetual calendar maintained by syncing to a remote tower located in Colorado (and various places worldwide), the watch with its built in calendar maintains accurate time and date. When the month shifted to March, I waited to see if the date would be maintained. Sure enough at close to the stroke of midnight, the date moved inexorably from 28 to 1. When the seasons changed and we moved to standard time in Spring, sure enough, the watch hands move appropriately forward one hour. If one wears a watch strictly to keep time, its the perfect watch.

Now, the watch has a knob on the crown with which you can use to tell if the watch is connected to a syncing tower. It doesn’t need to be connected all the time and I don’t know when one decides to sync up all the Citizen perpetual calendar watches in the world but it’s there for the owner to verify it’s working.

Because although the Citizen may be the perfect watch, this citizen unfortunately is not.

<img src="/images/blog/wp/20120920-164427.jpg" alt="20120920-164427.jpg" class="my-6 max-w-full h-auto rounded" loading="lazy"/>`,
    author: 'Bob Katz',
    date: '2012-07-15',
    category: 'Consulting',
    image: '/images/blog/wp/20120920-164427.jpg',
    readTime: '2 min',
    slug: 'the-perfect-watch',
  },
  {
    id: 'wp-269',
    title: 'Clean Tech Investing',
    excerpt: 'I recently had the opportunity to attend Babson’s 4th annual Entrepreneurial Energy Expo 2009 on CleanTech Investing, March 26. I was quite impressed with the quantity and range of attendees and the quality of the…',
    content: `I recently  had the  opportunity to attend Babson’s 4th annual Entrepreneurial Energy Expo 2009 on CleanTech Investing, March 26. I was quite impressed with the quantity and range of attendees and the quality of the presentations/breakout sessions. There was much energy and optimism in the breakout session I attended dealing with the significant challenges of investing in CleanTech, including a number of local active VC/PE firms (both private and state funded) and their experiences.

One interesting point made was that because of the significant investment over a sustained period required by these companies, VC have raised their hurdle rates from 35% to 45% or more, to account for the risk inherent in these technologies/business models.

I’ve included links to the opening presentation and the luncheon presentation by Peter Fusaro – Implementing the New Green Business and Nicholas Parker – Cleantech in an Obama World`,
    author: 'Bob Katz',
    date: '2009-04-02',
    category: 'Consulting',
    image: '/images/blog/wp/shutterstock_105540734.jpg',
    readTime: '1 min',
    slug: 'clean-tech-investing',
  },
  {
    id: 'wp-163',
    title: 'Hello World (Again)',
    excerpt: 'The last time I looked at a “Hello World” introduction was about 100 years ago, while programming Fortran/Basic/Pascal/C in my initial experiences in the business world BPC (before personal computers). While it’s…',
    content: `The last time I looked at a “Hello World” introduction was about 100 years ago, while programming Fortran/Basic/Pascal/C in my initial experiences in the business world BPC (before personal computers). While it’s nice to know that there some things don’t change, instead of announcing oneself to your computer, we can now address our introductions literally to the world at large, certainly a much more daunting proposition than entering punch card decks to a faceless computer administrator.

This blog is meant to express my personal contrarian observations on the state of the business world but given the collision of our personal and business worlds these days, I may digress into the personal side from time to time. The business world, and the world in general has gone amok in the midst of the US financial crisis (whose contagion has spread throughout the developed/developing world), so there seems to be bit more to talk/comment about these days than in previous years. Whether this recession spreads into a full scale worldwide depression, as many individuals and gold bugs observe remains to be seen, Ben Bernanke’s recent comments notwithstanding.

<a href="http://www.cbsnews.com/stories/2009/03/12/60minutes/main4862191.shtml" class="text-navy underline" target="_blank" rel="noopener noreferrer">http://www.cbsnews.com/stories/2009/03/12/60minutes/main4862191.shtml</a>`,
    author: 'Bob Katz',
    date: '2009-03-13',
    category: 'Consulting',
    image: '/images/blog/wp/BPM.jpg',
    readTime: '1 min',
    slug: 'entrepreneurship',
  },
  {
    id: 'wp-266',
    title: 'To forecast or not to forecast',
    excerpt: 'This question was asked in a recent (Feb. 29, 2009) The Economist editorial/article about the role of today’s Corporate Planning. In good economic times, divining the future is difficult; during the current econmist…',
    content: `This question was asked in  a recent  (Feb. 29, 2009) The Economist editorial/article about the role of today’s Corporate Planning. In good economic times, divining the future is difficult; during the current econmist chaos, it is near impossible. Or so many firms believe; many large companies, including Unilever, Costco and Union Pacific among others, have refused to give earnings guidance for 2009; in, others like Intel, Apple take it one quarter at a time. So why do it at all?

The Economist points out that of all the times to gauge the future, now is the time., an opinion I share. Of course firms need to plan internally in order to project their cost structures and cash flow requirements to sustain profitability, allocate scarce resources and maintain a viable business. Although these firms continue to plan internally, their concern (fear?) is that issuing a forecast in the current climate subjects their stock price to serious risk of missing the estimate, with the inevitable market punishment (Wall Street having suffered the same fate themselves!). Nor can the company abrogate their corporate responsibility of advising shareholders to those same analysts, as a CEO once remarked to me, “and let them earn their money.”

Rather than prepare a single number, management would do well by preparing a reasonable, financial range incorporating a range of projected risky outcomes. Failure to provide such estimates may be viewed as a signal to shareholders that the firm needs additional scrutiny or worse, that management is afraid of being held accountable for failing to meet its goals. The need for greater transparency especially in these times, would be something devoutly to be desired.`,
    author: 'Bob Katz',
    date: '2009-03-08',
    category: 'Analytics',
    image: '/images/blog/wp/shutterstock_111948563.jpg',
    readTime: '1 min',
    slug: 'to-forecast-or-not-to-forecast',
  },
];
