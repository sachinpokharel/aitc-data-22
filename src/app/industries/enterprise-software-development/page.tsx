import {
  complianceItems,
  enterpriseProjectTabs,
  enterpriseSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/enterprise-software-development-data';
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
  title: 'Enterprise Software Development | Custom ERP, CRM & Workflow Platforms | AITC',
  description:
    'AITC builds enterprise software — custom ERP systems, CRM platforms, business intelligence dashboards, workflow automation tools, and legacy modernisation. ISO 27001-aligned builds, Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/enterprise-software-development`,
  },
  openGraph: {
    title: 'Enterprise Software Development | Custom ERP, CRM & Workflow Platforms | AITC',
    description:
      'AITC builds enterprise software — custom ERP systems, CRM platforms, business intelligence dashboards, workflow automation tools, and legacy modernisation. ISO 27001-aligned builds.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/enterprise-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function EnterpriseIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />
      <StatsBar stats={heroStats} />
      <ClientLogos />
      <CardGrid
        badge='Who we work with'
        heading='Enterprise organisations at every stage of growth'
        description="Enterprise software spans an enormous range — large corporations with complex integration requirements, fast-scaling mid-market companies, digital transformation teams modernising legacy platforms, and ISVs building enterprise-facing products. We've built for all of them."
        cards={whoWeWorkWith}
        bg='white'
      />
      <PainPointsTable
        badge='Why enterprise organisations come to us'
        heading='When SaaS sprawl, legacy debt, and manual workflows cost your business more than custom software would'
        description='Off-the-shelf platforms work up to a point. When your operational complexity, integration requirements, or security standards outgrow what any configurable SaaS product can provide — that is the point to build purpose-fit.'
        items={painPoints}
        bg='light'
      />
      <Solutions
        badge='What we build'
        heading='Systems We Build for Enterprise Organisations'
        subheading="Every system type below we've designed, built, and delivered for real enterprise clients — from internal workflow platforms and custom ERP modules to full-scale legacy modernisation programmes and BI analytics suites."
        tabs={enterpriseProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Security & compliance'
            heading='Built for enterprise security requirements from the first sprint'
            description='ISO 27001, SOC 2 Type II, GDPR, enterprise SSO, and zero-trust API security are designed into the architecture from day one — not added as an afterthought before your first security review or customer audit.'
            items={complianceItems}
          />
        </div>
      </section>
      <ProcessSteps
        badge='How we work with enterprise clients'
        heading='From requirements discovery to a system your teams actually adopt'
        steps={processSteps}
        bg='white'
      />
      <Technologies
        heading='Technologies we use for enterprise software'
        subheading='React, Next.js, Node.js, PostgreSQL, AWS / Azure / GCP, Kafka, Redis, Terraform, Docker, Kubernetes, and REST/GraphQL APIs — the stack that powers scalable, secure enterprise platforms built for high transaction volumes and complex integration landscapes.'
      />
      <PostReviewsCTA
        badge='Enterprise Software'
        heading='Building an Enterprise Software Project?'
        description="Tell us about your organisation, your current systems, and the operational or integration challenge you're trying to solve. We'll come back with a practical recommendation — no sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />
      <WeHelpWith
        heading='Our Services for Enterprise Organisations'
        description='Whether you need a custom ERP, a CRM platform, a business intelligence suite, a dedicated team of enterprise engineers, or a legacy modernisation programme — our Nepal-based teams work across the full enterprise software stack.'
        theme='light'
        items={weHelpWithItems}
      />
      <IndustrySectors
        badge='Enterprise verticals we serve'
        heading='Every Industry, One Engineering Partner'
        subheading='From financial services and manufacturing to professional services, retail, government, and energy — we have built production enterprise software across every major industry sector.'
        sectors={enterpriseSectors}
        bg='light'
      />
      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your enterprise software challenge'
        description="Whether you're building a custom ERP, replacing a legacy system, consolidating a fragmented SaaS stack, or launching an internal automation platform — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'Enterprise Software',
          formName: 'industry-enterprise',
          heading: 'Discuss your project',
          subheading: 'Share your organisation type, current systems, and what you are trying to build or automate.',
          ctaLabel: 'Send my details',
        }}
      />
      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
