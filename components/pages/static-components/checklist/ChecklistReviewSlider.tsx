'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface ChecklistReview {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

interface ChecklistReviewSliderProps {
  reviews: ChecklistReview[];
}

export default function ChecklistReviewSlider({ reviews }: ChecklistReviewSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number, dir: 'left' | 'right') => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 260);
  }, [isAnimating]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length, 'left');
  }, [current, reviews.length, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length, 'right');
  }, [current, reviews.length, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(next, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next]);

  const review = reviews[current]!;
  const nextReview = reviews[(current + 1) % reviews.length]!;

  return (
    <div className='mt-16 md:mt-20'>
      {/* Header */}
      <div className='mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
        <div>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Client Reviews</p>
          <h3 className='mt-2 text-xl font-bold text-secondary sm:text-2xl'>What Our Clients Say</h3>
        </div>

        {/* Arrow controls */}
        <div className='flex items-center gap-2'>
          <button
            onClick={prev}
            aria-label='Previous review'
            className='flex size-10 items-center justify-center rounded-full border-2 border-secondary/20 bg-white text-secondary shadow-sm transition hover:border-secondary hover:bg-secondary hover:text-white'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2.5} strokeLinecap='round' strokeLinejoin='round' className='size-4'>
              <polyline points='15 18 9 12 15 6' />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label='Next review'
            className='flex size-10 items-center justify-center rounded-full border-2 border-secondary/20 bg-white text-secondary shadow-sm transition hover:border-secondary hover:bg-secondary hover:text-white'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2.5} strokeLinecap='round' strokeLinejoin='round' className='size-4'>
              <polyline points='9 18 15 12 9 6' />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide area */}
      <div className='overflow-hidden'>
        <div
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating
              ? `translateX(${direction === 'right' ? '-24px' : '24px'})`
              : 'translateX(0)',
            transition: 'opacity 260ms ease, transform 260ms ease',
          }}
        >
          <div className='grid gap-5 sm:grid-cols-2'>
            {/* Active review card */}
            <ReviewCard review={review} />

            {/* Preview of next card — desktop only */}
            <ReviewCard review={nextReview} dimmed />
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className='mt-6 flex items-center justify-center gap-2'>
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 'right' : 'left')}
            aria-label={`Go to review ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-primary' : 'w-2 bg-lightShade1 hover:bg-primary/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Review Card ───────────────────────────────────────────────────────────────

interface ReviewCardProps {
  review: ChecklistReview;
  dimmed?: boolean;
}

function ReviewCard({ review, dimmed = false }: ReviewCardProps) {
  return (
    <div
      className={`rounded-2xl border border-lightShade1 p-6 sm:p-7 ${
        dimmed ? 'hidden bg-white/60 sm:block' : 'bg-white shadow-sm'
      }`}
    >
      {/* Stars */}
      <div className='mb-4 flex gap-1'>
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg
            key={i}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='#FF7500'
            className={`size-5 ${dimmed ? 'opacity-40' : ''}`}
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z' />
          </svg>
        ))}
      </div>

      {/* Quote icon — active card only */}
      {!dimmed && (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#FF7500' className='mb-3 size-7 opacity-20'>
          <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
        </svg>
      )}

      <p
        className={`mb-6 text-base leading-relaxed ${
          dimmed ? 'line-clamp-4 text-grey' : 'text-mainBlack'
        }`}
      >
        {review.text}
      </p>

      {/* Reviewer */}
      <div className='flex items-center gap-3 border-t border-lightShade1 pt-5'>
        <div
          className={`flex size-10 shrink-0 items-center justify-center rounded-full font-bold ${
            dimmed ? 'bg-secondary/30 text-secondary' : 'bg-secondary text-white'
          }`}
        >
          {review.name.charAt(0)}
        </div>
        <div>
          <p className={`text-sm font-bold ${dimmed ? 'text-grey' : 'text-secondary'}`}>{review.name}</p>
          <p className={`text-sm ${dimmed ? 'text-grey/70' : 'text-grey'}`}>
            {review.role} · {review.company}
          </p>
        </div>
      </div>
    </div>
  );
}
