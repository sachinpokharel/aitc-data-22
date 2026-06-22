import { type Metadata } from 'next';
import ChecklistPageClient from '@/components/pages/static-components/checklist/ChecklistPageClient';

export const metadata: Metadata = {
  title: 'Software Development Project Checklist | Free PDF Download | AITC',
  description:
    'A free, interactive Software Development Project Checklist covering all 7 phases of the SDLC — planning, architecture, development, testing, deployment, and support. Download the PDF instantly.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL ?? 'https://aitc.ai/'}checklist/software-development-checklist`,
  },
  openGraph: {
    title: 'Software Development Project Checklist | Free PDF Download | AITC',
    description:
      'A free, interactive Software Development Project Checklist covering all 7 phases of the SDLC — planning, architecture, development, testing, deployment, and support. Download the PDF instantly.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL ?? 'https://aitc.ai/'}checklist/software-development-checklist`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function SoftwareDevelopmentChecklistPage() {
  return <ChecklistPageClient />;
}
