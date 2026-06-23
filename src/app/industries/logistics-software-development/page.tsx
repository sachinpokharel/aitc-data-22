import {
  complianceItems,
  logisticsProjectTabs,
  logisticsSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/logistics-software-development-data';
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
  title: 'Logistics Software Development | TMS, WMS & Fleet Tracking | AITC',
  description:
    'AITC builds logistics software — transport management systems, warehouse management, fleet tracking, route optimisation, and last-mile delivery platforms. Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/logistics-software-development`,
  },
  openGraph: {
    title: 'Logistics Software Development | TMS, WMS & Fleet Tracking | AITC',
    description:
      'AITC builds logistics software — transport management systems, warehouse management, fleet tracking, route optimisation, and last-mile delivery platforms.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/logistics-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function LogisticsIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='Logistics companies across every mode and model'
        description="Logistics software spans an enormous range — from 3PL warehouse management to last-mile delivery apps to freight brokerage platforms. We have built across all of them."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why logistics companies come to us'
        heading='When spreadsheets and phone calls are costing you margin'
        description='Manual dispatching, paper PODs, and disconnected tracking systems do not scale. These are the operational problems that bring logistics companies to us.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for Logistics Companies'
        subheading="Every system type below we've designed, built, and delivered for real logistics businesses — TMS, WMS, fleet tracking, and route optimisation."
        tabs={logisticsProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & operations'
            heading='Built for logistics regulatory and operational requirements'
            description="Driver hours, dangerous goods, vehicle inspections, and customs documentation — compliance requirements that are built into the platform, not bolted on when a regulator asks."
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with logistics clients'
        heading='From operations discovery to a platform your fleet and warehouse use every day'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for logistics software'
        subheading='React Native, Node.js, PostgreSQL with PostGIS, Google Maps API, AWS IoT Core, Redis, and Kafka — the stack that powers real-time fleet tracking, route optimisation, and high-throughput order management.'
      />

      <PostReviewsCTA
        badge='Logistics & Supply Chain'
        heading='Building a Logistics Software Project?'
        description="Tell us about your fleet, your warehouse operation, or your supply chain challenge. We'll come back with a practical recommendation — no sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for Logistics Companies'
        description='Whether you need a custom TMS, a driver mobile app, a customer tracking portal, or a full supply chain platform — our Nepal-based teams work across the full logistics technology stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='Logistics verticals we serve'
        heading='Every Logistics Segment, One Engineering Partner'
        subheading='From freight & trucking to last-mile delivery platforms — we have built production software across every major logistics category.'
        sectors={logisticsSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your logistics software challenge'
        description="Whether you're building a TMS from scratch, adding real-time tracking to an existing platform, or replacing a legacy WMS — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'Logistics & Supply Chain',
          formName: 'industry-logistics',
          heading: 'Discuss your project',
          subheading: 'Share your fleet size, operation type, and what you are trying to build or automate.',
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
