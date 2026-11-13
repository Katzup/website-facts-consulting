// Articles written for the FACTS Consulting site itself (not imported from another platform).
import type { BlogPost } from './blogPosts';

export const factsPosts: BlogPost[] = [
  {
    id: 'facts-your-business-has-the-data',
    title: "Your Business Has the Data. Why Aren't You Using It to Make Better Decisions?",
    excerpt: "Most companies know a great deal about what happened and much less about what to do next. Where analysis pays in a mid-sized business, and five questions that start from the decision instead of the dashboard.",
    content: `<a href="/images/blog/facts/your-business-has-the-data.webp" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/your-business-has-the-data.webp" alt="Cover: From Analysis to AI to Action. Turning intelligence into decisions. Turning decisions into results. Three panels over a mountain road at sunrise. Analysis: What do we know? Data, models, evidence, insights. AI: What could we do? Prediction, scenarios, reasoning, agent workflows. Action: What should we do? Decisions, execution, outcomes, learn and improve. FACTS Consulting, We Make You Smarter." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<em>Analysis to AI to Action, Article 2 of 3</em>

Most of the companies I have worked inside produced a month-end package. Financial statements, a variance report, an aging, a sales summary by region, later a dashboard with the same numbers in color. It went to the same people on the same day each month. The numbers were accurate, the charts were clean, and the package arrived on schedule, because a great deal of effort went into making sure it did.

What was harder to find was the connection between the package and the decisions management was about to make. Executives did act, on pricing, on hiring, on a customer, on a line of credit. The reports had rarely changed what they decided. The decisions were made on other grounds, with the package as background, and when I asked which page had tipped a decision one way or the other, the answer was usually a pause.

Client confidentiality keeps me from naming any of these companies, and I am not going to assemble a composite and present it as one engagement. The pattern across them is the point, and it was remarkably consistent: the organization knew a great deal about what had happened and considerably less about what it should do next. That is not a complaint about the reports. They did what they were asked to do, which was to establish that last month happened and who was responsible for it. Nobody had asked them to do anything else.

Here is the oddity. The same companies had the data to answer the questions that would have changed something. Which customers make us money, after the cost of serving them. Where cash will come under pressure in the next ninety days. What to change this quarter to improve margin two quarters out. Every one of those answers was sitting in the accounting system, the order system, the payroll system, and the customer file, and nobody had assembled it, because nobody had been asked a question that required it.

<a href="/blog/ai-pilots-where-are-the-profits" class="text-navy underline">Article 1 in this series</a> was about value: what counts as a financial return from an AI investment and what has to be established before the money moves. This article is about the step before that, and before any technology at all. It is about finding the decision.

## The report describes. The decision needs a forecast.

Suppose gross margin fell from 32 percent to 29 percent. The dashboard shows the three points. A good analyst can decompose them within a day: mix shifted toward lower-margin lines, freight rose, two customers negotiated better terms. All of that is true and all of it is about last quarter.

Management's questions point the other way. Will it keep falling? Which accounts and which products are doing the damage? If we raise prices selectively, how much volume do we lose and is the trade worth it? If we change how we buy, does the number move?

Those are not reporting questions. They are forecasting questions with a decision attached, and the honest answer to each is a range, not a number. A company that is used to exact figures from the general ledger finds ranges uncomfortable. It should get used to them. A decision made on a defensible range beats a decision deferred until the number is exact, because the number will not be exact until the quarter is over and the decision is moot.

## Three jobs, not three levels of sophistication

The analytics trade sorts its work into three kinds, and the labels are useful if you read them as what each one does for a decision rather than as a ladder of technical difficulty.

<strong>Describing</strong> answers what happened. Revenue fell four percent; inventory rose twelve; three customers did not reorder. This is where nearly all management reporting lives, and it is necessary. You cannot forecast from data you have not first reconciled.

<strong>Predicting</strong> answers what is likely to happen. Given buying history, order patterns, seasonality, and what is in the pipeline today, which customers are at risk of leaving, where will inventory exceed demand, what is the probability that cash is short in week nine? These forecasts are wrong by construction. They are still worth having, because a warning that is right six times in ten and arrives eight weeks early is worth more than a report that is right every time and arrives after the fact.

<strong>Prescribing</strong> answers what to do. Which combination of price changes, purchase quantities, staffing, and customer interventions most improves the result, under the constraints the business actually has? This is where analysis meets judgment, and it is the only one of the three that produces money on its own. The other two produce the conditions for it.

The point I would hold onto is that these are three different contributions to a decision, not three stages of a technology program. A complicated predictive model with no decision attached is worth less than a plain contribution-margin analysis that changes how the company allocates half a million dollars of working capital. I have seen both in client work. The plain one paid.

## Where the money usually is

For a company between, say, ten and two hundred million in revenue, the applications that pay are rarely exotic. They are the ones the month-end package almost answers and then stops.

<strong>Customer profitability.</strong> Revenue is not profit, and the largest customer is often not the most profitable one. The account that demands expedited shipments, special packaging, frequent small orders, and ninety-day terms can contribute less than a smaller account that orders in full pallets and pays in thirty. This is old knowledge; the Harvard case on Kanthal, written in 1989, showed a manufacturer discovering through customer-level costing that a minority of its customers produced all of its profit and a long tail consumed it. What has changed is that the data to run the analysis is now in every mid-sized company's systems. What has not changed is that somebody has to decide to run it.

<strong>Cash.</strong> An annual budget does not know which week a large receipt lands or which week payroll, a loan payment, and a supplier's quarterly invoice all fall together. A rolling thirteen-week cash forecast, rebuilt every week with actuals replacing the week just completed, does. The format came out of turnaround work, where lenders required it, and it is a strange thing that the companies in the best position to benefit from it are the ones that have never been in trouble. A finance director who sees a shortfall in week nine has eight weeks to collect, defer, or borrow on their own terms.

<strong>Inventory and purchasing.</strong> Too much inventory ties up capital and goes obsolete; too little loses sales and customers. A demand forecast joined to supplier lead times and a stated service level turns purchasing from a habit into a decision with a number attached.

<strong>Pricing.</strong> An across-the-board increase is easy to administer and economically crude. Some products and customers can carry a higher price; others will leave. Segmenting by contribution margin and testing demand assumptions where that is possible turns one pricing decision into several better ones.

None of these needs generative AI. Most of them can begin with an export from the ERP, a spreadsheet, a few standard statistical tools, and a management meeting that asks for the result and acts on it. That is the point I would most want a CEO to take from this article, because it runs against everything they are currently being sold: you do not need to buy artificial intelligence to start making more intelligent decisions.

## The inventory arithmetic, with the assumptions showing

Take a hypothetical distributor carrying four million dollars of average inventory. Suppose a better demand forecast and tighter purchasing discipline could reduce the average by ten percent without a material increase in stockouts. That releases $400,000 of working capital. At a carrying-cost assumption of twelve percent a year, it also avoids about $48,000 of annual carrying cost, to the extent those costs are genuinely variable.

Now the labels, the way Article 1 asked for them. The $400,000 is a balance-sheet and cash benefit, once. It is not profit. The $48,000 is a projected saving that depends on three things being true: that the forecast is as accurate as assumed, that the stockout rate does not rise, and that the carrying costs actually fall when the inventory does rather than sitting in a warehouse lease that does not change. Each of those is testable before the purchasing policy changes, and each should be.

Notice where the value comes from. Not from the dashboard. Not from an AI subscription. Not from the forecasting model, which on its own produces a number nobody is obliged to act on. It comes from a purchasing manager buying less, on the strength of a forecast. The analysis found the decision. Carrying the decision out, and measuring what it did, is the third article's subject.

## What AI changes here, and what it does not

Generative AI makes this work more accessible. A manager who could not write a query can now ask one. A controller can have the tool draft the analysis code, explain an anomaly, summarize three scenarios, and try a fourth. Machine-learning methods can find patterns in customer behavior and improve some forecasts, and for a company with enough transaction history they are worth trying.

What AI does not do is repair the inputs. It does not fix inconsistent product costing, missing cost-to-serve data, or a business objective nobody has written down. A recommendation generated by a model can be fluent and economically wrong, and it is more dangerous than a wrong spreadsheet because it is more persuasive. McKinsey's 2026 State of AI survey makes the same point from the other direction. Nearly three-quarters of the companies it classes as AI high performers, the six percent of respondents attributing at least five percent of earnings to AI, report having fundamentally redesigned workflows because of their AI use, up from 55 percent a year earlier. Among everyone else the figure is about one-quarter. That is an association in a survey, not proof that the redesign produced the profit, but it points where this article points: a tool added to an unchanged process rarely changes the result.

So the architecture is not "ask the chatbot what we should do." It is reliable data, a method appropriate to the question, a decision rule written down in advance, and a person who decides. The AI can sit in any of those four places. It cannot be all of them.

## Start with a decision, not a dashboard

Before the next analytics initiative, five questions, and they belong on one page the same way Article 1's did.

<strong>1. Which recurring decision are we trying to improve?</strong> Not "customer analytics" but "which accounts get the sales team's time next quarter" or "how much of this product we buy in March."

<strong>2. What information would change that decision?</strong> If no answer would change it, the analysis is for comfort, and comfort has a price.

<strong>3. What does getting it wrong cost?</strong> In dollars, so the analysis can be sized to the decision rather than to the data available.

<strong>4. How will we know the new method decides better than the old one?</strong> The honest test is a forward one: the method is fixed, then run on a period it has not seen, and compared with what the company would have done anyway. I learned the force of that test on my own work. A model that beat its benchmark in every backtest lost to it the first time it was run forward on data it had not been shown. Nothing was wrong with the model. It had learned the years it was given.

<strong>5. Who decides?</strong> Not who runs the analysis. If the answer is the analyst, the analysis will be admired and not used. What the decider then does with it, and how the result is measured, is the third article.

These questions reverse the usual order. Instead of collecting more data in the hope of discovering something, management starts from a decision with money attached and works backward to the information that would improve it. The same discipline that makes an AI pilot testable makes an analytics project worth funding, and the two are often the same project.

## The advantage a smaller company actually has

Large companies have spent billions on data platforms, analytics teams, and now AI, and a smaller company cannot match that. It does not have to. Its advantage is distance: the gap between seeing a problem, deciding, and acting is days, not quarters. An owner who finds a pricing problem on Monday can have a change in the system by Friday. A finance director who sees the week-nine shortfall can be on the phone to the bank the same afternoon.

I am less sure than the brief for this article was that smaller companies use that advantage. In my experience they lose it the same way large ones do, by letting the report stand in for the decision. The speed is available. It is used when someone asks the forward question and insists on an answer with a date on it.

Analysis tells you what you know and what may happen. AI can widen what you are able to analyze. Neither creates a dollar of value until someone decides, and a decision creates none until it is carried out and measured. That last step, from a recommendation to a result that shows up in the accounts, is the third article.

### Sources

- Kanthal (A), Harvard Business School Case 190-002, Robert S. Kaplan, July 27, 1989: a costing system built to determine the profitability of individual customer orders, including the cost of processing orders and supplying nonstandard products. <a href="https://store.hbr.org/product/kanthal-a/190002" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://store.hbr.org/product/kanthal-a/190002</a>
- McKinsey, "The State of AI in 2026: On the Road to ROI," August 25, 2026: nearly three-quarters of AI high performers report fundamentally redesigning workflows because of their AI use, up from 55 percent a year earlier, against about one-quarter of other respondents; high performers are 6 percent of respondents, those reporting significant value and at least 5 percent of EBIT attributable to AI. <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai</a>

<em>FACTS Consulting — Finance, Analytics, Consultative Transformational Services</em>

<em>We Make You Smarter.</em>`,
    author: 'Bob Katz',
    date: '2026-11-10',
    category: 'AI',
    image: '/images/blog/facts/your-business-has-the-data.webp',
    readTime: '8 min',
    slug: 'your-business-has-the-data',
  },
  {
    id: 'facts-cxo-advisory-letter-2026-11-11',
    title: "CxO Advisory Letter: Week of November 11, 2026",
    excerpt: "The Census Bureau asked firms what AI did to their headcount: among firms using AI, 6.6% say it raised their headcount and 2.5% say it lowered it. Also this week: CFO returns from AI by company size, customer-service ROI, and October's layoff announcements.",
    content: `## This week

The Census Bureau has started asking firms what AI has done to their headcount. Among firms using it, 6.6% say AI raised their total headcount over the past six months and 2.5% say it lowered it. The same week, Challenger, Gray &amp; Christmas put AI-attributed job-cut announcements at 121,401 so far this year, about a fifth of all announced cuts. The two counts can both be right: Challenger tallies announcements, which come mostly from large employers, while Census weights every firm equally, and nearly all firms are small. The returns side is thinner still. Among the CFOs of the smaller companies in one survey this week, 1% reported significant returns from AI.

## Finance &amp; performance management

### CFOs expect AI to pay off within two years, but at companies under $1 billion almost none see significant returns yet

<em>RGP, "CFO Perspectives 2026: The Capacity Crisis," press release November 3, 2026.</em> <a href="https://rgp.com/press/rgp-study-89-of-cfos-report-positive-financial-outlook-yet-nearly-half-say-transformation-demands-exceed-capacity/" class="text-navy underline" target="_blank" rel="noopener noreferrer">RGP release</a> · <a href="https://www.cfo.com/news/cfos-expect-ai-to-pay-off-in-2-years-RGP-survey/873512/" class="text-navy underline" target="_blank" rel="noopener noreferrer">CFO.com coverage, Nov 3</a>

<strong>What the evidence shows.</strong> iResearch Services surveyed 400 CFOs and equivalent finance leaders in September 2026 for RGP. All work at companies with $250 million or more in revenue, split into five equal revenue bands up to $10 billion or more, across nine industries in North America, Europe, Asia Pacific and Mexico. The results are unweighted.

52% report positive returns from AI today, and 10% call them significant. 54% expect significant positive returns within 24 months. CFO.com reports a sharp size gradient that is not in RGP's release: at companies under $1 billion in revenue, 1% reported significant AI returns, against 17% at companies of $5 billion or more.

The main variable in the release is capacity, not money. Where the transformation agenda exceeds what the organization can execute (49% of respondents), 24% report positive AI returns. Where capacity meets or exceeds demand, 79% do. Fewer than 1% name funding as their main barrier. The top barriers are integrating AI with existing systems (23%), scaling pilots that worked (14%) and data quality (13%). 44% put change management and adoption among their top three sources of delay, yet only 6% would spend a hypothetical extra $10 million on it.

On workforce, 63% say AI has reduced finance workloads, 2% plan to use that to cut headcount or avoid hiring, and 47% expect to move people into higher-value work.

<a href="/images/blog/facts/cxo-advisory-letter-2026-11-11-rgp-ai-returns-by-capacity.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-11-11-rgp-ai-returns-by-capacity.png" alt="Bar chart: share of CFOs reporting positive AI returns, by whether the organization can execute its transformation agenda. Capacity meets demand 79%, agenda exceeds capacity 24%. Source: RGP survey of 400 CFOs at companies with $250 million or more in revenue, September 2026 (vendor-sponsored)." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<strong>How solid is it.</strong> VENDOR SURVEY. RGP sells the kind of transformation and change support the findings point toward. The under-$1 billion figure appears only in CFO.com's article; I have not checked it against the full report, which requires registration. Given five equal bands, the under-$1 billion group is probably the two lowest bands, roughly 160 CFOs, but that is my inference. The capacity split is a correlation: organizations that can absorb change may differ in many other ways.

<strong>Which roles it affects.</strong> CFO, CEO, CIO/CTO, CAIO, Chief People Officer.

<strong>For an SMB leadership team.</strong>

- Before approving the next AI project, list every initiative currently open across the company with its owner and target date, and ask whether the same people are named on more than two. If they are, the RGP data suggests the new project is more likely to stall than to pay off.
- Write down the return you expect from each AI project now in place, with a date, and put it in the board pack. Then you can measure against your own stated expectations, not a vendor's.

## C-suite role shifts

### CFOs say their time should go to strategy with the CEO. 7% say it does

<em>RGP CFO Perspectives 2026 (above), and Russell Reynolds Associates, Q1–Q3 2026 Global CFO Turnover Index, reported by CFO Dive on November 9, 2026.</em> <a href="https://rgp.com/press/rgp-study-89-of-cfos-report-positive-financial-outlook-yet-nearly-half-say-transformation-demands-exceed-capacity/" class="text-navy underline" target="_blank" rel="noopener noreferrer">RGP release</a> · <a href="https://cfodive.com/news/less-than-1-4-new-cfos-globally-were-women-q3/874169" class="text-navy underline" target="_blank" rel="noopener noreferrer">CFO Dive</a> · <a href="https://www.russellreynolds.com/en/insights/reports-surveys/global-cfo-turnover-index" class="text-navy underline" target="_blank" rel="noopener noreferrer">Russell Reynolds index</a>

<strong>What the evidence shows.</strong> In the RGP survey, 59% of CFOs say shaping strategy with the CEO and executive team should be their biggest use of time, and 7% say it currently is. FP&amp;A (63%) and reporting and controls (59%) are among the most common top-three uses of their time. 27% say their executive team sees them mainly as financial stewards, while 11% see themselves that way.

The hiring market reflects the same pressure. Russell Reynolds' index of public companies across major global stock indices shows the share naming a new CFO rose to 15% in Q1–Q3 2026 from 14%. Its commentary says "appointment activity remains high, retirement is accounting for a growing share of departures, and fewer organizations are filling CFO roles from within." Women were 22.9% of CFOs appointed globally in the third quarter, down from 25% a year earlier.

<strong>How solid is it.</strong> VENDOR SURVEY (RGP) and PRIMARY DATA (Russell Reynolds tracks actual appointments, but only at large listed companies). The time-allocation figures are self-reported. The Russell Reynolds figures here come from its written summary and from CFO Dive's report, not from the index's interactive charts, which hold the detail on first-time and internal appointments.

<strong>Which roles it affects.</strong> CFO, CEO, Chief Accounting Officer, controller, board audit chairs.

<strong>For an SMB leadership team.</strong>

- Ask your CFO to log one month of time against three buckets: close and reporting, FP&amp;A, and work with the CEO on strategy. If strategy is under 10%, decide which close or reporting task gets handed to a controller or automated first.
- If fewer large companies are promoting CFOs from within, your strongest controller or FP&amp;A lead is more likely to get called by recruiters. Name a successor for the CFO seat and give that person one board-facing assignment this quarter.

## AI adoption in SMBs

### More firms say their employees use generative AI than say the business uses AI, and the gap widens with size

<em>U.S. Census Bureau, Business Trends and Outlook Survey (BTOS), data release of November 5, 2026.</em> <a href="https://www.census.gov/newsroom/press-releases/2026/btos-nov-5.html" class="text-navy underline" target="_blank" rel="noopener noreferrer">Release notice</a> · <a href="https://www.census.gov/hfp/btos/data" class="text-navy underline" target="_blank" rel="noopener noreferrer">BTOS data</a>

<strong>What the evidence shows.</strong> BTOS samples about 1.2 million employer businesses, excluding farms. This release covers reference weeks October 5–18, collected October 19 to November 1, and it adds three AI questions.

- <strong>Business use.</strong> 24.2% of firms said the business used AI in a business function in the past two weeks (standard error 0.61 points), against 24.6% in the prior period. That is no meaningful change.
- <strong>Employee use (new).</strong> 26.8% said their employees used generative AI for work-related tasks. The gap between that and business use grows with firm size. At firms with 1–4 employees it is 24.5% employee use against 22.8% business use. At firms with 250 or more employees it is 55.1% against 44.1%, and at 100–249 employees, 50.2% against 40.0%.
- <strong>Headcount and hiring (new).</strong> These questions went only to firms that answered yes to either of the AI questions. Over the past six months, 6.6% said AI increased total headcount, 2.5% said it decreased it, and 87.3% said there was no change. On hiring, 2.5% said AI increased the number of new hires, 3.3% said it decreased them, and 90.2% said there was no change. The pattern is similar across size classes.
- <strong>"Do not know" (unexplained jump).</strong> The share answering "do not know" to the business-use question rose to 13.9% from 9.6%, with a standard error of 0.27 points. It rose in every size class, to 24.5% at the largest firms.

<a href="/images/blog/facts/cxo-advisory-letter-2026-11-11-btos-genai-employees-by-size.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-11-11-btos-genai-employees-by-size.png" alt="Bar chart: share of U.S. employer firms whose employees used generative AI for work in the past two weeks, by number of employees. 1 to 4 employees 24.5%, 5 to 9 25.5%, 10 to 19 29.0%, 20 to 49 34.2%, 50 to 99 41.5%, 100 to 249 50.2%, 250 or more 55.1%. Source: U.S. Census Bureau, Business Trends and Outlook Survey, reference period October 5 to 18, 2026." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<a href="/images/blog/facts/cxo-advisory-letter-2026-11-11-btos-ai-headcount-effect.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-11-11-btos-ai-headcount-effect.png" alt="Bar chart: what AI did to headcount and hiring over the past six months, among U.S. firms using AI. Headcount rose 6.6%, headcount fell 2.5%, hiring rose 2.5%, hiring fell 3.3%. Source: U.S. Census Bureau, Business Trends and Outlook Survey, released November 5, 2026." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<strong>How solid is it.</strong> PRIMARY DATA. This is a large probability sample with published standard errors. This period is the first cycle of a new sample year, and the current questionnaire uses the "Super Intelligence or SI (formerly referred to as Artificial Intelligence or AI)" wording in the question text itself. Either change could explain the jump in "do not know," and the files don't say which. The headcount questions ask respondents to attribute changes to AI, which is a judgment, not a measurement.

<strong>Which roles it affects.</strong> CEO, CIO/CTO, CAIO, Chief People Officer, General Counsel.

<strong>For an SMB leadership team.</strong>

- If you have 50 or more employees, assume that a meaningful share of AI use in your company is employee-driven and not on any approved list. Ask IT for 30 days of traffic or expense data showing which generative AI tools staff actually reach, and compare it with what you think you have approved.
- Add one line to your monthly people report: roles left open or eliminated where the hiring manager cited AI. The Census data says this is rare. Your own count tells you whether you are the exception.

### 4% of customer service leaders say AI has delivered the return they expected

<em>Gartner survey of 275 service and support leaders, released November 4, 2026 at the Gartner Customer Service and Support Conference; reported by CX Dive.</em> <a href="https://www.customerexperiencedive.com/news/only-4-of-customer-service-teams-have-achieved-expected-roi-from-ai-here/873732/" class="text-navy underline" target="_blank" rel="noopener noreferrer">CX Dive</a> · <a href="https://www.gartner.com/en/newsroom/press-releases/2026-11-04-gartner-survey-reveals-just-4-percent-of-customer-service-leaders-have-achieved-the-expected-roi-of-their-ai-initiatives" class="text-navy underline" target="_blank" rel="noopener noreferrer">Gartner release</a>

<strong>What the evidence shows.</strong> Of 275 service and support leaders, 4% said their organizations had achieved the ROI they expected from AI. CX Dive's own analysis is that executives expected cost cuts, while the gains AI produced (faster calls, less after-call note-taking) do not necessarily become revenue or market-share gains. Organizations Gartner classes as "AI-forward" invest nearly 1.8 times more in foundations (clean data and knowledge sources) than in the AI use cases themselves. Gartner's Christopher Sladdin: "Leaders must stop asking how they remove humans from interactions and instead ask where their involvement creates disproportionate value for customers."

<strong>How solid is it.</strong> INDEPENDENT SURVEY. This is Gartner's own research, not vendor-sponsored. However, the figures here come from CX Dive's report of the release, which gives no field dates or respondent company sizes. Gartner's customer-service panels lean toward large organizations. "Expected ROI" depends on what was expected, so an over-promised business case shows up here as a failure.

<strong>Which roles it affects.</strong> COO, CRO, Chief Customer Officer, CFO, CIO.

<strong>For an SMB leadership team.</strong>

- For any AI customer-service tool you run or are piloting, get the original business case out and check whether its savings line was headcount. If it was, and headcount hasn't moved, rewrite the case around a measure you can actually see this quarter, such as handle time, first-contact resolution or backlog.
- Before buying the next service AI feature, ask who owns your knowledge base and when it was last cleaned. If nobody can answer, that is where the first budget goes.

### AI-attributed layoff announcements fell to their lowest month of the year in October

<em>Challenger, Gray &amp; Christmas, October 2026 Job Cuts Report, released November 5, 2026.</em> <a href="https://www.challengergray.com/blog/october-layoffs-at-three-year-low-seasonal-hiring-plans-up-26/" class="text-navy underline" target="_blank" rel="noopener noreferrer">Challenger blog post</a>

<strong>What the evidence shows.</strong> Announced U.S. job cuts in October were 43,994, down 71% from October 2025 and the lowest October since 2023. Cuts attributed to AI were 1,265, the lowest monthly total this year. Year to date, AI is cited for 121,401 cuts, about 20% of the 617,189 total, and for 193,226 since 2023. "Market/economic conditions" has overtaken AI as the leading reason for 2026, at 130,531. Technology leads all sectors with 171,501 cuts this year. Announced hiring plans in October were 444,692, the highest October since at least 2009. Most of that looks seasonal: Amazon's 300,000 holiday hires account for nearly all of the 300,252 hiring plans in Technology, and UPS announced 100,000. The firm's report says: "The reasons employers give have shifted from technology to the economy." Microsoft's voluntary exit offers to 60,000 employees are not counted.

<strong>How solid is it.</strong> PRIMARY DATA, with a caveat: it counts announcements, not completed separations. The reason assigned is the employer's stated one, and the data favors large employers who announce publicly. One month is not a trend.

<strong>Which roles it affects.</strong> CEO, Chief People Officer, CFO, General Counsel.

<strong>For an SMB leadership team.</strong>

- If your workforce plan for 2027 assumes AI will let you shrink a function, write down the specific tasks that go away and who currently does them. The national evidence this week (Census and Challenger together) says most employers are not yet getting there.
- Watch whether larger competitors in your market start shedding staff. Laid-off people from technology and adjacent sectors are a hiring pool for the analytics and systems roles mid-sized firms often struggle to fill.

## The numbers

- <strong>26.8%</strong>: U.S. employer firms whose employees used generative AI for work in the past two weeks (business use: 24.2%) (Census BTOS, Nov 5)
- <strong>6.6% vs 2.5%</strong>: AI-using firms saying AI raised vs. lowered total headcount over six months (Census BTOS, Nov 5)
- <strong>13.9%</strong>: Firms answering "do not know" on AI use, up from 9.6% two weeks earlier (Census BTOS, Nov 5)
- <strong>1%</strong>: CFOs at companies under $1B reporting significant AI returns (17% at $5B+) (RGP survey via CFO.com, Nov 3)
- <strong>4%</strong>: Customer service leaders whose AI delivered the ROI they expected (Gartner via CX Dive, Nov 4)
- <strong>121,401</strong>: Announced U.S. job cuts attributed to AI, Jan–Oct 2026 (about 20% of all) (Challenger, Nov 5)

## What I'm watching

- <strong>The Census "do not know" jump.</strong> A 4-point rise in one cycle, across every size class, is large for this survey. If it is the new sample, it should settle. If it is respondents unsure whether their tools count as "Super Intelligence," it will stay and will distort the trend line that much of the public debate relies on. The next release, due later this month, should help separate the two.
- <strong>Vendor-forced software changes, and AI bundled into renewals.</strong> A Censuswide survey commissioned by Origina, an independent provider of software maintenance and support, asked 2,018 senior IT decision-makers at U.S. and UK organizations with $1 billion or more in revenue or 10,000 or more employees (fieldwork May 11–19, 2026). On average they said 28% of their software budget goes to upgrades, migrations and licensing changes they would not have chosen, and 76% agree, strongly or somewhat, that they have "very little real leverage in negotiations with major vendors" (<a href="https://www.origina.com/press-releases/software-tax-research-enterprise-spending" class="text-navy underline" target="_blank" rel="noopener noreferrer">Origina release, Oct 20</a>). One practitioner quoted by CIO.com, Omar Amassine of TripleW Digital, described bundled AI features and new usage tiers producing "effective 20% to 35% price jumps" (<a href="https://www.cio.com/article/4238087/vendor-driven-upgrades-saddle-it-leaders-with-huge-software-tax.html" class="text-navy underline" target="_blank" rel="noopener noreferrer">CIO.com, Oct 22</a>). This is a vendor survey of very large companies plus one anecdote, so it says little about the mid-market directly. I suspect mid-sized firms have even less leverage, but I have not seen data on it.
- <strong>Voluntary exit programs as a quieter form of reduction.</strong> Challenger excludes voluntary offers from its counts, and the firm's report says they "tend to signal more layoffs to come." If large employers shift from announced layoffs to buyouts, the AI-attributed layoff count will undercount what is happening. There is nothing yet to measure it with.

<em>This letter is general information, not legal, tax, accounting or investment advice.</em>

<em>FACTS Consulting — Finance, Analytics, Consultative Transformational Services</em>

<em>We Make You Smarter.</em>`,
    author: 'Bob Katz',
    date: '2026-11-11',
    category: 'CxO Advisory',
    image: '/images/blog/facts/cxo-advisory-letter-2026-11-11.jpg',
    readTime: '11 min',
    slug: 'cxo-advisory-letter-2026-11-11',
  },
  {
    id: 'facts-cxo-advisory-letter-2026-11-04',
    title: "CxO Advisory Letter: Week of November 4, 2026",
    excerpt: "The Census Bureau's business survey now says \"Super Intelligence,\" and the answer barely moved: 24.6% of U.S. employer firms use it. Also: Goldman Sachs on small-business AI use, a third quarter of small-firm job losses, and what Executive Order 14434 does and does not change.",
    content: `## This week

The federal government's own survey of business AI use no longer says "AI." Since the October 22 release, the Census Bureau's question reads "Super Intelligence or SI (formerly referred to as Artificial Intelligence or AI)," following an executive order. The answer barely moved: 24.6% of U.S. employer firms said yes. The same day, Goldman Sachs reported that 86% of the small-business owners it surveyed use AI, and 84% of those users say it hasn't changed their headcount. Meanwhile, payroll data for firms with fewer than ten employees shows a third straight quarter of job losses. Nothing this week connects those last two facts, and I would be wary of anyone who claims to.

## AI adoption in SMBs

### A quarter of U.S. employer firms now use AI, and the share is close to flat until about 50 employees

<em>U.S. Census Bureau, Business Trends and Outlook Survey (BTOS), data release of October 22, 2026.</em> <a href="https://www.census.gov/newsroom/press-releases/2026/btos-oct-22.html" class="text-navy underline" target="_blank" rel="noopener noreferrer">Release notice</a> · <a href="https://www.census.gov/hfp/btos/data" class="text-navy underline" target="_blank" rel="noopener noreferrer">BTOS data</a>

<strong>What the evidence shows.</strong> BTOS samples about 1.2 million employer businesses (farms excluded), split into six panels that each report every 12 weeks. In the latest period (reference weeks September 21 to October 4, collected October 5–18), <strong>24.6%</strong> of firms said they had used AI in a business function in the past two weeks. The standard error is 0.27 points. That is up from 23.8% in the prior two waves and from 18.9% in the period ending March 8, 2026. 28.6% expect to use AI within six months, and 9.6% answered "do not know."

By firm size, use is flat at the small end and rises steeply above 50 employees: 24.3% for 1–4 employees, 22.6% for 5–9, 24.6% for 10–19, 26.0% for 20–49, 29.0% for 50–99, 35.3% for 100–249, and 43.6% for 250 or more. The "do not know" share also rises with size, from 8.8% at the smallest firms to 21.7% at firms with 250 or more employees.

The published question wording has changed. The data files now ask whether the business used "Super Intelligence or SI (formerly referred to as Artificial Intelligence or AI)," and the data dictionary says that as of October 22 the data are published in compliance with Executive Order 14434. The listed examples (data analysis, generative tools for marketing or coding, customer-service agents, forecasting and pricing) describe the same technologies as before.

<a href="/images/blog/facts/cxo-advisory-letter-2026-11-04-btos-ai-by-size-oct22.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-11-04-btos-ai-by-size-oct22.png" alt="Bar chart: share of U.S. employer firms that used AI in a business function in the past two weeks, by number of employees. 1 to 4 employees 24.3%, 5 to 9 22.6%, 10 to 19 24.6%, 20 to 49 26.0%, 50 to 99 29.0%, 100 to 249 35.3%, 250 or more 43.6%. Source: U.S. Census Bureau, Business Trends and Outlook Survey, reference period September 21 to October 4, 2026." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<strong>How solid is it.</strong> PRIMARY DATA. This is a large probability sample of all employer firms with published standard errors. The weakness is in the question: a two-week window measures any use, not depth. The standard errors for the two largest size groups are about 1.5–2 points. Also, the file doesn't say whether respondents saw the new "Super Intelligence" wording or only the published labels changed.

<strong>Which roles it affects.</strong> CEO, CIO/CTO, CAIO, CFO.

<strong>For an SMB leadership team.</strong> The number that should worry a 200-person company is not the national 24.6%. It's the fact that about one firm in five at the 250+ size can't say whether it uses AI at all. This quarter, have each department head list every AI tool or feature their team used in the past two weeks, including features built into software you already pay for. Have the CIO consolidate the lists. If the list surprises the CEO, you were in that "do not know" group. When someone cites an adoption benchmark to your board, ask for the firm size and the exact question. For a board slide, the size-class row from BTOS is the defensible comparison.

### Small-business owners who use AI: 86%. Those who say it's fully integrated: 15%. AI users with a formal employee policy: about a quarter.

<em>Goldman Sachs 10,000 Small Businesses, "The AI Economy Is a Small Business Economy," October 22, 2026.</em> <a href="https://www.goldmansachs.com/community-transformation/10000-small-businesses/us/insights/the-ai-economy-is-a-small-business-economy" class="text-navy underline" target="_blank" rel="noopener noreferrer">Report page</a> · <a href="https://www.goldmansachs.com/pressroom/press-releases/2026/goldman-sachs-commits-500-million-to-launch-small-business-ai-institute" class="text-navy underline" target="_blank" rel="noopener noreferrer">Press release</a>

<strong>What the evidence shows.</strong> Babson College surveyed graduates of Goldman's small-business program from August 10–24, 2026. The survey went to 14,967 alumni and drew 2,473 responses (a 16.5% response rate). <strong>86%</strong> use AI in their business, up from 77% in 2025 and 56% in 2024. Among AI users, 18% say AI is fully integrated into core operations, 50% use it in some areas, and 32% are experimenting. That works out to 15% of all respondents who are fully integrated.

The most common tools are general chatbots (86% of users) and AI features built into existing software (54%). Only 18% use agentic AI, 19% coding tools, and 12% custom-built solutions. 63% use AI daily. <strong>73%</strong> spend less than $100 a month on AI tools, including 16% who use only free tools.

The use cases have shifted. Using AI for financial analysis and business planning rose from 18% of users in 2024 to 42%, and data analysis rose from 26% to 42%. Written marketing content fell from 74% to 65%.

Inside the business, <strong>74%</strong> of AI-using owners have no formal policy on how employees use it. 56% are upskilling staff. Where AI is in use, 14% of businesses say only the owner uses it. All employees use it at 28% of businesses with 1–25 employees, compared with 11% of those with 26 or more.

On jobs, 84% of AI users report no workforce change, 5% added positions, and 6% cut staff because of AI. Among the 14% who don't use AI, 45% say they don't know how to apply it, 32% cite data privacy, and 28% cite inaccurate results.

<a href="/images/blog/facts/cxo-advisory-letter-2026-11-04-gs-10ksb-ai-integration.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-11-04-gs-10ksb-ai-integration.png" alt="Bar chart: how far small businesses that use AI have taken it. Experimenting 32%, used in some areas but not central 50%, fully integrated 18%. Source: Babson College survey of Goldman Sachs 10,000 Small Businesses alumni, August 2026, 2,473 respondents." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<a href="/images/blog/facts/cxo-advisory-letter-2026-11-04-gs-10ksb-no-ai-policy.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-11-04-gs-10ksb-no-ai-policy.png" alt="Single figure: 74% of AI-using owners have no formal policy on employee AI use. Source: Goldman Sachs 10,000 Small Businesses alumni survey, August 2026, 2,473 respondents." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<strong>How solid is it.</strong> VENDOR SURVEY. It's published by the program's sponsor about its own graduates, and it was released alongside Goldman's new AI institute, whose partners are AI vendors. Program alumni are by selection better-resourced and growth-oriented than the typical small business. The report says its figures "may not be representative of all program alumni" and that each year's wave is not necessarily the same businesses. Read the 86% against Census's 24.6%: the two surveys measure different populations and ask different questions.

<strong>Which roles it affects.</strong> CEO/owner, CPO (People), GC, CIO, CFO.

<strong>For an SMB leadership team.</strong> The gap between the owner using AI and the business using it shows up here in the employee numbers. This quarter, have your head of People and your GC (or outside counsel) draft a one-page employee AI policy. It should say which tools are approved, what data never goes into them (customer data, payroll, anything under NDA), and who to ask. Then, before you approve any new AI subscription, have finance list the AI features already included in software you pay for. Most of this sample's spending is under $100 a month, so the useful question is where value comes from, not how much to spend.

### Payrolls at the smallest U.S. firms fell for a third straight quarter, in every sector and every region

<em>Intuit QuickBooks Small Business Index, Q3 2026 report (October 15, 2026) and October 2026 monthly report (September data, published around October 26).</em> <a href="https://quickbooks.intuit.com/r/small-business-data/index/q3-2026/" class="text-navy underline" target="_blank" rel="noopener noreferrer">Q3 report</a> · <a href="https://quickbooks.intuit.com/r/small-business-data/index/october-2026/" class="text-navy underline" target="_blank" rel="noopener noreferrer">October report</a>

<strong>What the evidence shows.</strong> The index draws on anonymized QuickBooks Online Payroll records for U.S. businesses with one to nine employees. It is calibrated to BLS data and seasonally adjusted. From Q2 to Q3 2026, employment at these firms fell by <strong>28,700 jobs</strong> (−0.22%) to 12,929,100. That is the third consecutive quarterly decline, and all 12 sectors, all 8 regions and all 20 tracked states declined. Average real quarterly revenue fell by $198 (−0.13%), the second straight quarterly decline. In education and health services, financial activities, and natural resources and mining, revenue rose while jobs fell. The September monthly figure shows the same pattern: jobs down 7,000 (−0.05%), with declines in 10 of 12 sectors, while average real monthly revenue rose 1.68% to $50,560.

<strong>How solid is it.</strong> PRIMARY DATA (administrative payroll records, produced by a software vendor). It covers QuickBooks payroll customers only. The report gives no year-over-year comparison and offers no explanation for the decline. It does not mention AI, and nothing in it links the job losses to AI.

<strong>Which roles it affects.</strong> CEO, CFO, CPO (People).

<strong>For an SMB leadership team.</strong> Ask finance to add real revenue per employee to the monthly management pack, trended over eight quarters, next to your own headcount. If revenue holds while headcount drifts down, you want to know whether that came from a decision or from hiring you didn't do. Either answer is useful for the 2027 plan. A firm at the smaller end of this range can also compare its Q3 headcount change with its sector's line in the index.

## Tech/IT strategy for the mid-market

### Washington now says "Super Intelligence." The definition behind the name is still being written.

<em>Executive Order 14434, "Inaugurating the Era of Super Intelligence," signed September 29, 2026 (91 Fed. Reg. 63129, October 2, 2026)</em> — <a href="https://www.whitehouse.gov/wp-content/uploads/2026/09/eo-14434.pdf" class="text-navy underline" target="_blank" rel="noopener noreferrer">text</a>. <em>Analysis: Archer and Choi, Arnold &amp; Porter, "What's in a Name?", October 13, 2026</em> — <a href="https://www.arnoldporter.com/en/perspectives/blogs/enforcement-edge/2026/10/whats-in-a-name" class="text-navy underline" target="_blank" rel="noopener noreferrer">arnoldporter.com</a>

<strong>What the evidence shows.</strong> The order directs executive agencies, "to the maximum extent permitted by law," to use "Super Intelligence" and "SI" in place of "Artificial Intelligence" and "AI" in correspondence, websites, reports and policy documents. The policy statement adds that the executive branch "will not acknowledge" the old terms. It does not require changes to existing regulations, contracts or grants. For now, SI means exactly what the existing statutory definition of artificial intelligence (15 U.S.C. § 9401(3)) covers. Within 60 days, which falls around November 28, the Assistant to the President for Science and Technology must propose legislative language for a federal definition of SI. The proposal must say whether that definition should "modify, expand upon, or supersede" the current one.

Arnold &amp; Porter's reading is that the order imposes no obligations on private parties and has no enforcement provision. The authors point to a voluntary "Joint Commitment" signed the same day by the President and leaders of Google, Anthropic, Meta, OpenAI, SpaceXAI and Nvidia, which sets out controls and audits for frontier models. Their concern is that standards like these could move into contract and procurement terms, or be treated as prevailing industry practice in questions of reasonable care or of insurance policies and coverage. Census's relabeled AI question, above, is one of the first places the order shows up in business data.

<strong>How solid is it.</strong> PRIMARY DATA for the order itself (the Federal Register text). OPINION for the law-firm analysis. The weakness is that nothing has changed legally yet. The consequential part, a new statutory definition, is a proposal that only Congress can enact, and the order does not say whether the proposal will be made public. The description of the Joint Commitment here is Arnold &amp; Porter's, not the document's own text.

<strong>Which roles it affects.</strong> GC, CIO/CTO, CAIO, CFO (for firms that sell to the federal government).

<strong>For an SMB leadership team.</strong> The renaming costs you nothing. The definition could matter. Ask your GC to identify every place your contracts, customer terms and insurance policies define "artificial intelligence" or "AI," and note whether each one points to the statute or defines the term itself. If Congress later broadens the statutory definition, any contract that references it will change scope with it. If you sell to federal agencies, update your proposal templates to use the agencies' current terms, and keep citing the statutory language where a contract requires it. Ask your two largest AI vendors whether their contracts with you reflect the Joint Commitment's controls.

## The numbers

- <strong>24.6%</strong>: U.S. employer firms using AI in a business function, Sep 21–Oct 4, 2026 (Census Bureau, BTOS)
- <strong>43.6% vs 22.6%</strong>: AI use at firms with 250+ employees vs 5–9 employees (Census Bureau, BTOS)
- <strong>21.7%</strong>: Firms with 250+ employees answering "do not know" on AI use (Census Bureau, BTOS)
- <strong>86% / 15%</strong>: Program alumni using AI / with AI fully integrated into core operations (Goldman Sachs 10,000 Small Businesses)
- <strong>74%</strong>: AI-using alumni with no formal policy on employee AI use (Goldman Sachs 10,000 Small Businesses)
- <strong>−28,700</strong>: Q2-to-Q3 2026 change in jobs at U.S. firms with 1–9 employees (third straight quarterly decline) (Intuit QuickBooks Small Business Index)

## What I'm watching

- <strong>The federal definition of "Super Intelligence," due to the President around November 28.</strong> For now it means exactly what "AI" meant. If the proposal expands the statutory definition and Congress acts on it, that changes what counts as AI under every law and contract that references the statute. Nothing about this is evidenced yet, including whether the proposal will be published.
- <strong>Whether the largest-firm Census number is real movement or panel rotation.</strong> AI use at firms with 250+ employees has alternated between roughly 37% and 44% over the last four releases (38.4%, 44.0%, 36.5%, 43.6%). Those swings are larger than the standard errors, and the alternation fits BTOS's rotating panels. In the release before this one, the 100–249 group had pulled level with the 250+ group (36.4% against 36.5%). This release, it hasn't. I'd wait for a full 12-week panel cycle before drawing anything from either.
- <strong>Small-firm payroll declines and AI.</strong> The QuickBooks data shows a steady decline in jobs at the smallest firms. Goldman's alumni mostly say AI hasn't changed their headcount. I haven't seen evidence linking the two, and I suspect most of the decline has ordinary causes. The test would be BTOS employment questions or the next Fed Small Business Credit Survey split by AI use. Separately, there are reports that usage-based AI charges are running over finance teams' budgets. I haven't seen the underlying survey, so I'm not citing a figure.

<em>This letter is general information, not legal, tax, accounting or investment advice.</em>

<em>FACTS Consulting — Finance, Analytics, Consultative Transformational Services</em>

<em>We Make You Smarter.</em>`,
    author: 'Bob Katz',
    date: '2026-11-04',
    category: 'CxO Advisory',
    image: '/images/blog/facts/cxo-advisory-letter-2026-11-04.jpg',
    readTime: '10 min',
    slug: 'cxo-advisory-letter-2026-11-04',
  },
  {
    id: 'facts-cxo-advisory-letter-2026-10-28',
    title: "CxO Advisory Letter: Week of October 28, 2026",
    excerpt: "One survey says two-thirds of small businesses use AI. The Census Bureau's survey of firms of every size puts it closer to one in five. Also: CEOs on AI costs and margins, mid-market cash forecasting, who owns AI transformation, and what memory prices mean for 2027 hardware budgets.",
    content: `## This week

Two surveys of AI use in American business came out within weeks of each other. One says two-thirds of small businesses use AI. The other, run by the Census Bureau across firms of every size, puts it closer to one in five. Both can be right, and an SMB leadership team benchmarking itself against "everyone else" should know which question its benchmark actually asked. Meanwhile, large-company CEOs have started describing AI as a cost line that will weigh on margins more than labor does.

## Finance &amp; performance management

### CEOs now expect AI costs, not labor costs, to reshape margins

KPMG, <em>2026 U.S. CEO Outlook</em> (press release), October 15, 2026 — <a href="https://kpmg.com/us/en/media/news/kpmg-us-ceo-outlook-2026.html" class="text-navy underline" target="_blank" rel="noopener noreferrer">kpmg.com</a>

<strong>What the evidence shows.</strong> KPMG surveyed more than 1,300 CEOs of large companies globally, 400 of them in the U.S. 81% believe rising AI costs will reshape corporate margins more than labor costs over the next five years. Half (50%) say managing AI implementation costs is mostly or very challenging. 65% will put at least 10% of next year's capital budget into AI. 68% expect AI to pay back in one to three years, and 14% in six months to a year. Only 9% say AI agents have been transformational for their organization. 88% say they prioritize realized AI value over sticking to token budgets. On headcount, 89% expect to grow it over three years, most (60%) by less than 5%.

<strong>How solid is it.</strong> INDEPENDENT SURVEY. The weakness is the sample: large companies only, with no revenue threshold or field dates in the release, and CEO expectations rather than measured costs.

<strong>Which roles it affects.</strong> CFO, CEO, CIO/CTO, CAIO.

<strong>For an SMB leadership team.</strong> At some point the AI line in your budget stops being a pilot and starts being a cost of goods or an operating expense that scales with usage. Ask your CFO to put every AI-related cost (seat licenses, usage-based model fees, implementation services, the staff time spent checking outputs) into one line in the 2027 budget, with a named owner. Then ask whether that line grows with revenue, with headcount, or with usage. The answer tells you which lever controls it.

<a href="/images/blog/facts/cxo-advisory-letter-2026-10-28-kpmg-ceo-ai-roi-timing.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-10-28-kpmg-ceo-ai-roi-timing.png" alt="Bar chart: when CEOs of large companies expect their AI investment to pay back. Six months to one year 14%, one to three years 68%, three to five years 13%. Source: KPMG 2026 CEO Outlook, more than 1,300 CEOs globally." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

### Mid-market CFOs say cash flow forecasting is their hardest back-office job, and they cut growth capex first when confidence drops

PYMNTS Intelligence, <em>Funding the Future: What Gives CFOs the Confidence to Grow</em> (Certainty Project), October 2026 — <a href="https://www.pymnts.com/report/study/funding-the-future-what-gives-cfos-the-confidence-to-grow/" class="text-navy underline" target="_blank" rel="noopener noreferrer">pymnts.com</a>

<strong>What the evidence shows.</strong> The report compiles three 2026 editions of a CFO panel at U.S. firms with $100 million to $1 billion in revenue. In the August edition (60 CFOs, fielded June 9–16, 2026), 62% said cash flow forecasting was difficult to manage or scale, and 37% called it their single biggest finance or back-office challenge. Firms that were not growing found it harder (72%) than growing firms (54%). In the September edition (60 CFOs, July 9–17), 57% adjusted capital spending within three months of a shift in confidence. In response to such a shift, 58% would cut or postpone growth capex, against 7% who would touch maintenance capex. Where certainty fell, half cut spending.

<strong>How solid is it.</strong> VENDOR SURVEY. PYMNTS is a commercial research publisher, and the August edition was produced with Fynapse, a finance software vendor. Each wave has only 60 respondents, and the fieldwork is three to four months old.

<strong>Which roles it affects.</strong> CFO, CEO, Chief Accounting Officer, FP&amp;A lead.

<strong>For an SMB leadership team.</strong> If growth capex is the first thing cut when the forecast looks shaky, the quality of the cash forecast sets your investment pace. This quarter, have finance compare the last two quarters of 13-week cash forecasts with what actually happened, by week. If the miss is large, fix the forecast before you approve the 2027 capital plan, not after.

## C-suite role shifts

### CEOs are giving the head of HR a lead role in AI transformation, and only a quarter of CHROs are set up for it

Heidrick &amp; Struggles, <em>What high-performing CEOs want from their CHROs</em>, October 7, 2026 — <a href="https://www.heidrick.com/en/insights/human-resources-officers/chief-hr-officer-focus_what-high-performing-ceos-want-from-their-chros" class="text-navy underline" target="_blank" rel="noopener noreferrer">heidrick.com</a>

<strong>What the evidence shows.</strong> In Heidrick's analysis of Fortune 1000 companies, 45% of CEOs have tasked their head of HR to play a lead in the AI transformation. Its online survey of 600 HR leaders (late spring 2026, companies with $1 billion or more in revenue, 11 markets) found 78% expect preparing the workforce for AI to be among the most critical issues for their organization. Only a quarter say they are effective at it today. Across 2,716 CHRO searches, the number of skills CEOs ask for rose from about 8.6 in 2016 to nearly 13 in 2026. CHROs who also manage something outside HR went from 13% in 2022 to 29%. The quarter of CHROs Heidrick calls "enterprise CHROs" spend about 10 more hours a month working directly with their CTO. 90% of them report strong alignment with the CTO, compared with 73% of other CHROs. One finding cuts against the usual instinct: Heidrick found no statistically significant difference in HR-to-employee ratio or HR spend per employee between high-TSR and lower-TSR companies.

<strong>How solid is it.</strong> VENDOR SURVEY. Heidrick is an executive search firm with a commercial stake in CHRO hiring. The sample is $1B+ companies, and the Fortune 1000 analysis has no stated sample size or method.

<strong>Which roles it affects.</strong> CPO (People), CHRO, CEO, CTO, CAIO.

<strong>For an SMB leadership team.</strong> In a company without a CAIO, AI transformation often has no named owner, or it lands with IT by default. Decide explicitly who owns workforce redesign for AI (which roles change, who gets retrained, what hiring stops), and write it into that executive's 2027 goals. If it goes to your head of People, schedule a standing monthly session with whoever runs technology. The Heidrick data suggests that pairing is what separates the CHROs who deliver from the ones who don't.

## Tech/IT strategy for the mid-market

### Gartner forecasts IT spending up 15% in 2027, with memory price inflation pushing up hardware costs

Gartner, <em>Gartner Forecasts Worldwide IT Spending to Grow 15% in 2027, Totaling $7.35 Trillion</em>, October 21, 2026 — <a href="https://www.gartner.com/en/newsroom/press-releases/2026-10-21-gartner-forecasts-worldwide-it-spending-to-grow-15-percent-in-2027-totaling-7-point-35-trillion" class="text-navy underline" target="_blank" rel="noopener noreferrer">gartner.com</a>

<strong>What the evidence shows.</strong> Gartner forecasts worldwide IT spending of $7.35 trillion in 2027, up 15%, the first time the total crosses $7 trillion. The growth is lopsided: data center systems +55.5% (to about $1.37 trillion), software +14.6%, devices +8.1% (to $916 billion), IT services +4.9%, communications services +2.9%. Gartner says hardware markets are under "growing pressure from memory-related inflation." As reported by itreseller.ch, Gartner says memory prices have more than doubled over the past twelve months, raising the cost of servers, networking gear and devices, with the pressure expected to persist into 2027 and slow end-customer demand.

<strong>How solid is it.</strong> OPINION (analyst forecast). This is a model, not measured spending. The figures here are as reported by Network World and itreseller.ch from Gartner's release. Most of the growth reflects hyperscaler and AI infrastructure buying, not mid-market budgets.

<strong>Which roles it affects.</strong> CIO, CTO, CFO.

<strong>For an SMB leadership team.</strong> The part that reaches you is not the data center number. It is the price of laptops, servers and storage at your next refresh, and software renewals priced off rising vendor costs. Before the 2027 budget closes, ask IT to price any hardware refresh planned for 2027 at current quotes rather than last year's unit costs. Also ask whether pulling some of it into Q4 or stretching the replacement cycle by a year is cheaper. For software, list renewals due in the first half of 2027 and start those conversations now.

<a href="/images/blog/facts/cxo-advisory-letter-2026-10-28-gartner-it-spend-2027.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-10-28-gartner-it-spend-2027.png" alt="Bar chart: Gartner's forecast of worldwide IT spending growth in 2027 over 2026, by segment. Data center systems up 55.5%, software up 14.6%, devices up 8.1%, IT services up 4.9%, communications services up 2.9%. Source: Gartner, October 21, 2026." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

## AI adoption in SMBs

### Two-thirds of small businesses say they use AI, up from 23% in 2023

U.S. Chamber of Commerce Technology Engagement Center, <em>Empowering Small Business: The Impact of Technology on U.S. Small Business 2026</em>, October 2, 2026 — <a href="https://www.uschamber.com/technology/2026-empowering-small-business-report" class="text-navy underline" target="_blank" rel="noopener noreferrer">uschamber.com</a>

<strong>What the evidence shows.</strong> Teneo Research surveyed 3,732 U.S. businesses with fewer than 250 employees online, July 23 to August 6, 2026. 66% say they use AI, up from 58% in 2025, 40% in 2024 and 23% in 2023. The most common tools are generative AI chatbots (41%), predictive AI tools (27%), AI coding tools (26%), agentic AI tools (24%) and image creation tools (22%). 47% of AI users say AI is creating jobs in their business, against 6% who say it lets them reduce headcount. Inside that 47%, a sizable group (about 22% of AI users, by my reading of the chart) say AI creates jobs now but will ultimately require fewer people. Six in ten worry about litigation and compliance costs from a patchwork of state privacy and AI laws.

<strong>How solid is it.</strong> INDEPENDENT SURVEY, with a caution. The Chamber is an advocacy group whose recommendations in this report argue against state AI regulation. The sample is an online panel. "Use AI" includes any staff use of a chatbot, so it counts very light use the same as deep integration.

<strong>Which roles it affects.</strong> CEO, CFO, CAIO, CPO (People), GC.

<strong>For an SMB leadership team.</strong> That 22% is the number I'd look at. These owners are hiring because of AI today and expect to need fewer people later. If that describes your business, the 2027 workforce plan should say so: which roles you are adding now that you expect AI to absorb, and whether to fill them with contractors or permanent hires. Your General Counsel should also have a list of the states you operate in that have passed AI or automated-decision laws.

<a href="/images/blog/facts/cxo-advisory-letter-2026-10-28-chamber-smb-ai-use.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-10-28-chamber-smb-ai-use.png" alt="Line chart: share of U.S. businesses with fewer than 250 employees that say they use AI, rising from 23% in 2023 to 40% in 2024, 58% in 2025 and 66% in 2026. Source: U.S. Chamber of Commerce, Empowering Small Business 2026, Teneo Research online survey of 3,732 small businesses." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

### Census and BLS researchers: your industry's "AI exposure" says little about whether a firm actually adopts

Dey, Dinlersoz, Foster, Grim, Haltiwanger, Meyer, Pabilonia, Pande, Stinson, Wang and Wolf, <em>AI Exposure and Adoption among U.S. Firms</em>, Census Bureau CES Working Paper 26-61 (also BLS Working Paper 591), September 2026 — <a href="https://www2.census.gov/library/working-papers/2026/adrm/ces/CES-WP-26-61.pdf" class="text-navy underline" target="_blank" rel="noopener noreferrer">census.gov</a>

<strong>What the evidence shows.</strong> The researchers linked 14 widely used AI "exposure" scores (built from each firm's occupational mix in BLS wage data) to firms' own answers on AI use in the Census Business Trends and Outlook Survey. The sample is about 15,500 firm-year observations under the current AI question and about 57,000 under the earlier one, all single-location firms. Exposure does predict adoption: a one-standard-deviation rise is associated with a 4–11 percentage point higher chance of using AI, falling to 1–8 points once year and industry are controlled for. But exposure explains only about 1–6% of the variation in adoption across firms. Information and professional services firms adopt 8–22 points more than their exposure predicts. Finance and insurance has similar exposure but adopts at a rate that is about what its exposure would predict. The authors put the BTOS estimate of AI adoption among U.S. firms at about 22% as of writing.

<strong>How solid is it.</strong> PRIMARY DATA. These are government microdata at scale. The limits: the study excludes multi-location firms, which tend to adopt more, and the authors stress that the associations are not causal.

<strong>Which roles it affects.</strong> CEO, CAIO, CFO, CPO (People).

<strong>For an SMB leadership team.</strong> Consultant decks and vendor pitches often say "your industry is X% exposed to AI." This paper says that number tells you little about what your direct competitors are actually doing. Ask whoever owns AI strategy to replace the exposure benchmark with an adoption one: which three competitors or peers are visibly using AI in which functions, and what evidence do you have of it.

## The numbers

- <strong>66%</strong>: U.S. small businesses (&lt;250 employees) saying they use AI, 2026 (U.S. Chamber / Teneo)
- <strong>~22%</strong>: U.S. firms reporting AI use in Census's business survey (Census CES WP 26-61)
- <strong>81%</strong>: Large-company CEOs who expect AI costs to reshape margins more than labor costs over five years (KPMG CEO Outlook)
- <strong>9%</strong>: CEOs who say AI agents have been transformational for their organization (KPMG CEO Outlook)
- <strong>45%</strong>: Fortune 1000 CEOs who have tasked the head of HR to play a lead in AI transformation (Heidrick &amp; Struggles)
- <strong>62%</strong>: Mid-market CFOs ($100M–$1B) who find cash flow forecasting hard to manage or scale (PYMNTS Intelligence)

## What I'm watching

<strong>Hardware cost pass-through.</strong> Gartner is reported as saying memory prices have more than doubled. I have not yet seen measured data on what that means for mid-market laptop and server quotes, or for SaaS renewal pricing. I suspect it shows up in Q1 2027 renewals before it shows up in any survey.

<strong>Who owns AI in companies too small for a CAIO.</strong> The Heidrick finding comes from $1B+ companies. Whether the head of People, the CFO or IT ends up owning AI in a $50M company is still a question of practice, with little data behind it.

<strong>What "using AI" will mean in 2027.</strong> The gap between 66% and roughly 22% is mostly about definitions. The harder question is when a survey will separate occasional chatbot use from AI built into a workflow that a P&amp;L depends on. Until one does, adoption rates are a weak benchmark.

<em>This letter is general information, not legal, tax, accounting or investment advice.</em>

<em>FACTS Consulting — Finance, Analytics, Consultative Transformational Services</em>

<em>We Make You Smarter.</em>`,
    author: 'Bob Katz',
    date: '2026-10-28',
    category: 'CxO Advisory',
    image: '/images/blog/facts/cxo-advisory-letter-2026-10-28.jpg',
    readTime: '10 min',
    slug: 'cxo-advisory-letter-2026-10-28',
  },
  {
    id: 'facts-cxo-advisory-letter-2026-10-21',
    title: "CxO Advisory Letter: Week of October 21, 2026",
    excerpt: "The Fed's Beige Book reports AI-linked hiring restraint in five districts while middle-market firms keep hiring. A small-business survey shows where the effect sits: 13% of AI users skipped a planned hire, and 3.3% laid someone off.",
    content: `## This week

The Federal Reserve's October Beige Book says firms in five of its twelve districts have reduced staff through attrition, delayed hiring, or expect to create fewer jobs after investing in AI. In RSM's July survey of middle-market firms, 54% increased hiring last quarter and 60% plan to add people over the next six months. In a new NBER survey, nearly 9,000 executives report that AI has had essentially no net effect on employment. I don't think these contradict each other. A small-business survey from PYMNTS shows where the effect is: 13% of SMBs that use AI skipped a planned hire because of it, and 3.3% laid someone off. A hire that never happens doesn't appear in layoff counts or in the headcount line. It shows up later, in the budget.

## Finance &amp; performance management

### Finance AI that automates transactions pays back in under a year. Forecasting and insight work takes longer

<em>Gartner, press release on finance AI investment, September 24, 2026.</em> <a href="https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-says-cfos-must-take-a-more-disciplined-approach" class="text-navy underline" target="_blank" rel="noopener noreferrer">Gartner newsroom</a>

<strong>What the evidence shows.</strong> Gartner surveyed 160 senior finance leaders between January and April 2026. Data extraction, accounts payable and receivable automation, and report creation typically paid back in <strong>nine to 10 months</strong>. Data management, insight generation and forecasting "usually take longer to realise value". Gartner gives no payback figure for these. Marco Steecker, the Gartner analyst, warns CFOs not to let "the appeal of quick returns crowd out more complex use cases", and calls low AI literacy "the most significant barrier" in finance.

<strong>How solid is it.</strong> INDEPENDENT SURVEY. The sample is small, company size isn't disclosed, and "payback" is what respondents reported, not an audited figure. The figures and quotations here are as reported by IT Brief UK from Gartner's release.

<strong>Which roles it affects.</strong> CFO, Chief Accounting Officer, Controller, CIO.

<strong>For an SMB leadership team.</strong> Sort this year's finance AI projects into two lists. Transactional work (AP, AR, data extraction, standard reports) should show payback within about 10 months. Forecasting and analytics should have a separate budget and a longer evaluation window. Ask which list your forecasting project is being judged against. If it's being held to a 10-month payback, it will probably be cut before it has a chance to work.

### Middle-market firms are still hiring, and most plan to raise prices again

<em>RSM US Middle Market Business Index, Q3 2026, September 22, 2026.</em> <a href="https://rsmus.com/newsroom/2026/rsm-us-middle-market-business-index.html" class="text-navy underline" target="_blank" rel="noopener noreferrer">RSM release</a>

<strong>What the evidence shows.</strong> Harris Poll surveyed 501 respondents at U.S. middle-market firms for RSM from July 7–29, 2026. The index was 111.8, down from 113.6 in Q2. RSM calls the change statistically insignificant. <strong>54%</strong> increased hiring in the quarter and <strong>60%</strong> plan to add employees over the next six months. <strong>57%</strong> raised compensation and 66% expect to raise it again. <strong>75%</strong> paid higher prices and 76% expect to keep doing so. Roughly <strong>66%</strong> raised their own prices and <strong>70%</strong> expect to raise them over the next six months. 57% increased capital spending.

<strong>How solid is it.</strong> INDEPENDENT SURVEY, run for an advisory firm. The panel is small (about 400–500 active records) and is being moved to a new definition of middle market that excludes firms under $30M in revenue. Fieldwork ended in July, before the October Beige Book period.

<strong>Which roles it affects.</strong> CFO, CEO, CRO, CPO (People).

<strong>For an SMB leadership team.</strong> If most of your peers plan to raise prices, the question for your CRO and CFO is whether your planned increase is ahead of or behind the market in each major customer segment. Get an answer by segment before 2027 budgets are final. Next to that, put your planned Q4 and Q1 hires beside your AI projects, and ask which open roles depend on work those projects are meant to automate.

## C-suite role shifts

### 44% of CEOs say they struggle to show financial returns from AI

<em>Gartner, 2027 CEO Survey, press release October 20, 2026.</em> <a href="https://www.gartner.com/en/newsroom/press-releases/2026-10-20-gartner-says-44-percent-of-ceos-struggle-to-demonstrate-ai-financial-returns-as-technology-becomes-central-to-growth" class="text-navy underline" target="_blank" rel="noopener noreferrer">Gartner newsroom</a>

<strong>What the evidence shows.</strong> Gartner surveyed 203 CEOs and senior business executives worldwide in April and May 2026. <strong>44%</strong> struggle to show AI-driven financial returns to stakeholders. <strong>80%</strong> say "technology has become strategy," and <strong>75%</strong> plan to increase technology investment. 77% expect AI industrialization to have a high or medium impact on their strategic objectives through 2027, but only <strong>20%</strong> rate their organization highly ready for it. The top moves CEOs named to accelerate AI returns were radically redesigning the operating model (63%), "aggressively deploying AI agents as employees" (52%), and freeing up capital through major restructuring (47%).

<a href="/images/blog/facts/cxo-advisory-letter-2026-10-21-gartner-ceo-readiness.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-10-21-gartner-ceo-readiness.png" alt="Bar chart: share of CEOs and senior executives reporting high readiness for each disruption. Economic volatility 24%, AI industrialization 20%, persistent conflict 11%. Source: Gartner 2027 CEO Survey of 203 CEOs and senior executives, April and May 2026." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<strong>How solid is it.</strong> INDEPENDENT SURVEY. The global sample is small, company size isn't reported, and readiness is self-assessed.

<strong>Which roles it affects.</strong> CEO, CFO, CIO/CTO, CAIO, CPO (People).

<strong>For an SMB leadership team.</strong> Before the board's next meeting, the CEO and CFO should agree on one financial measure for each material AI investment: dollars of cost removed, cycle time cut, or revenue added. Name an owner for each. If your leadership team is discussing "AI agents as employees," decide now who manages them and who answers for their errors. Today that is usually nobody in particular.

## Tech/IT strategy for the mid-market

### Ransomware victims are usually hit more than once, and half lack a way to restore identity systems

<em>Semperis, 2026 Ransomware Risk Report, October 14, 2026.</em> <a href="https://www.semperis.com/press-release/semperis-2026-ransomware-report-reveals-increases-in-ai-driven-attacks-and-a-rise-in-physical-threats-against-executives-and-their-families/" class="text-navy underline" target="_blank" rel="noopener noreferrer">Semperis release</a>

<strong>What the evidence shows.</strong> Semperis surveyed organizations that had suffered a successful ransomware attack in the past 12 months, across nine countries including the U.S. The release gives no sample size or fieldwork dates. In nearly <strong>70%</strong> of attacks, the victim was targeted more than once, and 31% made multiple payments. The release's key findings say 87% of attacks targeted identity systems such as Active Directory, Entra ID or Okta. Only about <strong>half</strong> of companies have dedicated identity backups, fewer than half automate identity recovery, and <strong>60%</strong> of disaster recovery or crisis plans have no identity recovery procedures. 40% of attacks involved psychological or physical threats against staff.

<strong>How solid is it.</strong> VENDOR SURVEY (Semperis sells identity backup and recovery). Only victims were surveyed, there's no breakdown by company size, and the release gives two identity figures on different bases: the body says "nearly 75% of successful ransomware attacks targeted or exploited the identity system," against 87% of attacks in the key findings.

<strong>Which roles it affects.</strong> CIO, CSO/CISO, CFO, GC, CEO.

<strong>For an SMB leadership team.</strong> Ask IT one question: if Active Directory or Entra ID were encrypted tomorrow, how would you restore it, and how long would it take? If the disaster recovery plan doesn't answer that in writing, fix the plan this quarter. Since repeat attacks are the norm in this sample, also ask your GC and insurer what the policy covers for a second incident in the same year.

## AI adoption in SMBs

### The Fed's October Beige Book: AI is reducing hiring in five districts, but overall employment is flat

<em>Federal Reserve Board, Beige Book, October 14, 2026 (information collected through October 5).</em> <a href="https://www.federalreserve.gov/monetarypolicy/beigebook202610-summary.htm" class="text-navy underline" target="_blank" rel="noopener noreferrer">Summary</a>

<strong>What the evidence shows.</strong> The national summary says: "Five Districts reported that some firms had either reduced staffing levels (through attrition), delayed hiring, or anticipated less job creation after increasing productivity by investing in AI." Across districts, employment showed little or no change: three Districts reported modest increases, five slight increases and four no significant change. Shortages persisted for specialized, technical and skilled-trades workers.

<strong>How solid is it.</strong> PRIMARY DATA, but qualitative. The Beige Book compiles reports from business contacts. "Five Districts" tells you how widely contacts mentioned the effect, not how many firms or jobs are involved.

<strong>Which roles it affects.</strong> CEO, CFO, CPO (People), COO.

<strong>For an SMB leadership team.</strong> When a role opens up through attrition, require a short written decision on whether to backfill it, re-scope it, or absorb it with AI. Track how many times each answer is chosen. This is how attrition-led change is already happening at other firms, and right now most leadership teams make the decision informally and never see the total.

### Small businesses use AI to skip hires far more often than to cut staff

<em>PYMNTS Intelligence, "AI Goes to Work: How SMBs Grow Without Growing Payroll," SMB Growth Monitor, October 2026.</em> <a href="https://www.pymnts.com/study_posts/ai-goes-to-work-how-smbs-grow-without-growing-payroll/" class="text-navy underline" target="_blank" rel="noopener noreferrer">Report page</a>

<strong>What the evidence shows.</strong> PYMNTS surveyed 533 U.S. small and mid-sized businesses with a physical location in August 2026, weighted to the national SMB population. 88% have used AI, and 74% use it at least occasionally. Among AI users, <strong>26%</strong> took at least one staffing action because of AI: <strong>13%</strong> skipped a planned hire, 11% cut hours or a role, 9.0% ended or didn't renew a work arrangement, and <strong>3.3%</strong> laid off staff. Roughly 60% say they produce more work without adding staff. The costs are real too: 28% say AI spending exceeded expectations, about 22% report extra work from AI errors, and a similar share paid someone to fix AI output. Respondents estimated savings averaging 10% of annual revenue and AI-related losses of 4.7% (averages across the 508 businesses that answered both questions, with never-users counted as saving nothing). 23% gained customers who specifically want a person doing the work.

<a href="/images/blog/facts/cxo-advisory-letter-2026-10-21-pymnts-ai-staffing.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-10-21-pymnts-ai-staffing.png" alt="Bar chart: share of AI-using U.S. small and mid-sized businesses that took each staffing step because of AI. Skipped a planned hire 13%, cut hours or a role 11%, ended a work arrangement 9.0%, laid off staff 3.3%. Source: PYMNTS Intelligence, SMB Growth Monitor, October 2026, 533 businesses surveyed in August 2026." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<strong>How solid is it.</strong> INDEPENDENT SURVEY (published by PYMNTS; no sponsor is named on the page). The page doesn't define firm size, the savings and loss figures are owners' own estimates, and the report gives two different loss figures for frequent users (7.0% and 6.7%).

<strong>Which roles it affects.</strong> CEO, CFO, CPO (People), CMO.

<strong>For an SMB leadership team.</strong> Ask your CFO to track two costs that rarely show up in AI business cases: staff time spent fixing AI output, and AI spending over budget. Look at both next to the savings at quarter-end. Separately, ask your CMO whether "a person does this work" is a selling point with any of your customer segments. Nearly a quarter of these firms gained customers on exactly that basis.

### Adoption has a size gradient even inside the small-business segment

<em>Homebase, "2026 Main Street AI Gap Report," September 22, 2026.</em> <a href="https://www.joinhomebase.com/blog/small-business-ai-gap-report" class="text-navy underline" target="_blank" rel="noopener noreferrer">Report page</a>

<strong>What the evidence shows.</strong> Propeller Insights surveyed 750 U.S. owners, executives and managers who make payroll, scheduling or HR decisions at businesses with 5–499 employees and hourly teams. <strong>74%</strong> use or pilot AI, against 64% in Homebase's 2025 survey. Adoption runs from <strong>54%</strong> at businesses under $500K in revenue to <strong>81%</strong> at $5M and up, and from 57% at 5–9 employees to 84% at 50–99. Among non-adopters, the top reasons were data privacy and security (38%), fear of mistakes (31%) and not trusting AI (27%). What would move them: proof their data is secure (37%), evidence it saves money (33%), and a person being able to override AI decisions (31%).

<strong>How solid is it.</strong> VENDOR SURVEY (Homebase sells scheduling and payroll software). The 2025 comparison used a different population (828 decision-makers at firms under 200 employees), so the 10-point rise compares two different groups. "Use or pilot" is a looser definition than the Census Bureau's.

<strong>Which roles it affects.</strong> CEO, COO, CPO (People), CIO.

<strong>For an SMB leadership team.</strong> The barriers non-adopters named are the same ones your own staff will raise. Before your next AI rollout, put three things in writing: where company data goes, who can override the tool's output, and how you will measure the savings.

### Most firms use AI, and 2% account for over half the spending

<em>Yotzov, Barrero, Bloom, Davis et al., "Firm Data on AI," NBER Working Paper 34836, revised October 2026.</em> <a href="https://www.nber.org/papers/w34836" class="text-navy underline" target="_blank" rel="noopener noreferrer">NBER</a>

<strong>What the evidence shows.</strong> The revised paper draws on summer 2026 surveys of nearly 9,000 CFOs, CEOs and senior executives in the U.S., UK, Germany, Australia, Canada, Mexico and South Africa. <strong>78%</strong> of firms use AI. U.S. firms expect to spend about <strong>$2,000 per employee</strong> on AI in 2026, roughly $300 billion in total, but <strong>just 2% of firms</strong> account for over half of that spending. 80% of executives use AI regularly, averaging 2.1 hours a week, up from 1.5 hours in the winter 2026 wave. Executives report essentially no net effect on employment over the past three years and expect little over the next three, although over 40% of firms expect job gains or losses that roughly offset in aggregate. They estimate AI added 0.2% a year to labor productivity growth over the past three years and expect 0.6% a year over the next three.

<a href="/images/blog/facts/cxo-advisory-letter-2026-10-21-nber-ai-spend-concentration.png" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/cxo-advisory-letter-2026-10-21-nber-ai-spend-concentration.png" alt="Single figure: 2% of firms account for over half of total AI spending. 78% of firms say they use AI, and U.S. firms expect to spend about $2,000 per employee in 2026. Source: Yotzov, Barrero, Bloom and others, NBER Working Paper 34836, revised October 2026, a survey of nearly 9,000 senior executives in seven countries." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<strong>How solid is it.</strong> INDEPENDENT SURVEY (academic and central-bank survey networks). The sample is large and multi-country. Effects are executives' own estimates, with no control group, and the paper's abstract doesn't give country-level sample sizes.

<strong>Which roles it affects.</strong> CEO, CFO, CAIO, CIO.

<strong>For an SMB leadership team.</strong> Use $2,000 per employee as a reference point and compare your own 2026 AI spending per employee, licenses included. If you are well below it, decide whether that is deliberate. If you are well above it, ask what you have measured in return. The productivity estimates (0.2% so far, 0.6% expected) are a sensible ceiling for any AI line in a 2027 budget that has to clear a board.

## The numbers

- <strong>2%</strong>: Share of firms accounting for over half of total AI spending (NBER WP 34836, Oct 2026 revision)
- <strong>13% vs. 3.3%</strong>: SMB AI users that skipped a planned hire vs. laid off staff because of AI (PYMNTS Intelligence, Oct 2026)
- <strong>5 of 12</strong>: Federal Reserve districts reporting AI-linked attrition, delayed hiring or slower job creation (Fed Beige Book, Oct 14, 2026)
- <strong>44%</strong>: CEOs and senior executives who struggle to show AI-driven financial returns (Gartner 2027 CEO Survey)
- <strong>9–10 months</strong>: Typical payback on transactional finance AI (data extraction, AP/AR, reporting) (Gartner, Sep 24, 2026)
- <strong>70%</strong>: Middle-market firms expecting to raise their own prices in the next six months (RSM MMBI Q3 2026)

## What I'm watching

- <strong>Whether skipped hires show up in official data.</strong> The Beige Book and the PYMNTS survey point to fewer hires rather than layoffs, but neither measures how many jobs are involved. I'd want to see it in the Census Bureau's business survey or in job-openings data before treating it as a trend rather than an anecdote.
- <strong>"AI agents as employees."</strong> Half of Gartner's CEOs named it as a way to speed up AI returns. I have seen almost no outcome evidence on who supervises these agents, how errors get caught, or what they cost once correction time is counted. The PYMNTS finding that about a fifth of SMB users pay to fix AI work is the closest number I have.
- <strong>Middle-market pricing power.</strong> RSM's July survey shows most firms planning further price increases, and the Beige Book's price commentary has firmed since. The harder question is how long customers keep accepting increases. That is not yet in the data.

<em>This letter is general information, not legal, tax, accounting or investment advice.</em>

<em>FACTS Consulting — Finance, Analytics, Consultative Transformational Services</em>

<em>We Make You Smarter.</em>`,
    author: 'Bob Katz',
    date: '2026-10-21',
    category: 'CxO Advisory',
    image: '/images/blog/facts/cxo-advisory-letter-2026-10-21.jpg',
    readTime: '11 min',
    slug: 'cxo-advisory-letter-2026-10-21',
  },
  {
    id: 'facts-ai-pilots-where-are-the-profits',
    title: "AI Pilots Are Everywhere. Where Are the Profits?",
    excerpt: "Most people report being more productive with AI; most companies cannot yet show it in enterprise earnings. Five questions that make an AI investment testable before the money moves.",
    content: `<a href="/images/blog/facts/ai-pilots-where-are-the-profits.webp" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/ai-pilots-where-are-the-profits.webp" alt="Cover: a stone bridge with its center span missing, a stopwatch on one bank and an open ledger on the other, under the title AI Pilots Are Everywhere. Where Are the Profits? Analysis to AI to Action, Article 1 of 3, Bob Katz, factservices.com" class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<em>Analysis to AI to Action, Article 1 of 3</em>

Twenty years ago, I implemented corporate performance management (CPM) systems for executives who believed the software was the hard part. It never was. The hard part was that nobody had agreed, before the project started, which decision would change when the new number arrived. Systems approved to "give us visibility" gave visibility, and the visibility sat there. Systems approved to shorten the close from twelve days to five either did or did not, and everyone could see which.

I keep thinking about those projects because the pattern they belong to is now being measured, at scale, with a different technology.

## What the numbers say, and what they measure

Gartner forecast in July 2024 that at least 30 percent of generative AI projects would be abandoned after proof of concept by the end of 2025. Its January 2026 follow-up says the figure was at least 50 percent, for the four reasons it had named in advance: poor data quality, inadequate risk controls, escalating costs, and unclear business value. That is Gartner's own finding. The public article page does not provide its methodology, so the figure should not be treated as an audited industry rate.

McKinsey's August 2026 State of AI survey, with 1,719 respondents in 97 countries, puts the two halves of the problem in one place. Eighty percent of respondents said AI had improved their individual productivity. Thirty-seven percent reported a positive impact on their organization's earnings before interest and taxes (EBIT), roughly the same share as a year earlier. Most respondents report being more productive. Most surveyed organizations cannot yet show the gain in enterprise earnings, although McKinsey notes that some of them do report financial benefits within particular functions.

The named cases are familiar, and they are not all the same kind of case. McDonald's announced in June 2024 that it was ending a drive-through ordering test with IBM at roughly a hundred restaurants, nearly three years in, short of the accuracy it wanted: a project stopped. Starbucks retired a computer-vision inventory counter across North America in May 2026, nine months after rollout; Reuters reported persistent miscounts, and Starbucks described the decision as standardizing how stores count: a deployed system withdrawn. Air Canada's customer-service chatbot misstated a bereavement-fare rule, and in February 2024 a Canadian tribunal found the airline liable for negligent misrepresentation and awarded the passenger about 812 Canadian dollars: an erroneous output with a legal consequence. Each illuminates a different problem. None of them tells you what the company earned or lost, and stacking them into one "AI failure rate" hides more than it shows.

## Abandonment is not the failure

Some cancelled pilots are good decisions. A proof of concept exists to be proved or disproved, and a company that stops half of them may be running honest experiments. McDonald's and Starbucks both had operating objectives: simpler ordering and better product availability, respectively. Both learned something specific about what the technology could and could not yet do in their stores. Difficulty delivering a benefit is not the same as never having defined one.

The failure I am interested in is upstream of the cancellation. It is committing money and people to a technology without first writing down how the technology will turn into money. A stated benefit mechanism does not make a pilot succeed. What it does is make the pilot testable and its result interpretable. When a pilot like that is stopped, the company knows what it learned about its data, its process, or its customers. When a pilot without one is stopped, whatever was learned was never tied to a business hypothesis. When it is continued, it is continued on enthusiasm, and enthusiasm does not show up in the ledger.

That is the CPM story again, with a larger budget and a shorter attention span.

## Three things that are not the same thing

Most AI business cases rest on one of three claims, and the three are routinely used as if they were interchangeable. I suspect this confusion explains a good share of the gap between the 80 percent and the 37 percent above. I cannot prove that from survey data, and I will not pretend to. But every AI business case I have read that counted hours saved at a loaded hourly rate and called the result savings has made the same mistake, and it is a mistake a CFO can catch in ten minutes.

<strong>A productivity gain</strong> is a task taking less time. A drafting tool that saves each of forty analysts three hours a week has released about 120 hours of weekly capacity. Capacity is real, and it has several routes to value: a hire avoided, overtime eliminated, fewer errors, faster throughput, work moved to something a customer pays for, people kept who would have left. The requirement is not a reduction in headcount. The requirement is a credible, written account of what happens to the released capacity. If the account is "people will have more time," the gain is real and a financial return has not been established.

<strong>A cost saving</strong> is a cost that is lower than it would otherwise have been. That needs a counterfactual, not just a falling balance. A company that handles 30 percent more volume with the same staff and skips a planned hire has avoided that hiring cost, although the general ledger alone will not show the avoided expense. A company whose expense line fell because volume fell has not thereby demonstrated an AI saving. Name the expense category, state what it would have been, and say why. The ledger confirms; it does not attribute.

<strong>Incremental revenue</strong> is customers paying more, or more customers paying, because of the system. It is the hardest of the three to attribute and the easiest to promise. It is also only half a test. Extra sales attributable to AI can still lose money, so establish the additional revenue first, using a control group where feasible or an explicit comparison where it is not. Then apply the contribution margin and subtract the system's own incremental costs.

Here is the discipline in numbers, hypothetical and deliberately small. A pilot costs 25,000 dollars to set up. It is projected to produce 35,000 dollars a year of attributable benefit, with the category and the counterfactual named for every dollar, and its projected running cost is 18,000 dollars a year: licenses, maintenance, and human review of outputs. Net annual benefit, 17,000 dollars. Simple payback, about eighteen months, assuming full annual benefits and running costs begin immediately. A slower ramp-up in benefits would extend it. That is a modest, defensible case, worth evaluating against the company's own investment criteria, the risk that the benefit does not arrive, and how long it lasts.

Set beside it the same pilot described as "saves 40 analysts 3 hours a week, 6,000 hours over a 50-week year, at 60 dollars an hour: 360,000 dollars in savings." The arithmetic values released capacity. It does not explain how that capacity becomes financial benefit. That is the kind of number a good demo invites.

## Five questions before the money moves

If I were back in those steering committees, these are the five questions I would want answered on one page before the vote. They are business questions.

<strong>1. Which decision or process will be different, and why AI?</strong> Not "customer service" but "the first response to a billing dispute." Then the harder half: why use AI instead of cleaning up the process, using ordinary automation, or enabling a feature the company already pays for? A surprising number of AI pilots are expensive ways to avoid fixing a form.

<strong>2. What does that process cost now?</strong> In hours, dollars, errors, and days of delay, measured rather than estimated where possible. This baseline has to exist before the pilot does, because afterward everyone remembers the old process as worse than it was.

<strong>3. What result, in which currency, by what date, and what then?</strong> Hours released, a named cost avoided, or revenue added, with the figure written down. Then set the thresholds: what result, by what date, would lead the company to stop, revise, or scale? What quality level is acceptable along the way? A pilot is a purchase of information before it is a purchase of earnings. It needs a plausible economic hypothesis, a spending limit, and a decision it will inform. It does not need to pay for itself; it needs to tell you whether the scaled version would.

<strong>4. What will it cost to pilot, and what would it cost to run at scale?</strong> Two numbers, not one. For a small company buying an existing product, the license may be the largest cash cost; for a larger one, data cleanup, integration, maintenance of prompts and guardrails, and human review may exceed it. Either way, the pilot budget tells you little about the operating cost, and the operating cost is what the benefit has to clear.

<strong>5. Who owns the benefit?</strong> Not who delivers the pilot. A named business owner who controls the operating changes the benefit depends on: the hiring plan, the vendor contract, the schedule, the sales process. If the answer is "the AI team," accountability is incomplete unless that team also controls the relevant operating changes.

Framing the five questions takes an afternoon. Getting reliable answers can take weeks, and that is time well spent compared with the eighteen months a pilot without them can run.

## What this does and does not fix

I do not think the questions make AI projects succeed. The technology is young, the data in most companies is worse than anyone admits, and some share of the abandonment rate above is the honest cost of learning. What the questions do is make the outcome legible. A pilot that was meant to cut reconciliation from twelve days to five, and cut it to nine, has produced an observed result and a set of specific questions about why the remaining four days did not move. A pilot that was meant to "transform finance" and did not has produced nothing but a reason to distrust the next deck.

The harder question, which I do not have a clean answer to, is whether management teams will accept the discipline once the demo has been good. The five questions are not difficult. They are simply not the questions a good demo invites.

This series is about the distance between a promising demo and a measurable business result. Analysis matters when it changes a decision. AI matters when it changes the work. Management's job is to turn that change in the work into value, and this article has been about what value is and what has to be established before funding. The second article is about the analysis: how to find the decision and the intervention worth improving before any technology is chosen. The third is about the operating change itself: ownership, measurement, and how a benefit that exists on a slide becomes one that exists in the accounts.

### Sources

- Gartner, press release, July 29, 2024: at least 30 percent of generative AI projects to be abandoned after proof of concept by end of 2025. <a href="https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025</a>
- Gartner, "Why Half of GenAI Projects Fail," January 26, 2026: at least 50 percent abandoned after proof of concept by end of 2025, same four causes. <a href="https://www.gartner.com/en/articles/genai-project-failure" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://www.gartner.com/en/articles/genai-project-failure</a>
- McKinsey, "The State of AI in 2026: On the Road to ROI," August 25, 2026 (1,719 respondents, 97 countries, fieldwork May 4 to June 8, 2026): 80 percent report improved individual productivity; 37 percent report positive enterprise EBIT impact from AI, flat on the prior year; some respondents without enterprise impact report financial benefits within particular functions. <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai</a>
- McDonald's and IBM: announcement June 2024; shutdown at test locations by late July 2024; about 100 restaurants; partnership from 2021; reported target of 95 percent-plus accuracy. <a href="https://www.nrn.com/quick-service/mcdonald-s-is-ending-its-ai-drive-thru-test-with-ibm" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://www.nrn.com/quick-service/mcdonald-s-is-ending-its-ai-drive-thru-test-with-ibm</a>
- Air Canada: Moffatt v. Air Canada, British Columbia Civil Resolution Tribunal, February 14, 2024; negligent misrepresentation; award C$812.02 including interest and fees. <a href="https://www.middletemple.org.uk/sites/default/files/civicrm/persist/contribute/files/2024bccrt149.pdf" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://www.middletemple.org.uk/sites/default/files/civicrm/persist/contribute/files/2024bccrt149.pdf</a>
- Starbucks: Reuters, May 2026 (internal newsletter and employee accounts), as reported by Restaurant Dive, which adds Starbucks' own statement: "Automated Counting" tool built with NomadGo retired after about nine months; miscounting per Reuters' sources; Starbucks framed the decision as standardization. <a href="https://www.restaurantdive.com/news/Starbucks-eliminates-computer-vision-ai-inventory-system/820934/" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://www.restaurantdive.com/news/Starbucks-eliminates-computer-vision-ai-inventory-system/820934/</a>

<em>FACTS Consulting — Finance, Analytics, Consultative Transformational Services</em>

<em>We Make You Smarter.</em>`,
    author: 'Bob Katz',
    date: '2026-11-01',
    category: 'AI',
    image: '/images/blog/facts/ai-pilots-where-are-the-profits.webp',
    readTime: '7 min',
    slug: 'ai-pilots-where-are-the-profits',
  },
  {
    id: 'facts-two-ncms-two-ai-futures',
    title: "Two NCMs, Two AI Futures: From Faster Answers to Better Decisions",
    excerpt: "Why the next competitive advantage in AI may have less to do with generating information and more to do with understanding consequences.",
    content: `<a href="/images/blog/facts/two-ncms-two-ai-futures.webp" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/two-ncms-two-ai-futures.webp" alt="Infographic comparing two NCMs: Next-Concept Modeling (coarse-to-fine, parallel text generation for faster answers) and Neural Causal Modeling (estimating how pricing, marketing, production and other drivers change revenue, margin and cash flow), and how both fit a financial decision-support pipeline from enterprise data to executive decisions and a recommendation tape." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

<em>Why the next competitive advantage in AI may have less to do with generating information and more to do with understanding consequences.</em>

AI has become remarkably good at answering questions.

Ask it to summarize a financial report, explain a revenue variance, or draft a strategic plan, and it can produce a polished response in seconds.

But ask a more consequential question—<em>What will happen to our profitability if we raise prices by 5%?</em>—and the challenge changes fundamentally.

We are no longer asking AI to generate an answer. We are asking it to predict the consequences of a decision.

Two approaches to artificial intelligence, coincidentally sharing the acronym NCM, illuminate this distinction.

One is <strong>Next-Concept Modeling</strong>. The other is <strong>Neural Causal Modeling</strong>.

They solve very different problems, but together they suggest an important direction for AI in business.

## The First NCM: Making AI Faster

In October 2026, researchers at Stanford's Hazy Research lab introduced Next-Concept Modeling, an alternative approach to generating language.

Today's conventional large language models generally produce text sequentially, predicting one token after another.

Next-Concept Modeling takes a different approach. It develops a hierarchical representation of the intended output, progressing from coarse structure to finer detail, with parallel generation within each level.

The researchers reported generation speeds 10 to 31 times faster than strong diffusion language-model baselines, while maintaining competitive quality on the tasks evaluated.

These are promising research results on relatively small models, not proof of equivalent speed advantages over leading commercial LLMs.

Nevertheless, the direction is important.

As the cost of generating language declines, organizations may be able to deploy AI across increasingly complex workflows, from financial reporting to operational analysis.

But faster answers raise a larger question.

**What if we are dramatically accelerating the production of answers without improving the quality of the decisions they support?**

## The Second NCM: Understanding Consequences

Neural Causal Modeling addresses a fundamentally different problem.

Rather than focusing on how information is generated, it attempts to represent causal relationships: how changing one factor influences another.

Consider a manufacturing company experiencing declining operating margins.

An AI assistant might examine historical financial statements and identify correlations among labor costs, product mix, pricing and profitability.

It could produce an excellent explanation of what happened.

But management needs something more.

What happens if we increase prices?

What happens if we automate part of production?

Would reducing overtime improve profitability, or would lower production volumes offset the savings?

These are questions about interventions and consequences.

Neural causal models combine causal structures with the flexibility of neural networks to estimate relationships that may be nonlinear and complex.

Crucially, however, causal inference requires more than sophisticated algorithms. The relevant causal relationships must be identifiable from the available evidence and defensible assumptions.

A neural network cannot magically transform correlation into causation.

## Three Levels of Financial Intelligence

The distinction becomes clearer when we consider three increasingly demanding questions.

**Level 1: What happened?**

Revenue declined by 4%, gross margin fell by 180 basis points, and operating expenses exceeded budget.

Traditional business intelligence, financial reporting and statistical analysis are well suited to this task.

**Level 2: What is likely to happen?**

Based on current trends, customer behavior and operating conditions, next quarter's operating margin is forecast to decline another 60 basis points.

Predictive analytics, machine learning and simulation can help estimate future outcomes.

**Level 3: What happens if we act?**

If management raises prices by 3%, what is the likely effect on customer retention, sales volume, revenue and operating profit?

And how does that compare with reducing production costs or changing the product mix?

This third level requires reasoning about interventions, including the causal assumptions that connect actions to outcomes.

It is potentially the most valuable—and frequently the most difficult—form of financial decision support.

## The Emerging Opportunity for CFOs

For decades, financial planning and analysis has progressed from historical reporting toward forecasting, scenario modeling and business partnering.

AI could accelerate that evolution.

Imagine a financial decision-support system that integrates enterprise data, predictive models, causal analysis and AI agents.

Management asks whether to expand production capacity.

The system evaluates demand forecasts, capital requirements, operating constraints and alternative investments.

It estimates potential outcomes under different scenarios, identifies uncertainties and recommends actions for executive consideration.

Importantly, it records the assumptions behind those recommendations.

As actual results become available, it compares outcomes with expectations and evaluates whether the original decision logic remains valid.

The objective is not to automate executive judgment.

It is to make that judgment better informed, more transparent and more accountable.

## Where the Two NCMs Meet

Next-Concept Modeling could eventually make the generation and communication of financial intelligence more efficient.

Neural Causal Modeling could help strengthen the analytical foundations for evaluating proposed actions.

Combined with deterministic financial models, optimization, simulation and appropriate human oversight, these technologies could support a more capable generation of enterprise decision systems.

Neither technology is sufficient on its own.

Faster language generation does not establish analytical accuracy.

And sophisticated causal models cannot produce trustworthy recommendations when the underlying data, assumptions or causal relationships are inadequate.

The architecture matters as much as the algorithms.

## The Real Competitive Advantage

As AI becomes increasingly capable and inexpensive, the ability to produce an analysis may cease to be a meaningful competitive advantage.

Most organizations will have access to tools that can summarize financial results, generate forecasts and explain performance.

The differentiator will be what organizations do with that intelligence.

Can they identify the right decisions?

Can they evaluate the likely consequences of alternative actions?

Can they quantify uncertainty?

Can they measure whether the decisions actually produced the intended results?

These questions suggest a shift in the value proposition of enterprise AI.

**The future of AI in finance is not simply about generating better answers. It is about making better decisions—and knowing whether those decisions worked.**

That is where the next generation of financial intelligence systems should be headed.

<em>FACTS Consulting — Finance, Analytics, Consultative Transformational Services</em>

<em>We Make You Smarter.</em>

### Research references

<ol class="list-decimal list-inside mb-4 text-gray-700 space-y-2"><li>Kumbong, Khare et al., Stanford Hazy Research, <em>Next-Concept Modeling: Fast, Parallel Coarse-to-Fine Text Generation</em> (October 2026). <a href="https://hazyresearch.stanford.edu/blog/2026-10-12-ncm" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://hazyresearch.stanford.edu/blog/2026-10-12-ncm</a></li><li>Xia, Lee, Bengio and Bareinboim, <em>The Causal-Neural Connection: Expressiveness, Learnability, and Inference</em> (NeurIPS 2021). <a href="https://papers.nips.cc/paper_files/paper/2021/hash/5989add1703e4b0480f75e2390739f34-Abstract.html" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://papers.nips.cc/paper_files/paper/2021/hash/5989add1703e4b0480f75e2390739f34-Abstract.html</a></li><li>Xia, Pan and Bareinboim, <em>Neural Causal Models for Counterfactual Identification and Estimation</em> (ICLR 2023). <a href="https://arxiv.org/abs/2210.00035" class="text-navy underline" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2210.00035</a></li></ol>`,
    author: 'Bob Katz',
    date: '2026-10-24',
    category: 'AI',
    image: '/images/blog/facts/two-ncms-two-ai-futures.webp',
    readTime: '5 min',
    slug: 'two-ncms-two-ai-futures',
  },
];
