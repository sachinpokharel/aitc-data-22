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
  hrmsIndustrySectors,
  hrmsModuleTabs,
  pricingTiers,
  processSteps,
  weHelpWithItems,
  whenCards,
} from '@/data/build/build-an-hrms-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build an HRMS | Custom HR Software Development | AITC',
  description:
    'Build a custom HRMS that fits your workforce — payroll, attendance, recruitment, performance, and employee self-service in one unified platform built around your HR policies.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-an-hrms`,
  },
  openGraph: {
    title: 'Build an HRMS | Custom HR Software Development | AITC',
    description:
      'Build a custom HRMS that fits your workforce — payroll, attendance, recruitment, performance, and employee self-service in one unified platform built around your HR policies.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-an-hrms`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildHRMSPage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a custom HRMS right for you?'
        heading='When You Need a Custom HRMS'
        description='Off-the-shelf HR software is built for the average company. If your leave policies, payroll rules, or workforce structure are anything but average, you need something built for you.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='HRMS Modules We Build'
        subheading='Start with the modules you need today and add more as your team grows — no rework required.'
        tabs={hrmsModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get HRMS Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From HR discovery to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your HRMS'
        subheading='React, Next.js, Node.js, PostgreSQL, AWS, and more — chosen for reliability, security, and long-term maintainability of sensitive HR data.'
      />

      <PricingCards
        badge='Investment'
        heading='From a lean HR starter to a full enterprise platform — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Industries we serve'
        heading='HRMS Built for Your Industry'
        subheading='Every sector manages people differently. We build to match.'
        sectors={hrmsIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom HRMS Development'
        heading='Ready to Build an HRMS Your Team Will Actually Use?'
        description="Tell us about your HR workflows and workforce structure and we'll scope a custom HRMS that replaces spreadsheets — not adds to them."
        primaryLabel='Get HRMS Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='We Also Help With'
        description='An HRMS is often part of a wider digital transformation. Whether you need an ERP to connect HR with finance, a CRM for your sales team, or a dedicated engineering team, our Nepal-based teams deliver reliable, cost-effective solutions across every stage of your technology roadmap.'
        theme='light'
        items={weHelpWithItems}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your HRMS and get you a fixed estimate"
        description="Share your HR requirements — payroll rules, headcount, modules needed — and we'll come back with a module breakdown, timeline, and cost range."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Custom HRMS Development',
          formName: 'bofu-hrms',
          heading: 'Get your HRMS estimate',
          subheading:
            "Tell us your HR requirements and we'll respond with a module breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get HRMS Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
