import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { subscribeConfig, subscribeAction } from '@/data/subscribe';

const SubscribeBox = () => {
  if (!subscribeConfig.buttondownUsername) return null;

  // A plain form post: Buttondown may need to show its own page (confirmation or a CAPTCHA).
  return (
    <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-accent-gold/30">
      <h3 className="text-xl font-bold text-dark-blue mb-2">Get the next issue by email</h3>
      <p className="text-gray-600 mb-5">
        Free. SentientEdge research letters and Market Week. You confirm by email and can unsubscribe at any time.
      </p>
      <form action={subscribeAction()} method="post" target="_blank">
        <div className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="subscribe-email" className="sr-only">Email address</label>
          <input
            id="subscribe-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="flex-1 min-w-0 rounded-lg border border-gray-300 px-4 py-2 text-dark-blue focus:outline-none focus:ring-2 focus:ring-accent-gold"
          />
          <Button type="submit" className="bg-accent-gold text-dark-blue hover:bg-accent-gold-hover">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </div>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        To unsubscribe, use the link at the bottom of any issue.
      </p>
    </div>
  );
};

export default SubscribeBox;
