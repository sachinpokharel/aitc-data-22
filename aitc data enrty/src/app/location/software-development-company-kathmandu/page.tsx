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
    kathmandуAdvantages,
    ourWork,
    processSteps,
    services,
    weHelpWithTabs,
    whyCards,
} from '@/data/location/software-development-company-kathmandu-data';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software Development Company in Kathmandu | AITC International',
  description:
    'AITC International is a leading software development company in Kathmandu, Nepal. Custom software, SaaS, mobile apps, and dedicated teams — delivered to clients worldwide.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}locations/software-development-company-kathmandu`,
  },
  openGraph: {
    title: 'Software Development Company in Kathmandu | AITC International',
    description:
      'AITC International is a leading software development company in Kathmandu, Nepal. Custom software, SaaS, mobile apps, and dedicated teams — delivered to clients worldwide.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}locations/software-development-company-kathmandu`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function SoftwareDevelopmentKathmanduPage() {
  return (
    <>
      <LocationHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Why AITC in Kathmandu'
        heading='Kathmandu-based. Globally delivered.'
        description='We combine the cost advantage and talent depth of Kathmandu with the communication standards and delivery rigour your project deserves.'
        cards={whyCards}
        bg='white'
      />

      {/* Kathmandu advantage stats section */}
      <section className='bg-secondary text-white'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Why Kathmandu</p>
              <h2 className='mt-2 text-2xl font-bold sm:text-3xl'>
                The numbers behind Nepal&apos;s fastest-growing tech hub.
              </h2>
              <p className='mt-2 max-w-xl text-base text-white/70'>
                Kathmandu isn&apos;t just a cheaper option — it&apos;s a mature engineering ecosystem with real depth, high
                retention, and a timezone that works for both East and West.
              </p>
            </div>
            <Link
              href='/book-a-free-consultation'
              className='shrink-0 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60'
            >
              Talk to our team →
            </Link>
          </div>

          {/* Advantage stat cards */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {kathmandуAdvantages.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-xl p-6 ${index === 1 ? 'bg-primary' : 'bg-white/10'}`}
              >
                <p className='text-3xl font-black'>{item.stat}</p>
                <p className='mt-2 text-sm font-bold'>{item.label}</p>
                <p className={`mt-2 text-sm ${index === 1 ? 'text-white/90' : 'text-white/60'}`}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className='mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4'>
            <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white'>
              ✓
            </span>
            <p className='text-sm text-white/80'>
              <span className='font-semibold text-white'>Every engineer at AITC is full-time and Kathmandu-based</span>{' '}
              — no subcontracting, no freelancer networks, no hidden handoffs to third parties.
            </p>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className='bg-gray-50'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>What we build</p>
            <h2 className='mt-2 text-2xl font-bold sm:text-3xl'>
              Full-service software development from Kathmandu
            </h2>
            <p className='mt-2 max-w-xl text-base text-gray-500'>
              Strategy, design, engineering, and support — all under one roof at our Kathmandu office.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className='group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md'
              >
                <h3 className='text-base font-bold text-gray-900 transition-colors group-hover:text-primary'>
                  {service.title}
                </h3>
                <p className='mt-2 text-sm text-gray-500'>{service.desc}</p>
                <p className='mt-4 text-sm font-semibold text-primary'>Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        badge='How we work'
        heading='From first call to shipped product — a clear process'
        steps={processSteps}
        bg='white'
        ctaLabel='Book a discovery call'
        ctaHref='/book-a-free-consultation'
      />

      <Technologies
        heading='Every technology your product needs'
        subheading='React, Next.js, Node.js, Python, Flutter, AWS, and more — our Kathmandu engineers are fluent across the full modern stack.'
      />

      <PricingCards
        badge='How to work with us'
        heading='Project, team, or individual developer — your choice'
        tiers={engagementModels}
      />

      <PostReviewsCTA
        badge='Based in Kathmandu'
        heading='Ready to Start Your Project?'
        description="Tell us what you're building and we'll come back within 24 hours with a clear approach, honest timeline, and fixed-price proposal — no agency jargon."
        primaryLabel='Start a project'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <ProjectCards
        badge='Our work'
        heading='Products built from our Kathmandu office'
        items={ourWork}
        bg='light'
        viewAllHref='/ourwork'
      />

    

      <WeHelpWithService
        heading='We Also Help With'
        description='From custom software to dedicated offshore teams — our Kathmandu-based engineers cover every stage of the software lifecycle for businesses worldwide.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <IndustrySectors
        badge='Industries'
        heading='Industries We Serve'
        subheading='Our Kathmandu engineers have shipped products across healthcare, fintech, real estate, and more for clients worldwide.'
        sectors={industrySectors}
        bg='white'
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's talk about your project"
        description="Book a free 30-minute discovery call with our Kathmandu team. We'll understand what you're building and tell you exactly how we'd approach it — no commitment, no jargon."
        bullets={[
          'Proposal delivered within 48 hours',
          'Fixed pricing, no hidden costs',
          'NDA signed before any discussion',
        ]}
        form={{
          preselectedService: 'Software Development Kathmandu',
          formName: 'bofu-kathmandu',
          heading: 'Get a proposal in 48 hours',
          subheading:
            "Tell us about your project and we'll respond with a clear approach, realistic timeline, and fixed-price estimate.",
          ctaLabel: 'Send my enquiry',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Start a project' quoteHref='/request-a-quote' />
    </>
  );
}
