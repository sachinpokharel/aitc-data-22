'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost, TechItem } from '@/data/blog/types';

// ─── TECH ICONS ───────────────────────────────────────────────────────────────

function TechIcon({ type }: { type: TechItem['iconType'] }) {
  const cls = 'size-7 text-primary';
  const sw = { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.5 } as const;

  const icons: Record<TechItem['iconType'], JSX.Element> = {
    ai: (
      <svg className={cls} {...sw}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z' />
      </svg>
    ),
    cloud: (
      <svg className={cls} {...sw}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z' />
      </svg>
    ),
    iot: (
      <svg className={cls} {...sw}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z' />
      </svg>
    ),
    analytics: (
      <svg className={cls} {...sw}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z' />
      </svg>
    ),
    chatbot: (
      <svg className={cls} {...sw}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z' />
      </svg>
    ),
    voice: (
      <svg className={cls} {...sw}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z' />
      </svg>
    ),
    contactless: (
      <svg className={cls} {...sw}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3' />
      </svg>
    ),
    predictive: (
      <svg className={cls} {...sw}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941' />
      </svg>
    ),
  };

  return icons[type] ?? icons.ai;
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className='size-3 text-primary' fill='currentColor' viewBox='0 0 20 20'>
      <path fillRule='evenodd' d='M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z' clipRule='evenodd' />
    </svg>
  );
}

function ArrowRight({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
    </svg>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function BlogTemplate({ post }: { post: BlogPost }) {
  const [activeId, setActiveId] = useState(post.toc[0]?.id ?? '');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const ids = post.toc.map((t) => t.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-15% 0% -70% 0%', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [post.toc]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { sections } = post;

  return (
    <div className='min-h-screen bg-white font-lato'>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <div className='relative h-[480px] w-full overflow-hidden sm:h-[560px]'>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className='object-cover object-center'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30' />
        <div className='absolute inset-0 flex flex-col justify-end common-padding pb-10 sm:pb-14'>
          <nav aria-label='Breadcrumb' className='mb-4 flex flex-wrap items-center gap-1.5 text-sm text-white/70'>
            <Link href='/' className='transition hover:text-white'>Home</Link>
            <span>/</span>
            <Link href='/blog' className='transition hover:text-white'>Blog</Link>
            <span>/</span>
            <span className='text-white/90 line-clamp-1'>{post.category}</span>
          </nav>
          <div className='mb-4 flex flex-wrap items-center gap-3'>
            <span className='rounded-full bg-primary px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white'>
              {post.category}
            </span>
            <span className='flex items-center gap-1.5 text-sm text-white/80'>
              <svg className='size-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
              </svg>
              {post.readTime}
            </span>
          </div>
          <h1 className='max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[2.75rem]'>
            {post.title}
          </h1>
          <div className='mt-5 flex flex-wrap items-center gap-4 text-sm text-white/80'>
            <div className='flex items-center gap-2'>
              <div className='flex size-8 items-center justify-center rounded-full bg-primary text-xs font-black text-white'>
                {post.author.initials}
              </div>
              <span>{post.author.name}</span>
            </div>
            <span className='hidden sm:block'>·</span>
            <span>{post.publishedAt}</span>
          </div>
        </div>
      </div>

      {/* ── ARTICLE LAYOUT ───────────────────────────────────────────── */}
      <div className='common-padding mx-auto max-w-[1400px] py-12 lg:py-16'>
        <div className='flex gap-12 xl:gap-16'>

          {/* ── MAIN ARTICLE ── */}
          <article className='min-w-0 flex-1'>

            {/* Intro block */}
            <div className='mb-10 rounded-2xl border border-lightShade1 bg-lightShad2 p-6 sm:p-8'>
              {post.intro.map((para, i) => (
                <p key={i} className={`leading-relaxed ${i === 0 ? 'text-lg font-semibold text-secondary' : 'mt-4 text-darkShade2'}`}>
                  {para}
                </p>
              ))}
            </div>

            {/* ── Understanding ── */}
            <section id='understanding' className='scroll-mt-24'>
              <h2 className='mb-5 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Understanding Restaurant Management Software Development
              </h2>
              {sections.understanding.desc.map((p, i) => (
                <p key={i} className='mb-4 leading-relaxed text-darkShade2'>{p}</p>
              ))}
              <h3 className='mb-4 mt-6 text-xl font-bold text-mainBlack'>Key Benefits</h3>
              <div className='grid gap-3 sm:grid-cols-2'>
                {sections.understanding.benefits.map((b) => (
                  <div key={b} className='flex items-start gap-3 rounded-xl bg-lightShad2 p-4'>
                    <span className='mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15'>
                      <CheckIcon />
                    </span>
                    <span className='text-sm font-medium text-mainBlack'>{b}</span>
                  </div>
                ))}
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Types ── */}
            <section id='types' className='scroll-mt-24'>
              <h2 className='mb-2 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Types of Restaurant Management Software Solutions
              </h2>
              <p className='mb-8 pl-5 leading-relaxed text-darkShade2'>
                Restaurants use different types of software depending on their operational needs, business model, and customer expectations.
              </p>
              <div className='grid gap-5 sm:grid-cols-2'>
                {sections.types.map((type) => (
                  <div key={type.num} className='group relative overflow-hidden rounded-2xl border border-lightShade1 bg-white p-6 transition-shadow hover:shadow-md'>
                    <span className='absolute right-4 top-4 text-3xl font-black text-lightShade1 transition group-hover:text-primary/20'>
                      {type.num}
                    </span>
                    <h3 className='mb-2 pr-12 text-base font-bold text-secondary'>{type.title}</h3>
                    <p className='text-sm leading-relaxed text-darkShade2'>{type.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Features ── */}
            <section id='features' className='scroll-mt-24'>
              <h2 className='mb-2 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Key Features of Restaurant Management Software
              </h2>
              <p className='mb-8 pl-5 leading-relaxed text-darkShade2'>
                While the exact features vary by software type, here are the most common features found across restaurant management solutions.
              </p>
              <div className='flex flex-col gap-4'>
                {sections.features.map((f, i) => (
                  <div key={i} className='flex gap-5 rounded-xl border border-lightShade1 p-5 transition-colors hover:border-primary/30 hover:bg-lightShad2'>
                    <div className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10'>
                      <span className='text-base font-black text-primary'>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className='mb-1 font-bold text-mainBlack'>{f.title}</h3>
                      <p className='text-sm leading-relaxed text-darkShade2'>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Process ── */}
            <section id='process' className='scroll-mt-24'>
              <h2 className='mb-2 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Restaurant Management Software Development Process
              </h2>
              <p className='mb-10 pl-5 leading-relaxed text-darkShade2'>
                Following a structured process ensures the final solution is secure, scalable, user-friendly, and aligned with your restaurant&apos;s needs.
              </p>
              <div className='relative flex flex-col gap-0'>
                <div className='absolute left-[19px] top-8 hidden h-[calc(100%-64px)] w-px bg-lightShade1 sm:block' aria-hidden />
                {sections.processSteps.map((s, idx) => (
                  <div key={s.step} className='relative flex gap-5 pb-8 last:pb-0'>
                    <div className='relative flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-black text-primary'>
                      {s.step}
                    </div>
                    <div className={`flex-1 rounded-xl border p-5 ${idx % 2 === 0 ? 'border-lightShade1 bg-white' : 'border-lightShade1 bg-lightShad2'}`}>
                      <h3 className='mb-1.5 font-bold text-secondary'>{s.title}</h3>
                      <p className='text-sm leading-relaxed text-darkShade2'>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Integrations ── */}
            <section id='integrations' className='scroll-mt-24'>
              <h2 className='mb-2 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Restaurant Management Software Integration
              </h2>
              <p className='mb-8 pl-5 leading-relaxed text-darkShade2'>
                These integrations help automate workflows, reduce manual tasks, and create a better experience for staff and customers.
              </p>
              <div className='grid gap-4 sm:grid-cols-2'>
                {sections.integrations.map((item, i) => (
                  <div key={i} className='flex gap-4 rounded-xl border border-lightShade1 bg-white p-5 transition hover:border-primary/40 hover:shadow-sm'>
                    <div className='mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10'>
                      <svg className='size-4 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='mb-1 text-sm font-bold text-mainBlack'>{item.title}</h3>
                      <p className='text-sm leading-relaxed text-darkShade2'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Technologies ── */}
            <section id='technologies' className='scroll-mt-24'>
              <h2 className='mb-2 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Advanced Technologies in Restaurant Management Software
              </h2>
              <p className='mb-8 pl-5 leading-relaxed text-darkShade2'>
                Modern technologies help restaurants enhance customer experiences, boost productivity, and make smarter business decisions.
              </p>
              <div className='grid gap-5 sm:grid-cols-2'>
                {sections.technologies.map((tech, i) => (
                  <div key={i} className='rounded-2xl border border-lightShade1 bg-white p-6 transition-shadow hover:shadow-md'>
                    <div className='mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10'>
                      <TechIcon type={tech.iconType} />
                    </div>
                    <h3 className='mb-2 font-bold text-secondary'>{tech.title}</h3>
                    <p className='text-sm leading-relaxed text-darkShade2'>{tech.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Challenges ── */}
            <section id='challenges' className='scroll-mt-24'>
              <h2 className='mb-2 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Challenges in Restaurant Management Software Development
              </h2>
              <p className='mb-8 pl-5 leading-relaxed text-darkShade2'>
                Understanding these challenges helps you build a more effective and scalable solution from the start.
              </p>
              <div className='flex flex-col gap-3'>
                {sections.challenges.map((item, i) => (
                  <div key={i} className='flex gap-4 rounded-xl border border-orange-100 bg-orange-50/50 p-5'>
                    <div className='mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/15'>
                      <svg className='size-4 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='mb-1 text-sm font-bold text-mainBlack'>{item.title}</h3>
                      <p className='text-sm leading-relaxed text-darkShade2'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Cost ── */}
            <section id='cost' className='scroll-mt-24'>
              <h2 className='mb-2 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Cost of Restaurant Management Software Development
              </h2>
              <p className='mb-8 pl-5 leading-relaxed text-darkShade2'>
                The cost depends on project complexity, features, integrations, technology stack, and long-term maintenance requirements.
              </p>
              <div className='overflow-x-auto rounded-2xl border border-lightShade1'>
                <table className='w-full min-w-[640px] text-sm'>
                  <thead>
                    <tr className='bg-secondary text-white'>
                      <th className='px-4 py-4 text-left font-bold'>Software Type</th>
                      <th className='px-4 py-4 text-left font-bold'>Key Features</th>
                      <th className='px-4 py-4 text-left font-bold whitespace-nowrap'>Cost (USD)</th>
                      <th className='px-4 py-4 text-left font-bold whitespace-nowrap'>Cost (NPR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sections.costTable.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-lightShad2'}>
                        <td className='px-4 py-3.5 font-semibold text-mainBlack'>{row.type}</td>
                        <td className='px-4 py-3.5 text-darkShade2'>{row.features}</td>
                        <td className='px-4 py-3.5 font-semibold text-primary whitespace-nowrap'>{row.usd}</td>
                        <td className='px-4 py-3.5 text-darkShade2 whitespace-nowrap'>{row.npr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='mt-6 rounded-2xl border border-lightShade1 bg-lightShad2 p-6'>
                <h3 className='mb-4 font-bold text-mainBlack'>Ongoing Costs to Consider</h3>
                <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
                  {sections.ongoingCosts.map((cost) => (
                    <div key={cost} className='flex items-center gap-2 text-sm text-darkShade2'>
                      <span className='size-1.5 shrink-0 rounded-full bg-primary' />
                      {cost}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Partner ── */}
            <section id='partner' className='scroll-mt-24'>
              <h2 className='mb-2 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Choosing the Right Restaurant Management Software Development Partner
              </h2>
              <p className='mb-8 pl-5 leading-relaxed text-darkShade2'>
                The success of your project largely depends on the expertise and reliability of your development partner.
              </p>
              <div className='flex flex-col gap-4'>
                {sections.partnerChecklist.map((item, i) => (
                  <div key={i} className='flex gap-4 rounded-xl border border-lightShade1 p-5 transition-colors hover:border-secondary/30 hover:bg-lightShad2'>
                    <div className='flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-black text-secondary'>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className='mb-1 font-bold text-mainBlack'>{item.title}</h3>
                      <p className='text-sm leading-relaxed text-darkShade2'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Why AITC ── */}
            <section id='why-aitc' className='scroll-mt-24'>
              <div className='overflow-hidden rounded-2xl bg-secondary text-white'>
                <div className='p-8 sm:p-10'>
                  <span className='mb-3 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary'>
                    Our Expertise
                  </span>
                  <h2 className='mb-4 text-2xl font-black sm:text-3xl'>
                    Why AITC International Might Be the Right Restaurant Management Software Development Partner
                  </h2>
                  {sections.whyAitc.body.map((p, i) => (
                    <p key={i} className='mb-4 leading-relaxed text-white/80'>{p}</p>
                  ))}
                  <div className='mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    {sections.whyAitc.services.map((svc) => (
                      <div key={svc} className='flex items-center gap-2.5 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium'>
                        <CheckIcon />
                        {svc}
                      </div>
                    ))}
                  </div>
                  <div className='mt-8'>
                    <Link href='/contact' className='inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-bold text-white transition-opacity hover:opacity-90'>
                      Get a Free Consultation
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* ── Future ── */}
            <section id='future' className='scroll-mt-24'>
              <h2 className='mb-5 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Future Trends in Restaurant Management Software Development
              </h2>
              {sections.futureTrends.body.map((p, i) => (
                <p key={i} className='mb-4 leading-relaxed text-darkShade2'>{p}</p>
              ))}
              <div className='mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                {sections.futureTrends.trends.map((trend) => (
                  <div key={trend} className='flex items-center gap-3 rounded-xl border border-lightShade1 bg-lightShad2 px-4 py-3 text-sm font-semibold text-secondary'>
                    <span className='size-2 rounded-full bg-primary' />
                    {trend}
                  </div>
                ))}
              </div>
            </section>

            <hr className='my-10 border-lightShade1' />

            {/* Conclusion */}
            <div className='rounded-2xl border-l-4 border-primary bg-lightShad2 p-6 sm:p-8'>
              <h2 className='mb-4 text-xl font-black text-secondary'>Conclusion</h2>
              {sections.conclusion.map((p, i) => (
                <p key={i} className={`leading-relaxed ${i < sections.conclusion.length - 1 ? 'mb-3 text-darkShade2' : 'font-semibold text-secondary'}`}>
                  {p}
                </p>
              ))}
            </div>

            <hr className='my-10 border-lightShade1' />

            {/* ── FAQs ── */}
            <section id='faqs' className='scroll-mt-24'>
              <h2 className='mb-8 border-l-4 border-primary pl-4 text-2xl font-black text-secondary sm:text-3xl'>
                Frequently Asked Questions (FAQs)
              </h2>
              <div className='flex flex-col gap-3'>
                {post.faqs.map((faq, i) => (
                  <div key={i} className='overflow-hidden rounded-xl border border-lightShade1'>
                    <button
                      type='button'
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className='flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-lightShad2'
                      aria-expanded={openFaq === i}
                    >
                      <span className='font-bold text-mainBlack'>{faq.q}</span>
                      <span className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-transform ${openFaq === i ? 'rotate-45 border-primary bg-primary text-white' : 'border-lightShade1 bg-white text-secondary'}`}>
                        <svg className='size-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                        </svg>
                      </span>
                    </button>
                    {openFaq === i && (
                      <div className='border-t border-lightShade1 bg-lightShad2 px-6 py-5'>
                        <p className='leading-relaxed text-darkShade2'>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className='hidden w-72 shrink-0 xl:block 2xl:w-80'>
            <div className='sticky top-24 flex flex-col gap-6'>

              {/* TOC */}
              <nav aria-label='Table of contents' className='rounded-2xl border border-lightShade1 bg-white p-5'>
                <p className='mb-4 text-xs font-black uppercase tracking-widest text-grey'>Table of Contents</p>
                <ul className='flex flex-col gap-0.5'>
                  {post.toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`block rounded-lg px-3 py-2 text-sm transition-all ${
                          activeId === item.id
                            ? 'bg-primary/10 font-semibold text-primary'
                            : 'text-darkShade2 hover:bg-lightShad2 hover:text-mainBlack'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Author Card */}
              <div className='rounded-2xl border border-lightShade1 bg-white p-5'>
                <p className='mb-4 text-xs font-black uppercase tracking-widest text-grey'>Written By</p>
                <div className='flex items-start gap-3'>
                  <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-black text-white'>
                    {post.author.initials}
                  </div>
                  <div className='min-w-0'>
                    <p className='font-bold text-mainBlack'>{post.author.name}</p>
                    <p className='text-sm text-grey'>{post.author.role}</p>
                  </div>
                </div>
                <p className='mt-4 text-sm leading-relaxed text-darkShade2'>
                  Our team of experienced developers, designers, and consultants delivers in-depth guides on software development best practices.
                </p>
                <div className='mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-grey'>
                  <span className='flex items-center gap-1.5'>
                    <svg className='size-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5' />
                    </svg>
                    {post.publishedAt}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <svg className='size-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Service CTA */}
              <div className='overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-lightSecondary p-6 text-white'>
                <span className='mb-3 inline-block rounded-full bg-primary/25 px-3 py-1 text-xs font-bold text-primary'>
                  Free Consultation
                </span>
                <h3 className='mb-3 text-lg font-black leading-snug'>
                  Ready to Build Your Restaurant Software?
                </h3>
                <p className='mb-5 text-sm leading-relaxed text-white/80'>
                  Our team specializes in custom restaurant software — POS systems, ordering platforms, inventory tools, and AI-powered solutions.
                </p>
                <ul className='mb-6 flex flex-col gap-2'>
                  {sections.whyAitc.services.slice(0, 4).map((svc) => (
                    <li key={svc} className='flex items-center gap-2 text-sm text-white/90'>
                      <CheckIcon />
                      {svc}
                    </li>
                  ))}
                </ul>
                <Link href='/contact' className='block w-full rounded-xl bg-primary py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90'>
                  Talk to Our Experts
                </Link>
                <Link href='/service/custom-software-development' className='mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-white/70 transition hover:text-white'>
                  View Our Services
                  <ArrowRight className='size-3.5' />
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
      <div className='bg-lightShad2 py-14 sm:py-16'>
        <div className='common-padding mx-auto max-w-[1400px]'>
          <div className='mb-8 flex items-end justify-between'>
            <div>
              <p className='mb-1 text-xs font-black uppercase tracking-widest text-grey'>Keep Reading</p>
              <h2 className='text-2xl font-black text-secondary sm:text-3xl'>Related Articles</h2>
            </div>
            <Link href='/blog' className='hidden items-center gap-1.5 text-sm font-bold text-primary hover:underline sm:flex'>
              View All <ArrowRight />
            </Link>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {post.relatedPosts.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className='group flex flex-col overflow-hidden rounded-2xl border border-lightShade1 bg-white transition-shadow hover:shadow-lg'
              >
                <div className='flex h-44 items-center justify-center bg-gradient-to-br from-secondary/10 to-secondary/20'>
                  <svg className='size-14 text-secondary/30' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z' />
                  </svg>
                </div>
                <div className='flex flex-1 flex-col p-6'>
                  <div className='mb-3 flex items-center gap-3'>
                    <span className='rounded-full bg-lightShade1 px-3 py-1 text-xs font-bold text-secondary'>{blog.category}</span>
                    <span className='text-xs text-grey'>{blog.readTime}</span>
                  </div>
                  <h3 className='mb-2 font-bold leading-snug text-mainBlack transition-colors group-hover:text-primary line-clamp-2'>
                    {blog.title}
                  </h3>
                  <p className='mb-4 flex-1 text-sm leading-relaxed text-darkShade2 line-clamp-2'>{blog.excerpt}</p>
                  <div className='flex items-center justify-between'>
                    <span className='text-xs text-grey'>{blog.date}</span>
                    <span className='flex items-center gap-1 text-sm font-bold text-primary'>
                      Read More
                      <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── PREV / NEXT ───────────────────────────────────────────────── */}
      <div className='common-padding mx-auto max-w-[1400px] py-10'>
        <div className='grid gap-4 sm:grid-cols-2'>
          {post.prevPost && (
            <Link href={`/blog/${post.prevPost.slug}`} className='group flex flex-col gap-1.5 rounded-2xl border border-lightShade1 bg-white p-6 transition-colors hover:border-secondary/40 hover:bg-lightShad2'>
              <span className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grey'>
                <svg className='size-4 transition-transform group-hover:-translate-x-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
                </svg>
                Previous Article
              </span>
              <span className='font-bold text-mainBlack transition-colors group-hover:text-secondary line-clamp-2'>
                {post.prevPost.title}
              </span>
            </Link>
          )}
          {post.nextPost && (
            <Link href={`/blog/${post.nextPost.slug}`} className={`group flex flex-col gap-1.5 rounded-2xl border border-lightShade1 bg-white p-6 transition-colors hover:border-secondary/40 hover:bg-lightShad2 ${!post.prevPost ? 'sm:col-start-2' : ''}`}>
              <span className='flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-wider text-grey'>
                Next Article
                <svg className='size-4 transition-transform group-hover:translate-x-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
                </svg>
              </span>
              <span className='text-right font-bold text-mainBlack transition-colors group-hover:text-secondary line-clamp-2'>
                {post.nextPost.title}
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* ── BACK TO TOP ── */}
      {showBackToTop && (
        <button
          type='button'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label='Back to top'
          className='fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-primary shadow-lg transition-opacity hover:opacity-90'
        >
          <svg className='size-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18' />
          </svg>
        </button>
      )}
    </div>
  );
}
