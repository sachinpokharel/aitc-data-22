'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { GenericBlogPost } from '@/data/blog/types';

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className='size-3 text-primary' fill='currentColor' viewBox='0 0 20 20'>
      <path
        fillRule='evenodd'
        d='M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z'
        clipRule='evenodd'
      />
    </svg>
  );
}

function ArrowRight({ className = 'size-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2.5}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
    </svg>
  );
}

// ─── INLINE CTA ───────────────────────────────────────────────────────────────

function InlineCTA({
  title,
  services,
}: {
  title: string;
  services: string[];
}) {
  return (
    <div className='my-10 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-lightSecondary'>
      <div className='flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:p-8'>
        {/* Left: text */}
        <div className='flex-1'>
          <span className='mb-3 inline-block rounded-full bg-primary/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary'>
            Free Consultation
          </span>
          <h3 className='mb-2 text-xl font-black leading-snug text-white sm:text-2xl'>{title}</h3>
          <p className='mb-4 text-sm leading-relaxed text-white/75'>
            Our team at AITC International helps you scope, design, and build scalable SaaS
            products — from MVP planning to post-launch support.
          </p>
          {services.length > 0 && (
            <ul className='flex flex-wrap gap-x-5 gap-y-1.5'>
              {services.slice(0, 4).map((svc) => (
                <li key={svc} className='flex items-center gap-1.5 text-sm text-white/85'>
                  <svg
                    className='size-3.5 shrink-0 text-primary'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {svc}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Right: button */}
        <div className='flex shrink-0 flex-col gap-3'>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90'
          >
            Talk to Our Experts
            <svg
              className='size-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2.5}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>
          </Link>
          <Link
            href='/service/custom-software-development'
            className='text-center text-xs font-medium text-white/60 transition hover:text-white'
          >
            View Our Services →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function GenericBlogTemplate({ post }: { post: GenericBlogPost }) {
  const [activeId, setActiveId] = useState(post.toc[0]?.id ?? '');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const ids = post.toc.map((t) => t.id);

    const onScroll = () => {
      const scrollY = window.scrollY;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + scrollY;
          if (scrollY >= top - 140) current = id;
        }
      }

      setActiveId(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [post.toc]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ctaServices = post.cta?.sidebarServices ?? [];
  const ctaTitle = post.cta?.sidebarTitle ?? 'Ready to Start Building?';

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
          <nav
            aria-label='Breadcrumb'
            className='mb-4 flex flex-wrap items-center gap-1.5 text-sm text-white/70'
          >
            <Link href='/' className='transition hover:text-white'>
              Home
            </Link>
            <span>/</span>
            <Link href='/blog' className='transition hover:text-white'>
              Blog
            </Link>
            <span>/</span>
            <span className='line-clamp-1 text-white/90'>{post.category}</span>
          </nav>
          <div className='mb-4 flex flex-wrap items-center gap-3'>
            <span className='rounded-full bg-primary px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white'>
              {post.category}
            </span>
            <span className='flex items-center gap-1.5 text-sm text-white/80'>
              <svg
                className='size-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
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
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? 'text-lg font-semibold text-secondary'
                      : 'mt-4 text-darkShade2'
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* ── HTML Content — split on <hr> to inject inline CTA ── */}
            {(() => {
              const chunks = post.htmlContent.split(/<hr\s*\/?>/i).filter((c) => c.trim());
              const ctaAt = Math.floor(chunks.length / 2);

              return chunks.map((chunk, i) => (
                <div key={i}>
                  <div className='tiptap-prose' dangerouslySetInnerHTML={{ __html: chunk }} />
                  {i < chunks.length - 1 && (
                    <>
                      {i === ctaAt - 1 ? (
                        <InlineCTA
                          title={ctaTitle}
                          services={ctaServices}
                        />
                      ) : (
                        <hr className='my-10 border-lightShade1' />
                      )}
                    </>
                  )}
                </div>
              ));
            })()}

            <hr className='my-10 border-lightShade1' />

            {/* ── Conclusion ── */}
            {post.conclusion.length > 0 && (
              <div className='rounded-2xl border-l-4 border-primary bg-lightShad2 p-6 sm:p-8'>
                <h2 className='mb-4 text-xl font-black text-secondary'>Conclusion</h2>
                {post.conclusion.map((p, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i < post.conclusion.length - 1
                        ? 'mb-3 text-darkShade2'
                        : 'font-semibold text-secondary'
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}

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
                      <span
                        className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-transform ${
                          openFaq === i
                            ? 'rotate-45 border-primary bg-primary text-white'
                            : 'border-lightShade1 bg-white text-secondary'
                        }`}
                      >
                        <svg
                          className='size-3.5'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 4.5v15m7.5-7.5h-15'
                          />
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
              <nav
                aria-label='Table of contents'
                className='rounded-2xl border border-lightShade1 bg-white p-5'
              >
                <p className='mb-4 text-xs font-black uppercase tracking-widest text-grey'>
                  Table of Contents
                </p>
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
                <p className='mb-4 text-xs font-black uppercase tracking-widest text-grey'>
                  Written By
                </p>
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
                  Our team of experienced developers, designers, and consultants delivers in-depth
                  guides on software development best practices.
                </p>
                <div className='mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-grey'>
                  <span className='flex items-center gap-1.5'>
                    <svg
                      className='size-3.5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
                      />
                    </svg>
                    {post.publishedAt}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <svg
                      className='size-3.5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                      />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className='rounded-2xl border border-lightShade1 bg-white p-5'>
                  <p className='mb-3 text-xs font-black uppercase tracking-widest text-grey'>
                    Tags
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full bg-lightShad2 px-3 py-1 text-xs font-medium text-secondary'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Service CTA */}
              <div className='overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-lightSecondary p-6 text-white'>
                <span className='mb-3 inline-block rounded-full bg-primary/25 px-3 py-1 text-xs font-bold text-primary'>
                  Free Consultation
                </span>
                <h3 className='mb-3 text-lg font-black leading-snug'>{ctaTitle}</h3>
                <p className='mb-5 text-sm leading-relaxed text-white/80'>
                  Our team specializes in custom SaaS development — from product scoping and MVP
                  planning to full-scale development and post-launch support.
                </p>
                {ctaServices.length > 0 && (
                  <ul className='mb-6 flex flex-col gap-2'>
                    {ctaServices.map((svc) => (
                      <li key={svc} className='flex items-center gap-2 text-sm text-white/90'>
                        <CheckIcon />
                        {svc}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href='/contact'
                  className='block w-full rounded-xl bg-primary py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90'
                >
                  Talk to Our Experts
                </Link>
                <Link
                  href='/service/custom-software-development'
                  className='mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-white/70 transition hover:text-white'
                >
                  View Our Services
                  <ArrowRight className='size-3.5' />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
      {post.relatedPosts.length > 0 && (
        <div className='bg-lightShad2 py-14 sm:py-16'>
          <div className='common-padding mx-auto max-w-[1400px]'>
            <div className='mb-8 flex items-end justify-between'>
              <div>
                <p className='mb-1 text-xs font-black uppercase tracking-widest text-grey'>
                  Keep Reading
                </p>
                <h2 className='text-2xl font-black text-secondary sm:text-3xl'>
                  Related Articles
                </h2>
              </div>
              <Link
                href='/blog'
                className='hidden items-center gap-1.5 text-sm font-bold text-primary hover:underline sm:flex'
              >
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
                    <svg
                      className='size-14 text-secondary/30'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                      />
                    </svg>
                  </div>
                  <div className='flex flex-1 flex-col p-6'>
                    <div className='mb-3 flex items-center gap-3'>
                      <span className='rounded-full bg-lightShade1 px-3 py-1 text-xs font-bold text-secondary'>
                        {blog.category}
                      </span>
                      <span className='text-xs text-grey'>{blog.readTime}</span>
                    </div>
                    <h3 className='mb-2 line-clamp-2 font-bold leading-snug text-mainBlack transition-colors group-hover:text-primary'>
                      {blog.title}
                    </h3>
                    <p className='mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-darkShade2'>
                      {blog.excerpt}
                    </p>
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
      )}

      {/* ── PREV / NEXT ───────────────────────────────────────────────── */}
      {(post.prevPost || post.nextPost) && (
        <div className='common-padding mx-auto max-w-[1400px] py-10'>
          <div className='grid gap-4 sm:grid-cols-2'>
            {post.prevPost && (
              <Link
                href={`/blog/${post.prevPost.slug}`}
                className='group flex flex-col gap-1.5 rounded-2xl border border-lightShade1 bg-white p-6 transition-colors hover:border-secondary/40 hover:bg-lightShad2'
              >
                <span className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grey'>
                  <svg
                    className='size-4 transition-transform group-hover:-translate-x-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                    />
                  </svg>
                  Previous Article
                </span>
                <span className='line-clamp-2 font-bold text-mainBlack transition-colors group-hover:text-secondary'>
                  {post.prevPost.title}
                </span>
              </Link>
            )}
            {post.nextPost && (
              <Link
                href={`/blog/${post.nextPost.slug}`}
                className={`group flex flex-col gap-1.5 rounded-2xl border border-lightShade1 bg-white p-6 transition-colors hover:border-secondary/40 hover:bg-lightShad2 ${
                  !post.prevPost ? 'sm:col-start-2' : ''
                }`}
              >
                <span className='flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-wider text-grey'>
                  Next Article
                  <svg
                    className='size-4 transition-transform group-hover:translate-x-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                    />
                  </svg>
                </span>
                <span className='line-clamp-2 text-right font-bold text-mainBlack transition-colors group-hover:text-secondary'>
                  {post.nextPost.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* ── BACK TO TOP ── */}
      {showBackToTop && (
        <button
          type='button'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label='Back to top'
          className='fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-primary shadow-lg transition-opacity hover:opacity-90'
        >
          <svg
            className='size-5 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2.5}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18' />
          </svg>
        </button>
      )}
    </div>
  );
}
