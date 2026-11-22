// Newsletter signup settings for the Subscribe box shown on SentientEdge Research articles.
// The list lives at Substack. The box stays hidden while substackUrl is empty.
export const subscribeConfig = {
  substackUrl: 'https://factsconsulting.substack.com',
};

export const subscribeLink = () => `${subscribeConfig.substackUrl}/subscribe`;
