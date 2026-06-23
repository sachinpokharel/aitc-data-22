import {
  complianceItems,
  educationProjectTabs,
  educationSectors,
  faqs,
  heroData,
  heroStats,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/education-software-development-data';
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
  title: 'Education Software Development | LMS, EdTech & Learning Platforms | AITC',
  description:
    'AITC builds education software — custom LMS platforms, student information systems, online course marketplaces, assessment tools, and corporate training platforms. Nepal-based engineers, global delivery.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/education-software-development`,
  },
  openGraph: {
    title: 'Education Software Development | LMS, EdTech & Learning Platforms | AITC',
    description:
      'AITC builds education software — custom LMS platforms, student information systems, online course marketplaces, assessment tools, and corporate training platforms.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/industries/education-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function EducationIndustryPage() {
  return (
    <>
      <IndustryHero data={heroData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Who we work with'
        heading='Education organisations at every stage of digital transformation'
        description="Education software covers dozens of different use cases — from university SIS to EdTech startup MVPs. We've built for institutions, startups, and enterprise L&D teams."
        cards={whoWeWorkWith}
        bg='white'
      />

      <PainPointsTable
        badge='Why education companies come to us'
        heading='When off-the-shelf LMS platforms stop serving your learners'
        description='Generic learning platforms get courses online quickly. But as your learner base grows and your pedagogy evolves, the ceiling of what is configurable becomes very real.'
        items={painPoints}
        bg='light'
      />

      <Solutions
        badge='What we build'
        heading='Systems We Build for Education Organisations'
        subheading="Every platform type below we've designed, built, and delivered for real education businesses — from SCORM-compliant LMS to high-engagement tutoring marketplaces."
        tabs={educationProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your project'
        ctaHref='/request-a-quote'
        stickyScroll
      />

      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Compliance & standards'
            heading='Built to meet education industry requirements'
            description='SCORM compliance, student data privacy, accessibility, and academic integrity controls are architecture decisions — built into every education platform from the start.'
            items={complianceItems}
          />
        </div>
      </section>

      <ProcessSteps
        badge='How we work with education clients'
        heading='From learning model discovery to a platform your learners actually complete'
        steps={processSteps}
        bg='white'
      />

      <Technologies
        heading='Technologies we use for education software'
        subheading='Next.js, React, Node.js, PostgreSQL, Mux video streaming, Stripe, AWS, and SCORM/xAPI — the stack that powers engaging, fast-loading, and standards-compliant learning platforms.'
      />

      <PostReviewsCTA
        badge='Education & EdTech'
        heading='Building an Education Software Project?'
        description="Tell us about your learners, your current platform, and the completion or engagement challenge you're trying to solve. We'll come back with a practical recommendation."
        primaryLabel='Talk to our team'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='Our Services for Education Organisations'
        description='Whether you need a custom LMS, an EdTech MVP, a tutoring marketplace, or a mobile learning app — our Nepal-based teams work across the full education technology stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <IndustrySectors
        badge='Education verticals we serve'
        heading='Every Education Sector, One Engineering Partner'
        subheading='From university learning management systems to corporate L&D platforms — we have built production software across every major education category.'
        sectors={educationSectors}
        bg='light'
      />

      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your education software challenge'
        description="Whether you're building a custom LMS, an EdTech marketplace, or a corporate training platform — share the details and we'll come back with a practical recommendation."
        bullets={['Response within 24 hours', 'Free discovery call included', 'NDA available before any discussion']}
        form={{
          preselectedIndustry: 'Education & EdTech',
          formName: 'industry-education',
          heading: 'Discuss your project',
          subheading: 'Share your learner type, current platform, and what you are trying to build.',
          ctaLabel: 'Send my details',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Discuss your project' quoteHref='/request-a-quote' />
    </>
  );
}
