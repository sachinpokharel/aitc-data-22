import { type Metadata } from 'next';
import Link from 'next/link';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import SpotlightSection from '@/components/pages/Home/SpotlightSection/SpotlightSection';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';
import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import CardGrid from '@/components/pages/static-components/CardGrid';
import ComparisonTable from '@/components/pages/static-components/ComparisonTable';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import IndustrySectors from '@/components/pages/static-components/IndustrySectors';
import LocationHero from '@/components/pages/static-components/LocationHero';
import PricingCards from '@/components/pages/static-components/PricingCards';
import ProcessSteps from '@/components/pages/static-components/ProcessSteps';
import StatsBar from '@/components/pages/static-components/StatsBar';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import WeHelpWithService from '@/components/pages/static-components/Wehelpwithservice';
import {
  comparisonRows,
  engagementModels,
  faqs,
  heroData,
  heroStats,
  industrySectors,
  processSteps,
  services,
  weHelpWithTabs,
  whyCards,
} from '@/data/location/software-development-company-texas-data';

export const metadata: Metadata = {
  title: 'Software Development Company for Texas Businesses | AITC International',
  description:
    'AITC International is a software development company serving Texas startups and businesses in Austin, Dallas, Houston, and San Antonio. Fixed-price delivery, 9+ hours CST overlap, and 70% cost savings vs local Texas agency rates.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}location/software-development-company-texas`,
  },
  openGraph: {
    title: 'Software Development Company for Texas Businesses | AITC International',
    description:
      'AITC International is a software development company serving Texas startups and businesses in Austin, Dallas, Houston, and San Antonio. Fixed-price delivery, 9+ hours CST overlap, and 70% cost savings vs local Texas agency rates.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}location/software-development-company-texas`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function SoftwareDevelopmentTexasPage() {
  return (
    <>
      <LocationHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Why Texas businesses choose AITC'
        heading='Engineering quality without the Austin / Dallas price tag.'
        description='Texas startups and companies choose AITC because we solve the three problems that kill most offshore relationships: timezone gaps, compliance risk, and unpredictable delivery.'
        cards={whyCards}
        bg='white'
      />

      {/* What we build for Texas clients */}
      <section className='bg-gray-50'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>What we build</p>
            <h2 className='mt-2 text-2xl font-bold sm:text-3xl'>Full-service software development for Texas businesses</h2>
            <p className='mt-2 max-w-xl text-base text-gray-500'>
              From a focused MVP to a fully staffed product squad — we cover every stage of software development for Texas clients on your Central Time hours.
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

      <ComparisonTable
        badge='How we compare'
        heading='AITC vs Texas Agency vs Freelancer'
        subheading='Why Texas businesses choose AITC over the alternatives.'
        rows={comparisonRows}
        col1Label='AITC'
        col2Label='TX Agency'
        col3Label='Freelancer'
        bg='light'
      />

      <ProcessSteps
        badge='How it works'
        heading='From first call to shipped product — a clear process'
        steps={processSteps}
        bg='white'
        ctaLabel='Book a discovery call'
        ctaHref='/book-a-free-consultation'
      />

      <Technologies
        heading='Every stack your Texas product needs'
        subheading="React, Next.js, Node.js, Python, Flutter, AWS, and more. With 200+ engineers, we cover whatever stack your Austin or Dallas team is already running."
      />

      <PricingCards
        badge='Engagement models'
        heading='Fixed project, dedicated team, or staff augmentation — your call'
        tiers={engagementModels}
      />

      <PostReviewsCTA
        badge='Software development for Texas businesses'
        heading='Ready to Start Building?'
        description="Tell us what you're building and we'll come back within 48 hours with a clear scope, honest timeline, and fixed-price proposal — no agency jargon, no obligation."
        primaryLabel='Get a free proposal'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <ErrorBoundaryWrapper>
        <SpotlightSection url='/home/our-work-feature' />
      </ErrorBoundaryWrapper>

      <WeHelpWithService
        heading='We Also Help With'
        description='From a single hired developer to a full dedicated squad, AITC covers every model of working with Nepal-based engineering talent for Texas businesses.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <IndustrySectors
        badge='Industries'
        heading='Industries We Serve'
        subheading='We have shipped production software for Texas businesses across healthcare, fintech, real estate, and more.'
        sectors={industrySectors}
        bg='white'
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading='Get a fixed-price proposal in 48 hours'
        description="Tell us what you need and we'll respond with a clear scope, realistic timeline, and fixed price — no obligation, no agency jargon."
        bullets={[
          'Proposal delivered within 48 hours',
          'Fixed pricing, no hidden costs',
          'NDA signed before any discussion',
        ]}
        form={{
          preselectedService: 'Software Development Texas',
          formName: 'bofu-software-dev-texas',
          heading: 'Get your proposal in 48 hours',
          subheading:
            "Share what you're building and we'll respond with a detailed scope, timeline, and fixed-price estimate.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <TestimonialSection url='/testimonial/landing' />

      <FAQSection faqs={faqs} />

      <StickyMobileCTA quoteLabel='Get a free proposal' quoteHref='/request-a-quote' />
    </>
  );
}
