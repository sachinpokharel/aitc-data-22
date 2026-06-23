import {
  complianceItems,
  retailProjectTabs,
  retailSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/retail-software-development-data';
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
  title: 'Retail Software Development | POS, Inventory & Loyalty Systems | AITC',
  description:
    'AITC builds retail software — custom POS systems, inventory management, loyalty programmes, omnichannel order management, and retail analytics. Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/retail-software-development`,
  },
  openGraph: {
    title: 'Retail Software Development | POS, Inventory & Loyalty Systems | AITC',
    description:
      'AITC builds retail software — custom POS systems, inventory management, loyalty programmes, omnichannel order management, and retail analytics.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/retail-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function RetailIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='Retail businesses at every scale and format'
        description="Retail software covers an enormous range — independent stores, multi-site chains, omnichannel brands, and franchise operators all need fundamentally different systems. We've built for all of them."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why retailers come to us'
        heading='When stock, loyalty, and channel data live in separate systems'
        description='Off-the-shelf POS and inventory tools work up to a point. When your omnichannel workflows, multi-location reporting, or loyalty programme outgrow what generic platforms allow — that is the point to build custom.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for Retail Businesses'
        subheading="Every system type below we've designed, built, and delivered for real retailers — from single-store POS to full omnichannel management platforms."
        tabs={retailProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & security'
            heading='Built for retail regulatory requirements from the first sprint'
            description='PCI-DSS payment security, GDPR customer data handling, and consumer returns law compliance are designed into the architecture from day one — not bolted on before your first audit.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with retail clients'
        heading='From operations discovery to a platform your store staff use every day'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for retail software'
        subheading='React Native, Node.js, PostgreSQL, Stripe, Square, Redis, AWS, and Socket.io — the stack that powers real-time inventory sync, cloud POS with offline mode, loyalty engines, and omnichannel order management.'
      />

      <PostReviewsCTA
        badge='Retail & Omnichannel'
        heading='Building a Retail Software Project?'
        description="Tell us about your store format, your current systems, and the operational challenge you're trying to solve. We'll come back with a practical recommendation — no sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for Retail Businesses'
        description='Whether you need a custom POS, a real-time inventory system, a loyalty platform, or a dedicated team of retail software engineers — our Nepal-based teams work across the full retail technology stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='Retail verticals we serve'
        heading='Every Retail Format, One Engineering Partner'
        subheading='From fashion and electronics to food retail, franchise chains, and home & furniture — we have built production software across every major retail category.'
        sectors={retailSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your retail software challenge'
        description="Whether you're building a custom POS, a loyalty programme, or an omnichannel order management system — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'Retail & Omnichannel',
          formName: 'industry-retail',
          heading: 'Discuss your project',
          subheading: 'Share your store format, current systems, and what you are trying to build or automate.',
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
