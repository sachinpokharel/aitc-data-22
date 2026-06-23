import {
  complianceItems,
  realEstateProjectTabs,
  realEstateSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/real-estate-software-development-data';
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
  title: 'Real Estate Software Development | PropTech & Property Management | AITC',
  description:
    'AITC builds real estate software — property listing portals, CRM, tenancy management, developer platforms, and PropTech products. Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/real-estate-software-development`,
  },
  openGraph: {
    title: 'Real Estate Software Development | PropTech & Property Management | AITC',
    description:
      'AITC builds real estate software — property listing portals, CRM, tenancy management, developer platforms, and PropTech products.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/real-estate-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function RealEstateIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='Real estate companies at every point in the value chain'
        description="Real estate software is not one category — agencies, property managers, developers, and PropTech startups all need very different things. We've built for all of them."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why real estate companies come to us'
        heading='When generic CRMs and off-the-shelf property software stop working'
        description='Property software built for the average agency rarely fits a growing or specialist business. These are the problems that bring real estate companies to us.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for Real Estate Companies'
        subheading="Every system type below we've designed, built, and delivered for real property businesses — from residential agencies to commercial developers."
        tabs={realEstateProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & data'
            heading='Built to meet property industry standards'
            description='Data privacy, e-signature, AML, and tenancy law compliance are designed into every real estate platform — not retrofitted after a regulatory question from your solicitor.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with real estate clients'
        heading='From property business discovery to a platform your team actually uses'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for real estate software'
        subheading='Next.js, React, Node.js, PostgreSQL with PostGIS, Stripe, DocuSign, AWS, and Twilio — the stack that powers fast property search, accurate lease calculations, and portal syndication at scale.'
      />

      <PostReviewsCTA
        badge='Real Estate & PropTech'
        heading='Building a Property Software Project?'
        description="Tell us about your agency, portfolio, or PropTech idea — and what your current software cannot do. We'll come back with a practical recommendation, not a sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for Real Estate Companies'
        description='Whether you need a full custom real estate management system, a PropTech MVP, a dedicated engineering team, or a mobile app for agents and tenants — our Nepal-based teams work across the full property technology stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='Real estate verticals we serve'
        heading='Every Property Sector, One Engineering Partner'
        subheading='From residential sales platforms to commercial property portals — we have built production software across every major real estate category.'
        sectors={realEstateSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your real estate software challenge'
        description="Whether you're building a property portal, a tenancy management system, or a PropTech product — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'Real Estate & PropTech',
          formName: 'industry-real-estate',
          heading: 'Discuss your project',
          subheading: 'Share your property business type, current challenges, and what you are trying to build.',
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
