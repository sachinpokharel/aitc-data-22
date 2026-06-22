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
    developerRoles,
    engagementModels,
    faqs,
    heroData,
    heroStats,
    industrySectors,
    ourWork,
    processSteps,
    weHelpWithTabs,
    whyCards,
} from '@/data/location/hire-software-developer-nepal-data';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hire Software Developers from Nepal | AITC International',
  description:
    'Hire pre-vetted software developers from Nepal. 200+ engineers across React, Node.js, Python, Flutter, and more. 60–75% cost savings, your timezone, 2-week risk-free trial.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}hire-software-developer-nepal`,
  },
  openGraph: {
    title: 'Hire Software Developers from Nepal | AITC International',
    description:
      'Hire pre-vetted software developers from Nepal. 200+ engineers across React, Node.js, Python, Flutter, and more. 60–75% cost savings, your timezone, 2-week risk-free trial.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}hire-software-developer-nepal`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function HireSoftwareDeveloperNepalPage() {
  return (
    <>
      <LocationHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Why hire from Nepal'
        heading='Senior-grade engineers. Fraction of the cost.'
        description="Nepal's tech talent pool is growing fast — and AITC gives you direct access to the top of it, pre-screened and ready to work your hours."
        cards={whyCards}
        bg='white'
      />

      {/* Developer roles section */}
      <section className='bg-gray-50'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Roles we place</p>
            <h2 className='mt-2 text-2xl font-bold sm:text-3xl'>Every role your product team needs</h2>
            <p className='mt-2 max-w-xl text-base text-gray-500'>
              From frontend and backend to mobile, DevOps, and QA — our engineer network covers the full stack.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {developerRoles.map((role) => (
              <div key={role.title} className='rounded-xl border border-gray-200 bg-white p-6'>
                <h3 className='text-base font-bold text-gray-900'>{role.title}</h3>
                <p className='mt-2 text-sm text-gray-500'>{role.desc}</p>
              </div>
            ))}
          </div>

          <div className='mt-8 text-center'>
            <Link
              href='/request-a-quote'
              className='inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90'
            >
              Find my developer →
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps
        badge='How it works'
        heading='From requirements to hired developer in 4 steps'
        steps={processSteps}
        bg='white'
        ctaLabel='Start step 1'
        ctaHref='/request-a-quote'
      />

      <Technologies
        heading='Every stack. Every seniority level.'
        subheading="React, Node.js, Python, Flutter, AWS, and more. With 200+ engineers in our network, we almost certainly have the exact skillset you need."
      />

      <PricingCards
        badge='Engagement models'
        heading='One developer or a full product squad — your call'
        tiers={engagementModels}
      />

      {/* Vetting callout */}
      <section className='bg-secondary text-white'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Our vetting process</p>
              <h2 className='mt-2 text-2xl font-bold sm:text-3xl'>Every developer is assessed before you ever see them.</h2>
              <p className='mt-2 max-w-xl text-base text-white/70'>
                We don&apos;t send you a list of CVs and hope for the best. Every engineer in our network has already passed
                four checks before being matched to any client.
              </p>
            </div>
            <Link
              href='/book-a-free-consultation'
              className='shrink-0 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60'
            >
              See how it works →
            </Link>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='rounded-xl bg-white/10 p-6'>
              <p className='text-3xl font-black text-primary'>01</p>
              <p className='mt-3 text-base font-bold'>Technical Screening</p>
              <p className='mt-1 text-sm text-white/70'>Stack-specific coding assessment and architecture review.</p>
            </div>
            <div className='rounded-xl bg-white/10 p-6'>
              <p className='text-3xl font-black text-primary'>02</p>
              <p className='mt-3 text-base font-bold'>English Communication</p>
              <p className='mt-1 text-sm text-white/70'>Written and spoken English assessed for professional fluency.</p>
            </div>
            <div className='rounded-xl bg-white/10 p-6'>
              <p className='text-3xl font-black text-primary'>03</p>
              <p className='mt-3 text-base font-bold'>Timezone Flexibility</p>
              <p className='mt-1 text-sm text-white/70'>Confirmed ability to shift hours to overlap with your working day.</p>
            </div>
            <div className='rounded-xl bg-primary p-6'>
              <p className='text-3xl font-black text-white/40'>04</p>
              <p className='mt-3 text-base font-bold'>Portfolio & References</p>
              <p className='mt-1 text-sm text-white/90'>Real-world project review and reference check completed.</p>
            </div>
          </div>

          <div className='mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4'>
            <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white'>✓</span>
            <p className='text-sm text-white/80'>
              <span className='font-semibold text-white'>You still run your own interview and make the final call</span> — our vetting means you only spend time on candidates who are already worth your attention.
            </p>
          </div>
        </div>
      </section>

      <PostReviewsCTA
        badge='Hire from Nepal'
        heading='Ready to Meet Your Next Developer?'
        description="Tell us the role, stack, and timezone and we'll have 3–5 matched, pre-vetted profiles in your inbox within 24 hours — no obligation, no recruitment fees."
        primaryLabel='Hire a developer'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <ProjectCards
        badge='Our work'
        heading='Products our Nepal-based developers have shipped'
        items={ourWork}
        bg='light'
        viewAllHref='/ourwork'
      />



      <WeHelpWithService
        heading='We Also Help With'
        description='From a single hired developer to a full dedicated offshore team, AITC covers every model of working with Nepal-based engineering talent.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <IndustrySectors
        badge='Industries'
        heading='Industries We Serve'
        subheading='Our Nepal-based developers have experience shipping software across healthcare, fintech, real estate, and more.'
        sectors={industrySectors}
        bg='white'
      />

      <BottomCTAForm
        badge='Ready to hire?'
        heading='Get matched developer profiles within 24 hours'
        description="Tell us what you need and we'll respond with pre-vetted engineers already assessed for your stack and timezone — no obligation, no recruitment fees."
        bullets={['3–5 matched profiles within 24 hours', '2-week risk-free trial included', 'NDA available on request']}
        form={{
          preselectedService: 'Hire Software Developer Nepal',
          formName: 'bofu-hire-developer-nepal',
          heading: 'Find your developer today',
          subheading:
            "Share your requirements and we'll match you with pre-vetted Nepal-based engineers ready to work your hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Hire a developer' quoteHref='/request-a-quote' />
    </>
  );
}
