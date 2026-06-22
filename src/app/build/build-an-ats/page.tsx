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
  atsIndustrySectors,
  atsModuleTabs,
  faqs,
  heroFormData,
  heroStats,
  pricingTiers,
  processSteps,
  weHelpWithItems,
  whenCards,
} from '@/data/build/build-an-ats-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build an ATS | Custom Applicant Tracking System Development | AITC',
  description:
    'Build a custom ATS that matches your exact hiring process — candidate pipeline, AI screening, interview scheduling, scorecards, and offer management with no per-seat fees.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-an-ats`,
  },
  openGraph: {
    title: 'Build an ATS | Custom Applicant Tracking System Development | AITC',
    description:
      'Build a custom ATS that matches your exact hiring process — candidate pipeline, AI screening, interview scheduling, scorecards, and offer management with no per-seat fees.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-an-ats`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildATSPage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a custom ATS right for you?'
        heading='When You Need a Custom ATS'
        description='Off-the-shelf ATS tools are built for the average hiring team. If your pipeline stages, scoring model, or compliance requirements are anything but average, you need something built for you.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='ATS Modules We Build'
        subheading='Start with core pipeline and scheduling, then add AI screening, assessments, and HRMS integration as your team scales.'
        tabs={atsModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get ATS Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From recruitment discovery to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your ATS'
        subheading='React, Next.js, Node.js, PostgreSQL, OpenAI, AWS, and more — chosen for fast candidate search, secure data handling, and the integrations your hiring stack requires.'
      />

      <PricingCards
        badge='Investment'
        heading='From a lean startup ATS to an agency or enterprise platform — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Industries we serve'
        heading='ATS Built for Your Hiring Model'
        subheading='Every industry hires differently. We build to match.'
        sectors={atsIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom ATS Development'
        heading='Ready to Build an ATS That Hires Faster?'
        description="Tell us about your hiring pipeline, team structure, and what your current ATS is missing — and we'll scope a custom system that cuts time-to-hire without cutting corners."
        primaryLabel='Get ATS Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='We Also Help With'
        description='An ATS works best as part of a connected people-ops stack. Whether you need an HRMS to handle the post-hire journey, a CRM to manage talent pools, or an LMS to auto-enrol new hires in onboarding training, our Nepal-based teams build the full system.'
        theme='light'
        items={weHelpWithItems}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your ATS and get you a fixed estimate"
        description="Share your pipeline stages, team size, and integrations needed — we'll come back with a module breakdown, timeline, and cost range."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Custom ATS Development',
          formName: 'bofu-ats',
          heading: 'Get your ATS estimate',
          subheading:
            "Tell us your recruitment requirements and we'll respond with a module breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get ATS Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
