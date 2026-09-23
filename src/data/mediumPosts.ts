// Imported from Bob Katz's Medium profile (@katzup) on 2026-09-23. Each post links back to the original.
import type { BlogPost } from './blogPosts';

export const mediumPosts: BlogPost[] = [
  {
    id: 'medium-70d4d4dd',
    title: 'Can Timing Beat Bitcoin DCA? What a Georgia Tech OMSA Practicum Taught Me',
    excerpt: 'Most Bitcoin accumulation advice boils down to: buy the same amount every day and don\'t look at the chart. Dollar-cost averaging (DCA) is simple, disciplined, and hard to beat. So when Georgia Tech\'s OMSA program…',
    content: `<img src="/images/blog/medium/1_vo2nB_y9Gihqzuiv8tluVQ.png" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>

<pre class="bg-gray-100 p-4 rounded overflow-x-auto text-sm"><code>Most Bitcoin accumulation advice boils down to: buy the same amount every day and don&#x27;t look at the chart. Dollar-cost averaging (DCA) is simple, disciplined, and hard to beat. So when Georgia Tech&#x27;s OMSA program challenged me to try, I expected the answer to be &quot;no.&quot;I was almost right.The Hypothesis That FailedThe original idea was straightforward: train a CNN on candlestick chart images to classify next-day price direction, then tilt daily Bitcoin purchases based on the model&#x27;s confidence. If the model says &quot;up,&quot; buy more. If &quot;down,&quot; buy less.The CNN achieved respectable classification accuracy during training. But when fed through the tournament&#x27;s actual evaluation metric — recency-weighted sats-per-dollar across 3,076 rolling windows from 2016–2025 — it scored 41.43%. A neutral baseline that simply buys the same amount every day? 41.94%. The CNN was indistinguishable from a coin flip in the metric that mattered.Pattern recognition is not the same as a trading edge.What Actually WorkedRather than abandon the project, I stripped the approach down to something almost embarrassingly simple.Take the OLS trend slope of Bitcoin&#x27;s log price over a 60-day window. Normalize it as a z-score against a 252-day rolling standard deviation. Clip outliers at ±2 standard deviations. Then convert to a daily purchase weight:      prob_up = 0.5 − 0.15 × tanh(z-score)That&#x27;s the entire signal. When Bitcoin&#x27;s trend is unusually strong relative to recent volatility, the formula slightly reduces your daily purchase. When the trend is unusually weak, it slightly increases it. The tilt is modest — never more than ±15 percentage points from equal weighting.This scored 44.95% on the tournament percentile — a +3.01 percentage point improvement over neutral DCA.Three points doesn&#x27;t sound like much. But in a tournament where thousands of rolling windows are evaluated and most signals cluster near the baseline, a consistent 3-point edge is meaningful. It means you&#x27;re accumulating more sats per dollar across a wide variety of market conditions.</code></pre>

<img src="/images/blog/medium/1_jFjlu23EIOY8myfen2Z8eg.png" alt="Figure 1: Strategy comparison across 3,076 rolling evaluation windows (2016–2025). Left: Tournament metric (RW-SPD percentile) — the OLS z-score signal achieves 44.95%, a +3.01pp improvement over neutral DCA (41.94%). The CNN scored 41.43%, worse than doing nothing. Right: Win rate vs naive DCA across all windows. Data from Trilemma Foundation Stacking Sats Tournament." class="my-6 max-w-full h-auto rounded" loading="lazy"/><br/><em class="text-sm text-gray-500">Figure 1: Strategy comparison across 3,076 rolling evaluation windows (2016–2025). Left: Tournament metric (RW-SPD percentile) — the OLS z-score signal achieves 44.95%, a +3.01pp improvement over neutral DCA (41.94%). The CNN scored 41.43%, worse than doing nothing. Right: Win rate vs naive DCA across all windows. Data from Trilemma Foundation Stacking Sats Tournament.</em>

<pre class="bg-gray-100 p-4 rounded overflow-x-auto text-sm"><code>Why It Works (and What It Isn&#x27;t)The natural assumption is &quot;buy the dip&quot; — the signal increases purchases when prices drop. But the data tells a more nuanced story.The z-score is positively correlated with forward 30-day returns (r ≈ +0.14). That&#x27;s momentum-like, not contrarian. So why does inverting it help accumulation?The answer is regime-relative dampening. By normalizing the trend against a 252-day rolling standard deviation, the signal automatically adapts to the current volatility regime. In calm markets, small moves register as meaningful z-scores. In volatile markets, even large swings get dampened. The signal doesn&#x27;t predict direction — it recognizes when the market is behaving unusually relative to its own recent history, and adjusts purchase sizes accordingly.Formal statistical tests support the regime structure. Ljung-Box testing confirmed significant volatility clustering (Q = 847.3, p &lt; 0.001). Mann-Whitney U tests showed bull and bear regime return distributions are statistically distinct (p &lt; 0.001). Bootstrap confidence intervals put mean daily returns at +0.23% in bull regimes versus −0.09% in bear regimes.The signal exploits these regime differences — not by timing tops and bottoms, but by spending slightly less during overextended conditions and slightly more during depressed ones.</code></pre>

<img src="/images/blog/medium/1_1a-12cWDcwIB7aVolGHWcg.png" alt="Figure 2: Formal regime evidence panel. Left: Ljung-Box Q-statistic (Q = 847.3, p &lt; 0.001) confirming significant volatility clustering in Bitcoin daily returns. Center: Mann-Whitney U test showing bull and bear regime return distributions are statistically distinct (p &lt; 0.001). Right: Bootstrap 95% confidence intervals — mean daily returns of +0.23% in bull regimes versus −0.09% in bear regimes. These structural regime differences are what the OLS z-score signal is designed to exploit.*" class="my-6 max-w-full h-auto rounded" loading="lazy"/><br/><em class="text-sm text-gray-500">Figure 2: Formal regime evidence panel. Left: Ljung-Box Q-statistic (Q = 847.3, p &lt; 0.001) confirming significant volatility clustering in Bitcoin daily returns. Center: Mann-Whitney U test showing bull and bear regime return distributions are statistically distinct (p &lt; 0.001). Right: Bootstrap 95% confidence intervals — mean daily returns of +0.23% in bull regimes versus −0.09% in bear regimes. These structural regime differences are what the OLS z-score signal is designed to exploit.*</em>

<pre class="bg-gray-100 p-4 rounded overflow-x-auto text-sm"><code>What I Tried That Didn&#x27;t WorkScience is honest about null results. Several ideas that seemed promising added no value:Volatility-amplitude scaling — adjusting the signal strength based on short-term realized volatility. Result: +0.14 percentage points on the tournament metric but worse win rate (−1.6%) and lower absolute sats-per-dollar advantage. The z-score already captures volatility implicitly through its rolling standard deviation. Adding an explicit layer was redundant.Weekly granularity — resampling to weekly signals to reduce daily noise. The direct weekly equivalent underperformed by −0.90 percentage points. The daily signal&#x27;s edge comes from its normalization structure, not from the frequency of updates.Fee sensitivity — I proved mathematically that proportional transaction fees are percentile-invariant in this evaluation framework. The fee factor cancels in the percentile ratio. The strategy&#x27;s breakeven fee is approximately 40–45 basis points, well above typical exchange costs.A turnover governor was adopted — not for performance (it had zero impact on the tournament metric) but for operational stability, reducing portfolio turnover by roughly 12%.What This Means for Bitcoin AccumulatorsIf you&#x27;re dollar-cost averaging into Bitcoin, you&#x27;re already doing something sensible. This research suggests you can do slightly better by paying attention to one thing: how the current price trend compares to recent volatility.When Bitcoin has been trending strongly relative to its own recent behavior, buy a little less. When the trend is weak relative to recent volatility, buy a little more. Not dramatically — just a modest tilt.The key insight isn&#x27;t about prediction. It&#x27;s about **regime awareness**. Bitcoin&#x27;s volatility clusters. Bull and bear periods have statistically different return distributions. A simple normalization that respects these regimes captures most of the available edge. More complex approaches — CNNs, volatility overlays, weekly resampling — don&#x27;t add meaningful value over this baseline.Sometimes the best model is the simplest one that accounts for structure in the data.Explore the Full AnalysisThe complete codebase, data pipeline, and reproducibility package are available on GitHub:[GitHub Repository](https://github.com/Katzup/bitcoin-analytics-capstone-template)**The repo includes a 30-second smoke test (\`make all\`), formal statistical tests, and every experiment described above with full results. A 7-minute video walkthrough covers the project for non-technical audiences:[Bitcoin - Win by Failing First](https://youtu.be/dPQTMGjO_cM)*This work was completed as part of Georgia Tech&#x27;s OMSA Practicum (Spring 2026) in partnership with the [Trilemma Foundation](https://www.stackingsats.org/). The analysis covers Bitcoin accumulation strategies from 2016–2025 using publicly available price data.*---*Bob Katz is the founder of FACTS Consulting, where he works at the intersection of Finance, Analytics, Consulting, Transformation, and AI. Connect on [LinkedIn](https://linkedin.com/company/facts-consulting) or visit [factservices.com](https://factservices.com).*</code></pre>

<em>Originally published on <a href="https://medium.com/@katzup/can-timing-beat-bitcoin-dca-what-a-georgia-tech-omsa-practicum-taught-me-a0cd2a148778" class="text-navy underline" target="_blank" rel="noopener noreferrer">Medium</a>.</em>`,
    author: 'Bob Katz',
    date: '2026-04-15',
    category: 'Analytics',
    image: '/images/blog/medium/1_vo2nB_y9Gihqzuiv8tluVQ.png',
    readTime: '5 min',
    slug: 'can-timing-beat-bitcoin-dca-what-a-georgia-tech-omsa-practicum-taught-me',
  },
  {
    id: 'medium-b79bba51',
    title: 'Riding the Worm',
    excerpt: '## Harnessing the Shai-Hulud of Artificial Intelligence There’s a scene in Dune — Frank Herbert’s sci-fi epic — where Paul Atreides in his rite of passage to become the Kwisatz Haderach, finally summons and rides a…',
    content: `<img src="/images/blog/medium/1_Fq1Hpci3zJspfdZQXj0mQw.png" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>

## Harnessing the Shai-Hulud of Artificial Intelligence

There’s a scene in <em>Dune</em> — Frank Herbert’s sci-fi epic — where Paul Atreides in his rite of passage to become the <strong><em>Kwisatz Haderach, </em></strong>finally summons and rides a sandworm. Standing alone in the open desert, he plants his thumper, waits for the rumble, then climbs atop a towering, thrashing beast that could swallow him whole. He can’t tame it. He can only hang on.

Paul isn’t in control. He’s just learned how to <strong>ride</strong> something ancient, powerful, and indifferent to his fate. The sandworm, Shai-Hulud, is not a pet. It is a force. A god to the Fremen. A symbol of death and rebirth. To ride it is to accept that you’re not the master — you’re the passenger with just enough grip and guts to stay on.

That’s where we are right now with Artificial Intelligence.

## The Shai-Hulud of Silicon

In the last two years, large language models (LLMs) have erupted in scope and speed. What once looked like clever autocomplete now writes code, crafts policy, tutors students, summarizes legal cases, and creates with eerie fluency. GPT-4o, Claude, Gemini — these models don’t just answer questions; they reshape how we ask them.

This is our <strong>Shai-Hulud moment</strong>.

We called the worm. We built the thumpers — massive datasets, transformer architectures, GPUs stacked to the sky — and now we’re riding a force that is faster, smarter, and stranger than we expected. AI is no longer a speculative future; it’s a present-tense upheaval. And like Paul in the desert, we’re clinging to ropes, feeling the momentum shift beneath our feet.

## We’re Not in Control — We’re in Motion

The illusion that humans are still fully at the helm is fading. Sure, we guide these models. We fine-tune. We moderate. We regulate. But much like the worm of Arrakis, LLMs move with their own inertia, shaped by layers of probabilities we only partially understand.

Ask one to write Python code — it does.

Ask it to simplify Nietzsche for a fifth grader — it shines.

Ask it a question about geopolitics — it might hallucinate with confidence.

You don’t <em>steer</em> Shai-Hulud. You <em>ride</em> it. You anticipate its movements, brace yourself, and hold tight. And when you fall, you learn, adjust, and get back on.

## The Desert Is Shifting

Every industry is being reshaped under the shadow of this worm. Education, law, medicine, finance, customer service, creative arts — there’s no safe dune. The AI wave is flattening hierarchies, redistributing power, and rewriting the playbook.

And yet, many of our institutions still act like we’re building fences. Rules, regulations, fears about cheating or bias — they’re important, yes. But they’re also <em>reactive</em>. The worm is moving. If you’re not riding it, you’re getting buried in its wake.

## Becoming Fremen

In <em>Dune</em>, to ride the worm is to cross a threshold. The Fremen don’t just <em>observe</em> Shai-Hulud — they learn to live with it, survive by it, fight alongside it. It’s not worship. It’s <strong>adaptation</strong>.

That’s our challenge now. We need to become the Fremen of this AI era:

- Agile in the face of disruption
- Fearless in experimenting
- Humble before complexity
- Brutally pragmatic about what works and what doesn’t

The old playbooks won’t serve us. Education systems must shift from memorization to synthesis. Workplaces must balance human creativity with machine augmentation. Governance must become dynamic, transparent, and tech-literate.

## We Called the Worm. Now We Ride.

We’ve summoned a force that generates abundance — knowledge at scale, personalized tools, creative partners — but also magnifies risk, misinformation, and economic displacement. We don’t get to choose whether the worm comes. We only choose how we ride.

And that’s the key: <strong>ride, not reign</strong>.

The future isn’t controlled by the most cautious or the most confident. It’s shaped by the ones who learn fastest, pivot often, and <em>stay on</em> when the ground shifts.

<em><strong><em>Long live the fighters — now we ride.</em></strong></em>

<em>Originally published on <a href="https://medium.com/@katzup/riding-the-worm-b66a515518b2" class="text-navy underline" target="_blank" rel="noopener noreferrer">Medium</a>.</em>`,
    author: 'Bob Katz',
    date: '2025-06-20',
    category: 'AI',
    image: '/images/blog/medium/1_Fq1Hpci3zJspfdZQXj0mQw.png',
    readTime: '3 min',
    slug: 'riding-the-worm',
  },
  {
    id: 'medium-e5060474',
    title: 'When ya know, ya know',
    excerpt: 'With all the buzz about AI and ChatGPT these days, what’s a management consultant to do? Clients that used to rely on experts to assist their businesses are now going to chatbots for answers instead. In my early…',
    content: `<img src="/images/blog/medium/1_4ITgXKn2wU2qSs0eNAzTag.png" alt="" class="my-6 max-w-full h-auto rounded" loading="lazy"/>

<strong>With all the buzz about AI and ChatGPT these days, what’s a management consultant to do?</strong> Clients that used to rely on experts to assist their businesses are now going to chatbots for answers instead.

In my early consulting days I used to borrow tons of library books to sustain and improve my own expertise, keeping a “mobile” library in the back seat of my car. <strong>Traveling the Boston streets, talk about books “flying” off the shelves!</strong>

Now with a 3000+ ebook personal library on an iPad I’ve estimated that my collection encompasses over 500 million words, which at my current reading pace would take approximately 60 years to finish (<strong>or as long as the battery, or my memory, holds out).</strong>

<strong>Does even reading all these books mean I’m an expert in any of these subjects</strong>? Of course not (you should check out my 20 golf handicap) but I do find some common themes and observations to try and keep up:

- <strong>Focus</strong>: Concentrating on a few key areas allows one to develop a deep understanding of those subjects and effectively apply that knowledge in your consulting practice.
- <strong>Do, don’t read</strong>: While reading is essential to expand your knowledge, it’s equally important to put that knowledge into practice by engaging in hands-on experiences and learning from real-world situations.
- <strong>Know your limitations</strong>: Recognize that you can’t be an expert in everything. Instead, focus on your strengths and seek assistance from other experts as needed.
- <strong>Relate knowledge to storytelling</strong>: Sharing information through stories can make complex concepts easier to understand and remember, helping you communicate more effectively with clients.
- <strong>Integration</strong>: Combine knowledge from various disciplines to approach problems from multiple perspectives and develop innovative solutions.
- <strong>Be more realistic about your expertise</strong>: Understand that becoming an expert takes time and effort. Continuously strive to improve your knowledge and stay humble in your quest for expertise.
- <strong>Reliance on experts</strong>: Recognize the value of collaborating with other experts in your field, and don’t hesitate to consult them when necessary.

In his book “<strong>Death of Expertise</strong>”, Tom Nichols explores the erosion of trust in experts and the consequences of relying on self-taught knowledge, even more so now when it comes from a chatbot. Everyone has an opinion on everything thee days, whether economics, politics or my writing!

Unless you’re suffering from the <strong>Dunning-Kruger effect</strong>, watching a YouTube video, Googling or reading a few books or articles doesn’t make you an expert. In fact, <strong>it’s more important to know your limitations and recognize you need to rely on the expertise of others.</strong>

That being said, having a broad range of knowledge can be helpful in my consulting; drawing on examples from different fields to illustrate a point or make a connection with a client. And lets be honest, being well read makes you a great conversationalist at parties (uh, what are those again?).

So, while I may not be an expert in everything, having a diverse range of knowledge and being able to relate than knowledge to real life examples is a valuable asset. And who knows, maybe one day I’ll be able to break 90 on the golf course.

A consultant can dream, right?

<em>Originally published on <a href="https://medium.com/@katzup/when-ya-know-ya-know-556451dbb2c5" class="text-navy underline" target="_blank" rel="noopener noreferrer">Medium</a>.</em>`,
    author: 'Bob Katz',
    date: '2023-03-22',
    category: 'Consulting',
    image: '/images/blog/medium/1_4ITgXKn2wU2qSs0eNAzTag.png',
    readTime: '3 min',
    slug: 'when-ya-know-ya-know',
  },
];
