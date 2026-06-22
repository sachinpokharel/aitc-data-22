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
  remsIndustrySectors,
  remsModuleTabs,
  weHelpWithItems,
  whenCards,
} from '@/data/build/build-a-real-estate-management-system-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build a Real Estate Management System | Custom REMS Development | AITC',
  description:
    'Build a custom real estate management system — property listings, CRM, tenancy management, e-signature, maintenance, commissions, and landlord portals in one platform.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-real-estate-management-system`,
  },
  openGraph: {
    title: 'Build a Real Estate Management System | Custom REMS Development | AITC',
    description:
      'Build a custom real estate management system — property listings, CRM, tenancy management, e-signature, maintenance, commissions, and landlord portals in one platform.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-real-estate-management-system`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildREMSPage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a custom REMS right for you?'
        heading='When You Need a Custom Real Estate Management System'
        description='Generic CRMs were not built for property. If your agency, portfolio, or platform has workflows that off-the-shelf software cannot model, you need something built around how you actually operate.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='REMS Modules We Build'
        subheading='Start with listings and CRM, then add tenancy, e-signature, maintenance, and portal syndication as your portfolio grows.'
        tabs={remsModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get REMS Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From property business discovery to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your real estate platform'
        subheading='React, Next.js, Node.js, PostgreSQL, Stripe, DocuSign, AWS, and Twilio — built for property portal sync speeds, lease calculation accuracy, and the document security your clients and regulators require.'
      />

      <PricingCards
        badge='Investment'
        heading='From a starter agency platform to a full enterprise portfolio system — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Real estate sectors we serve'
        heading='Built for Every Real Estate Model'
        subheading='Every property business operates differently. We build to match.'
        sectors={remsIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom Real Estate Management System'
        heading='Ready to Replace Spreadsheets and Generic CRMs With One Property Platform?'
        description="Tell us about your agency or portfolio — the property types you manage, your commission structure, and what your current system can't do — and we'll scope a custom REMS that fits."
        primaryLabel='Get REMS Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='We Also Help With'
        description='A real estate management system works best as part of a connected property tech stack. Whether you need a listing marketplace, a booking platform for viewings, an AI chatbot to qualify buyer enquiries, or a full PropTech product, our Nepal-based teams build the complete system.'
        theme='light'
        items={weHelpWithItems}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your real estate platform and get you a fixed estimate"
        description='Share your property types, team structure, commission rules, and the modules you need — we will come back with a feature breakdown, timeline, and cost range.'
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Real Estate Management System Development',
          formName: 'bofu-rems',
          heading: 'Get your REMS estimate',
          subheading:
            "Tell us your property business setup and we'll respond with a module breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get REMS Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
