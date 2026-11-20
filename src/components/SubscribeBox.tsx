import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { subscribeConfig, subscribeLink } from '@/data/subscribe';

const SubscribeBox = () => {
  if (!subscribeConfig.substackUrl) return null;

  // Sign-up happens on Substack's own page, opened in a new tab.
  return (
    <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-accent-gold/30">
      <h3 className="text-xl font-bold text-dark-blue mb-2">Get the next issue by email</h3>
      <p className="text-gray-600 mb-5">
        Free. SentientEdge research letters and Market Week, sent through Substack. You can unsubscribe at any time.
      </p>
      <Button asChild className="bg-accent-gold text-dark-blue hover:bg-accent-gold-hover">
        <a href={subscribeLink()} target="_blank" rel="noopener noreferrer">
          <Mail className="mr-2 h-4 w-4" />
          Subscribe
        </a>
      </Button>
      <p className="mt-4 text-sm text-gray-500">
        To unsubscribe, use the link at the bottom of any issue.
      </p>
    </div>
  );
};

export default SubscribeBox;
