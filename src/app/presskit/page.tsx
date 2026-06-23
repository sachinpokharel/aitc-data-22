import type { Metadata } from 'next';
import PressKitContent from './PressKitContent';

export const metadata: Metadata = {
  title: 'Media & Press Kit | AITC International',
  description:
    'Official media and press kit for AITC International. Download logos, brand assets, color palettes, and company information for media and press use.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}presskit`,
  },
  openGraph: {
    title: 'Media & Press Kit | AITC International',
    description:
      'Official brand assets, logos, color palette, and company information for media and press use.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}presskit`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function Page() {
  return <PressKitContent />;
}
