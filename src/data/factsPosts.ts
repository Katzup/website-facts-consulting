// Articles written for the FACTS Consulting site itself (not imported from another platform).
import type { BlogPost } from './blogPosts';

export const factsPosts: BlogPost[] = [
  {
    id: 'facts-ai-pilots-where-are-the-profits',
    title: "AI Pilots Are Everywhere. Where Are the Profits?",
    excerpt: "Most people report being more productive with AI; most companies cannot yet show it in enterprise earnings. Five questions that make an AI investment testable before the money moves.",
    content: `<a href="/images/blog/facts/ai-pilots-where-are-the-profits.jpg" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/ai-pilots-where-are-the-profits.jpg" alt="Cover: a stone bridge with its center span missing, a stopwatch on one bank and an open ledger on the other, under the title AI Pilots Are Everywhere. Where Are the Profits? Analysis to AI to Action, Article 1 of 3, Bob Katz, factservices.com" class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

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
    image: '/images/blog/facts/ai-pilots-where-are-the-profits.jpg',
    readTime: '7 min',
    slug: 'ai-pilots-where-are-the-profits',
  },
  {
    id: 'facts-two-ncms-two-ai-futures',
    title: "Two NCMs, Two AI Futures: From Faster Answers to Better Decisions",
    excerpt: "Why the next competitive advantage in AI may have less to do with generating information and more to do with understanding consequences.",
    content: `<a href="/images/blog/facts/two-ncms-two-ai-futures.jpg" target="_blank" rel="noopener noreferrer"><img src="/images/blog/facts/two-ncms-two-ai-futures.jpg" alt="Infographic comparing two NCMs: Next-Concept Modeling (coarse-to-fine, parallel text generation for faster answers) and Neural Causal Modeling (estimating how pricing, marketing, production and other drivers change revenue, margin and cash flow), and how both fit a financial decision-support pipeline from enterprise data to executive decisions and a recommendation tape." class="my-6 max-w-full h-auto rounded" loading="lazy"/></a>

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
    image: '/images/blog/facts/two-ncms-two-ai-futures.jpg',
    readTime: '5 min',
    slug: 'two-ncms-two-ai-futures',
  },
];
