import {
  engagementModels,
  faqs,
  heroData,
  heroStats,
  industrySectors,
  processSteps,
  weHelpWithTabs,
  whyCards,
} from '@/data/location/offshore-development-team-nepal-for-australia-data';
import { type Metadata } from 'next';
import Link from 'next/link';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import SpotlightSection from '@/components/pages/Home/SpotlightSection/SpotlightSection';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';
import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import CardGrid from '@/components/pages/static-components/CardGrid';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import LocationHero from '@/components/pages/static-components/LocationHero';
import PricingCards from '@/components/pages/static-components/PricingCards';
import ProcessSteps from '@/components/pages/static-components/ProcessSteps';
import StatsBar from '@/components/pages/static-components/StatsBar';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import IndustrySectors from '@/components/pages/static-components/IndustrySectors';
import WeHelpWithService from '@/components/pages/static-components/Wehelpwithservice';

export const metadata: Metadata = {
  title: 'Offshore Development Team Nepal for Australia | AITC',
  description:
    'Build your offshore development team in Nepal for your Australian business. 6+ hours AEST overlap, English-fluent engineers, 70% cost savings vs Sydney/Melbourne rates.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}locations/offshore-development-team-nepal-for-australia`,
  },
  openGraph: {
    title: 'Offshore Development Team Nepal for Australia | AITC',
    description:
      'Build your offshore development team in Nepal for your Australian business. 6+ hours AEST overlap, English-fluent engineers, 70% cost savings vs Sydney/Melbourne rates.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}locations/offshore-development-team-nepal-for-australia`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function OffshoreAustraliaPage() {
  return (
    <>
      <LocationHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Why Nepal for Australia'
        heading='Offshore cost savings. Local team experience.'
        description='Timezone barriers and communication gaps derail most offshore projects. AITC solves both by design.'
        cards={whyCards}
        bg='white'
      />

      {/* Timezone callout */}
      <section className='bg-secondary text-white'>
        <div className='common-padding mx-auto max-w-7xl py-14'>
          <div className='flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>How the hours work</p>
              <p className='mt-2 text-xl font-bold'>6:00 AM Nepal = 10:15 AM AEST = 11:15 AM AEDT</p>
              <p className='mt-2 max-w-xl text-base text-white/75'>
                Our teams shift their workday to start at 6:00 AM NPT — giving Australian clients 6+ hours of real-time
                overlap for standups, code reviews, and collaboration.
              </p>
            </div>
            <Link
              href='/book-a-free-consultation'
              className='shrink-0 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/70'
            >
              Discuss your timezone needs →
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps
        badge='The process'
        heading='From requirements to your first AEST standup in 4 steps'
        steps={processSteps}
        bg='light'
        ctaLabel='Start step 1'
        ctaHref='/request-a-quote'
      />

      <Technologies
        heading='Every stack your Australian team relies on'
        subheading="React, Node.js, Python, Flutter, AWS, and more. Don't see your stack? With 200+ engineers, we almost certainly cover it."
      />

      <PricingCards
        badge='Engagement models'
        heading='One developer or a full squad — your call'
        tiers={engagementModels}
      />

      <PostReviewsCTA
        badge='Offshore Team for Australia'
        heading='Ready to Build Your Offshore Team?'
        description="Tell us your requirements and we'll have matched profiles in your inbox within 24 hours — engineers already assessed for AEST timezone flexibility."
        primaryLabel='Build my offshore team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      {/* <ProjectCards
        badge='Our work'
        heading='What our offshore teams have shipped'
        items={ourWork}
        bg='light'
        viewAllHref='/ourwork'
      /> */}
      <ErrorBoundaryWrapper>
        <SpotlightSection url='/home/our-work-feature' />
      </ErrorBoundaryWrapper>

      <WeHelpWithService
        heading='We Also Help With'
        description='From a single offshore developer to a full dedicated squad, our Nepal-based teams cover every stage of the software lifecycle for Australian businesses.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <IndustrySectors
        badge='Industries'
        heading='Industries We Serve'
        subheading='Our Nepal-based teams have shipped software across healthcare, fintech, real estate, and more for Australian businesses.'
        sectors={industrySectors}
        bg='white'
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading='Your offshore team could be on AEST standups in 2 weeks'
        description="Share your requirements and we'll respond within 24 hours with matched profiles — no obligation, no recruitment fees."
        bullets={['Developer profiles within 24 hours', '2-week risk-free trial included', 'NDA available on request']}
        form={{
          preselectedService: 'Offshore Development Team Australia',
          formName: 'bofu-offshore-australia',
          heading: 'Get matched profiles in 24 hours',
          subheading:
            "Tell us what you need and we'll respond with engineers already assessed for AEST timezone flexibility.",
          ctaLabel: 'Send my request',
        }}
      />
      <TestimonialSection url='/testimonial/landing' />
      <FAQSection faqs={faqs} />

      <StickyMobileCTA quoteLabel='Build my offshore team' quoteHref='/request-a-quote' />
    </>
  );
}
