// Articles written for the FACTS Consulting site itself (not imported from another platform).
import type { BlogPost } from './blogPosts';

export const factsPosts: BlogPost[] = [
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
    date: '2026-10-27',
    category: 'AI',
    image: '/images/blog/facts/two-ncms-two-ai-futures.jpg',
    readTime: '5 min',
    slug: 'two-ncms-two-ai-futures',
  },
];
