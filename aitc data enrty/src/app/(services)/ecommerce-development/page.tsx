import { type Metadata } from 'next';
import Link from 'next/link';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import InlineInquiryForm from '@/components/pages/static-components/InlineInquiryForm';
import Solutions, { type SolutionTab } from '@/components/pages/static-components/solution';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import WeHelpWith from '@/components/pages/static-components/Wehelpwith';

export const metadata: Metadata = {
  title: 'E-Commerce Software Development | Custom Stores & Marketplaces | AITC',
  description:
    'Custom e-commerce development — multi-vendor marketplaces, headless storefronts, inventory systems, and subscription platforms built by Nepal-based engineers.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}ecommerce-development`,
  },
  openGraph: {
    title: 'E-Commerce Software Development | Custom Stores & Marketplaces | AITC',
    description:
      'Custom e-commerce development — multi-vendor marketplaces, headless storefronts, inventory systems, and subscription platforms.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}ecommerce-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const ecommerceSolutionTabs: SolutionTab[] = [
  {
    label: 'Custom Storefront',
    desc: 'A storefront built around your brand — custom product pages, checkout flows, promotional logic, and performance optimisation. Not a theme, not a limitation. Every interaction designed for conversion.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Multi-Vendor Marketplace',
    desc: 'A seller-sided marketplace with onboarding flows, commission structures, split payments via Stripe Connect, product moderation queues, and individual seller dashboards with analytics.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
    href: '/build-a-marketplace-app',
  },
  {
    label: 'Headless Commerce',
    desc: 'API-first commerce infrastructure decoupled from the frontend — use Next.js, React Native, or any channel while the backend handles cart, catalog, pricing, and checkout logic independently.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    label: 'Inventory & Warehouse',
    desc: 'Real-time stock tracking, automatic reorder triggers, barcode/RFID scanning, multi-warehouse allocation, and supplier-facing portals that eliminate manual stock discrepancies.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
        />
      </svg>
    ),
  },
  {
    label: 'Order Management',
    desc: 'End-to-end order lifecycle — picking, packing, shipping integrations (FedEx, UPS, DHL, Shippo), returns management, refund automation, and proactive customer communication.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
        />
      </svg>
    ),
  },
  {
    label: 'Subscription Commerce',
    desc: 'Recurring billing infrastructure with trial management, dunning automation, churn analytics, pause/skip logic, payment method recovery, and subscriber lifecycle dashboards.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
        />
      </svg>
    ),
  },
];

const whenCards = [
  {
    title: "Shopify or WooCommerce can't keep up",
    desc: 'Complex pricing tiers, custom checkout logic, and catalogs beyond 10,000 SKUs push platform limits fast. Custom removes the ceiling entirely.',
  },
  {
    title: 'You need a multi-vendor marketplace',
    desc: 'Third-party seller onboarding, split payments, and commission management require custom architecture — no off-the-shelf platform handles this well.',
  },
  {
    title: 'Your checkout is losing conversions',
    desc: 'Generic checkout flows average 70%+ abandonment. A checkout designed around your customer journey and trust signals cuts that number significantly.',
  },
  {
    title: 'Deep integrations are breaking down',
    desc: 'ERP, WMS, 3PL, accounting, and loyalty programs — when your integration stack gets complex, a custom platform becomes the glue that holds it all together.',
  },
];

const pricingTiers = [
  {
    name: 'Custom Storefront',
    price: '$30K – $80K',
    timeline: '10–18 weeks',
    desc: 'A fully custom e-commerce store or feature-enhanced Shopify/WooCommerce build with bespoke checkout, catalog, and integration logic.',
    features: [
      'Custom product catalog & search',
      'Checkout flow optimisation',
      'Payment gateway integration',
      'Basic inventory management',
      'CMS-managed content pages',
      'Mobile-first responsive design',
    ],
    highlight: false,
    cta: 'Get a storefront estimate',
  },
  {
    name: 'Full Commerce Platform',
    price: '$80K – $200K',
    timeline: '20–36 weeks',
    desc: 'Complete custom e-commerce platform with advanced inventory, order management, loyalty programs, and third-party ERP/WMS integrations.',
    features: [
      'Multi-channel product management',
      'Advanced order & fulfilment system',
      'Customer loyalty & rewards engine',
      'ERP/WMS/3PL integrations',
      'Analytics & reporting dashboard',
      'Multi-currency & tax support',
      'Optional seller portal',
    ],
    highlight: true,
    cta: 'Get a platform estimate',
  },
  {
    name: 'Enterprise Marketplace',
    price: '$200K – $500K+',
    timeline: '36–60+ weeks',
    desc: 'Multi-vendor marketplace platform with seller management, commission engine, fraud detection, and enterprise-grade infrastructure.',
    features: [
      'Multi-vendor seller onboarding',
      'Commission & split payment engine',
      'Product moderation & approval',
      'Seller analytics dashboard',
      'Advanced fraud detection',
      'API ecosystem & webhooks',
      'White-label mobile apps',
    ],
    highlight: false,
    cta: 'Get a marketplace estimate',
  },
];

const whyAitc = [
  {
    title: '70% less than UK / US / AU rates',
    desc: 'Our engineers are based in Kathmandu, Nepal. Senior-level expertise, fluent English, and overlapping timezones with Australia, the UK, and the US — at a fraction of the local rate.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Fixed-price projects, no surprises',
    desc: 'We scope and price before we start. No hourly billing ambiguity, no scope creep invoices. If we misestimate, we absorb it — the agreed price is what you pay.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
        />
      </svg>
    ),
  },
  {
    title: '100% IP transfer on day one',
    desc: 'Full source code ownership, signed before any work begins. No lock-in to our platform, no recurring licence fees, no proprietary dependencies. It is yours outright.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
        />
      </svg>
    ),
  },
  {
    title: 'E-commerce specialists, not generalists',
    desc: 'Our engineers have built checkout flows, marketplace backends, subscription engines, and ERP integrations. They know the problems before you describe them.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
  },
  {
    title: 'PCI-DSS & compliance baked in',
    desc: 'Security and compliance are architecture decisions, not afterthoughts. Tokenised payments, GDPR-ready data flows, and accessibility standards are default — not upsells.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
        />
      </svg>
    ),
  },
  {
    title: 'Working demo every 2 weeks',
    desc: 'Agile sprints mean you see real, testable software throughout the build — not a big reveal at the end. Feedback loops are short, direction changes are cheap.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z'
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    timing: 'Week 1',
    title: 'Discovery & strategy',
    desc: 'We audit your current platform, map customer journeys, identify drop-off points, and define the architecture and integration stack.',
  },
  {
    step: '02',
    timing: 'Weeks 2–3',
    title: 'UX design & architecture',
    desc: 'Checkout flow, product discovery, mobile UX, and data model — all designed for conversion before a single line of code is written.',
  },
  {
    step: '03',
    timing: 'Weeks 4–N',
    title: 'Development & integrations',
    desc: 'Agile sprints with working demos every 2 weeks. Payments, shipping, ERP, and analytics wired in progressively as we go.',
  },
  {
    step: '04',
    timing: 'Final phase',
    title: 'Launch & optimise',
    desc: 'Load testing, SEO URL migration from your old platform, go-live support, and 30-day post-launch monitoring.',
  },
];

const faqs = [
  {
    question: 'When should we choose custom over Shopify or WooCommerce?',
    answer:
      'Custom makes sense when you need complex pricing logic, multi-vendor functionality, deep ERP/WMS integrations, or a checkout flow that platforms cannot support natively. If your needs are standard, a platform build is faster and cheaper — we build both and will recommend the right approach for your situation.',
  },
  {
    question: 'Can you build a marketplace like Etsy or Amazon?',
    answer:
      'Yes. We build multi-vendor marketplaces with seller onboarding, product moderation, commission structures, split payments via Stripe Connect, and separate seller analytics dashboards. Most marketplace builds start from $200K depending on feature scope.',
  },
  {
    question: 'Do you handle payment gateway integration?',
    answer:
      'Yes. We integrate Stripe, PayPal, Braintree, Razorpay, and custom payment processors. We also support subscription billing, instalment payments, multi-currency transactions, and buy-now-pay-later providers.',
  },
  {
    question: 'Can you migrate our existing store to a custom platform?',
    answer:
      'Yes — we handle full data migrations from Shopify, WooCommerce, Magento, and other platforms. Product data, customer records, order history, and SEO URL structure are all preserved and remapped during migration.',
  },
  {
    question: 'How do you handle high-traffic events like Black Friday?',
    answer:
      'We build on horizontally scalable infrastructure (AWS/GCP) with auto-scaling, CDN integration, database read replicas, and caching layers. We run load tests against projected peak traffic before every major sales event.',
  },
  {
    question: 'Do you integrate with ERP or warehouse management systems?',
    answer:
      'Yes. We regularly integrate e-commerce platforms with ERPs (SAP, Odoo, custom builds), warehouse management systems, 3PLs (ShipBob, Flexport), and accounting tools (Xero, QuickBooks). We build the middleware if no native connector exists.',
  },
  {
    question: 'What happens to our SEO rankings when we switch platforms?',
    answer:
      'SEO migration is built into every platform switch. We map all old URLs to new ones, implement 301 redirects, preserve meta data and structured data, regenerate sitemaps, and monitor ranking stability for 30 days post-launch.',
  },
  {
    question: 'Do you build mobile shopping apps?',
    answer:
      'Yes. We build React Native mobile apps for iOS and Android connected to the same backend as your web store — shared cart, order history, push notifications, and loyalty integration included.',
  },
  {
    question: 'What does an e-commerce project typically cost?',
    answer:
      'A custom storefront starts from $30K. A full commerce platform with advanced features runs $80K–$200K. Enterprise multi-vendor marketplaces typically start at $200K. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'Who owns the code and IP?',
    answer:
      '100% you. Full IP transfer is signed before any work begins. The source code, database schemas, and all documentation belong to you outright — no lock-in, no recurring licence fees.',
  },
];

export default function EcommercePage() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden bg-primary/10'>
        <div className='pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-primary/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-24 -left-24 size-[360px] rounded-full bg-primary/10 blur-2xl' />
        <div
          className='pointer-events-none absolute inset-0 opacity-30'
          style={{
            backgroundImage: 'radial-gradient(circle, #FF7500 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className='common-padding relative py-16 md:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              {/* Left — copy */}
              <div>
                <span className='mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm'>
                  <span className='size-1.5 rounded-full bg-primary' />
                  E-Commerce & Retail · Custom Platforms
                </span>
                <h1 className='mb-6 text-4xl font-bold leading-tight text-secondary md:text-5xl lg:text-6xl'>
                  E-Commerce Software Built Around <span className='text-primary'>Your Customers</span>
                </h1>
                <p className='mb-8 max-w-xl text-lg leading-relaxed text-mainBlack md:text-xl'>
                  Custom storefronts, multi-vendor marketplaces, and headless commerce platforms that handle high
                  traffic, complex catalogs, and checkout flows designed to convert.
                </p>
                <div className='flex flex-col gap-4 sm:flex-row'>
                  <Link
                    href='/request-a-quote'
                    className='rounded-md bg-secondary px-7 py-3.5 text-center font-semibold text-white transition-colors hover:bg-purple-800'
                  >
                    Discuss your project →
                  </Link>
                  <Link
                    href='/book-a-free-consultation'
                    className='rounded-md border-2 border-secondary px-7 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white'
                  >
                    Book a free consultation
                  </Link>
                </div>
                <ul className='mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mainBlack'>
                  <li>
                    <span className='text-primary'>✓</span> 100% IP ownership
                  </li>
                  <li>
                    <span className='text-primary'>✓</span> Platform migration included
                  </li>
                  <li>
                    <span className='text-primary'>✓</span> Free scoping call
                  </li>
                </ul>
              </div>

              {/* Right — sales dashboard card */}
              <div className='hidden lg:block'>
                <div className='relative mx-auto max-w-sm'>
                  <div className='rounded-2xl border border-primary/20 bg-white/80 p-7 shadow-xl backdrop-blur-sm'>
                    <div className='mb-5 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-full bg-primary/10'>
                        <svg
                          className='size-5 text-primary'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                          />
                        </svg>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-widest text-primary'>
                          Today&apos;s snapshot
                        </p>
                        <p className='text-sm font-semibold text-secondary'>Your store, in real time</p>
                      </div>
                    </div>
                    <div className='space-y-2.5'>
                      {[
                        { label: 'Orders received', value: '284', change: '+18%', up: true },
                        { label: 'Revenue today', value: '$24,830', change: '+12%', up: true },
                        { label: 'Conversion rate', value: '3.2%', change: '+0.4%', up: true },
                        { label: 'Cart abandonment', value: '42%', change: '-28%', up: true },
                      ].map((metric) => (
                        <div
                          key={metric.label}
                          className='flex items-center justify-between rounded-lg border border-lightShade1 bg-lightShad2 px-4 py-2.5'
                        >
                          <span className='text-sm text-secondary'>{metric.label}</span>
                          <div className='flex items-center gap-2'>
                            <span className='font-semibold text-secondary'>{metric.value}</span>
                            <span className='text-xs font-semibold text-green-600'>{metric.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5'>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-secondary'>99.7%</p>
                        <p className='text-xs text-grey'>Payment success</p>
                      </div>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-secondary'>&lt;150ms</p>
                        <p className='text-xs text-grey'>Avg. page load</p>
                      </div>
                    </div>
                  </div>
                  {/* Floating badges */}
                  <div className='absolute -bottom-4 -left-6 rounded-xl bg-secondary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>70% cost savings</p>
                    <p className='text-[10px] text-white/60'>vs UK / US / AU rates</p>
                  </div>
                  <div className='absolute -right-4 -top-4 rounded-xl bg-primary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>From $30K all-in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='border-t border-white/10 bg-secondary text-white'>
        <div className='common-padding mx-auto max-w-screen-2xl py-10'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            {[
              { value: '150K+', label: 'Daily orders handled' },
              { value: '28%', label: 'Avg. cart abandonment reduction' },
              { value: '90+', label: 'Payment & shipping integrations' },
              { value: '99.9%', label: 'Platform uptime SLA' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className='text-4xl font-bold'>{stat.value}</p>
                <p className='mt-1 text-xs font-bold uppercase tracking-widest text-white/70'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* When to go custom */}
      <section className='common-padding py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Is custom right for you?</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            When platforms like Shopify stop being enough
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Off-the-shelf platforms are fast to launch but slow to scale. Here&apos;s when our clients made the switch.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {whenCards.map((card) => (
              <div key={card.title} className='rounded-xl border border-lightShade1 bg-white p-6'>
                <h3 className='text-base font-bold text-secondary'>{card.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AITC */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Why AITC</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why e-commerce companies choose AITC to build their platforms
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Senior engineers, fixed-price projects, and full IP ownership — without the UK or US price tag.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whyAitc.map((item) => (
              <div key={item.title} className='rounded-xl border border-lightShade1 bg-white p-6'>
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                  {item.icon}
                </div>
                <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <Solutions
        badge='What we build'
        heading='E-Commerce Solutions We Deliver'
        subheading='From a single storefront to a full multi-vendor marketplace — start with what you need now and scale from there.'
        tabs={ecommerceSolutionTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get a project estimate'
        ctaHref='/request-a-quote'
      />

      {/* Process */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>How we work</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            From discovery to a store that converts — in 4 phases
          </h2>
          <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {processSteps.map((step) => (
              <div key={step.step} className='rounded-xl border border-lightShade1 bg-white p-7'>
                <p className='font-mono text-base text-primary'>
                  {step.step} · {step.timing}
                </p>
                <h3 className='mt-3 text-xl font-bold text-secondary'>{step.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{step.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href='/request-a-quote'
            className='mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90'
          >
            Start with a free scoping call →
          </Link>
        </div>
      </section>

      <Technologies
        heading='The stack behind high-performance e-commerce'
        subheading='Next.js, Node.js, Stripe, Algolia, AWS, and more — chosen for speed, reliability, and developer experience.'
      />

      {/* Investment */}
      <section className='border-y border-lightShade1 bg-white py-20 md:py-28'>
        <div className='common-padding mx-auto max-w-screen-2xl'>
          <p className='text-center text-xs font-bold uppercase tracking-widest text-primary'>Investment</p>
          <h2 className='mt-3 text-center text-3xl font-bold text-secondary sm:text-4xl'>
            A storefront, a platform, or a full marketplace — your call
          </h2>
          <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl p-8 ${
                  tier.highlight ? 'bg-secondary text-white shadow-2xl' : 'border border-lightShade1 bg-white'
                }`}
              >
                {tier.highlight && (
                  <span className='absolute -top-3 left-6 rounded bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white'>
                    Most popular
                  </span>
                )}
                <h3 className={`text-xl font-bold ${tier.highlight ? 'text-white' : 'text-secondary'}`}>{tier.name}</h3>
                <p className='mt-1 text-base font-semibold text-primary'>{tier.price}</p>
                <p className={`mt-3 text-base leading-relaxed ${tier.highlight ? 'text-white/75' : 'text-grey'}`}>
                  {tier.desc}
                </p>
                <ul className='mt-6 flex-1 space-y-2.5 text-base'>
                  {tier.features.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 ${tier.highlight ? 'text-white/85' : 'text-mainBlack'}`}
                    >
                      <svg
                        className='mt-0.5 size-4 shrink-0 text-primary'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <span
                  className={`mt-6 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    tier.highlight ? 'bg-white/10 text-white/80' : 'bg-primary/10 text-primary'
                  }`}
                >
                  {tier.timeline}
                </span>
                <Link
                  href='/request-a-quote'
                  className={`mt-4 rounded-md px-5 py-3 text-center text-base font-semibold transition-colors hover:opacity-90 ${
                    tier.highlight
                      ? 'bg-primary text-white'
                      : 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  {tier.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <PostReviewsCTA
        badge='E-Commerce Software Development'
        heading='Ready to Outgrow Your Current Platform?'
        description="Tell us about your store and we'll scope a custom platform that removes the ceiling on your growth — not a template, a system built entirely around your business."
        primaryLabel='Discuss my project'
        primaryHref='/request-a-quote'
        secondaryLabel='Book a Free Consultation'
        secondaryHref='/book-a-free-consultation'
      />

      <WeHelpWith
        heading='We Also Help With'
        description='E-commerce is one part of a broader digital growth strategy. From mobile shopping apps to ERP integrations and dedicated offshore teams, our Nepal-based engineers cover every layer of the technology stack at 70% less than local development rates — without the timezone friction.'
        theme='light'
        tabs={[
          {
            key: 'services',
            label: 'Services',
            items: [
              {
                iconBg: 'bg-[#fff3e8]',
                iconColor: 'text-[#ff7500]',
                title: 'Custom Software Development',
                desc: 'End-to-end software built around your unique business processes.',
                href: '/custom-software-development',
              },
              {
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600',
                title: 'Mobile App Development',
                desc: 'iOS and Android apps that extend your store to mobile shoppers.',
                href: '/mobile-application-development',
              },
              {
                iconBg: 'bg-[#f1eef8]',
                iconColor: 'text-[#3d2d72]',
                title: 'SaaS Development',
                desc: 'Multi-tenant commerce platforms built to scale from day one.',
                href: '/services/saas-development',
              },
              {
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600',
                title: 'Build a Marketplace App',
                desc: 'Multi-vendor marketplace with seller management and split payments.',
                href: '/build-a-marketplace-app',
              },
              {
                iconBg: 'bg-teal-100',
                iconColor: 'text-teal-600',
                title: 'Dedicated Development Team',
                desc: 'Long-term engineers embedded in your e-commerce product team.',
                href: '/services/dedicated-development-team',
              },
              {
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
                title: 'Build an ERP System',
                desc: 'Connect your store to finance, HR, and inventory in one platform.',
                href: '/build-an-erp-system',
              },
            ],
          },
          {
            key: 'industries',
            label: 'Industries',
            items: [
              {
                iconBg: 'bg-pink-100',
                iconColor: 'text-pink-600',
                title: 'Fashion & Apparel',
                desc: 'Size-matrix catalogs, virtual try-on, and returns management for clothing brands.',
                href: '/industries/retail-software-development',
              },
              {
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600',
                title: 'Fintech & Payments',
                desc: 'Embedded finance, BNPL, and payment gateway infrastructure for commerce.',
                href: '/industries/fintech-software-development',
              },
              {
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
                title: 'Healthcare & Wellness',
                desc: 'HIPAA-compliant commerce for supplements, equipment, and telehealth products.',
                href: '/industries/healthcare-software-development',
              },
              {
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600',
                title: 'Food & Grocery',
                desc: 'Same-day delivery platforms, dark stores, and recipe-to-cart experiences.',
                href: '/industries/restaurant-hospitality-software-development',
              },
              {
                iconBg: 'bg-[#f1eef8]',
                iconColor: 'text-[#3d2d72]',
                title: 'Education & Courses',
                desc: 'Course marketplaces, cohort enrollment, and digital product delivery platforms.',
                href: '/industries/education-software-development',
              },
              {
                iconBg: 'bg-teal-100',
                iconColor: 'text-teal-600',
                title: 'Real Estate',
                desc: 'Property listing platforms, virtual tours, and agent marketplace solutions.',
                href: '/industries/real-estate-software-development',
              },
            ],
          },
        ]}
      />

      {/* Final CTA + Form */}
      <section className='relative overflow-hidden bg-secondary text-white'>
        <svg
          className='absolute inset-x-0 top-0 h-32 w-full opacity-30'
          viewBox='0 0 1440 128'
          fill='none'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <path
            d='M0 100 L220 40 L400 90 L600 20 L800 85 L1000 35 L1200 90 L1440 55'
            stroke='#486581'
            strokeWidth='1'
          />
        </svg>
        <div className='common-padding relative mx-auto max-w-screen-2xl py-20 md:py-28'>
          <div className='grid items-start gap-10 lg:grid-cols-[2fr_3fr]'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Ready to build?</p>
              <h2 className='mt-3 text-3xl font-bold sm:text-4xl'>Let&apos;s scope your e-commerce platform</h2>
              <p className='mt-4 text-lg leading-relaxed text-white/85'>
                Share your requirements and we&apos;ll come back with an architecture recommendation, timeline, and cost
                range — no obligation, no commitment.
              </p>
              <ul className='mt-8 space-y-3 text-white/85'>
                <li>✓ Free scoping call included</li>
                <li>✓ Fixed-price estimate available</li>
                <li>✓ NDA on request before any discussion</li>
              </ul>
            </div>
            <InlineInquiryForm
              preselectedService='E-Commerce Development'
              preselectedIndustry='E-Commerce & Retail'
              formName='bofu-ecommerce'
              heading='Get your project estimate'
              subheading="Tell us your requirements and we'll respond with a solution recommendation within 24 hours."
              ctaLabel='Send my requirements'
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get a project estimate' quoteHref='/request-a-quote' />
    </>
  );
}
