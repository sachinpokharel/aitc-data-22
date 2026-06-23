import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhoWeAre from '@/components/pages/aboutus/whoweare/WhoWeAre';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import StatsBar from '@/components/pages/static-components/StatsBar';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';

export const metadata: Metadata = {
  title: 'Our Team | Nepal-based Software Engineers | AITC International',
  description:
    'Meet the engineers, designers, and product specialists behind AITC International — 80+ people based in Kathmandu, Nepal, building software for clients across the US, UK, Australia, and Europe.',
  alternates: {
    canonical: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/our-team`,
  },
  openGraph: {
    title: 'Our Team | Nepal-based Software Engineers | AITC International',
    description:
      'Meet the engineers, designers, and product specialists behind AITC International — 80+ people based in Kathmandu, Nepal.',
    url: `${(process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai').replace(/\/$/, '')}/our-team`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const heroStats = [
  { value: '80+', label: 'Engineers & specialists' },
  { value: '10+', label: 'Years delivering software' },
  { value: '200+', label: 'Projects completed' },
  { value: '20+', label: 'Countries served' },
];

const values = [
  {
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' />
      </svg>
    ),
    title: 'Engineering excellence',
    desc: 'Every pull request, architecture decision, and deployment is held to the same standard — not because a process demands it, but because the people who use the software deserve it.',
  },
  {
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z' /><path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
    title: 'Transparent by default',
    desc: 'Weekly updates, honest timelines, no-surprise billing. If something is running late or over scope, you hear it from us — not from your own QA team.',
  },
  {
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' />
      </svg>
    ),
    title: 'Deep ownership',
    desc: 'Our engineers treat every product as their own. They flag issues before they become problems, propose improvements nobody asked for, and stay invested after the feature ships.',
  },
  {
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
    title: 'Continuous growth',
    desc: 'Every engineer has a personal learning budget, access to certifications, and structured mentoring. The best engineers want to keep getting better — and we make sure they can.',
  },
];

const lifeItems = [
  {
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' /><path strokeLinecap='round' strokeLinejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' />
      </svg>
    ),
    title: 'Kathmandu-based, globally connected',
    desc: 'Our offices are in Kathmandu, Nepal. Our engineers collaborate daily with clients in the US, UK, Australia, and Europe — and are experienced at working across time zones without friction.',
  },
  {
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
    title: 'Real products, real impact',
    desc: 'We do not build internal tools or throwaway demos. Our engineers ship live products used by real customers — from healthcare platforms handling patient data to fintech apps processing millions in transactions.',
  },
  {
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
    title: 'Fast career progression',
    desc: 'Junior engineers get structured mentoring and grow into senior and lead roles. We promote from within — many of our team leads started as fresh graduates.',
  },
  {
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
    title: 'A team that genuinely cares',
    desc: 'Annual retreats, team events, and a culture that respects work-life balance. We have retained over 85% of our engineers year-over-year — people stay because the work is meaningful and the team is good.',
  },
];

export default function OurTeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16'>
            {/* Left */}
            <div className='flex-1'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Our team</p>
              <h1 className='mt-3 max-w-2xl text-4xl font-bold text-secondary sm:text-5xl'>
                The people behind AITC
              </h1>
              <p className='mt-6 max-w-xl text-lg leading-relaxed text-mainBlack'>
                We are 80+ engineers, designers, and product specialists based in Kathmandu, Nepal — building software
                for startups and established businesses across the US, UK, Australia, and Europe.
              </p>
              <div className='mt-8 flex flex-wrap gap-4'>
                <a
                  href='#meet-the-team'
                  className='rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90'
                >
                  Meet the team ↓
                </a>
                <Link
                  href='/career'
                  className='rounded-lg border-2 border-secondary px-6 py-3 font-semibold text-secondary transition hover:bg-secondary hover:text-white'
                >
                  See open roles
                </Link>
              </div>
              <div className='mt-8 flex flex-wrap gap-x-6 gap-y-2'>
                {['Nepal-based, globally delivered', 'English-fluent team', '10+ years of experience'].map((item) => (
                  <span key={item} className='flex items-center gap-1.5 text-sm font-semibold text-secondary'>
                    <svg className='size-4 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — floating stat cards */}
            <div className='grid grid-cols-2 gap-4 lg:w-80 lg:shrink-0'>
              {[
                { value: '80+', label: 'Team members', accent: 'bg-primary' },
                { value: '10+', label: 'Years experience', accent: 'bg-secondary' },
                { value: '200+', label: 'Projects delivered', accent: 'bg-primary' },
                { value: '85%', label: 'Engineer retention', accent: 'bg-secondary' },
              ].map((s) => (
                <div key={s.label} className='rounded-2xl border border-lightShade1 bg-white p-5 shadow-sm'>
                  <p className={`mb-0.5 inline-block rounded-md px-2 py-0.5 text-xs font-bold text-white ${s.accent}`}>
                    {s.value}
                  </p>
                  <p className='mt-2 text-sm font-semibold text-secondary'>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsBar stats={heroStats} />

      <ClientLogos />

      {/* ── Values ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>How we work</p>
          <h2 className='mt-3 max-w-2xl text-3xl font-bold text-secondary sm:text-4xl'>
            The values that drive every project
          </h2>
          <p className='mt-4 max-w-xl text-lg text-mainBlack'>
            These are not aspirational values on a wall plaque. They are the working standards we hold ourselves to every day.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {values.map((v) => (
              <div key={v.title} className='rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                  {v.icon}
                </div>
                <h3 className='text-base font-bold text-secondary'>{v.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-grey'>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team members (API-driven) ── */}
      <section id='meet-the-team' className='bg-lightShad2'>
        <WhoWeAre />
      </section>

      {/* ── Life at AITC ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Life at AITC</p>
          <h2 className='mt-3 max-w-2xl text-3xl font-bold text-secondary sm:text-4xl'>
            What it is actually like to work here
          </h2>

          {/* Cards */}
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {lifeItems.map((item) => (
              <div key={item.title} className='rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                  {item.icon}
                </div>
                <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-grey'>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className='mt-14'>
            {/* Row 1 — wide left, two smalls right */}
            <div className='grid grid-cols-2 gap-3 lg:grid-cols-4'>
              <div className='relative col-span-2 h-56 overflow-hidden rounded-2xl sm:h-64 lg:col-span-2 lg:h-72'>
                <Image
                  src='/images/collab-1.png'
                  alt='AITC team collaborating in the office'
                  fill
                  className='object-cover transition duration-500 hover:scale-105'
                  sizes='(max-width: 1024px) 100vw, 50vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent' />
                <span className='absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/80'>
                  Engineering
                </span>
              </div>
              <div className='relative h-56 overflow-hidden rounded-2xl sm:h-64 lg:h-72'>
                <Image
                  src='/images/gather.png'
                  alt='Team gathering and bonding'
                  fill
                  className='object-cover transition duration-500 hover:scale-105'
                  sizes='(max-width: 1024px) 50vw, 25vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent' />
                <span className='absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/80'>
                  Culture
                </span>
              </div>
              <div className='relative h-56 overflow-hidden rounded-2xl sm:h-64 lg:h-72'>
                <Image
                  src='/images/people.jpg'
                  alt='AITC team members'
                  fill
                  className='object-cover transition duration-500 hover:scale-105'
                  sizes='(max-width: 1024px) 50vw, 25vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent' />
                <span className='absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/80'>
                  Team
                </span>
              </div>
            </div>

            {/* Row 2 — two smalls left, wide right */}
            <div className='mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4'>
              <div className='relative h-48 overflow-hidden rounded-2xl lg:h-60'>
                <Image
                  src='/images/collab-2.png'
                  alt='Engineers in a code review'
                  fill
                  className='object-cover transition duration-500 hover:scale-105'
                  sizes='(max-width: 1024px) 50vw, 25vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent' />
                <span className='absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/80'>
                  Reviews
                </span>
              </div>
              <div className='relative h-48 overflow-hidden rounded-2xl lg:h-60'>
                <Image
                  src='/images/collab-3.png'
                  alt='Design and product team working'
                  fill
                  className='object-cover transition duration-500 hover:scale-105'
                  sizes='(max-width: 1024px) 50vw, 25vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent' />
                <span className='absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/80'>
                  Design
                </span>
              </div>
              <div className='relative col-span-2 h-48 overflow-hidden rounded-2xl lg:col-span-2 lg:h-60'>
                <Image
                  src='/images/helping-group.jpg'
                  alt='Team members helping and mentoring'
                  fill
                  className='object-cover transition duration-500 hover:scale-105'
                  sizes='(max-width: 1024px) 100vw, 50vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent' />
                <span className='absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/80'>
                  Mentorship
                </span>
              </div>
            </div>

            {/* Row 3 — four equal thumbnails */}
            <div className='mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4'>
              {[
                { src: '/images/collab-4.png', alt: 'Team sprint planning', label: 'Planning' },
                { src: '/images/annapurna-galaries.jpg', alt: 'Team retreat at Annapurna', label: 'Retreat' },
                { src: '/images/collabaration.png', alt: 'Cross-team collaboration session', label: 'Collaboration' },
                { src: '/images/why-choose.jpg', alt: 'AITC office environment', label: 'Office' },
              ].map((img) => (
                <div key={img.src} className='relative h-36 overflow-hidden rounded-2xl sm:h-44'>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className='object-cover transition duration-500 hover:scale-105'
                    sizes='(max-width: 640px) 50vw, 25vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent' />
                  <span className='absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/80'>
                    {img.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Departments ── */}
      <section className='common-padding bg-lightShad2 py-16 md:py-20'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Our disciplines</p>
          <h2 className='mt-3 max-w-2xl text-3xl font-bold text-secondary sm:text-4xl'>Built across every layer of the stack</h2>
          <div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
            {[
              { label: 'Frontend', icon: '⬡' },
              { label: 'Backend', icon: '◎' },
              { label: 'Mobile', icon: '▣' },
              { label: 'UI / UX', icon: '◈' },
              { label: 'QA & Testing', icon: '◉' },
              { label: 'Project Management', icon: '◫' },
            ].map((d) => (
              <div
                key={d.label}
                className='flex flex-col items-center gap-2 rounded-xl border border-lightShade1 bg-white px-4 py-6 text-center shadow-sm'
              >
                <span className='text-2xl'>{d.icon}</span>
                <span className='text-sm font-semibold text-secondary'>{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PostReviewsCTA
        badge='Join the team'
        heading="We're always looking for great engineers"
        description="If you're a developer, designer, or project manager who wants to work on real international products with a team that takes craft seriously — we would love to hear from you."
        primaryLabel='See open roles'
        primaryHref='/career'
        secondaryLabel='Learn about AITC'
        secondaryHref='/aboutus'
      />

      <StickyMobileCTA quoteLabel='See open roles' quoteHref='/career' />
    </>
  );
}
