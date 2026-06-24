import {
  aiAgentProjectTabs,
  aiAgentSectors,
  complianceItems,
  faqs,
  heroStats,
  heroWithFormData,
  painPoints,
  processSteps,
  weHelpWithItems,
  whoWeWorkWith,
} from '@/data/industries/ai-agent-development-data';
import { type Metadata } from 'next';
import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import BuildHeroWithForm from '@/components/pages/static-components/BuildHeroWithForm';
import CardGrid from '@/components/pages/static-components/CardGrid';
import ComplianceSlider from '@/components/pages/static-components/compliance';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
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
  title: 'AI Agent Development Services | Custom AI Agents for Business | AITC',
  description:
    'AITc builds custom AI agents that automate workflows, handle repetitive tasks, connect with business tools, and help teams move faster with reliable agentic AI systems.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/ai-agent-development-services`,
  },
  openGraph: {
    title: 'AI Agent Development Services | Custom AI Agents for Business | AITC',
    description:
      'AITc builds custom AI agents that automate workflows, handle repetitive tasks, connect with business tools, and help teams move faster with reliable agentic AI systems.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/ai-agent-development-services`,
    type: 'website',
    siteName: 'AITC International',
  },
};

export default function AIAgentDevelopmentPage() {
  return (
    <>
      <BuildHeroWithForm data={heroWithFormData} />
      <StatsBar stats={heroStats} />
      <ClientLogos />
      <CardGrid
        badge='Who we work with'
        heading='Teams that need AI agents to get real work done'
        description='Wherever your team spends time on repetitive work, an agent can help. We build for operations leaders, support teams, sales organisations, and technology leaders who need reliable automation — not just impressive demos.'
        cards={whoWeWorkWith}
        bg='white'
      />
      <PainPointsTable
        badge='Why teams come to us'
        heading='When manual work, disconnected tools, and repetitive tasks cost more than automation would'
        description='Most AI tools stop at conversation. When your team needs systems that actually take action — updating records, routing requests, processing documents, and completing tasks across your stack — that is when you need a custom AI agent.'
        items={painPoints}
        bg='light'
      />
      <Solutions
        badge='What we build'
        heading='Our AI Agent Development Services'
        subheading='From a single workflow agent to a coordinated fleet, here is how we help you automate the work slowing your team down.'
        tabs={aiAgentProjectTabs}
        sectionClassName='bg-white'
        ctaLabel='Discuss your use case'
        ctaHref='/request-a-quote'
        stickyScroll
      />
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <ComplianceSlider
            badge='Reliability & safety'
            heading='AI agents built to be trusted in production — not just impressive in demos'
            description='Autonomous systems need to be trustworthy. We build in guardrails, human-in-the-loop checkpoints, and rigorous evaluation so your agent behaves predictably and safely — not unpredictably in front of your customers or inside your critical workflows.'
            items={complianceItems}
          />
        </div>
      </section>
      <ProcessSteps
        badge='How we build AI agents'
        heading='From idea to working AI agent — with you involved at every stage'
        steps={processSteps}
        bg='white'
      />
      <Technologies
        heading='Technologies we use to build AI agents'
        subheading='OpenAI, Anthropic Claude, Google Gemini, open-source LLMs, LangChain, LlamaIndex, RAG pipelines, vector databases, Python, Node.js, FastAPI — and integrations with Salesforce, HubSpot, Slack, Stripe, Twilio, and custom APIs. We are model-agnostic and choose the stack that best fits your accuracy, latency, and budget needs.'
      />
      <PostReviewsCTA
        badge='AI Agent Development'
        heading='Ready to Put AI Agents to Work?'
        description="Whether you want to automate one painful workflow or build a fleet of agents across your business, AITc International is ready to be your development partner. Let us spend 30 minutes finding your highest-value automation opportunity — no commitment, no jargon, no hype."
        primaryLabel='Book an AI Agent Strategy Call'
        primaryHref='/request-a-quote'
        secondaryLabel='Send us your use case'
        secondaryHref='/book-a-free-consultation'
      />
      <WeHelpWith
        heading='Our AI Agent Development Services'
        description='Whether you need a custom workflow agent, AI integration across your stack, a multi-agent system, or a strategic roadmap for automation — our team handles the full lifecycle from scoping to deployment and beyond.'
        theme='light'
        items={weHelpWithItems}
      />
      <IndustrySectors
        badge='Industries we serve'
        heading='AI Agent Development for Every Industry'
        subheading='We bring relevant experience across sectors — building agents that understand the workflows, compliance requirements, and operational constraints of your industry.'
        sectors={aiAgentSectors}
        bg='light'
      />
      <BottomCTAForm
        badge='Working on a project?'
        heading='Tell us about your automation use case'
        description="Whether you want to automate customer support, accelerate your sales team, streamline operations, or replace manual data entry — share the details and we will come back with a practical recommendation."
        bullets={['We reply within 24 hours', 'NDA available on request', 'No sales pressure']}
        form={{
          preselectedIndustry: 'AI Agent Development',
          formName: 'service-ai-agent-development',
          heading: 'Discuss your use case',
          subheading: 'Share your workflow, the tools you use, and what you are trying to automate.',
          ctaLabel: 'Send my details',
        }}
      />
      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Book a strategy call' quoteHref='/request-a-quote' />
    </>
  );
}
