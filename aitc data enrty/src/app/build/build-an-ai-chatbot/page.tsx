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
  chatbotIndustrySectors,
  chatbotModuleTabs,
  faqs,
  heroFormData,
  heroStats,
  pricingTiers,
  processSteps,
  weHelpWithItems,
  whenCards,
} from '@/data/build/build-an-ai-chatbot-data';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build an AI Chatbot | Custom AI Chatbot Development | AITC',
  description:
    'Build a custom AI chatbot trained on your data — customer support, internal knowledge assistant, or lead qualification. GPT-4o, Claude, or self-hosted for full data privacy.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-an-ai-chatbot`,
  },
  openGraph: {
    title: 'Build an AI Chatbot | Custom AI Chatbot Development | AITC',
    description:
      'Build a custom AI chatbot trained on your data — customer support, internal knowledge assistant, or lead qualification. GPT-4o, Claude, or self-hosted for full data privacy.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}build/build-an-ai-chatbot`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function BuildAIChatbotPage() {
  return (
    <>
      <BuildHeroWithForm data={heroFormData} />

      <StatsBar stats={heroStats} />

      <ClientLogos />

      <CardGrid
        badge='Is a custom AI chatbot right for you?'
        heading='When You Need a Custom AI Chatbot'
        description='Generic chatbots give generic answers. If your customers or team need accurate, context-aware responses based on your actual business data, you need a chatbot built and trained for you.'
        cards={whenCards}
        bg='white'
      />

      <Solutions
        badge='Modular architecture'
        heading='AI Chatbot Modules We Build'
        subheading='Start with a focused use case and expand to omnichannel, voice, and deep integrations as your confidence in the technology grows.'
        tabs={chatbotModuleTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get Chatbot Estimate'
        ctaHref='/free-project-estimate'
      />

      <ProcessSteps
        badge='How we work'
        heading='From use case discovery to go-live in 4 phases'
        steps={processSteps}
        bg='white'
        ctaLabel='Start with a free scoping call'
        ctaHref='/free-project-estimate'
      />

      <Technologies
        heading='The AI stack behind your chatbot'
        subheading='GPT-4o, Claude 3.5, Llama, LangChain, Pinecone, PostgreSQL pgvector, Next.js, and AWS — chosen for accuracy, speed, and the data privacy level your business requires.'
      />

      <PricingCards
        badge='Investment'
        heading='From a focused single-use chatbot to a full enterprise AI assistant — your call'
        tiers={pricingTiers}
      />

      <IndustrySectors
        badge='Industries we serve'
        heading='AI Chatbots for Every Industry'
        subheading='Every industry has different data, compliance needs, and conversation patterns. We build to match.'
        sectors={chatbotIndustrySectors}
        bg='light'
      />

      <PostReviewsCTA
        badge='Custom AI Chatbot Development'
        heading='Ready to Build an AI Chatbot That Actually Knows Your Business?'
        description="Tell us your use case, the data you want the bot trained on, and your channel requirements — and we'll scope a custom AI chatbot that gives your users answers worth trusting."
        primaryLabel='Get Chatbot Estimate'
        primaryHref='/free-project-estimate'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='We Also Help With'
        description='An AI chatbot works best when it is connected to the rest of your tech stack. Whether you need a CRM to capture lead data from conversations, a booking platform to close appointments in-chat, or a full SaaS product to wrap around your AI, our Nepal-based teams build the complete system.'
        theme='light'
        items={weHelpWithItems}
      />

      <BottomCTAForm
        badge='Ready to build?'
        heading="Let's scope your AI chatbot and get you a fixed estimate"
        description="Share your use case, the data sources you want the bot trained on, and your channel requirements — we'll come back with an architecture recommendation, timeline, and cost range."
        bullets={[
          'Free scoping call included',
          'Fixed-price estimate available',
          'NDA on request before any discussion',
        ]}
        form={{
          preselectedService: 'Custom AI Chatbot Development',
          formName: 'bofu-ai-chatbot',
          heading: 'Get your AI chatbot estimate',
          subheading:
            "Tell us your use case and data requirements and we'll respond with an architecture plan and cost range within 24 hours.",
          ctaLabel: 'Send my requirements',
        }}
      />

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get Chatbot Estimate' quoteHref='/free-project-estimate' />
    </>
  );
}
