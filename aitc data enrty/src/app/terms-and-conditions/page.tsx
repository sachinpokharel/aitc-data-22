import { fetchData } from '@/utils/getData';
import dynamic from 'next/dynamic';

import { type Legal } from '../privacy-policy/page';

const Editor = dynamic(() => import('@/components/common/editor/Editor'), {
  ssr: false,
});

export const metadata = {
  title: 'Terms and Conditions | AITC International',
  description:
    'Read the Terms and Conditions of AITC International to understand our policies, guidelines, and user responsibilities. Stay informed about your rights and obligations.',

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}terms-and-conditions`,
  },
  openGraph: {
    title: 'Terms and Conditions | AITC International',
    description:
      'Read the Terms and Conditions of AITC International to understand our policies, guidelines, and user responsibilities. Stay informed about your rights and obligations.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}terms-and-conditions`,
    type: 'website',
    siteName: 'AITC International',
    images: [
      {
        url: 'https://d12d62u8f14w9u.cloudfront.net/upload/file_aitcsocialog_1737101535170-864451196_2025-01-17.jpg',
        width: 1200,
        height: 630,
        alt: 'Terms and Conditions | AITC International',
      },
    ],
  },
};

const TermsAndConditionsPage = async () => {
  const data = await fetchData<Legal>('/legal/terms-and-condition');
  return (
    <section className='common-padding common-section'>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Editor content={JSON.parse(data?.content)} />
    </section>
  );
};

export default TermsAndConditionsPage;
