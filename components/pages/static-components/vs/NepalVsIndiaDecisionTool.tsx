'use client';

import type { DecisionQuestion, DecisionValue } from '@/data/vs/nepal-vs-india-software-development-data';
import Link from 'next/link';
import { useState } from 'react';

const resultConfig = {
  nepal: {
    flag: '🇳🇵',
    label: 'Nepal is the right fit for your project',
    desc: "Your priorities align best with Nepal's collaborative, direct-communication model and flexible development approach — well-suited for the type of engagement you described.",
    cta: 'Explore Nepal Development',
    href: '/hire/hire-dedicated-developers',
    border: 'border-primary',
    bg: 'bg-primary/5',
    accentBg: 'bg-primary',
  },
  india: {
    flag: '🇮🇳',
    label: 'India is the right fit for your project',
    desc: "Your project scale and delivery requirements align with India's large talent ecosystem and enterprise delivery capacity.",
    cta: 'Get an Outsourcing Recommendation',
    href: '/request-a-quote',
    border: 'border-secondary',
    bg: 'bg-secondary/5',
    accentBg: 'bg-secondary',
  },
  either: {
    flag: '🌐',
    label: 'Both destinations can work for your project',
    desc: 'Your requirements are well-suited to either destination. The right choice depends on your specific vendor preferences, team structure, and long-term goals.',
    cta: 'Book a Free Consultation',
    href: '/book-a-free-consultation',
    border: 'border-gray-300',
    bg: 'bg-gray-50',
    accentBg: 'bg-gray-400',
  },
} as const;

export default function NepalVsIndiaDecisionTool({ questions }: { questions: DecisionQuestion[] }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, DecisionValue>>({});
  const [done, setDone] = useState(false);

  const total = questions.length;
  const current = questions[step];

  const getRecommendation = (): 'nepal' | 'india' | 'either' => {
    const vals = Object.values(answers);
    const nepalCount = vals.filter((v) => v === 'nepal').length;
    const indiaCount = vals.filter((v) => v === 'india').length;
    if (nepalCount > indiaCount) return 'nepal';
    if (indiaCount > nepalCount) return 'india';
    return 'either';
  };

  const handleSelect = (value: DecisionValue) => {
    const updated = { ...answers, [current.id]: value };
    setAnswers(updated);

    if (step < total - 1) {
      setTimeout(() => setStep((s) => s + 1), 180);
    } else {
      setTimeout(() => setDone(true), 180);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  if (done) {
    const result = getRecommendation();
    const cfg = resultConfig[result];
    return (
      <div className='mx-auto max-w-2xl'>
        <div className={`rounded-2xl border-2 p-8 ${cfg.border} ${cfg.bg}`}>
          <p className='mb-1 text-xs font-bold uppercase tracking-widest text-primary'>Your recommendation</p>
          <h3 className='text-2xl font-bold text-secondary'>
            {cfg.flag} {cfg.label}
          </h3>
          <p className='mt-3 text-sm leading-relaxed text-gray-600'>{cfg.desc}</p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <Link
              href={cfg.href}
              className='rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary/90'
            >
              {cfg.cta}
            </Link>
            <button
              onClick={reset}
              className='rounded-md border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:border-gray-400'
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='mx-auto max-w-2xl'>
      {/* Progress bar */}
      <div className='mb-6'>
        <div className='mb-2 flex items-center justify-between'>
          <p className='text-xs font-bold uppercase tracking-widest text-gray-400'>
            Question {step + 1} of {total}
          </p>
          <p className='text-xs text-gray-400'>{Math.round((step / total) * 100)}% complete</p>
        </div>
        <div className='h-1.5 w-full overflow-hidden rounded-full bg-gray-100'>
          <div
            className='h-full rounded-full bg-primary transition-all duration-500'
            style={{ width: `${(step / total) * 100}%` }}
          />
        </div>
        <div className='mt-3 flex gap-2'>
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i < step ? 'bg-primary' : i === step ? 'bg-primary/40' : 'bg-gray-100'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question card */}
      <div className='rounded-2xl border border-gray-200 bg-white p-7 shadow-sm'>
        <div className='mb-5 flex items-start gap-4'>
          <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white'>
            {step + 1}
          </span>
          <h3 className='pt-1 text-lg font-bold text-secondary'>{current.text}</h3>
        </div>

        <div className='space-y-3'>
          {current.options.map((opt) => {
            const isSelected = answers[current.id] === opt.value;
            return (
              <button
                key={opt.label}
                onClick={() => handleSelect(opt.value)}
                className={`group w-full rounded-xl border-2 px-5 py-4 text-left transition-all duration-150 ${
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/40 hover:bg-gray-50'
                }`}
              >
                <div className='flex items-center justify-between gap-4'>
                  <span
                    className={`text-sm font-medium ${isSelected ? 'text-primary' : 'text-gray-800 group-hover:text-secondary'}`}
                  >
                    {opt.label}
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors ${
                      isSelected
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
                    }`}
                  >
                    → {opt.hint}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className='mt-4 flex items-center justify-between'>
        {step > 0 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className='text-sm font-medium text-gray-500 hover:text-secondary'
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        {answers[current.id] && step === total - 1 && (
          <button
            onClick={() => setDone(true)}
            className='rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary/90'
          >
            See My Recommendation →
          </button>
        )}
      </div>
    </div>
  );
}
