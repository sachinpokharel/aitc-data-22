import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import CardGrid from '@/components/pages/static-components/CardGrid';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import InlineInquiryForm from '@/components/pages/static-components/InlineInquiryForm';
import LocationHero from '@/components/pages/static-components/LocationHero';
import NepalVsIndiaDecisionTool from '@/components/pages/static-components/vs/NepalVsIndiaDecisionTool';
import ProjectCards from '@/components/pages/static-components/ProjectCards';
import StatsBar from '@/components/pages/static-components/StatsBar';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import {
  comparisonRows,
  decisionQuestions,
  faqs,
  heroData,
  heroStats,
  ourWork,
  pricingCards,
  quickAnswerCards,
  scenarioCards,
  whyCards,
} from '@/data/vs/nepal-vs-india-software-development-data';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nepal vs India Software Development: Which Is Right for You? | AITC International',
  description:
    'Compare Nepal and India for software development outsourcing. Honest breakdown of cost, communication, team scale, collaboration style, and the right fit for your project type.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}location/vs/nepal-vs-india-software-development`,
  },
  openGraph: {
    title: 'Nepal vs India Software Development | AITC International',
    description:
      'An honest comparison of Nepal and India for software outsourcing — cost, communication, team scale, and which destination fits your project best.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}location/vs/nepal-vs-india-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function NepalVsIndiaPage() {
  return (
    <>
      <LocationHero
        data={heroData}
        rightContent={
          <InlineInquiryForm
            preselectedService='Software Development'
            formName='hero-nepal-vs-india'
            heading='Get an outsourcing recommendation'
            subheading="Tell us about your project and we'll recommend the best destination and engagement model for your needs."
            ctaLabel='Get My Recommendation'
          />
        }
      />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      {/* Quick Answer — Nepal vs India cards */}
      <section id='comparison' className='bg-white'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10 text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Quick answer</p>
            <h2 className='mt-2 text-2xl font-bold text-secondary sm:text-3xl'>Which destination is right for you?</h2>
            <p className='mx-auto mt-3 max-w-2xl text-base text-gray-500'>
              The right outsourcing destination depends on your project type, team scale, and how you prefer to collaborate. Here is the honest short answer.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            {quickAnswerCards.map((card) => (
              <div
                key={card.country}
                className={`rounded-2xl border p-8 ${card.highlight ? 'border-primary/30 bg-primary/5' : 'border-gray-200 bg-gray-50'}`}
              >
                <div className='mb-4 flex items-center gap-3'>
                  <span className='text-3xl'>{card.flag}</span>
                  <div>
                    <h3 className='text-xl font-bold text-secondary'>{card.country}</h3>
                    <p className='text-sm text-gray-500'>{card.tagline}</p>
                  </div>
                </div>

                <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>Best for</p>
                <ul className='mb-6 space-y-2'>
                  {card.bestFor.map((item) => (
                    <li key={item} className='flex items-start gap-2 text-sm text-gray-700'>
                      <span className='mt-0.5 shrink-0 font-bold text-primary'>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={card.ctaHref}
                  className={`inline-block rounded-md px-6 py-2.5 text-sm font-semibold transition-colors ${
                    card.highlight
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'border border-secondary text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature-by-feature comparison table */}
      <section className='bg-lightShad2'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Factor-by-factor breakdown</p>
            <h2 className='mt-2 text-2xl font-bold text-secondary sm:text-3xl'>Nepal vs India: 10 factors compared</h2>
            <p className='mt-2 max-w-xl text-base text-gray-500'>
              An honest breakdown of how the two destinations compare on the factors that matter most for software development.
            </p>
          </div>

          <div className='overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm'>
            <div className='grid grid-cols-[1fr_1fr_1fr] border-b border-gray-100 bg-gray-50'>
              <div className='p-4 text-xs font-bold uppercase tracking-widest text-gray-500'>Factor</div>
              <div className='border-l border-primary/20 bg-primary/5 p-4 text-xs font-bold uppercase tracking-widest text-primary'>
                🇳🇵 Nepal
              </div>
              <div className='border-l border-gray-200 p-4 text-xs font-bold uppercase tracking-widest text-secondary'>
                🇮🇳 India
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={row.factor}
                className={`grid grid-cols-[1fr_1fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
              >
                <div className='p-4'>
                  <p className='text-sm font-bold text-secondary'>{row.factor}</p>
                </div>
                <div className='border-l border-primary/10 bg-primary/[0.03] p-4'>
                  <p className='text-sm leading-relaxed text-gray-700'>{row.nepal}</p>
                </div>
                <div className='border-l border-gray-200 p-4'>
                  <p className='text-sm leading-relaxed text-gray-600'>{row.india}</p>
                </div>
              </div>
            ))}
          </div>

          <p className='mt-4 text-center text-xs text-gray-400'>
            This comparison is based on AITC&apos;s experience across 50+ outsourcing projects. Individual vendors may vary.
          </p>
        </div>
      </section>

      {/* Pricing section */}
      <section className='bg-white'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Pricing models</p>
            <h2 className='mt-2 text-2xl font-bold text-secondary sm:text-3xl'>What does each destination actually cost?</h2>
            <p className='mt-2 max-w-xl text-base text-gray-500'>
              Cost is one factor in the decision — here is how pricing works in practice across both destinations.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            {pricingCards.map((card) => (
              <div
                key={card.country}
                className={`rounded-2xl border p-8 ${card.highlight ? 'border-primary bg-primary/5' : 'border-gray-200 bg-gray-50'}`}
              >
                <div className='mb-2 flex items-center gap-2'>
                  <span className='text-2xl'>{card.flag}</span>
                  <p className='text-xs font-bold uppercase tracking-widest text-primary'>{card.country}</p>
                </div>
                <h3 className='mb-2 text-lg font-bold text-secondary'>{card.model}</h3>
                <p className='mb-6 text-sm leading-relaxed text-gray-600'>{card.description}</p>

                <ul className='mb-6 space-y-2'>
                  {card.features.map((f) => (
                    <li key={f} className='flex items-start gap-2 text-sm text-gray-700'>
                      <span className='mt-0.5 shrink-0 font-bold text-primary'>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div>
                  <p className='mb-2 text-xs font-bold uppercase tracking-widest text-gray-400'>Best for</p>
                  <div className='flex flex-wrap gap-2'>
                    {card.bestFor.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          card.highlight ? 'bg-primary/10 text-primary' : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PostReviewsCTA
        badge='Free outsourcing consultation'
        heading='Not Sure Which Destination Is Right for You?'
        description="Book a free consultation and we will walk you through the right outsourcing model for your project — based on your actual requirements, not sales targets."
        primaryLabel='Book a Free Consultation'
        primaryHref='/book-a-free-consultation'
        secondaryLabel='Request a Quote'
        secondaryHref='/request-a-quote'
      />

      {/* Real Scenarios */}
      <section className='bg-gray-50'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Real-world scenarios</p>
            <h2 className='mt-2 text-2xl font-bold text-secondary sm:text-3xl'>Which destination fits your project?</h2>
            <p className='mt-2 max-w-xl text-base text-gray-500'>
              Common project types matched to the outsourcing destination they are best suited to.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {scenarioCards.map((card) => (
              <div key={card.title} className='rounded-xl border border-gray-200 bg-white p-6'>
                <div className='mb-3'>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      card.recommendation === 'Nepal'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    {card.recommendation === 'Nepal' ? '🇳🇵 Nepal' : '🇮🇳 India'}
                  </span>
                </div>
                <h3 className='mb-2 text-base font-bold text-secondary'>{card.title}</h3>
                <p className='text-sm leading-relaxed text-gray-500'>{card.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Tool */}
      <section className='bg-white'>
        <div className='common-padding mx-auto max-w-7xl py-16 md:py-20'>
          <div className='mb-10 text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Find your answer</p>
            <h2 className='mt-2 text-2xl font-bold text-secondary sm:text-3xl'>Answer 3 questions. Get a recommendation.</h2>
            <p className='mx-auto mt-3 max-w-xl text-base text-gray-500'>
              Tell us about your priorities and we will point you to the destination that better matches your project type.
            </p>
          </div>
          <NepalVsIndiaDecisionTool questions={decisionQuestions} />
        </div>
      </section>

      <ProjectCards
        badge='Our work'
        heading='Projects delivered across both destinations'
        description='Examples of how project type and scale shaped the outsourcing destination choice.'
        items={ourWork}
        bg='light'
        viewAllHref='/ourwork'
      />

      <CardGrid
        badge='Why AITC'
        heading='What AITC brings to any outsourcing engagement'
        description='Regardless of destination, AITC focuses on long-term collaboration, direct communication, and product-focused delivery.'
        cards={whyCards}
        bg='white'
      />

      <BottomCTAForm
        badge='Ready to decide?'
        heading='Get matched to the right outsourcing destination'
        description="Tell us about your project and we will recommend the right destination, engagement model, and team structure — no obligation."
        bullets={[
          'Honest recommendation based on your project type',
          'Free consultation with no sales pressure',
          'Response within 24 hours',
        ]}
        form={{
          preselectedService: 'Software Development',
          formName: 'bofu-nepal-vs-india',
          heading: 'Get your outsourcing recommendation',
          subheading:
            "Share your project details and we will recommend the right destination and team model for your needs.",
          ctaLabel: 'Get My Recommendation',
        }}
      />

      <FAQSection faqs={faqs} />

      <StickyMobileCTA quoteLabel='Get a recommendation' quoteHref='/book-a-free-consultation' />
    </>
  );
}
