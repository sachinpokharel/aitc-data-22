import CardGrid from '@/components/pages/static-components/CardGrid-points';
import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import BuildHeroWithForm from '@/components/pages/static-components/BuildHeroWithForm';
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
import WeHelpWithService from '@/components/pages/static-components/Wehelpwithservice';
import {
  erpIndustrySectors,
  erpModuleTabs,
  faqs,
  heroFormData,
  heroStats,
  pricingTiers,
  processSteps,
  weHelpWithTabs,
  whenCards,
} from '@/data/build/erp-system-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build an ERP System | Custom ERP Development | AITC',
  description:
    'Build a custom ERP system that unifies your operations — finance, HR, inventory, procurement, and reporting in one platform.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build-an-erp-system`,
  },
  openGraph: {
    title: 'Build an ERP System | Custom ERP Development | AITC',
    description:
      'Build a custom ERP system that unifies your operations — finance, HR, inventory, procurement, and reporting in one platform.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build-an-erp-system`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildERPPage() {


  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />


      <CardGrid
        badge='Is custom ERP right for you?'
        heading='When You Need a Custom ERP'
        description='Off-the-shelf platforms are built for the average business. If your operations are anything but average, you need something built for you.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='ERP Modules We Build'
        subheading='Start with the modules you need now and add more as your business grows — no rework required.'
        tabs={erpModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get ERP Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From scoping to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your ERP'
        subheading='React, Node.js, Python, PostgreSQL, AWS, and more — chosen for reliability, security, and long-term maintainability.'
      />

      <PricingCards
        badge='Investment'
        heading='One department or the whole enterprise — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Industries we serve'
        heading='ERP Built for Your Industry'
        subheading='Every sector has different workflows. We build to match.'
        sectors={erpIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom ERP Development'
        heading='Ready to Replace Spreadsheets With a Real ERP?'
        description="Tell us about your operations and we'll scope a modular ERP that fits your workflows — not the other way around."
        primaryLabel='Get ERP Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWithService
        heading='We Also Help With'
        description='ERP is one part of a wider digital transformation. Whether you need custom software, dedicated engineers, or industry-specific modules, our Nepal-based teams deliver reliable, cost-effective solutions across every stage of your technology roadmap — from initial scoping to long-term support.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your ERP and get you a fixed estimate"
        description="Share your requirements and we'll come back with a module breakdown, timeline, and cost range — no obligation."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Custom ERP Development',
          formName: 'bofu-erp',
          heading: 'Get your ERP estimate',
          subheading:
            "Tell us your requirements and we'll respond with a module breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get ERP Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
