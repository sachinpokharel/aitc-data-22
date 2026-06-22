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
  lmsIndustrySectors,
  lmsModuleTabs,
  pricingTiers,
  processSteps,
  weHelpWithItems,
  whenCards,
} from '@/data/build/build-an-lms-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build an LMS | Custom Learning Management System Development | AITC',
  description:
    'Build a custom LMS for corporate training, EdTech, or higher education — course builder, assessments, certificates, live classes, and mobile access on a platform you fully own.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-an-lms`,
  },
  openGraph: {
    title: 'Build an LMS | Custom Learning Management System Development | AITC',
    description:
      'Build a custom LMS for corporate training, EdTech, or higher education — course builder, assessments, certificates, live classes, and mobile access on a platform you fully own.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-an-lms`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildLMSPage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a custom LMS right for you?'
        heading='When You Need a Custom LMS'
        description='Generic LMS platforms were built for the average learning model. If your curriculum, assessment style, or learner experience is anything but average, you need something built for you.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='LMS Modules We Build'
        subheading='Start with the modules you need today and add live classes, mobile access, or a course marketplace as your platform grows.'
        tabs={lmsModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get LMS Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From learning design to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your LMS'
        subheading='React, Next.js, Node.js, PostgreSQL, AWS CloudFront, and more — chosen for fast content delivery, SCORM compliance, and the scale your learner base demands.'
      />

      <PricingCards
        badge='Investment'
        heading='From a lean course platform to a full enterprise LMS — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Industries we serve'
        heading='LMS Built for Your Learning Model'
        subheading='Every sector has its own training requirements. We build to match.'
        sectors={lmsIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom LMS Development'
        heading='Ready to Build a Learning Platform Your Learners Will Love?'
        description="Tell us about your curriculum, learner base, and delivery model and we'll scope a custom LMS that drives real learning outcomes."
        primaryLabel='Get LMS Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='We Also Help With'
        description='An LMS is often one piece of a wider digital learning ecosystem. Whether you need an HRMS to automate enrolment, a marketplace to monetise your courses, or a dedicated engineering team to build alongside you, our Nepal-based teams deliver reliable, cost-effective solutions at every stage.'
        theme='light'
        items={weHelpWithItems}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your LMS and get you a fixed estimate"
        description="Share your curriculum structure, target learners, and key modules — we'll come back with a feature breakdown, timeline, and cost range."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Custom LMS Development',
          formName: 'bofu-lms',
          heading: 'Get your LMS estimate',
          subheading:
            "Tell us your learning requirements and we'll respond with a module breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get LMS Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
