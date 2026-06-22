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
  pricingTiers,
  processSteps,
  rmsIndustrySectors,
  rmsModuleTabs,
  weHelpWithItems,
  whenCards,
} from '@/data/build/build-a-restaurant-management-system-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build a Restaurant Management System | Custom RMS Development | AITC',
  description:
    'Build a custom restaurant management system — POS, kitchen display, online ordering, delivery integration, inventory, and reservations in one platform built around how you operate.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-restaurant-management-system`,
  },
  openGraph: {
    title: 'Build a Restaurant Management System | Custom RMS Development | AITC',
    description:
      'Build a custom restaurant management system — POS, kitchen display, online ordering, delivery integration, inventory, and reservations in one platform built around how you operate.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-restaurant-management-system`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildRMSPage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a custom RMS right for you?'
        heading='When You Need a Custom Restaurant Management System'
        description='Generic POS software was built for the average restaurant. If your menu complexity, service model, or multi-location setup is anything but average, you need something built for you.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='RMS Modules We Build'
        subheading='Start with POS and kitchen display, then add online ordering, delivery, reservations, and loyalty as your operation grows.'
        tabs={rmsModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get RMS Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From operations discovery to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your restaurant system'
        subheading='React, Next.js, Node.js, PostgreSQL, Stripe, Twilio, and AWS — built for real-time order speed, offline resilience when the internet drops, and the integrations your kitchen and delivery channels require.'
      />

      <PricingCards
        badge='Investment'
        heading='From a single-location starter to a full franchise platform — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Restaurant types we serve'
        heading='Built for Every Restaurant Model'
        subheading='Every restaurant concept operates differently. We build to match.'
        sectors={rmsIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom Restaurant Management System'
        heading='Ready to Replace Fragmented Tools With One System That Works?'
        description="Tell us about your restaurant — your service model, locations, order channels, and what your current setup is missing — and we'll scope a custom RMS that runs your whole operation."
        primaryLabel='Get RMS Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='We Also Help With'
        description='A restaurant management system works best as part of a connected hospitality tech stack. Whether you need a booking platform for reservations, a delivery marketplace, or an HRMS for your staff, our Nepal-based teams build the complete system.'
        theme='light'
        items={weHelpWithItems}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your restaurant system and get you a fixed estimate"
        description="Share your service model, number of locations, and the modules you need — we'll come back with a feature breakdown, timeline, and cost range."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Restaurant Management System Development',
          formName: 'bofu-rms',
          heading: 'Get your RMS estimate',
          subheading:
            "Tell us your restaurant setup and we'll respond with a module breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get RMS Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
