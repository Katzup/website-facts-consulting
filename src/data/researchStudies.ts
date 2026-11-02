// SentientEdge research studies: ideas tested against market data under rules written down before
// the data was examined. Every figure here comes from the study's own results file or final report.

export interface ResearchStudy {
  slug: string;
  title: string;
  date: string; // YYYY-MM the result was in
  verdict: 'Failed' | 'Small edge, with limits';
  question: string;
  answer: string;
  keyNumbers: { label: string; value: string }[];
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
  limitations: string[];
  sources: { label: string; url?: string }[];
}

export const researchStudies: ResearchStudy[] = [
  {
    slug: 'visual-trading-system',
    title: 'Visual Trading System: Can a Neural Network Read Bitcoin Charts?',
    date: '2026-04',
    verdict: 'Small edge, with limits',
    question:
      'Can a neural network that reads price charts as images time Bitcoin purchases better than buying the same amount every day?',
    answer:
      'The neural network could not. A one-line trend signal could, by about three percentile points, across 3,076 rolling one-year windows.',
    keyNumbers: [
      { label: 'Chart-reading neural network', value: '41.43%' },
      { label: 'Buy the same amount daily (baseline)', value: '41.94%' },
      { label: 'Trend z-score signal', value: '44.95%' },
      { label: 'Rolling one-year windows tested', value: '3,076' },
    ],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'My Georgia Tech OMSA practicum (CSE 6748, Spring 2026) was a tournament set by the Trilemma Foundation. Each strategy spends a fixed budget on Bitcoin over a 365-day window and is scored on how much Bitcoin each dollar buys, compared with spending the same amount every day.',
          'The score is a recency-weighted percentile across 3,076 rolling windows from 2016 to 2025. To win, a strategy has to buy more on the cheap days inside each window. Predicting whether Bitcoin will be higher next month is not enough.',
        ],
      },
      {
        heading: 'First attempt: a chart-reading neural network',
        paragraphs: [
          'The first model turned 30-day price windows into images (Gramian Angular Fields) and trained a convolutional neural network to classify them. It was built carefully: deterministic, cross-validated, and free of look-ahead.',
          'It scored 41.43%, below the 41.94% of simply buying every day. A neutral version of the same system, with the neural network switched off, did better on consistency. The model classified charts well enough. Classifying charts was just not the skill the score rewarded.',
        ],
      },
      {
        heading: 'Second attempt: a simple trend signal',
        paragraphs: [
          'The replacement measures how stretched Bitcoin\'s trend is against its own past year: a 252-day rolling z-score of an ordinary least squares trend-strength signal, capped at two standard deviations. When the trend is unusually stretched, it buys a little less.',
          'It scored 44.95%, 3.01 points above the daily-buying baseline. Two promising refinements, volatility scaling and weekly resampling, were tested against acceptance criteria set in advance. Both were rejected and documented.',
        ],
      },
      {
        heading: 'Why it matters for what followed',
        paragraphs: [
          'The practicum ran alongside early SentientEdge work, and its lessons became the rules for every study after it: write the pass/fail criteria down first, beat a simple baseline before trusting a complex model, and publish the failures.',
        ],
      },
    ],
    limitations: [
      'One asset and one scoring rule. Nothing here says the signal works on stocks or under a different objective.',
      '2016 to 2025 was mostly a bull market for Bitcoin. A rule that buys less when the trend is stretched benefits from that.',
      'At roughly 40 to 45 basis points of round-trip trading cost, the advantage in Bitcoin bought per dollar falls to about zero.',
      'The test is historical. It has not been run forward in real time.',
    ],
    sources: [
      { label: 'Practicum presentation video', url: 'https://www.youtube.com/watch?v=dPQTMGjO_cM' },
      {
        label: 'Cohen, Balch and Veloso (2020), "Trading via Image Classification," ICAIF \'20',
        url: 'https://doi.org/10.1145/3383455.3422544',
      },
    ],
  },
  {
    slug: 'momentum-ranking-18-years',
    title: 'A Momentum Stock Ranking Across 18 Years of Markets',
    date: '2026-08',
    verdict: 'Failed',
    question:
      'Would the SentientEdge weekly momentum ranking of S&P 500 stocks have beaten simply owning the index from 2008 to 2026?',
    answer:
      'No. It trailed SPY by 6.8 points a year after costs and lost to it in 10 of 12 market eras.',
    keyNumbers: [
      { label: 'Ranking, annual return after costs', value: '+2.59%' },
      { label: 'SPY, annual return', value: '+9.38%' },
      { label: 'Eras where the ranking trailed SPY', value: '10 of 12' },
      { label: 'Sharpe ratio, ranking vs SPY', value: '0.24 vs 0.61' },
    ],
    sections: [
      {
        heading: 'How it was tested',
        paragraphs: [
          'The ranking model was frozen and replayed week by week from January 2008 to July 2026, 970 weeks in all. Each week it could only pick from the stocks actually in the S&P 500 that week, so companies that later failed or were removed stay in the test. Trading costs were charged on every rebalance.',
          'The decision rules were committed before the run, including the one that applied: if neither the ranking nor plain momentum beats the index robustly, the ranking is retired as a claim of outperformance.',
        ],
      },
      {
        heading: 'What happened',
        paragraphs: [
          'The ranking returned 2.59% a year against 9.38% for SPY. Its worst drawdown was 62.6%, against 51.6% for SPY. It turned over about two-thirds of the portfolio every week.',
          'Plain 12-month momentum, the textbook version, did better: 2.86 points a year ahead of SPY. But that lead came from one stretch. Without the 2023 to 2026 recovery, plain momentum trailed SPY by 2.74 points a year.',
        ],
      },
      {
        heading: 'What changed',
        paragraphs: [
          'The ranking is no longer presented as a way to beat the market. It still runs every day as a control: a fixed benchmark any new idea has to beat.',
        ],
      },
    ],
    limitations: [
      'The replay applies today\'s model to past data. It matched the model\'s recent live rankings closely (median rank correlation 0.98), but it is not a record of picks actually made in 2008.',
      'S&P 500 stocks only. Smaller companies were not tested.',
    ],
    sources: [{ label: 'SentientEdge multi-regime test, evaluation and verdict, August 11, 2026 (internal)' }],
  },
  {
    slug: 'kronos-1',
    title: 'Kronos-1: Testing a Price-Chart Foundation Model on U.S. Stocks',
    date: '2026-10',
    verdict: 'Failed',
    question:
      'Can Kronos, an AI model pretrained on price charts, rank U.S. stocks by future return or volatility without retraining?',
    answer:
      'No. Its return forecasts were slightly backwards and added nothing beyond momentum. Its volatility forecasts were worse than a plain trailing average.',
    keyNumbers: [
      { label: 'Return-ranking correlation (needed ≥ 0.02)', value: '−0.016' },
      { label: 'Correlation with 12-month momentum', value: '−0.80' },
      { label: 'Volatility ranking vs trailing average', value: '0.51 vs 0.61' },
      { label: 'Stock-weeks forecast', value: '421,918' },
    ],
    sections: [
      {
        heading: 'How it was tested',
        paragraphs: [
          'Kronos-mini, used as published, forecast 20-day price paths for about 780 liquid U.S. stocks every week from January 2016 to April 2026: 538 weeks in all. Every pass/fail threshold was written down before the model produced a single forecast.',
        ],
      },
      {
        heading: 'Returns: backwards, and only momentum in disguise',
        paragraphs: [
          'Stocks Kronos ranked highest did worse than those it ranked lowest, by 0.66% per 20 days, but not significantly. The order held in only three of eleven years.',
          'Its forecast moved almost exactly opposite to 12-month momentum: in effect, it predicted that recent winners would give back their gains. With momentum and last week\'s return removed, nothing predictive was left. Flipping the signal is no way out; flipped, it is mostly momentum.',
        ],
      },
      {
        heading: 'Volatility: worse than the free baseline',
        paragraphs: [
          'Better volatility forecasting is the Kronos paper\'s most credible claim. Here, plain trailing 20-day volatility ranked stocks by future volatility better (0.61 vs 0.51), and Kronos\'s volatility levels were about five times further off.',
        ],
      },
      {
        heading: 'Reproducibility',
        paragraphs: [
          'Rerunning the archived analysis code on the original forecasts reproduced the October 2026 report byte for byte. One placebo check was implemented differently from the plan and showed structure. It most likely reflects the anti-momentum tilt, and it does not change the verdict.',
        ],
      },
    ],
    limitations: [
      'Only the small Kronos-mini model was tested. The larger model would have needed about 1,070 GPU hours.',
      'The paper benchmarks mostly crypto and Asian markets one bar ahead. This tested U.S. stocks 5 to 60 days ahead.',
      'The window ends April 2026, when the open, high and low price data became unreliable.',
    ],
    sources: [
      {
        label: 'Shi et al. (2025), "Kronos: A Foundation Model for the Language of Financial Markets," arXiv:2508.02739',
        url: 'https://arxiv.org/abs/2508.02739',
      },
    ],
  },
  {
    slug: 'analyst-firm-track-record',
    title: 'Do the Best-Performing Analyst Firms Stay the Best?',
    date: '2026-10',
    verdict: 'Failed',
    question:
      'If you follow upgrades and downgrades from the brokerage firms whose calls worked best in 2012–2020, do their calls keep working in 2021–2026?',
    answer:
      'No. The best firms\' later calls did slightly worse than the worst firms\', and a firm\'s past ranking told you nothing about its next one.',
    keyNumbers: [
      { label: 'Best minus worst firms, 63 trading days', value: '−0.14%' },
      { label: 't-statistic (needed ≥ 2)', value: '−0.43' },
      { label: 'Rank correlation, past vs future skill', value: '−0.09' },
      { label: 'Upgrades and downgrades studied', value: '32,453' },
    ],
    sections: [
      {
        heading: 'How it was tested',
        paragraphs: [
          'Every upgrade and downgrade of an S&P 500 stock from 2012 to 2026 was scored by the stock\'s return against its sector afterward, buying at the next close after the call became public. Firms were ranked on 2012–2020 and judged on 2021–2026. The pass rule, written in advance, was a positive gap between the best and worst firms with a t-statistic of at least 2.',
        ],
      },
      {
        heading: 'What happened',
        paragraphs: [
          'Of 88 firms with enough history, the top fifth\'s later calls returned −0.04% against their sectors over 63 trading days; the bottom fifth\'s, +0.10%. Over 21 days the best firms did measurably worse, a mild reversal rather than persistence. Grouping by firm and sector, the closest available stand-in for individual analysts, found nothing either.',
          'One pattern turned up that was not part of the plan: after the call, both upgraded and downgraded stocks tended to lag their sectors over the next six to twelve months. It is a hypothesis for a future study, not a finding.',
        ],
      },
    ],
    limitations: [
      'The data names firms, not individual analysts, so "follow the best analyst" itself could not be tested.',
      'Buying at the next close skips the announcement-day move by design: this tests following a public call, not whether the call moves the stock.',
      'S&P 500 stocks only.',
    ],
    sources: [{ label: 'SentientEdge analyst track-record study, Phase 1 results, October 23, 2026 (internal)' }],
  },
  {
    slug: 'charting-by-machines-replication',
    title: 'Charting by Machines, Tested on the S&P 500',
    date: '2026-10',
    verdict: 'Failed',
    question:
      'Does the "Charting by Machines" neural network approach find information in past prices that momentum and last month\'s return do not already capture, among large U.S. stocks?',
    answer:
      'No. The raw ranking looked good, but once momentum and last month\'s return were accounted for, its forecasts carried no information.',
    keyNumbers: [
      { label: 'Top minus bottom tenth, raw, per month', value: '+0.73 pts' },
      { label: 'Effect after controlling for momentum (needed ≥ +0.07)', value: '−0.02' },
      { label: 'Test months (2018–2026)', value: '105' },
      { label: 'Stock-months tested', value: '52,260' },
    ],
    sections: [
      {
        heading: 'How it was tested',
        paragraphs: [
          'The method from Murray, Xia and Xiao (2024) was trained once on 2008–2017 and tested, never refit, on January 2018 to September 2026, using only stocks in the S&P 500 at each date. The deciding test, set in advance, was whether the forecasts still predicted returns after controlling for 12-month momentum and last month\'s return.',
        ],
      },
      {
        heading: 'What happened',
        paragraphs: [
          'The top tenth of forecasts beat the bottom tenth by 0.73 points a month. After the controls, the effect was −0.02 per standard deviation (t = −0.32). Bought on its own, the top tenth roughly matched SPY after costs (12.6% a year vs 12.75%), with a lower Sharpe ratio and a deeper drawdown.',
          'Against the authors\' published results for 2018–2022, the monthly spreads correlated −0.37. A follow-up diagnostic across 25 subgroups by momentum, liquidity, volatility and sector found no pocket where the effect survived correction for multiple testing.',
        ],
      },
      {
        heading: 'What this does and does not say',
        paragraphs: [
          'It does not refute the paper. The authors trained on all U.S. stocks over decades; this study used large caps only, and its training years are missing about a third of the companies later removed from the index. What it does establish is narrower: applied to the data available here, the method adds nothing in large caps.',
        ],
      },
    ],
    limitations: [
      'Training data from 2008 to 2017 covers only 66% of companies later removed from the index.',
      'Price returns only; dividends were not included.',
      'The paper\'s own claim, across all U.S. stocks and decades, needs data this study did not have.',
    ],
    sources: [
      {
        label: 'Murray, Xia and Xiao (2024), "Charting by Machines," Journal of Financial Economics 153',
        url: 'https://doi.org/10.1016/j.jfineco.2024.103791',
      },
    ],
  },
];

export const getResearchStudyBySlug = (slug: string): ResearchStudy | undefined =>
  researchStudies.find((s) => s.slug === slug);

export const formatStudyDate = (date: string): string => {
  const [y, m] = date.split('-').map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};
