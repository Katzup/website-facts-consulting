// Newsletter signup settings for the Subscribe box shown on SentientEdge Research articles.
// The list lives at Buttondown. The box stays hidden while buttondownUsername is empty.
export const subscribeConfig = {
  buttondownUsername: '',
};

export const subscribeAction = () =>
  `https://buttondown.com/api/emails/embed-subscribe/${subscribeConfig.buttondownUsername}`;
