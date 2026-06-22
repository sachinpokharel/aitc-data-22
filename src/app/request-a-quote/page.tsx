import type { Metadata } from 'next';
import RequestQuoteForm from '@/components/pages/request-a-quote/RequestQuoteForm';

export const metadata: Metadata = {
  title: 'Request a Quote | AITC',
  description:
    'Get a detailed proposal for your project. Fill out our quick 3-step form and our engineering team will respond within 48 hours.',
};

const Page = () => {
  return (
    <main>
      <RequestQuoteForm />
    </main>
  );
};

export default Page;
