'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ─── BRAND DATA (sourced from aitc.ai) ────────────────────────────────────────

const COMPANY = {
  legalName: 'AITC International Pvt. Ltd.',
  shortName: 'AITC',
  tagline: 'Transforming Ideas into Digital Reality.',
  website: 'https://aitc.ai',
  founded: '2021',
  headquarters: 'Bhaktapur, Nepal',
  certification: 'ISO 9001:2015 Certified',
  employees: '80+',
  projects: '90+',
  countries: '3',
  boilerplate:
    'AITC International is an ISO 9001:2015 certified software development company headquartered in Bhaktapur, Nepal, with offices in Dubai (UAE) and Texas (USA). Founded in 2021, AITC was built on a single mission: transforming ideas into digital reality. We partner with startups, SMEs, and enterprises across industries — from hospitality and e-commerce to education, logistics, law, and government — to deliver end-to-end technology solutions that drive measurable growth. Our services span custom software development, web development, mobile app development, UX/UI design, digital marketing, SEO, AR/VR solutions, IT support, and game development. With an 80+ strong multidisciplinary team of engineers, designers, and strategists, AITC has successfully delivered 90+ tech solutions to clients across the UAE, USA, and Nepal. Every project we take on is backed by rigorous quality standards, agile methodology, and a deep commitment to long-term client success.',
  emailNepal: 'info@aitc.ai',
  emailUAE: 'info@aitc.ai',
  emailUSA: 'info@aitc.ai',
  phoneNepalUAE: '+977 1 5900970',
  phoneUSA: '+1 (855) 551-0417',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/theaitc', icon: 'linkedin' },
    { label: 'Facebook', href: 'https://facebook.com/aitcInternational', icon: 'facebook' },
    { label: 'Instagram', href: 'https://instagram.com/aitc_international', icon: 'instagram' },
    { label: 'YouTube', href: 'https://youtube.com/@aitc_international', icon: 'youtube' },
  ],
};

const BRAND_COLORS = [
  { name: 'Primary Orange', hex: '#FF7500', usage: 'CTAs, highlights, accents' },
  { name: 'Secondary Purple', hex: '#3D2D72', usage: 'Headings, dark sections' },
  { name: 'Tertiary Yellow', hex: '#FFD506', usage: 'Accents, tertiary highlights' },
  { name: 'Main Black', hex: '#3C3C46', usage: 'Body text, headings' },
  { name: 'Border', hex: '#C2C2F0', usage: 'Borders, dividers' },
  { name: 'Light Background', hex: '#F8F8FF', usage: 'Card backgrounds, fills' },
  { name: 'Light Shade', hex: '#EDEDFF', usage: 'Badges, tag backgrounds' },
  { name: 'Grey', hex: '#949494', usage: 'Secondary text, metadata' },
];

const LOGO_VARIANTS = [
  { id: 'primary', label: 'Primary Logo', desc: 'For light backgrounds', bg: 'bg-white border border-lightShade1' },
  { id: 'dark-bg', label: 'Logo on Dark', desc: 'For dark backgrounds', bg: 'bg-secondary' },
  { id: 'brand-bg', label: 'Logo on Brand', desc: 'For orange backgrounds', bg: 'bg-primary' },
];

const KEY_FACTS = [
  { label: 'Founded', value: '2021' },
  { label: 'Headquarters', value: 'Bhaktapur' },
  { label: 'Global Offices', value: '3' },
  { label: 'Team Members', value: '80+' },
  { label: 'Projects Done', value: '90+' },
  { label: 'Countries', value: '3' },
  { label: 'Industries', value: '10+' },
  { label: 'Certified', value: 'ISO' },
];

const SERVICES = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'App Development', href: '/services/app-development' },
  { label: 'Software Development', href: '/services/software-development' },
  { label: 'UX/UI Design', href: '/services/ux-ui-design' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'SEO Services', href: '/services/seo-services' },
  { label: 'AR/VR Solutions', href: '/services/ar-vr-solutions' },
  { label: 'IT Support', href: '/services/it-support' },
  { label: 'Game Development', href: '/services/game-development' },
];

const QUICK_INFO = [
  { label: 'Legal Name', value: COMPANY.legalName },
  { label: 'Tagline', value: COMPANY.tagline },
  { label: 'Website', value: COMPANY.website },
  { label: 'Founded', value: COMPANY.founded },
  { label: 'HQ', value: COMPANY.headquarters },
  { label: 'Certification', value: COMPANY.certification },
];

const OFFICES = [
  {
    city: 'Bhaktapur',
    country: 'Nepal',
    type: 'Headquarters',
    address: 'AITC St., Radhe Radhe, Bhaktapur 44800',
    phone: COMPANY.phoneNepalUAE,
    email: COMPANY.emailNepal,
    flag: '/icons/nepal.png',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    type: 'Middle East Office',
    address: 'Dubai Silicon Oasis, DSO-IFZA, UAE',
    phone: COMPANY.phoneNepalUAE,
    email: COMPANY.emailUAE,
    flag: '/icons/uae.png',
  },
  {
    city: 'Flower Mound',
    country: 'USA',
    type: 'North America Office',
    address: '2201 Spinks Rd, Flower Mound, Texas 75022',
    phone: COMPANY.phoneUSA,
    email: COMPANY.emailUSA,
    flag: '/icons/usa.png',
  },
];

const BRAND_GUIDELINES = [
  {
    icon: (
      <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z' />
      </svg>
    ),
    title: 'Logo Usage',
    rules: [
      'Always use the original, unmodified logo files.',
      'Maintain clear space equal to the cap-height of the "A" on all sides.',
      'Never stretch, skew, rotate, or apply effects to the logo.',
      'Only use approved color variants — primary, white, or dark purple.',
      'Minimum logo size: 24px height for digital, 10mm for print.',
    ],
  },
  {
    icon: (
      <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z' />
      </svg>
    ),
    title: 'Color System',
    rules: [
      'Primary Orange (#FF7500) is reserved for CTAs, links, and key highlights only.',
      'Secondary Purple (#3D2D72) is the dominant heading and dark-section color.',
      'Tertiary Yellow (#FFD506) is used for accents and supporting highlights.',
      'Ensure WCAG AA contrast ratio (4.5:1) for all text on colored backgrounds.',
      'Do not introduce new brand colors without approval from the design team.',
    ],
  },
  {
    icon: (
      <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z' />
      </svg>
    ),
    title: 'Typography Rules',
    rules: [
      'Jones is the primary display font for print, stationery, and social media graphics.',
      'Lato is the web and digital brand typeface — used across all online surfaces.',
      'Use Black (900) for headings, Bold (700) for subheadings, Regular (400) for body.',
      'Minimum body text size is 14px digital / 10pt print.',
      'Line height for body copy should be 1.6–1.75 for optimal readability.',
    ],
  },
  {
    icon: (
      <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z' />
      </svg>
    ),
    title: 'Spacing & Layout',
    rules: [
      'Use a consistent 8px base unit for all margin and padding decisions.',
      'Content max-width is 1400px — never exceed this for full-width layouts.',
      'Section padding is 64px vertical on desktop, 40px on mobile.',
      'Cards and containers use 16px border-radius as the standard.',
      'Maintain adequate whitespace — never crowd branded elements together.',
    ],
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function CopyButton({ value, label = 'Copy' }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    void navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      type='button'
      onClick={copy}
      className='flex shrink-0 items-center gap-1.5 rounded-lg border border-lightShade1 bg-white px-3 py-1.5 text-sm font-semibold text-darkShade2 transition hover:border-primary hover:text-primary'
    >
      {copied ? (
        <>
          <svg className='size-3.5 text-green-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
          </svg>
          <span className='hidden xss:inline'>Copied!</span>
        </>
      ) : (
        <>
          <svg className='size-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184' />
          </svg>
          <span className='hidden xss:inline'>{label}</span>
        </>
      )}
    </button>
  );
}

function SocialIcon({ type }: { type: string }) {
  const cls = 'size-5';
  if (type === 'linkedin')
    return (
      <svg className={cls} fill='currentColor' viewBox='0 0 24 24'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    );
  if (type === 'facebook')
    return (
      <svg className={cls} fill='currentColor' viewBox='0 0 24 24'>
        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
      </svg>
    );
  if (type === 'instagram')
    return (
      <svg className={cls} fill='currentColor' viewBox='0 0 24 24'>
        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' />
      </svg>
    );
  if (type === 'youtube')
    return (
      <svg className={cls} fill='currentColor' viewBox='0 0 24 24'>
        <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
      </svg>
    );
  return null;
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className='border-b border-lightShade1 pb-4'>
      <p className='mb-1 text-xs font-black uppercase tracking-widest text-primary'>{label}</p>
      <h2 className='text-xl font-black text-secondary sm:text-2xl lg:text-3xl'>{title}</h2>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function PressKitContent() {
  return (
    <main className='min-h-screen bg-white font-lato text-base'>

      {/* ── HERO ── */}
      <div className='bg-gradient-to-br from-secondary to-lightSecondary'>
        <div className='common-padding mx-auto max-w-[1400px] py-12 sm:py-16 lg:py-20'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex-1'>
              <div className='mb-4 flex flex-wrap items-center gap-2'>
                <span className='inline-block rounded-full bg-primary/20 px-3.5 py-1 text-sm font-bold uppercase tracking-widest text-primary'>
                  Official Brand Resource
                </span>
                <span className='inline-block rounded-full bg-white/15 px-3.5 py-1 text-sm font-semibold text-white/80'>
                  {COMPANY.certification}
                </span>
              </div>
              <h1 className='mb-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl'>
                Media &amp; Press Kit
              </h1>
              <p className='max-w-xl text-base leading-relaxed text-white/75 sm:text-lg'>
                Official brand assets, guidelines, and company information for journalists, partners, and media professionals.
              </p>
              <div className='mt-6 flex flex-col gap-3 xss:flex-row'>
                <a
                  href='/svg/Logo.svg'
                  download='aitc-logo.svg'
                  className='inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white transition-opacity hover:opacity-90'
                >
                  <svg className='size-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3' />
                  </svg>
                  Download Logo
                </a>
                <Link
                  href='/contact-us'
                  className='inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20'
                >
                  Media Enquiries
                </Link>
              </div>
            </div>
            <div className='hidden size-36 shrink-0 items-center justify-center rounded-3xl bg-white/10 p-5 lg:flex xl:size-44'>
              <Image src='/icons/logo.png' alt='AITC Logo' width={130} height={130} className='object-contain' />
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className='common-padding mx-auto max-w-[1400px] py-10 sm:py-14 lg:py-16'>
        <div className='flex flex-col gap-12 sm:gap-16'>

          {/* ── COMPANY OVERVIEW ── */}
          <section>
            <SectionHeader label='Company' title='About AITC International' />
            <div className='mt-6 grid gap-6 lg:grid-cols-3'>
              <div className='rounded-2xl border border-lightShade1 bg-lightShad2 p-5 sm:p-7 lg:col-span-2'>
                <div className='mb-3 flex flex-wrap items-start justify-between gap-3'>
                  <h3 className='font-bold text-mainBlack'>Official Boilerplate</h3>
                  <CopyButton value={COMPANY.boilerplate} label='Copy Text' />
                </div>
                <p className='text-lg leading-relaxed text-darkShade2'>{COMPANY.boilerplate}</p>
              </div>
              <div className='flex flex-col gap-2.5'>
                {QUICK_INFO.map((item) => (
                  <div
                    key={item.label}
                    className='flex items-center justify-between gap-3 rounded-xl border border-lightShade1 bg-white px-4 py-3'
                  >
                    <div className='min-w-0 flex-1'>
                      <p className='text-xs font-bold uppercase tracking-wider text-grey'>{item.label}</p>
                      <p className='mt-0.5 truncate text-base font-semibold text-mainBlack'>{item.value}</p>
                    </div>
                    <CopyButton value={item.value} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── KEY FACTS ── */}
          <section>
            <SectionHeader label='By the Numbers' title='Key Facts & Statistics' />
            <div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4'>
              {KEY_FACTS.map((fact) => (
                <div key={fact.label} className='rounded-2xl border border-lightShade1 bg-white p-4 text-center'>
                  <p className='text-2xl font-black text-primary sm:text-3xl'>{fact.value}</p>
                  <p className='mt-1 text-sm font-semibold text-grey'>{fact.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── LOGOS ── */}
          <section>
            <SectionHeader label='Brand Assets' title='Logo & Usage' />
            <div className='mt-4 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 sm:px-5 sm:py-4'>
              <p className='mb-2 font-semibold text-primary'>Usage Guidelines</p>
              <ul className='flex flex-col gap-1.5'>
                {[
                  'Do not distort, rotate, or modify the logo proportions.',
                  'Maintain clear space equal to the height of the "A" letterform around the logo.',
                  'Do not recolor outside of the approved variants shown below.',
                  'Contact info@aitc.ai for high-resolution or vector (SVG / EPS) files.',
                ].map((rule) => (
                  <li key={rule} className='flex items-start gap-2 text-base text-darkShade2'>
                    <span className='mt-2 size-1.5 shrink-0 rounded-full bg-primary' />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-5 grid gap-4 sm:grid-cols-3'>
              {LOGO_VARIANTS.map((variant) => (
                <div key={variant.id} className='overflow-hidden rounded-2xl border border-lightShade1'>
                  <div className={`flex h-36 items-center justify-center p-6 sm:h-44 ${variant.bg}`}>
                    <Image
                      src='/icons/logo.png'
                      alt={`AITC Logo — ${variant.label}`}
                      width={110}
                      height={110}
                      className='max-h-20 w-auto object-contain sm:max-h-24'
                    />
                  </div>
                  <div className='flex items-center justify-between gap-3 border-t border-lightShade1 bg-white px-4 py-3'>
                    <div className='min-w-0'>
                      <p className='truncate font-bold text-mainBlack'>{variant.label}</p>
                      <p className='text-sm text-grey'>{variant.desc}</p>
                    </div>
                    <a
                      href='/svg/Logo.svg'
                      download={`aitc-logo-${variant.id}.svg`}
                      className='flex size-9 shrink-0 items-center justify-center rounded-xl bg-lightShad2 text-secondary transition hover:bg-primary hover:text-white'
                      title='Download PNG'
                    >
                      <svg className='size-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3' />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── BRAND COLORS ── */}
          <section>
            <SectionHeader label='Visual Identity' title='Brand Color Palette' />
            <div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'>
              {BRAND_COLORS.map((color) => (
                <div key={color.hex} className='overflow-hidden rounded-2xl border border-lightShade1 bg-white'>
                  <div className='h-16 w-full sm:h-20' style={{ backgroundColor: color.hex }} />
                  <div className='p-3 sm:p-4'>
                    <p className='font-bold text-mainBlack'>{color.name}</p>
                    <p className='mt-0.5 line-clamp-1 text-sm text-grey'>{color.usage}</p>
                    <div className='mt-2.5 flex items-center justify-between gap-1.5'>
                      <code className='rounded-md bg-lightShad2 px-2 py-1 text-sm font-bold text-mainBlack'>
                        {color.hex}
                      </code>
                      <CopyButton value={color.hex} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TYPOGRAPHY ── */}
          <section>
            <SectionHeader label='Type System' title='Typography' />
            <div className='mt-6 flex flex-col gap-4'>

              {/* Row 1 — Jones */}
              <div className='rounded-2xl border border-lightShade1 bg-white p-5 sm:p-7'>
                <div className='mb-3 flex flex-wrap items-center justify-between gap-3'>
                  <div className='flex flex-wrap items-center gap-2'>
                    <span className='rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary'>Print &amp; Social</span>
                    <span className='text-xs text-grey'>Primary Display Font</span>
                  </div>
                  <a
                    href='/resources/fonts/jones.zip'
                    download='AITC-Jones-Font.zip'
                    className='flex items-center gap-1.5 rounded-lg border border-lightShade1 bg-white px-3 py-1.5 text-sm font-semibold text-darkShade2 transition hover:border-primary hover:text-primary'
                  >
                    <svg className='size-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3' />
                    </svg>
                    Download Jones
                  </a>
                </div>
                <p className='text-5xl font-black leading-none text-secondary sm:text-6xl' style={{ fontFamily: 'serif' }}>Jones</p>
                <p className='mt-3 text-base text-darkShade2'>Used for stationery, social media graphics, signage, and print collateral. Bold display weight at −20 tracking.</p>
              </div>

              {/* Row 2 — Lato */}
              <div className='rounded-2xl border border-lightShade1 bg-white p-5 sm:p-7'>
                <div className='mb-3 flex flex-wrap items-center justify-between gap-3'>
                  <div className='flex flex-wrap items-center gap-2'>
                    <span className='rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-bold text-secondary'>Web &amp; Digital</span>
                    <span className='text-xs text-grey'>Secondary / Web Font</span>
                  </div>
                  <a
                    href='/resources/fonts/Lato.zip'
                    download='AITC-Lato-Font.zip'
                    className='flex items-center gap-1.5 rounded-lg border border-lightShade1 bg-white px-3 py-1.5 text-sm font-semibold text-darkShade2 transition hover:border-primary hover:text-primary'
                  >
                    <svg className='size-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3' />
                    </svg>
                    Download Lato
                  </a>
                </div>
                <p className='text-5xl font-black leading-none text-secondary sm:text-6xl'>Lato</p>
                <p className='mb-4 mt-3 text-base text-darkShade2'>Used across all digital surfaces — website, apps, UI elements, and email. Available in four weights.</p>
                <div className='flex flex-wrap gap-2'>
                  {[
                    { label: 'Light 300', cls: 'font-light' },
                    { label: 'Regular 400', cls: 'font-normal' },
                    { label: 'Bold 700', cls: 'font-bold' },
                    { label: 'Black 900', cls: 'font-black' },
                  ].map((w) => (
                    <span key={w.label} className={`rounded-xl border border-lightShade1 bg-lightShad2 px-3 py-1.5 text-sm text-mainBlack sm:px-4 sm:py-2 sm:text-base ${w.cls}`}>
                      {w.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 3 — Text Showcase */}
              <div className='rounded-2xl border border-lightShade1 bg-lightShad2 p-5 sm:p-7'>
                <p className='mb-4 text-xs font-black uppercase tracking-widest text-grey'>Type Showcase</p>
                <p className='text-5xl font-black leading-none text-mainBlack sm:text-6xl'>Aa</p>
                <p className='mt-4 text-2xl font-black text-secondary sm:text-3xl'>Transforming Ideas into Digital Reality.</p>
                <p className='mt-2 text-lg font-bold text-mainBlack'>The quick brown fox jumps over the lazy dog.</p>
                <p className='mt-2 text-base font-normal leading-relaxed text-darkShade2'>
                  AITC International delivers end-to-end technology solutions that drive measurable growth — from custom software and mobile apps to SEO, AR/VR, and game development.
                </p>
                <p className='mt-3 text-sm text-grey'>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ &nbsp;·&nbsp; abcdefghijklmnopqrstuvwxyz &nbsp;·&nbsp; 0123456789 &nbsp;·&nbsp; !@#$%^&amp;*()
                </p>
              </div>

            </div>
          </section>

          {/* ── BRAND GUIDELINES ── */}
          <section>
            <SectionHeader label='Brand Standards' title='Brand Guidelines' />
            <div className='mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-lightSecondary'>
              <div className='flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between'>
                <div className='flex-1'>
                  <div className='mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5'>
                    <svg className='size-4 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z' />
                    </svg>
                    <span className='text-sm font-bold text-white'>PDF Document</span>
                  </div>
                  <h3 className='mb-2 text-xl font-black text-white sm:text-2xl'>
                    AITC International Brand Guidelines 2026
                  </h3>
                  <p className='text-base leading-relaxed text-white/75'>
                    The complete guide covering logo usage, color system, typography, spacing, tone of voice, and do&apos;s &amp; don&apos;ts for all AITC brand communications.
                  </p>
                  <ul className='mt-3 flex flex-wrap gap-x-5 gap-y-1.5'>
                    {['Logo Rules', 'Color Palette', 'Typography', 'Iconography', 'Tone of Voice', "Do's & Don'ts"].map((tag) => (
                      <li key={tag} className='flex items-center gap-1.5 text-sm text-white/70'>
                        <span className='size-1.5 rounded-full bg-primary' />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex shrink-0 flex-col items-start gap-3 lg:items-end'>
                  <div className='flex size-16 items-center justify-center rounded-2xl bg-white/10 sm:size-20'>
                    <svg className='size-8 text-white sm:size-10' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z' />
                    </svg>
                  </div>
                  <a
                    href='/resources/Brand Guideline (AITC International).pdf'
                    download='AITC-Brand-Guidelines-2026.pdf'
                    className='inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 font-bold text-white transition-opacity hover:opacity-90'
                  >
                    <svg className='size-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3' />
                    </svg>
                    Download PDF
                  </a>
                  <p className='text-sm text-white/50'>PDF · Updated 2026</p>
                </div>
              </div>
            </div>
            <div className='mt-4 grid gap-4 sm:grid-cols-2'>
              {BRAND_GUIDELINES.map((pillar) => (
                <div key={pillar.title} className='rounded-2xl border border-lightShade1 bg-white p-5 sm:p-6'>
                  <div className='mb-4 flex items-center gap-3'>
                    <div className='flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary'>
                      {pillar.icon}
                    </div>
                    <h3 className='text-lg font-black text-mainBlack'>{pillar.title}</h3>
                  </div>
                  <ul className='flex flex-col gap-2.5'>
                    {pillar.rules.map((rule) => (
                      <li key={rule} className='flex items-start gap-2.5 text-base text-darkShade2'>
                        <svg className='mt-1 size-4 shrink-0 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z' clipRule='evenodd' />
                        </svg>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className='mt-4 flex flex-col gap-3 rounded-xl border border-lightShade1 bg-lightShad2 p-4 xss:flex-row xss:items-center sm:p-5'>
              <svg className='size-5 shrink-0 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z' />
              </svg>
              <p className='text-base text-darkShade2'>
                Need a printed or customized version?{' '}
                <Link href='/contact-us' className='font-semibold text-primary hover:underline'>
                  Contact our design team
                </Link>{' '}
                for tailored brand support.
              </p>
            </div>
          </section>

          {/* ── SERVICES ── */}
          <section>
            <SectionHeader label='What We Do' title='Core Services' />
            <div className='mt-6 grid grid-cols-1 gap-2.5 xss:grid-cols-2 lg:grid-cols-3'>
              {SERVICES.map((svc) => (
                <Link key={svc.label} href={svc.href} className='flex items-center gap-3 rounded-xl border border-lightShade1 bg-white px-4 py-3.5 transition hover:border-primary/40 hover:shadow-sm'>
                  <span className='size-2 shrink-0 rounded-full bg-primary' />
                  <span className='text-base font-semibold text-mainBlack'>{svc.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── OFFICES ── */}
          <section>
            <SectionHeader label='Global Presence' title='Our Offices' />
            <div className='mt-6 grid gap-4 sm:grid-cols-3'>
              {OFFICES.map((office) => (
                <div key={office.city} className='rounded-2xl border border-lightShade1 bg-white p-5 sm:p-6'>
                  <div className='mb-3 flex items-center gap-2'>
                    {office.flag ? (
                      <Image src={office.flag} alt={office.country} width={28} height={20} className='rounded object-cover' />
                    ) : (
                      <div className='flex size-7 items-center justify-center rounded bg-lightShade1'>
                        <svg className='size-4 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z' />
                        </svg>
                      </div>
                    )}
                    {office.type === 'Headquarters' && (
                      <span className='rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary'>HQ</span>
                    )}
                  </div>
                  <p className='text-lg font-black text-secondary'>{office.city}, {office.country}</p>
                  <p className='mt-0.5 text-sm text-grey'>{office.type}</p>
                  <p className='mt-3 flex items-start gap-2 text-base text-darkShade2'>
                    <svg className='mt-0.5 size-4 shrink-0 text-grey' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z' />
                    </svg>
                    {office.address}
                  </p>
                  <div className='mt-2 flex flex-col gap-1'>
                    <a href={`tel:${office.phone}`} className='flex items-center gap-2 text-sm text-darkShade2 hover:text-primary'>
                      <svg className='size-3.5 shrink-0 text-grey' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z' />
                      </svg>
                      {office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className='flex items-center gap-2 text-sm text-darkShade2 hover:text-primary'>
                      <svg className='size-3.5 shrink-0 text-grey' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75' />
                      </svg>
                      {office.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SOCIAL ── */}
          <section>
            <SectionHeader label='Follow Us' title='Social Media' />
            <div className='mt-6 grid grid-cols-1 gap-3 xss:grid-cols-2 lg:grid-cols-4'>
              {COMPANY.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 rounded-2xl border border-lightShade1 bg-white p-4 transition hover:border-primary/40 hover:shadow-sm sm:gap-4 sm:p-5'
                >
                  <div className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary'>
                    <SocialIcon type={social.icon} />
                  </div>
                  <div className='min-w-0'>
                    <p className='truncate font-bold text-mainBlack'>{social.label}</p>
                    <p className='truncate text-sm text-grey'>{social.href.replace('https://', '')}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* ── MEDIA CONTACT ── */}
          <section>
            <SectionHeader label='Get in Touch' title='Media & Press Contact' />
            <div className='mt-6 grid gap-5 lg:grid-cols-2'>
              <div className='rounded-2xl border border-lightShade1 bg-white p-5 sm:p-8'>
                <div className='mb-4 flex size-12 items-center justify-center rounded-xl bg-secondary/10'>
                  <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75' />
                  </svg>
                </div>
                <h3 className='mb-1 text-lg font-black text-mainBlack'>Press &amp; Media Enquiries</h3>
                <p className='mb-4 text-lg leading-relaxed text-darkShade2'>
                  For interview requests, press releases, partnership announcements, or brand asset requests, reach our team directly.
                </p>
                <div className='flex flex-col gap-2.5'>
                  {[
                    { label: 'Email', value: COMPANY.emailNepal },
                    { label: 'Nepal / UAE Phone', value: COMPANY.phoneNepalUAE },
                    { label: 'USA Phone', value: COMPANY.phoneUSA },
                  ].map((item) => (
                    <div key={item.label} className='flex items-center justify-between gap-3 rounded-xl bg-lightShad2 px-4 py-3'>
                      <div className='min-w-0'>
                        <p className='text-xs font-bold uppercase tracking-wide text-grey'>{item.label}</p>
                        <p className='truncate text-base font-semibold text-mainBlack'>{item.value}</p>
                      </div>
                      <CopyButton value={item.value} />
                    </div>
                  ))}
                </div>
              </div>

              <div className='overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-lightSecondary p-5 text-white sm:p-8'>
                <div className='mb-4 flex size-12 items-center justify-center rounded-xl bg-white/15'>
                  <svg className='size-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' />
                  </svg>
                </div>
                <h3 className='mb-2 text-lg font-black'>Need a Custom Asset?</h3>
                <p className='mb-4 text-base leading-relaxed text-white/80'>
                  Need high-res logos, product screenshots, or editorial approvals? We&apos;ll respond within 24 hours.
                </p>
                <ul className='mb-5 flex flex-col gap-2'>
                  {['High-res logos (SVG, EPS, PNG)', 'Product screenshots', 'Company fact sheets', 'Editorial use approvals'].map((item) => (
                    <li key={item} className='flex items-center gap-2 text-base text-white/90'>
                      <svg className='size-4 shrink-0 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z' clipRule='evenodd' />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href='/contact-us'
                  className='block w-full rounded-xl bg-primary py-3 text-center font-bold text-white transition-opacity hover:opacity-90'
                >
                  Request Brand Assets
                </Link>
              </div>
            </div>
          </section>

          {/* ── USAGE NOTICE ── */}
          <div className='rounded-2xl border border-lightShade1 bg-lightShad2 p-5 sm:p-6'>
            <p className='text-xs font-black uppercase tracking-widest text-grey'>Usage Notice</p>
            <p className='mt-2 text-lg leading-relaxed text-darkShade2'>
              All brand assets on this page are the exclusive property of AITC International Pvt. Ltd. and are provided solely for editorial, journalistic, and partner use. Unauthorized commercial use, modification, or redistribution without prior written consent is strictly prohibited. By downloading any asset from this page, you agree to comply with our brand guidelines.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
