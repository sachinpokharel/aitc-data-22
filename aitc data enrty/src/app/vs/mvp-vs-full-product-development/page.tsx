'use client';

import { useState } from 'react';
import Link from 'next/link';
import StatsBar from '@/components/pages/static-components/StatsBar';
import PricingCards from '@/components/pages/static-components/PricingCards';
import FAQSection from '@/components/pages/static-components/faqs';
import BottomCTAForm from '@/components/pages/static-components/BottomCTAForm';
import {
  heroStats,
  heroData,
  quickAnswerCards,
  featureBreakdown,
  mvpProcess,
  fullProductProcess,
  pricingModels,
  realScenarios,
  decisionToolQuestions,
  realProjects,
  whyAITCCards,
  faqs,
} from '@/data/vs/mvp-vs-full-product-development-data';

export default function MvpVsFullProductPage() {
  const [decisionAnswers, setDecisionAnswers] = useState<Record<number, { oIdx: number; recommendation: string }>>({});
  const [decisionResult, setDecisionResult] = useState<string | null>(null);

  function handleDecisionSelect(qIdx: number, oIdx: number, recommendation: string) {
    const updated = { ...decisionAnswers, [qIdx]: { oIdx, recommendation } };
    setDecisionAnswers(updated);
    if (Object.keys(updated).length === decisionToolQuestions.length) {
      const counts: Record<string, number> = {};
      Object.values(updated).forEach(({ recommendation: r }) => {
        counts[r] = (counts[r] ?? 0) + 1;
      });
      const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setDecisionResult(top);
    } else {
      setDecisionResult(null);
    }
  }

  function handleReset() {
    setDecisionAnswers({});
    setDecisionResult(null);
  }

  const isMvp = (v: string) => v === 'MVP';

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className='relative overflow-hidden bg-lightShad2'>
        <div className='pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-primary/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-20 -left-20 size-[300px] rounded-full bg-secondary/5 blur-3xl' />
        <div className='common-padding relative py-16 md:py-24'>
          <div className='mx-auto max-w-4xl text-center'>
            <span className='mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm'>
              <span className='size-1.5 rounded-full bg-primary' />
              {heroData.badge}
            </span>
            <h1 className='mb-6 text-4xl font-bold leading-tight text-secondary md:text-5xl'>
              {heroData.headline}
            </h1>
            <p className='mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-mainBlack md:text-xl'>
              {heroData.description}
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Link
                href={heroData.primaryCTA.href}
                className='rounded-md bg-primary px-7 py-3.5 text-center font-semibold text-white transition-opacity hover:opacity-90'
              >
                {heroData.primaryCTA.label}
              </Link>
              <Link
                href={heroData.secondaryCTA.href}
                className='rounded-md border-2 border-secondary px-7 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white'
              >
                {heroData.secondaryCTA.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <StatsBar stats={heroStats} />

      {/* ── Quick Answer ─────────────────────────────────────────────────── */}
      <section className='common-padding bg-white py-16 md:py-24'>
        <div className='mx-auto max-w-5xl'>
          <p className='mb-3 text-center text-xs font-bold uppercase tracking-widest text-primary'>Quick Answer</p>
          <h2 className='mb-4 text-center text-3xl font-bold text-secondary sm:text-4xl'>
            Which Approach Fits Your Stage?
          </h2>
          <p className='mx-auto mb-12 max-w-xl text-center text-grey'>
            Choose based on how validated your idea is, your current budget, and how fast you need to reach market.
          </p>
          <div className='grid gap-6 md:grid-cols-2'>
            {quickAnswerCards.map((card, i) => (
              <div
                key={card.model}
                className={`rounded-2xl border p-8 ${
                  i === 1
                    ? 'border-secondary bg-secondary'
                    : 'border-lightShade1 bg-lightShad2'
                }`}
              >
                <h3 className={`mb-1 text-xl font-bold ${i === 1 ? 'text-white' : 'text-secondary'}`}>
                  {card.model}
                </h3>
                <p className={`mb-5 text-sm font-medium ${i === 1 ? 'text-white/70' : 'text-primary'}`}>
                  {card.tagline}
                </p>
                <ul className='mb-6 space-y-2'>
                  {card.bestFor.map((item) => (
                    <li key={item} className={`flex items-center gap-2 text-sm ${i === 1 ? 'text-white/90' : 'text-mainBlack'}`}>
                      <span className={i === 1 ? 'text-white' : 'text-primary'}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.cta.href}
                  className={`inline-block rounded-md border-2 px-5 py-2.5 text-sm font-semibold transition-colors ${
                    i === 1
                      ? 'border-white text-white hover:bg-white hover:text-secondary'
                      : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  {card.cta.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Comparison ───────────────────────────────────────────── */}
      <section id='comparison' className='common-padding bg-lightShad2 py-16 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>Feature Comparison</p>
          <h2 className='mb-4 text-3xl font-bold text-secondary sm:text-4xl'>
            MVP vs Full Product Development Comparison
          </h2>
          <p className='mb-10 max-w-2xl text-grey'>
            Understand how speed, cost, risk, and scope differ between launching lean and building complete.
          </p>
          <div className='overflow-x-auto rounded-2xl border border-lightShade1'>
            <table className='w-full min-w-[620px] border-collapse'>
              <thead>
                <tr>
                  <th className='w-[24%] rounded-tl-2xl bg-white px-6 py-4 text-left text-sm font-semibold text-grey'>
                    Factor
                  </th>
                  <th className='bg-white px-6 py-4 text-left text-sm font-semibold text-secondary'>
                    MVP
                    <span className='ml-2 rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary'>
                      Lean
                    </span>
                  </th>
                  <th className='rounded-tr-2xl bg-secondary px-6 py-4 text-left text-sm font-bold text-white'>
                    Full Product Development
                    <span className='ml-2 rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white'>
                      Complete
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureBreakdown.map((row, i) => {
                  const isLast = i === featureBreakdown.length - 1;
                  return (
                    <tr key={i} className='border-t border-lightShade1'>
                      <td className={`bg-white px-6 py-4 ${isLast ? 'rounded-bl-2xl' : ''}`}>
                        <p className='text-sm font-semibold text-secondary'>{row.feature}</p>
                        <p className='text-xs text-grey'>{row.category}</p>
                      </td>
                      <td className='bg-white px-6 py-4 text-sm text-mainBlack'>{row.mvp}</td>
                      <td className={`bg-secondary px-6 py-4 text-sm text-white/90 ${isLast ? 'rounded-br-2xl' : ''}`}>
                        {row.fullProduct}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className='common-padding bg-white py-16 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>How It Works</p>
          <h2 className='mb-4 text-3xl font-bold text-secondary sm:text-4xl'>The Process, Side by Side</h2>
          <p className='mb-12 max-w-2xl text-grey'>
            See how each development approach is structured — from the first conversation to the moment your product is live.
          </p>
          <div className='grid gap-8 md:grid-cols-2'>
            {/* MVP Process */}
            <div className='rounded-2xl border border-lightShade1 bg-lightShad2 p-8'>
              <span className='mb-2 inline-block rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary'>
                MVP
              </span>
              <h3 className='mb-1 text-lg font-bold text-secondary'>Lean Validation Model</h3>
              <p className='mb-6 text-sm text-grey'>Ship fast, learn faster, build the right product</p>
              <ol className='space-y-4'>
                {mvpProcess.map((step) => (
                  <li key={step.step} className='flex gap-4'>
                    <span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${step.isOngoing ? 'bg-primary' : 'bg-secondary'}`}>
                      {step.isOngoing ? '↺' : step.step}
                    </span>
                    <div>
                      <p className='font-semibold text-secondary'>{step.title}</p>
                      <p className='mt-0.5 text-sm text-grey'>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Full Product Process */}
            <div className='rounded-2xl border border-secondary/20 bg-secondary p-8 text-white'>
              <span className='mb-2 inline-block rounded bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white'>
                Full Product
              </span>
              <h3 className='mb-1 text-lg font-bold text-white'>Complete Build Model</h3>
              <p className='mb-6 text-sm text-white/60'>Full scope, complete features, production-ready at launch</p>
              <ol className='space-y-4'>
                {fullProductProcess.map((step) => (
                  <li key={step.step} className='flex gap-4'>
                    <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white'>
                      {step.step}
                    </span>
                    <div>
                      <p className='font-semibold text-white'>{step.title}</p>
                      <p className='mt-0.5 text-sm text-white/70'>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <PricingCards
        badge='Development Investment'
        heading='Understanding the Cost Difference'
        tiers={pricingModels}
      />

      {/* ── Real Scenarios ───────────────────────────────────────────────── */}
      <section className='common-padding bg-white py-16 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>Real-World Scenarios</p>
          <h2 className='mb-4 text-3xl font-bold text-secondary sm:text-4xl'>Which Approach Would We Recommend?</h2>
          <p className='mb-10 max-w-2xl text-grey'>
            Based on 50+ projects, here is how we match MVP and full product development to real business situations.
          </p>
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {realScenarios.map((s) => (
              <div key={s.title} className='rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <span
                  className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    isMvp(s.model)
                      ? 'bg-primary/10 text-primary'
                      : 'bg-secondary/10 text-secondary'
                  }`}
                >
                  {s.model}
                </span>
                <h3 className='mb-2 font-bold text-secondary'>{s.title}</h3>
                <p className='text-sm text-grey'>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Decision Tool ────────────────────────────────────────────────── */}
      <section id='decision-tool' className='common-padding bg-lightShad2 py-16 md:py-24'>
        <div className='mx-auto max-w-3xl'>
          <p className='mb-3 text-center text-xs font-bold uppercase tracking-widest text-primary'>Decision Tool</p>
          <h2 className='mb-2 text-center text-3xl font-bold text-secondary sm:text-4xl'>
            Not Sure Which Approach Is Right for You?
          </h2>
          <p className='mb-10 text-center text-grey'>
            Answer 3 quick questions and get a clear recommendation between MVP and Full Product Development in seconds.
          </p>

          {/* Progress indicator */}
          <div className='mb-8 flex items-center justify-center gap-2'>
            {decisionToolQuestions.map((_, i) => (
              <div key={i} className='flex items-center gap-2'>
                <span
                  className={`flex size-7 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    decisionAnswers[i] ? 'bg-primary text-white' : 'bg-lightShade1 text-grey'
                  }`}
                >
                  {decisionAnswers[i] ? '✓' : i + 1}
                </span>
                {i < decisionToolQuestions.length - 1 && (
                  <span className={`h-0.5 w-10 transition-all ${decisionAnswers[i] ? 'bg-primary' : 'bg-lightShade1'}`} />
                )}
              </div>
            ))}
          </div>

          <div className='space-y-6'>
            {decisionToolQuestions.map((q, qIdx) => (
              <div key={qIdx} className='rounded-2xl border border-lightShade1 bg-white p-6'>
                <p className='mb-4 font-semibold text-secondary'>
                  {qIdx + 1}. {q.question}
                </p>
                <div className='space-y-3'>
                  {q.options.map((opt, oIdx) => {
                    const selected = decisionAnswers[qIdx]?.oIdx === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleDecisionSelect(qIdx, oIdx, opt.recommendation)}
                        className={`w-full rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all ${
                          selected
                            ? isMvp(opt.recommendation)
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-secondary bg-secondary/5 text-secondary'
                            : 'border-lightShade1 text-mainBlack hover:border-primary/40'
                        }`}
                      >
                        <span className='flex items-center justify-between'>
                          {opt.label}
                          {selected && (
                            <span className={`ml-3 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                              isMvp(opt.recommendation)
                                ? 'bg-primary/10 text-primary'
                                : 'bg-secondary/10 text-secondary'
                            }`}>
                              {isMvp(opt.recommendation) ? 'MVP' : 'Full Product'}
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          {decisionResult && (
            <div className={`mt-8 rounded-2xl border-2 p-8 text-center ${
              isMvp(decisionResult)
                ? 'border-primary bg-primary/5'
                : 'border-secondary bg-secondary/5'
            }`}>
              <p className='text-xs font-bold uppercase tracking-widest text-grey'>Our Recommendation</p>
              <p className={`mt-2 text-2xl font-bold ${isMvp(decisionResult) ? 'text-primary' : 'text-secondary'}`}>
                {decisionResult}
              </p>
              <p className='mt-2 text-sm text-grey'>
                {isMvp(decisionResult)
                  ? 'Launch your core product fast, gather real user data, and build the full version with confidence.'
                  : 'Your market is ready and your requirements are clear — build the complete product from day one.'}
              </p>
              <div className='mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row'>
                <Link
                  href={isMvp(decisionResult) ? '/build/build-an-mvp' : '/request-a-quote'}
                  className={`rounded-md px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 ${
                    isMvp(decisionResult) ? 'bg-primary' : 'bg-secondary'
                  }`}
                >
                  {isMvp(decisionResult) ? 'Build My MVP →' : 'Get a Full Proposal →'}
                </Link>
                <button
                  onClick={handleReset}
                  className='text-sm text-grey underline hover:text-secondary'
                >
                  Retake the quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Real Projects ────────────────────────────────────────────────── */}
      <section className='common-padding bg-white py-16 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>Real Projects</p>
          <h2 className='mb-4 text-3xl font-bold text-secondary sm:text-4xl'>
            Projects Delivered as MVPs &amp; Full Products
          </h2>
          <p className='mb-10 max-w-2xl text-grey'>
            Real examples of how the right development approach made the difference between a product that ships and one that stalls.
          </p>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {realProjects.map((p) => (
              <div key={p.title} className='flex flex-col rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <span
                  className={`mb-4 inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${
                    isMvp(p.model)
                      ? 'bg-primary/10 text-primary'
                      : 'bg-secondary/10 text-secondary'
                  }`}
                >
                  {p.model}
                </span>
                <h3 className='mb-2 font-bold text-secondary'>{p.title}</h3>
                <p className='text-sm text-grey'>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How AITC Can Help ─────────────────────────────────────────────── */}
      <section className='common-padding bg-lightShad2 py-16 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>How AITC Can Help</p>
          <h2 className='mb-4 text-3xl font-bold text-secondary sm:text-4xl'>Why Choose AITC International</h2>
          <p className='mb-12 max-w-2xl text-grey'>
            We help you choose the right development approach and then execute it — whether that means shipping an MVP in weeks or delivering a complete product built for scale.
          </p>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whyAITCCards.map((card, i) => (
              <div key={card.title} className='rounded-xl border border-lightShade1 bg-white p-6'>
                <div className={`mb-4 flex size-10 items-center justify-center rounded-lg ${
                  i % 3 === 0 ? 'bg-primary/10' : i % 3 === 1 ? 'bg-secondary/10' : 'bg-green-100'
                }`}>
                  <span className={`text-lg font-bold ${
                    i % 3 === 0 ? 'text-primary' : i % 3 === 1 ? 'text-secondary' : 'text-green-600'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className='mb-2 font-bold text-secondary'>{card.title}</h3>
                <p className='text-sm text-mainBlack'>{card.point}</p>
                <p className='mt-3 text-sm font-medium text-primary'>{card.benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className='mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-secondary/20 bg-secondary p-8 text-white sm:flex-row'>
            <div>
              <p className='text-xl font-bold'>Ready to build your product the right way?</p>
              <p className='mt-1 text-sm text-white/70'>
                We will recommend MVP or full development based on your stage — then ship it.
              </p>
            </div>
            <div className='flex shrink-0 gap-3'>
              <Link
                href='/build/build-an-mvp'
                className='rounded-md bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90'
              >
                Build an MVP
              </Link>
              <Link
                href='/request-a-quote'
                className='rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-secondary'
              >
                Full Product Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      <FAQSection faqs={faqs} heading='Frequently Asked Questions' />

      {/* ── Bottom CTA Form ───────────────────────────────────────────────── */}
      <BottomCTAForm
        badge='Get Expert Guidance'
        heading='Not Sure Whether to Build an MVP or a Full Product?'
        description='Get a clear recommendation based on your idea stage, budget, and target users — before you commit to development.'
        bullets={[
          'Free expert consultation — no commitment required',
          'Clear recommendation matched to your product stage',
          'NDA signed before any technical discussion',
        ]}
        form={{
          formName: 'mvp-vs-full-product-cta',
          heading: 'Tell Us About Your Product',
          subheading: "We'll recommend the right approach and outline exactly how we'd build it.",
          ctaLabel: 'Get Free Recommendation',
        }}
      />
    </>
  );
}