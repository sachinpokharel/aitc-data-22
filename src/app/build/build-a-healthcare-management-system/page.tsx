import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import BuildHeroWithForm from '@/components/pages/static-components/BuildHeroWithForm';
import CardGrid from '@/components/pages/static-components/CardGrid-points';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import IndustrySectors from '@/components/pages/static-components/IndustrySectors';
import Solutions from '@/components/pages/static-components/list-solution';
import PricingCards from '@/components/pages/static-components/PricingCards';
import ProcessSteps from '@/components/pages/static-components/ProcessSteps';
import StatsBar from '@/components/pages/static-components/StatsBar';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import WeHelpWith from '@/components/pages/static-components/Wehelpwith';
import {
  faqs,
  heroFormData,
  heroStats,
  hmsIndustrySectors,
  hmsModuleTabs,
  pricingTiers,
  processSteps,
  weHelpWithItems,
  whenCards,
} from '@/data/build/build-a-healthcare-management-system-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build a Healthcare Management System | Custom HMS Development | AITC',
  description:
    'Build a custom healthcare management system — EHR, appointment scheduling, telehealth, insurance billing, e-prescribing, and patient portals built around your clinical workflows.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-healthcare-management-system`,
  },
  openGraph: {
    title: 'Build a Healthcare Management System | Custom HMS Development | AITC',
    description:
      'Build a custom healthcare management system — EHR, appointment scheduling, telehealth, insurance billing, e-prescribing, and patient portals built around your clinical workflows.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-healthcare-management-system`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildHMSPage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a custom HMS right for you?'
        heading='When You Need a Custom Healthcare Management System'
        description='Off-the-shelf EMR software charges per seat, constrains your clinical workflows, and rarely fits how your practice or health system actually operates. Here is when a custom system makes more sense.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='HMS Modules We Build'
        subheading='Start with patient records and scheduling, then add telehealth, insurance billing, e-prescribing, and analytics as your clinical needs grow.'
        tabs={hmsModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get HMS Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From clinical discovery to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your healthcare platform'
        subheading='React, Next.js, Node.js, PostgreSQL, HL7/FHIR, Stripe, Twilio, and AWS — built for clinical data accuracy, audit trail completeness, and the security standards your patients and regulators require.'
      />

      <PricingCards
        badge='Investment'
        heading='From a starter clinic platform to a full enterprise health system — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Healthcare sectors we serve'
        heading='Built for Every Healthcare Setting'
        subheading='Every clinical environment has different workflows, compliance needs, and patient expectations. We build to match.'
        sectors={hmsIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom Healthcare Management System'
        heading='Ready to Replace Per-Seat EMR Fees With a Platform You Own?'
        description="Tell us about your clinical setting — the specialties you cover, how many practitioners, your current system, and what it cannot do — and we will scope a custom HMS that fits your workflows and your compliance requirements."
        primaryLabel='Get HMS Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='We Also Help With'
        description='A healthcare management system works best as part of a connected digital health stack. Whether you need an AI triage chatbot, a patient booking platform, a staff HRMS, or a mobile patient app, our Nepal-based teams build the complete system.'
        theme='light'
        items={weHelpWithItems}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your healthcare platform and get you a fixed estimate"
        description='Share your clinical setting, the modules you need, your compliance requirements, and your current system — we will come back with a feature breakdown, timeline, and cost range.'
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA and BAA signed before any discussion',
        ]}
        form={{
          preselectedService: 'Healthcare Management System Development',
          formName: 'bofu-hms',
          heading: 'Get your HMS estimate',
          subheading:
            "Tell us your clinical setup and compliance requirements and we'll respond with a module breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get HMS Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
