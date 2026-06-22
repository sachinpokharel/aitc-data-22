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
import WeHelpWithService from '@/components/pages/static-components/Wehelpwithservice';
import {
    faqs,
    heroFormData,
    heroStats,
    mvpIndustrySectors,
    mvpTypeTabs,
    pricingTiers,
    processSteps,
    weHelpWithTabs,
    whenCards,
} from '@/data/build/build-an-mvp-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build an MVP | MVP Development Services | AITC International',
  description:
    'Turn your startup idea into a market-ready MVP. AITc International delivers focused MVPs in weeks — validated with real users, built to scale.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build-an-mvp`,
  },
  openGraph: {
    title: 'Build an MVP | MVP Development Services | AITC International',
    description:
      'Turn your startup idea into a market-ready MVP. AITc International delivers focused MVPs in weeks — validated with real users, built to scale.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build-an-mvp`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildMvpPage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is an MVP right for you?'
        heading='When You Need to Build an MVP'
        description='A full product build without validation is one of the most common ways startups burn through runway. An MVP lets you test what matters — before committing to the rest.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='What we can build'
        heading='MVP Types We Deliver'
        subheading='From SaaS platforms to AI-powered tools — we build MVPs tailored to your business model, users, and validation goals.'
        tabs={mvpTypeTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get MVP Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From discovery to launch in 6 steps'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your MVP'
        subheading='React, Next.js, Node.js, Django, Flutter, PostgreSQL, AWS, and more — chosen for speed, reliability, and long-term scalability.'
      />

      <PricingCards
        badge='Engagement models'
        heading='From quick validation to a scale-ready product — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Industries we serve'
        heading='MVPs for Every Industry'
        subheading='Whatever the sector, we know how to scope a lean first version.'
        sectors={mvpIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='MVP Development'
        heading='Ready to Turn Your Idea into a Working Product?'
        description="Tell us about your idea and we'll scope an MVP that validates your concept, fits your budget, and gets you to market faster."
        primaryLabel='Get MVP Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWithService
        heading='We Also Help With'
        description='MVP is often the first step in a longer product journey. Whether you need a full SaaS build, a dedicated engineering team, or enterprise platform development, our Nepal-based teams deliver reliable, cost-effective solutions from initial scoping through to long-term support.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your MVP and get you a fixed estimate"
        description="Share your idea and we'll come back with a feature breakdown, timeline, and cost range — no obligation."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'MVP Development',
          formName: 'bofu-mvp',
          heading: 'Get your MVP estimate',
          subheading:
            "Tell us your idea and we'll respond with a scope breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get MVP Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
