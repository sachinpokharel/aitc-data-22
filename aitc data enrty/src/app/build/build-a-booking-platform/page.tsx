import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import BuildHeroWithForm from '@/components/pages/static-components/BuildHeroWithForm';
import CardGrid from '@/components/pages/static-components/CardGrid-points';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import IndustrySectors from '@/components/pages/static-components/IndustrySectors';
import Solutions from '@/components/pages/static-components/list-solution';
import PricingCards from '@/components/pages/static-components/PricingCards';
import ProcessSteps from '@/components/pages/static-components/ProcessSteps';
import StatsBar from '@/components/pages/static-components/StatsBar';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import WeHelpWith from '@/components/pages/static-components/Wehelpwith';
import {
  bookingIndustrySectors,
  bookingModuleTabs,
  faqs,
  heroFormData,
  heroStats,
  pricingTiers,
  processSteps,
  weHelpWithItems,
  whenCards,
} from '@/data/build/build-a-booking-platform-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build a Booking Platform | Custom Booking System Development | AITC',
  description:
    'Build a custom booking platform with real-time scheduling, payments, memberships, and automated reminders — fully branded, zero per-booking fees, and built around your availability rules.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-booking-platform`,
  },
  openGraph: {
    title: 'Build a Booking Platform | Custom Booking System Development | AITC',
    description:
      'Build a custom booking platform with real-time scheduling, payments, memberships, and automated reminders — fully branded, zero per-booking fees, and built around your availability rules.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-a-booking-platform`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildBookingPlatformPage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a custom booking platform right for you?'
        heading='When You Need a Custom Booking Platform'
        description='Generic booking tools are built for the average business. If your availability rules, payment model, or customer experience are anything but average, you need something built for you.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='Booking Modules We Build'
        subheading='Start with core scheduling and payments, then add memberships, a mobile app, or a marketplace layer as your business grows.'
        tabs={bookingModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get Booking Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From booking flow discovery to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The stack behind your booking platform'
        subheading='React, Next.js, Node.js, PostgreSQL, Stripe, Twilio, and AWS — chosen for real-time availability accuracy, payment security, and the reliability your customers expect.'
      />

      <PricingCards
        badge='Investment'
        heading='From a lean single-location scheduler to a full enterprise booking suite — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Industries we serve'
        heading='Booking Platforms for Every Service Business'
        subheading='Every service business manages availability differently. We build to match.'
        sectors={bookingIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom Booking Platform Development'
        heading='Ready to Own Your Booking Experience?'
        description="Tell us about your services, availability rules, and how customers currently book — and we'll scope a custom platform that eliminates per-booking fees and fits your workflow perfectly."
        primaryLabel='Get Booking Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='We Also Help With'
        description='A booking platform is often the customer-facing layer of a larger business system. Whether you need a CRM to track customer history, an HRMS to connect staff scheduling with payroll, or a marketplace to let multiple providers take bookings, our Nepal-based teams deliver the full stack.'
        theme='light'
        items={weHelpWithItems}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your booking platform and get you a fixed estimate"
        description="Share your services, availability setup, and payment model — we'll come back with a feature breakdown, timeline, and cost range."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Booking Platform Development',
          formName: 'bofu-booking',
          heading: 'Get your booking platform estimate',
          subheading:
            "Tell us your scheduling requirements and we'll respond with a feature breakdown and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get Booking Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
