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
  marketplaceIndustrySectors,
  marketplaceTypeTabs,
  pricingTiers,
  processSteps,
  weHelpWithTabs,
  whenCards,
} from '@/data/build/build-a-marketplace-app-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build a Marketplace App | Marketplace Development | AITC',
  description:
    'Build a two-sided marketplace app for products, services, rentals, or on-demand delivery. AITC delivers custom marketplace platforms with seller tools, buyer experience, and payment infrastructure.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-marketplace-app`,
  },
  openGraph: {
    title: 'Build a Marketplace App | Marketplace Development | AITC',
    description:
      'Build a two-sided marketplace app for products, services, rentals, or on-demand delivery. Custom platforms with seller tools, buyer experience, and Stripe Connect payments.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-marketplace-app`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildMarketplacePage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a marketplace right for you?'
        heading='When You Need to Build a Marketplace'
        description='A marketplace earns on every transaction without holding inventory or delivering the service. If you want to connect two sides of a market and take a cut — you need a platform built for that model.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Marketplace types we build'
        heading='Every Marketplace Model, Built to Order'
        subheading='We build the architecture around your business model — not the other way around.'
        tabs={marketplaceTypeTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get Marketplace Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From cold-start strategy to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your marketplace'
        subheading='Next.js, React Native, Node.js, PostgreSQL, Stripe Connect, Elasticsearch, AWS, and more — chosen for scale, reliability, and two-sided platform complexity.'
      />

      <PricingCards
        badge='Investment'
        heading='From a lean two-sided MVP to a full enterprise platform — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Industries we serve'
        heading='Marketplaces for Every Industry'
        subheading='Every market has its own trust dynamics and transaction flows.'
        sectors={marketplaceIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Marketplace App Development'
        heading='Ready to Build Your Two-Sided Platform?'
        description="Tell us about your marketplace idea — the buyer side, the seller side, and how you plan to monetise — and we'll scope a platform that can grow a real network effect."
        primaryLabel='Get Marketplace Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWithService
        heading='We Also Help With'
        description='A marketplace is often the centrepiece of a larger product ecosystem. Whether you need a CRM to manage your sellers, a dedicated engineering team, or mobile apps for both sides, our Nepal-based teams deliver reliable, cost-effective solutions across every stage of your platform roadmap.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your marketplace and get you a fixed estimate"
        description="Share your buyer side, seller side, and commission model — we'll come back with an architecture recommendation, timeline, and cost range."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Marketplace App Development',
          formName: 'bofu-marketplace',
          heading: 'Get your marketplace estimate',
          subheading:
            "Tell us your marketplace model and we'll respond with an architecture plan and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get Marketplace Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
