import {
  complianceItems,
  restaurantProjectTabs,
  restaurantSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/restaurant-hospitality-software-development-data';
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
  title: 'Restaurant & Hospitality Software Development | POS, Ordering & Kitchen Systems | AITC',
  description:
    'AITC builds restaurant and hospitality software — custom POS systems, online ordering platforms, kitchen display systems, reservation management, and loyalty programmes. Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/restaurant-hospitality-software-development`,
  },
  openGraph: {
    title: 'Restaurant & Hospitality Software Development | POS, Ordering & Kitchen Systems | AITC',
    description:
      'AITC builds restaurant and hospitality software — custom POS systems, online ordering platforms, kitchen display systems, reservation management, and loyalty programmes.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/restaurant-hospitality-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function RestaurantHospitalityIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='Restaurant and hospitality businesses at every scale'
        description="Hospitality software covers an enormous range — from single-venue POS to multi-location group management and delivery platform builds. We've built for all of them."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why hospitality operators come to us'
        heading='When disconnected systems are costing you covers and margin'
        description='Off-the-shelf POS and reservation tools work up to a point. When your order flows, kitchen routing, or multi-location reporting outgrow what those platforms allow — that is the point to build custom.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for Restaurant & Hospitality Businesses'
        subheading="Every system type below we've designed, built, and delivered for real hospitality operators — from high-volume QSR POS to full-service restaurant management platforms."
        tabs={restaurantProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & operations'
            heading='Built for restaurant and hospitality regulatory requirements'
            description='Food safety, allergen management, PCI-DSS payments, and licensing compliance are built into the architecture — not added after your first inspection or regulatory query.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with hospitality clients'
        heading='From operations discovery to a platform your front-of-house and kitchen use every day'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for restaurant & hospitality software'
        subheading='React Native, Node.js, PostgreSQL, Stripe, Square, Twilio, AWS, and Socket.io — the stack that powers real-time kitchen displays, online ordering, reservation management, and guest loyalty programmes.'
      />

      <PostReviewsCTA
        badge='Restaurant & Hospitality'
        heading='Building a Hospitality Software Project?'
        description="Tell us about your venue, your current systems, and the operational challenge you're trying to solve. We'll come back with a practical recommendation — no sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for Restaurant & Hospitality Businesses'
        description='Whether you need a custom POS, a branded online ordering platform, a kitchen display system, or a full restaurant management suite — our Nepal-based teams work across the full hospitality technology stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='Hospitality verticals we serve'
        heading='Every Hospitality Segment, One Engineering Partner'
        subheading='From quick-service POS to hotel property management and food delivery platforms — we have built production software across every major hospitality category.'
        sectors={restaurantSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your restaurant or hospitality software challenge'
        description="Whether you're building a custom POS, launching an online ordering platform, or replacing a legacy management system — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'Restaurant & Hospitality',
          formName: 'industry-restaurant-hospitality',
          heading: 'Discuss your project',
          subheading: 'Share your venue type, current systems, and what you are trying to build or automate.',
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
