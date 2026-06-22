import { fetchData } from '@/utils/getData';
import dynamic from 'next/dynamic';

export type Legal = {
  content: string;
};

const Editor = dynamic(() => import('@/components/common/editor/Editor'), {
  ssr: false,
});

export const metadata = {
  title: 'Privacy Policy | AITC International',
  description:
    'Learn how AITC International protects your privacy and secures your personal information. Explore our transparent data collection, usage, and protection practices.',

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy | AITC International',
    description:
      'Learn how AITC International protects your privacy and secures your personal information. Explore our transparent data collection, usage, and protection practices.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}privacy-policy`,
    type: 'website',
    siteName: 'AITC International',
    images: [
      {
        url: 'https://d12d62u8f14w9u.cloudfront.net/upload/file_aitcsocialog_1737101535170-864451196_2025-01-17.jpg',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy | AITC International',
      },
    ],
  },
};

const PrivacyPolicyPage = async () => {
  const data = await fetchData<Legal>('/legal/privacy-policy');

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <section className='main-common-padding'>{data?.content && <Editor content={JSON.parse(data?.content)} />}</section>
  );
};

export default PrivacyPolicyPage;
