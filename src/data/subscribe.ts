// Newsletter signup settings. Each list has its own form address; a list's Subscribe box
// stays hidden while its address is empty.

// SentientEdge research letters and Market Week: the list lives at Buttondown.
export const subscribeConfig = {
  buttondownUsername: '',
};

export const subscribeAction = () =>
  subscribeConfig.buttondownUsername
    ? `https://buttondown.com/api/emails/embed-subscribe/${subscribeConfig.buttondownUsername}`
    : '';

// SportsEdge Picks: a separate list at a separate service (not yet chosen).
// formAction is the full address the sign-up form posts to; emailField is that service's name for the email input.
export const sportsEdgeSubscribe = {
  formAction: '',
  emailField: 'email',
};
