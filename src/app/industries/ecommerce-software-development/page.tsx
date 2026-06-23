import {
  complianceItems,
  ecommerceProjectTabs,
  ecommerceSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithTabs,
  whoWeWorkWith,
} from '@/data/industries/ecommerce-software-development-data';
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
  title: 'E-Commerce & Retail Software Development | AITC',
  description:
    'AITC builds software for e-commerce and retail businesses — custom storefronts, marketplace platforms, inventory systems, and mobile commerce apps. Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/ecommerce-software-development`,
  },
  openGraph: {
    title: 'E-Commerce & Retail Software Development | AITC',
    description:
      'AITC builds software for e-commerce and retail businesses — custom storefronts, marketplace platforms, inventory systems, and mobile commerce apps.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/ecommerce-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function EcommerceIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='E-commerce businesses at every stage of complexity'
        description="E-commerce is not one industry — it's dozens of different operating models. We've built software for all of them."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why e-commerce companies come to us'
        heading='When your platform becomes the problem, not the solution'
        description='Off-the-shelf platforms get you to market fast. But as your catalog grows, your operations get complex, and your customers expect more — the platform ceiling becomes very real.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for E-Commerce Businesses'
        subheading="Every system type below we've designed, built, and delivered for real commerce businesses — not theoretical capabilities."
        tabs={ecommerceProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      {/* Compliance & Performance — slider */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & performance'
            heading='Built to meet the requirements of modern e-commerce'
            description='Security, compliance, and performance are architecture decisions made at the start of every project — not patches applied at the end.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with e-commerce clients'
        heading='From platform audit to a store that converts'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for e-commerce'
        subheading='Next.js, React Native, Node.js, Stripe, Algolia, Elasticsearch, AWS, and more — the stack choices that power high-performance commerce at scale.'
      />

      <PostReviewsCTA
        badge='E-Commerce & Retail'
        heading='Working on an E-Commerce Project?'
        description="Tell us about your store, your current platform, and the challenge you're trying to solve. We'll come back with a practical recommendation — no sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for E-Commerce Businesses'
        description='Whether you need a complete custom build, a dedicated engineering team, a mobile app, or an ERP that connects your whole operation — our Nepal-based teams work across the full commerce technology stack.'
        theme='light'
        tabs={weHelpWithTabs}
      />

      <IndustrySectors
        badge='E-commerce verticals we serve'
        heading='Every Commerce Model, One Engineering Partner'
        subheading='From fashion and grocery to B2B wholesale and subscription commerce — we have built production software across every major e-commerce category.'
        sectors={ecommerceSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your e-commerce challenge'
        description="Whether you're outgrowing your current platform, planning a marketplace, or need to integrate systems that aren't talking to each other — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'E-Commerce & Retail',
          formName: 'industry-ecommerce',
          heading: 'Discuss your project',
          subheading: "Share your current platform, key challenge, and what you're trying to achieve.",
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
