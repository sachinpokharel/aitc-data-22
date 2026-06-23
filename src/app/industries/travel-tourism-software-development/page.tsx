import {
  complianceItems,
  travelTourismProjectTabs,
  travelTourismSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/travel-tourism-software-development-data';
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
  title: 'Travel & Tourism Software Development | Booking Engines, OTA & Tour Platforms | AITC',
  description:
    'AITC builds travel and tourism software — custom booking engines, OTA platforms, tour management systems, travel CRMs, dynamic pricing tools, and hotel direct booking engines. PCI-DSS compliant, Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/travel-tourism-software-development`,
  },
  openGraph: {
    title: 'Travel & Tourism Software Development | Booking Engines, OTA & Tour Platforms | AITC',
    description:
      'AITC builds travel and tourism software — custom booking engines, OTA platforms, tour management systems, travel CRMs, and dynamic pricing tools. PCI-DSS compliant builds.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/travel-tourism-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function TravelTourismIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='Travel & tourism businesses at every stage of the journey'
        description="Travel software spans an enormous range — OTAs, tour operators, independent hotels, corporate travel managers, and experience marketplaces all need fundamentally different systems. We've built for all of them."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why travel businesses come to us'
        heading='When booking drop-off and manual operations are costing you revenue'
        description='Off-the-shelf booking tools work up to a point. When your conversion rate, operational complexity, or supplier integration requirements outgrow what generic platforms allow — that is the point to build custom.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for Travel & Tourism Businesses'
        subheading="Every system type below we've designed, built, and delivered for real travel clients — from tour operator portals and hotel direct booking engines to full OTA platforms and dynamic pricing systems."
        tabs={travelTourismProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & regulatory'
            heading='Built for travel industry requirements from the first sprint'
            description='PCI-DSS, GDPR, IATA NDC standards, and package travel regulations are designed into the architecture from day one — not added as an afterthought before your first booking or regulatory audit.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with travel clients'
        heading='From booking flow discovery to a platform your customers actually convert on'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for travel & tourism software'
        subheading='React, Next.js, Node.js, PostgreSQL, Redis, AWS, Amadeus Travel APIs, Sabre Dev Studio, Stripe, Adyen, Algolia, and Elasticsearch — the stack that powers high-performance booking engines, tour management systems, and travel marketplaces.'
      />

      <PostReviewsCTA
        badge='Travel & Tourism'
        heading='Building a Travel Software Platform?'
        description="Tell us about your business, your current systems, and the booking or operational challenge you're trying to solve. We'll come back with a practical recommendation — no sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for Travel & Tourism Businesses'
        description='Whether you need a custom booking engine, a tour management platform, a hotel direct booking system, or a dedicated team of travel software engineers — our Nepal-based teams work across the full travel technology stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='Travel verticals we serve'
        heading='Every Travel Segment, One Engineering Partner'
        subheading='From OTAs and tour operators to hotel groups, corporate travel managers, and experience marketplaces — we have built production software across every major travel and tourism category.'
        sectors={travelTourismSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your travel software challenge'
        description="Whether you're building a custom booking engine, launching a tour management platform, or scaling an existing travel marketplace — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'Travel & Tourism',
          formName: 'industry-travel-tourism',
          heading: 'Discuss your project',
          subheading: 'Share your business type, current systems, and what you are trying to build or automate.',
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
