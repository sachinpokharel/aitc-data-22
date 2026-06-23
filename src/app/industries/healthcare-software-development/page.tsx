import {
  complianceItems,
  healthcareProjectTabs,
  healthcareSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/healthcare-software-development-data';
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
  title: 'Healthcare Software Development | EHR, Telemedicine & Patient Portals | AITC',
  description:
    'AITC builds healthcare software — custom EHR/EMR platforms, telemedicine systems, patient portals, medical billing, and clinical workflow tools. HIPAA-compliant builds, Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/healthcare-software-development`,
  },
  openGraph: {
    title: 'Healthcare Software Development | EHR, Telemedicine & Patient Portals | AITC',
    description:
      'AITC builds healthcare software — custom EHR/EMR platforms, telemedicine systems, patient portals, medical billing, and clinical workflow tools. HIPAA-compliant builds.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/healthcare-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function HealthcareIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='Healthcare organisations at every point of care'
        description="Healthcare software spans an enormous range — GP practices, hospital networks, digital health startups, and health insurers all need fundamentally different systems. We've built for all of them."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why healthcare organisations come to us'
        heading='When clinical admin burden and disconnected systems cost you patient time'
        description='Off-the-shelf clinic management tools work up to a point. When your documentation burden, billing rejections, or integration gaps outgrow what generic platforms allow — that is the point to build custom.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for Healthcare Organisations'
        subheading="Every system type below we've designed, built, and delivered for real healthcare clients — from GP practice management to full EHR platforms and HIPAA-compliant telemedicine."
        tabs={healthcareProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & regulatory'
            heading='Built for healthcare regulatory requirements from the first sprint'
            description='HIPAA, GDPR, HL7/FHIR interoperability, and NHS data standards are designed into the architecture from day one — not added as an afterthought before your first audit or regulatory submission.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with healthcare clients'
        heading='From clinical workflow discovery to a system your care team actually uses'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for healthcare software'
        subheading='React Native, Node.js, PostgreSQL, AWS (HIPAA BAA eligible), HL7/FHIR APIs, Twilio Video, Auth0, and Stripe — the stack that powers HIPAA-compliant patient portals, telemedicine platforms, and clinical workflow systems.'
      />

      <PostReviewsCTA
        badge='Healthcare & MedTech'
        heading='Building a Healthcare Software Project?'
        description="Tell us about your organisation, your current systems, and the clinical or operational challenge you're trying to solve. We'll come back with a practical recommendation — no sales pitch."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for Healthcare Organisations'
        description='Whether you need a custom EHR, a telemedicine platform, a HIPAA-compliant patient portal, or a dedicated team of healthcare software engineers — our Nepal-based teams work across the full clinical and health technology stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='Healthcare verticals we serve'
        heading='Every Care Setting, One Engineering Partner'
        subheading='From primary care and hospital networks to telehealth startups and MedTech device companies — we have built production software across every major healthcare category.'
        sectors={healthcareSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your healthcare software challenge'
        description="Whether you're building a custom EHR, launching a telemedicine platform, or modernising a legacy clinical system — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'Healthcare & MedTech',
          formName: 'industry-healthcare',
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
