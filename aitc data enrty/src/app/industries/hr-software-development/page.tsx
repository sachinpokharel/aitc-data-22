import {
  complianceItems,
  hrProjectTabs,
  hrSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/hr-software-development-data';
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
  title: 'HR Software Development | HRMS, ATS & Payroll Platforms | AITC',
  description:
    'AITC builds custom HR software — HRMS platforms, applicant tracking systems, payroll engines, performance management, and workforce analytics. Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}industries/hr-software-development`,
  },
  openGraph: {
    title: 'HR Software Development | HRMS, ATS & Payroll Platforms | AITC',
    description:
      'AITC builds custom HR software — HRMS platforms, applicant tracking systems, payroll engines, performance management, and workforce analytics.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}industries/hr-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function HRIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='HR teams and HR software companies at every scale'
        description="HR software needs vary enormously — from a 100-person company's first HRMS to a global PEO managing thousands of employees across multiple jurisdictions. We've built for all of them."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why HR teams come to us'
        heading='When per-seat HRMS fees and manual processes stop making sense'
        description='Generic HR platforms work up to a point. When your org structure, payroll rules, or performance model are complex enough that the software forces your HR team to work around it — that is the point to build custom.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for HR Teams'
        subheading="Every system type below we've designed, built, and delivered for real HR organisations — from HRMS to ATS, payroll to people analytics."
        tabs={hrProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & security'
            heading='Built to meet HR data and employment law requirements'
            description='Employee data privacy, payroll tax compliance, and employment law requirements are built into the architecture — not added as an afterthought after your first compliance audit.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with HR clients'
        heading='From HR process discovery to a platform your team uses every day'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for HR software'
        subheading='Next.js, React, Node.js, PostgreSQL, Stripe, DocuSign, Twilio, and AWS — the stack that powers compliant, scalable HR platforms with the performance your employees and administrators expect.'
      />

      <PostReviewsCTA
        badge='HR & Workforce Management'
        heading='Building an HR Software Project?'
        description="Tell us about your HR processes, your headcount, and what your current system cannot do. We'll come back with a practical recommendation — no sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for HR Teams'
        description='Whether you need a custom HRMS, a standalone ATS, a payroll engine, or a corporate LMS — our Nepal-based teams work across the full HR technology stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='HR verticals we serve'
        heading='Every HR Segment, One Engineering Partner'
        subheading='From mid-size company HRMS to enterprise workforce platforms — we have built production HR software across every major segment.'
        sectors={hrSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your HR software challenge'
        description="Whether you're replacing a legacy HRMS, building a new ATS, or launching an HR SaaS product — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'HR & Workforce Management',
          formName: 'industry-hr',
          heading: 'Discuss your project',
          subheading: 'Share your org size, current HR system, and what you are trying to build or fix.',
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
