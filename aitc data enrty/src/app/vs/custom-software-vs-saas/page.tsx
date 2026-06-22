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
  customSoftwareProcess,
  saasAdoptionProcess,
  pricingModels,
  realScenarios,
  decisionToolQuestions,
  whyAITCCards,
  faqs,
} from '@/data/vs/custom-software-vs-saas-data';

export default function CustomSoftwareVsSaasPage() {
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

  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden bg-lightShad2'>
        <div className='pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-primary/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-24 -left-24 size-[360px] rounded-full bg-primary/10 blur-2xl' />
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
                className='rounded-md bg-primary px-7 py-3.5 text-center font-semibold text-white transition-colors hover:opacity-90'
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

      {/* Stats */}
      <StatsBar stats={heroStats} />

      {/* Quick Answer */}
      <section className='common-padding bg-white py-16 md:py-24'>
        <div className='mx-auto max-w-5xl'>
          <p className='mb-3 text-center text-xs font-bold uppercase tracking-widest text-primary'>Quick Answer</p>
          <h2 className='mb-12 text-center text-3xl font-bold text-secondary sm:text-4xl'>Which Option Fits You?</h2>
          <div className='grid gap-6 md:grid-cols-2'>
            {quickAnswerCards.map((card) => (
              <div key={card.model} className='rounded-2xl border border-lightShade1 bg-lightShad2 p-8'>
                <h3 className='mb-1 text-xl font-bold text-secondary'>{card.model}</h3>
                <p className='mb-5 text-sm text-primary'>{card.tagline}</p>
                <ul className='mb-6 space-y-2'>
                  {card.bestFor.map((item) => (
                    <li key={item} className='flex items-center gap-2 text-sm text-mainBlack'>
                      <span className='text-primary'>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.cta.href}
                  className='inline-block rounded-md border-2 border-secondary px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white'
                >
                  {card.cta.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section id='comparison' className='common-padding bg-lightShad2 py-16 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>Feature Comparison</p>
          <h2 className='mb-10 text-3xl font-bold text-secondary sm:text-4xl'>Side-by-Side Breakdown</h2>
          <div className='overflow-x-auto rounded-2xl border border-lightShade1'>
            <table className='w-full min-w-[600px] border-collapse'>
              <thead>
                <tr>
                  <th className='w-[25%] rounded-tl-2xl bg-white px-6 py-4 text-left text-sm font-semibold text-grey'>
                    Factor
                  </th>
                  <th className='bg-secondary px-6 py-4 text-left text-sm font-bold text-white'>
                    Custom Software
                  </th>
                  <th className='rounded-tr-2xl bg-white px-6 py-4 text-left text-sm font-semibold text-secondary'>
                    SaaS
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
                      <td className='bg-secondary px-6 py-4 text-sm text-white/90'>{row.customSoftware}</td>
                      <td className={`bg-white px-6 py-4 text-sm text-mainBlack ${isLast ? 'rounded-br-2xl' : ''}`}>
                        {row.saas}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className='common-padding bg-white py-16 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>How It Works</p>
          <h2 className='mb-12 text-3xl font-bold text-secondary sm:text-4xl'>The Process, Side by Side</h2>
          <div className='grid gap-10 md:grid-cols-2'>
            {[
              { title: 'Custom Software Development', steps: customSoftwareProcess },
              { title: 'SaaS Adoption', steps: saasAdoptionProcess },
            ].map((col) => (
              <div key={col.title}>
                <h3 className='mb-6 text-lg font-bold text-secondary'>{col.title}</h3>
                <ol className='space-y-5'>
                  {col.steps.map((step) => (
                    <li key={step.step} className='flex gap-4'>
                      <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white'>
                        {step.step}
                      </span>
                      <div>
                        <p className='font-semibold text-secondary'>{step.title}</p>
                        <p className='mt-0.5 text-sm text-grey'>{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingCards
        badge='Pricing Models'
        heading='Custom Software vs SaaS — How the Costs Compare'
        tiers={pricingModels}
      />

      {/* Real Scenarios */}
      <section className='common-padding bg-white py-16 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>Real-World Scenarios</p>
          <h2 className='mb-10 text-3xl font-bold text-secondary sm:text-4xl'>See Which Option Wins</h2>
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {realScenarios.map((s) => (
              <div key={s.title} className='rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <span
                  className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    s.model === 'Custom Software'
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-primary/10 text-primary'
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

      {/* Decision Tool */}
      <section id='decision-tool' className='common-padding bg-lightShad2 py-16 md:py-24'>
        <div className='mx-auto max-w-3xl'>
          <p className='mb-3 text-center text-xs font-bold uppercase tracking-widest text-primary'>Decision Tool</p>
          <h2 className='mb-2 text-center text-3xl font-bold text-secondary sm:text-4xl'>
            Answer 3 Questions. Get a Recommendation.
          </h2>
          <p className='mb-10 text-center text-grey'>
            Tell us about your situation and we will point you to the right option.
          </p>
          <div className='space-y-6'>
            {decisionToolQuestions.map((q, qIdx) => (
              <div key={qIdx} className='rounded-2xl border border-lightShade1 bg-white p-6 shadow-sm'>
                <p className='mb-4 flex items-start gap-3 font-semibold text-secondary'>
                  <span className='mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white'>
                    {qIdx + 1}
                  </span>
                  {q.question}
                </p>
                <div className='space-y-3'>
                  {q.options.map((opt, oIdx) => {
                    const selected = decisionAnswers[qIdx]?.oIdx === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleDecisionSelect(qIdx, oIdx, opt.recommendation)}
                        className={`w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all ${
                          selected
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-lightShade1 text-mainBlack hover:border-primary/40 hover:bg-gray-50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {decisionResult && (
            <div className='mt-8 rounded-2xl border-2 border-primary bg-primary/5 p-8 text-center'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Our Recommendation</p>
              <p className='mt-2 text-2xl font-bold text-secondary'>{decisionResult}</p>
              <p className='mt-2 text-sm text-grey'>
                {decisionResult === 'Custom Software'
                  ? 'Your answers suggest custom software will serve your business better in the long run.'
                  : 'Your answers suggest a SaaS product is the right fit for your current stage and needs.'}
              </p>
              <Link
                href={decisionResult === 'Custom Software' ? '/build' : '/book-a-free-consultation'}
                className='mt-6 inline-block rounded-md bg-primary px-8 py-3 font-semibold text-white transition-colors hover:opacity-90'
              >
                {decisionResult === 'Custom Software' ? 'Explore Custom Software →' : 'Talk to Our Team →'}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Why AITC */}
      <section className='common-padding bg-white py-16 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>Why AITC</p>
          <h2 className='mb-10 text-3xl font-bold text-secondary sm:text-4xl'>
            When You Choose Custom — Choose AITC
          </h2>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {whyAITCCards.map((card) => (
              <div key={card.title} className='rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <h3 className='mb-2 font-bold text-secondary'>{card.title}</h3>
                <p className='text-sm text-grey'>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={faqs} heading='Frequently Asked Questions' />

      {/* Bottom CTA */}
      <BottomCTAForm
        badge='Get Started'
        heading='Not Sure Which Option Is Right for You?'
        description="Our team will evaluate your workflows, goals, and budget to give you an honest recommendation — even if that means pointing you to an existing SaaS tool."
        bullets={[
          'Free 30-minute consultation',
          'Honest recommendation — no sales pressure',
          'Expert advice tailored to your specific situation',
        ]}
        form={{
          formName: 'custom-software-vs-saas-cta',
          heading: 'Tell Us About Your Software Need',
          subheading: "We'll recommend the right option for your business.",
          ctaLabel: 'Get Free Recommendation',
        }}
      />
    </>
  );
}
