import {
  complianceItems,
  startupProjectTabs,
  startupSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/startup-software-development-data';
import { type Metadata } from 'next';
import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import CardGrid from '@/components/pages/static-components/CardGrid';
import ComplianceSlider from '@/components/pages/static-components/compliance';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import IndustryHero from '@/components/pages/static-components/IndustryHero';
import IndustrySectors from '@/components/pages/static-components/IndustrySectors';
import Solutions from '@/components/pages/static-components/list-solution';
import PainPointsTable from '@/components/pages/static-components/PainPointsTable';
import ProcessSteps from '@/components/pages/static-components/ProcessSteps';
import StatsBar from '@/components/pages/static-components/StatsBar';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import WeHelpWith from '@/components/pages/static-components/Wehelpwith';

export const metadata: Metadata = {
  title: 'Startup Software Development | MVP & SaaS Product Engineering | AITC',
  description:
    'AITC builds software for startups — MVP development in 10–14 weeks, SaaS products, mobile apps, marketplaces, and AI products. Nepal-based senior engineers at 70% the cost of US/UK hiring.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}industries/startup-software-development`,
  },
  openGraph: {
    title: 'Startup Software Development | MVP & SaaS Product Engineering | AITC',
    description:
      'AITC builds software for startups — MVP development in 10–14 weeks, SaaS products, mobile apps, marketplaces, and AI products. Nepal-based senior engineers at 70% the cost of US/UK hiring.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}industries/startup-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function StartupIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='Startups and scale-ups at every funding stage'
        description="We have worked with pre-seed founders building their first MVP, Series A companies scaling their engineering team, and corporate innovation labs that need to move at startup speed."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why startups choose us'
        heading='When hiring in-house takes too long and freelancers are too unreliable'
        description='Most startups face the same engineering dilemma — in-house hiring is expensive and slow, freelancers are unpredictable, and agencies often overbuild. We are the answer to all three.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Products We Build for Startups'
        subheading="Every product type below we've built for real startups — from 10-week MVPs to multi-million-user SaaS platforms. We start with scope discipline and build with the architecture that survives success."
        tabs={startupProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='How we protect you'
            heading='What we build in to every startup engagement'
            description='IP ownership, security, scalability, and fixed pricing are not add-ons — they are built into how we work with every startup client.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with startups'
        heading='From scoping call to shippable MVP in 4 phases'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for startup products'
        subheading='Next.js, React Native, Node.js, PostgreSQL, Stripe, AWS, and Vercel — the startup stack that is fast to build, easy to hire for, and scales when you get traction.'
      />

      <PostReviewsCTA
        badge='Startups & Scale-ups'
        heading='Ready to Build Your Product?'
        description="Tell us about your idea, your target user, and your timeline. We'll come back with a scope recommendation, a realistic timeline, and a fixed-price estimate — no fluff."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for Startups'
        description='Whether you need an MVP shipped in 10 weeks, a dedicated engineering team to scale with you, or a technical co-founder equivalent to challenge your product decisions — our Nepal-based teams work across the full startup tech stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='Startup types we work with'
        heading='Every Founder Type, One Engineering Partner'
        subheading='From pre-seed MVPs to Series A scale-ups — we work with founders at every stage and with every funding model.'
        sectors={startupSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your startup product'
        description="Share your product idea, your target user, your current stage, and your timeline — we'll come back with a scope recommendation and fixed-price estimate within 24 hours."
        bullets={['Response within 24 hours', 'Free scoping call included', 'NDA signed before any discussion']}
        form={{
          preselectedIndustry: 'Startups & Scale-ups',
          formName: 'industry-startup',
          heading: 'Discuss your product',
          subheading: 'Share your idea, stage, and what you need to build — we will respond with a practical recommendation.',
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
