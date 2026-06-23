import { type Metadata } from 'next';
import MvpPlanningPageClient from '@/components/pages/static-components/checklist/MvpPlanningPageClient';

export const metadata: Metadata = {
  title: 'MVP Planning Checklist | Free PDF Download | AITC',
  description:
    'A free, interactive MVP Planning Checklist covering all 7 phases — idea validation, user research, feature scoping, technical architecture, design, development, and go-to-market. Download the PDF instantly.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL ?? 'https://aitc.ai/'}checklist/mvp-planning-checklist`,
  },
  openGraph: {
    title: 'MVP Planning Checklist | Free PDF Download | AITC',
    description:
      'A free, interactive MVP Planning Checklist covering all 7 phases — idea validation, user research, feature scoping, technical architecture, design, development, and go-to-market. Download the PDF instantly.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL ?? 'https://aitc.ai/'}checklist/mvp-planning-checklist`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function MvpPlanningChecklistPage() {
  return <MvpPlanningPageClient />;
}
