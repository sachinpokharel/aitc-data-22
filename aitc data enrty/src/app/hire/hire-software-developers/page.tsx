import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import CardGrid from '@/components/pages/static-components/CardGrid';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import InlineInquiryForm from '@/components/pages/static-components/InlineInquiryForm';
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
} from '@/data/hire/hire-software-developers-data';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hire Software Developers | AITC International',
  description:
    'Hire pre-vetted software developers who integrate into your team and build what your product actually needs. 200+ engineers across React, Node.js, Python, Flutter, and more. Matched profiles within 48 hours.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}hire/hire-software-developers`,
  },
  openGraph: {
    title: 'Hire Software Developers | AITC International',
    description:
      'Hire pre-vetted software developers who integrate into your team and build what your product actually needs. Matched profiles within 48 hours.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}hire/hire-software-developers`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function HireSoftwareDevelopersPage() {
  return (
    <>
      <LocationHero
        data={heroData}
        rightContent={
          <InlineInquiryForm
            preselectedService='Hire Software Developers'
            formName='hero-hire-software-developers'
            heading='Find your software developer'
            subheading="Share your requirements and we'll match you with pre-vetted engineers within 48 hours."
            ctaLabel='Send My Requirements'
          />
        }
      />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Why hire through AITC'
        heading='Pre-vetted engineers. Zero CV sifting.'
        description='Every developer in our network is assessed for technical skill, communication, and real-world experience before being matched to any client.'
        cards={whyCards}
        bg='white'
      />

      {/* Developer roles */}
      <section className='bg-gray-50'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Roles we place</p>
            <h2 className='mt-2 text-2xl font-bold sm:text-3xl'>Every role your product team needs</h2>
            <p className='mt-2 max-w-xl text-base text-gray-500'>
              From frontend and backend to mobile, DevOps, QA, and architecture — our engineer network covers the full stack at every seniority level.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
        subheading='React, Node.js, Python, Flutter, AWS, and more. With 200+ engineers in our network, we almost certainly have the exact skillset your product needs.'
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
                We don&apos;t send you a list of CVs and hope for the best. Every engineer is evaluated across four dimensions before being matched to any client.
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
              <p className='mt-1 text-sm text-white/70'>Stack-specific coding assessment and architecture review against real-world standards.</p>
            </div>
            <div className='rounded-xl bg-white/10 p-6'>
              <p className='text-3xl font-black text-primary'>02</p>
              <p className='mt-3 text-base font-bold'>Communication Assessment</p>
              <p className='mt-1 text-sm text-white/70'>Written and spoken English assessed for professional fluency and collaboration quality.</p>
            </div>
            <div className='rounded-xl bg-white/10 p-6'>
              <p className='text-3xl font-black text-primary'>03</p>
              <p className='mt-3 text-base font-bold'>Experience Validation</p>
              <p className='mt-1 text-sm text-white/70'>Real-world project review confirms the depth of experience behind the CV.</p>
            </div>
            <div className='rounded-xl bg-primary p-6'>
              <p className='text-3xl font-black text-white/40'>04</p>
              <p className='mt-3 text-base font-bold'>Portfolio & References</p>
              <p className='mt-1 text-sm text-white/90'>Portfolio review and reference check completed before any client introduction.</p>
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
        badge='Hire software developers'
        heading='Ready to Meet Your Next Developer?'
        description="Tell us the role, stack, and timeline and we'll have matched, pre-vetted developer profiles in your inbox within 48 hours — no obligation, no recruitment fees."
        primaryLabel='Hire a software developer'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <ProjectCards
        badge='Our work'
        heading='Products our software developers have shipped'
        items={ourWork}
        bg='light'
        viewAllHref='/ourwork'
      />

      <WeHelpWithService
        heading='We Also Help With'
        description='From a single software developer hire to a full dedicated product team, AITC covers every model of working with engineering talent.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <IndustrySectors
        badge='Industries'
        heading='Industries We Serve'
        subheading='Our software developers have shipped products across healthcare, fintech, real estate, e-commerce, and more.'
        sectors={industrySectors}
        bg='white'
      />

      <BottomCTAForm
        badge='Ready to hire?'
        heading='Get matched developer profiles within 48 hours'
        description="Tell us what you need and we'll respond with pre-vetted engineers already assessed for your stack — no obligation, no recruitment fees."
        bullets={[
          '3–5 matched profiles within 48 hours',
          'Free replacement guarantee included',
          'No recruitment fees, no lock-in',
        ]}
        form={{
          preselectedService: 'Hire Software Developers',
          formName: 'bofu-hire-software-developers',
          heading: 'Find your software developer today',
          subheading:
            "Share your requirements and we'll match you with pre-vetted engineers ready to join your team.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Hire a developer' quoteHref='/request-a-quote' />
    </>
  );
}
