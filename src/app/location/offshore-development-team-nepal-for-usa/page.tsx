import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import CardGrid from '@/components/pages/static-components/CardGrid';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import LocationHero from '@/components/pages/static-components/LocationHero';
import PricingCards from '@/components/pages/static-components/PricingCards';
import ProcessSteps from '@/components/pages/static-components/ProcessSteps';
import ProjectCards from '@/components/pages/static-components/ProjectCards';
import StatsBar from '@/components/pages/static-components/StatsBar';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';

import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import IndustrySectors from '@/components/pages/static-components/IndustrySectors';
import WeHelpWithService from '@/components/pages/static-components/Wehelpwithservice';
import {
    engagementModels,
    faqs,
    heroData,
    heroStats,
    industrySectors,
    ourWork,
    processSteps,
    weHelpWithTabs,
    whyCards,
} from '@/data/location/offshore-development-team-nepal-for-usa-data';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offshore Development Team Nepal for USA | AITC',
  description:
    'Build your offshore development team in Nepal for your US business. 8+ hours EST overlap, English-fluent engineers, 75% cost savings vs New York/San Francisco rates.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}locations/offshore-development-team-nepal-for-usa`,
  },
  openGraph: {
    title: 'Offshore Development Team Nepal for USA | AITC',
    description:
      'Build your offshore development team in Nepal for your US business. 8+ hours EST overlap, English-fluent engineers, 75% cost savings vs New York/San Francisco rates.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}locations/offshore-development-team-nepal-for-usa`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function OffshoreUSAPage() {
  return (
    <>
      <LocationHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Why Nepal for the US'
        heading='Offshore cost savings. Local team experience.'
        description='Timezone barriers and communication gaps derail most offshore projects. AITC solves both by design.'
        cards={whyCards}
        bg='white'
      />

      {/* Timezone callout */}
      <section className='bg-secondary text-white'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>How the hours work</p>
              <h2 className='mt-2 text-2xl font-bold sm:text-3xl'>Your morning standup. Their start of day.</h2>
              <p className='mt-2 max-w-xl text-base text-white/70'>
                Our Nepal teams shift their workday to align with US hours — giving you 8+ hours of real-time overlap
                for standups, reviews, and collaboration.
              </p>
            </div>
            <Link
              href='/book-a-free-consultation'
              className='shrink-0 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60'
            >
              Discuss your timezone needs →
            </Link>
          </div>

          {/* Timezone cards */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
            <div className='rounded-xl bg-white/10 p-6'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Nepal Time</p>
              <p className='mt-2 text-4xl font-black'>7:45 PM</p>
              <p className='mt-1 text-sm text-white/60'>NPT (UTC+5:45)</p>
              <p className='mt-3 text-sm text-white/70'>Team shifts their day to overlap with your mornings</p>
            </div>

            <div className='rounded-xl bg-primary p-6'>
              <p className='text-xs font-bold uppercase tracking-widest text-white/70'>US East Coast</p>
              <p className='mt-2 text-4xl font-black'>9:00 AM</p>
              <p className='mt-1 text-sm text-white/80'>EST (UTC-5)</p>
              <p className='mt-3 text-sm text-white/90'>Full morning overlap for your New York / Boston team</p>
            </div>

            <div className='rounded-xl bg-white/10 p-6'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>US West Coast</p>
              <p className='mt-2 text-4xl font-black'>6:00 AM</p>
              <p className='mt-1 text-sm text-white/60'>PST (UTC-8)</p>
              <p className='mt-3 text-sm text-white/70'>Afternoon overlap for your San Francisco / Seattle team</p>
            </div>
          </div>

          <div className='mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4'>
            <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white'>8+</span>
            <p className='text-sm text-white/80'>
              <span className='font-semibold text-white'>Hours of real-time overlap every day</span> — enough for standups, sprint planning, code reviews, and ad-hoc calls without waiting until the next morning.
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps
        badge='The process'
        heading='From requirements to your first EST standup in 4 steps'
        steps={processSteps}
        bg='light'
        ctaLabel='Start step 1'
        ctaHref='/request-a-quote'
      />

      <Technologies
        heading='Every stack your US team relies on'
        subheading="React, Node.js, Python, Flutter, AWS, and more. Don't see your stack? With 200+ engineers, we almost certainly cover it."
      />

      <PricingCards
        badge='Engagement models'
        heading='One developer or a full squad — your call'
        tiers={engagementModels}
      />

      <PostReviewsCTA
        badge='Offshore Team for the US'
        heading='Ready to Build Your Offshore Team?'
        description="Tell us your requirements and we'll have matched profiles in your inbox within 24 hours — engineers already assessed for US timezone flexibility."
        primaryLabel='Build my offshore team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <ProjectCards
        badge='Our work'
        heading='What our offshore teams have shipped'
        items={ourWork}
        bg='light'
        viewAllHref='/ourwork'
      />


      <WeHelpWithService
        heading='We Also Help With'
        description='From a single offshore developer to a full dedicated squad, our Nepal-based teams cover every stage of the software lifecycle for US businesses.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <IndustrySectors
        badge='Industries'
        heading='Industries We Serve'
        subheading='Our Nepal-based teams have shipped software across healthcare, fintech, real estate, and more for US businesses.'
        sectors={industrySectors}
        bg='white'
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading='Your offshore team could be on EST standups in 2 weeks'
        description="Share your requirements and we'll respond within 24 hours with matched profiles — no obligation, no recruitment fees."
        bullets={['Developer profiles within 24 hours', '2-week risk-free trial included', 'NDA available on request']}
        form={{
          preselectedService: 'Offshore Development Team USA',
          formName: 'bofu-offshore-usa',
          heading: 'Get matched profiles in 24 hours',
          subheading:
            "Tell us what you need and we'll respond with engineers already assessed for US timezone flexibility.",
          ctaLabel: 'Send my request',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Build my offshore team' quoteHref='/request-a-quote' />
    </>
  );
}
