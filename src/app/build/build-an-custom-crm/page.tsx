import CardGrid from '@/components/pages/static-components/CardGrid-points';
import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import BuildHero from '@/components/pages/static-components/BuildHero';
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

import {
  crmIndustrySectors,
  crmModuleTabs,
  faqs,
  heroData,
  heroStats,
  pricingTiers,
  processSteps,
  weHelpWithTabs,
  whenCards,
} from '@/data/build/build-an-custom-crm-data';
import { type Metadata } from 'next';
import WeHelpWithService from '@/components/pages/static-components/Wehelpwithservice';

export const metadata: Metadata = {
  title: 'Build a Custom CRM | Custom CRM Development | AITC',
  description:
    'Build a custom CRM that matches your exact sales process — contacts, pipelines, automation, and reporting built around how your team actually works.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build-an-custom-crm`,
  },
  openGraph: {
    title: 'Build a Custom CRM | Custom CRM Development | AITC',
    description:
      'Build a custom CRM that matches your exact sales process — contacts, pipelines, automation, and reporting built around how your team actually works.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build-an-custom-crm`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildCustomCRMPage() {
  return (
    <>
      <BuildHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a custom CRM right for you?'
        heading='When You Need a Custom CRM'
        description='Off-the-shelf CRMs are built for average sales teams. If your process, integrations, or data requirements are anything but average, you need something built for you.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='CRM Modules We Build'
        subheading='Start with the modules you need now and add more as your business grows — no rework required.'
        tabs={crmModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get CRM Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From discovery to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your CRM'
        subheading='React, Next.js, Node.js, PostgreSQL, AWS, and more — chosen for reliability, security, and long-term maintainability.'
      />

      <PricingCards
        badge='Investment'
        heading='From a small team CRM to a full enterprise platform — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Industries we serve'
        heading='CRM Built for Your Industry'
        subheading='Every industry sells differently.'
        sectors={crmIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom CRM Development'
        heading='Ready to Replace Spreadsheets With a Real CRM?'
        description="Tell us about your sales process and we'll scope a custom CRM that fits your workflows — not the other way around."
        primaryLabel='Get CRM Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWithService
        heading='We Also Help With'
        description='A custom CRM is often part of a wider digital transformation. Whether you need an ERP, a dedicated engineering team, or industry-specific modules, our Nepal-based teams deliver reliable, cost-effective solutions across every stage of your technology roadmap — from initial scoping to long-term support.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your CRM and get you a fixed estimate"
        description="Share your requirements and we'll come back with a module breakdown, timeline, and cost range — no obligation."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Custom CRM Development',
          formName: 'bofu-crm',
          heading: 'Get your CRM estimate',
          subheading:
            "Tell us your requirements and we'll respond with a module breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get CRM Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
