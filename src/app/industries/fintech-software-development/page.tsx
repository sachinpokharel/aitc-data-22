import {
  complianceItems,
  fintechProjectTabs,
  fintechSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/fintech-software-development-data';
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
  title: 'Fintech Software Development | Payment, Lending & Banking Platforms | AITC',
  description:
    'AITC builds fintech software — payment platforms, digital banking, lending systems, investment tools, and KYC/AML compliance. Nepal-based engineers, PCI-DSS ready, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/fintech-software-development`,
  },
  openGraph: {
    title: 'Fintech Software Development | Payment, Lending & Banking Platforms | AITC',
    description:
      'AITC builds fintech software — payment platforms, digital banking, lending systems, investment tools, and KYC/AML compliance.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/fintech-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function FintechIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='Fintech companies at every stage of growth'
        description="Fintech is not one category — it's dozens of distinct product types with very different technical and regulatory needs. We've built software across all of them."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why fintech companies come to us'
        heading='When compliance, performance, and speed are all non-negotiable'
        description='Financial software has higher stakes than most. Compliance failures are public, downtime costs money, and user trust is nearly impossible to rebuild. We engineer around all three.'
        items={painPoints}
        bg='light'
        layout='table'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for Fintech Companies'
        subheading="Every system type below we've designed, built, and delivered for real fintech businesses — with compliance, performance, and extensibility built in."
        tabs={fintechProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & security'
            heading='Built to meet the requirements of financial regulation'
            description='Security and compliance are architecture decisions made at the start of every fintech project — not retrofitted after your first regulatory review.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with fintech clients'
        heading='From compliance discovery to a platform that passes regulatory review'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for fintech'
        subheading='Node.js, React, PostgreSQL, Stripe, Plaid, TrueLayer, Jumio, AWS, and Kubernetes — the stack that powers high-throughput, compliant financial software at scale.'
      />

      <PostReviewsCTA
        badge='Fintech & Financial Services'
        heading='Building a Financial Product?'
        description="Tell us about your fintech product, your regulatory requirements, and the integrations you need. We'll come back with a practical recommendation — no sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for Fintech Companies'
        description='Whether you need a complete custom build, a dedicated fintech engineering team, a compliant mobile app, or a rapid MVP to support your fundraise — our Nepal-based teams work across the full financial technology stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='Fintech verticals we serve'
        heading='Every Fintech Vertical, One Engineering Partner'
        subheading='From payment rails to regtech platforms — we have built production software across every major fintech category.'
        sectors={fintechSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your fintech challenge'
        description="Whether you're building a payment platform, a lending product, or a compliance-heavy fintech MVP — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'Fintech & Financial Services',
          formName: 'industry-fintech',
          heading: 'Discuss your project',
          subheading: 'Share your product type, regulatory requirements, and what you are trying to build.',
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
