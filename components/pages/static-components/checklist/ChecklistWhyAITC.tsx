import Link from 'next/link';
import { type WhydStat } from '@/data/checklist/software-development-checklist-data';
import ChecklistReviewSlider, { type ChecklistReview } from './ChecklistReviewSlider';

interface DashboardRow {
  label: string;
  pct: number;
}

interface ChecklistWhyAITCProps {
  whyStats: WhydStat[];
  heading?: string;
  description?: string;
  ctaText?: string;
  testimonial?: string;
  dashboardRows?: DashboardRow[];
  reviews?: ChecklistReview[];
}

const defaultDashboardRows: DashboardRow[] = [
  { label: 'Planning & Discovery', pct: 100 },
  { label: 'Architecture & Design', pct: 100 },
  { label: 'Software Development', pct: 80 },
  { label: 'Testing & QA', pct: 60 },
  { label: 'Deployment & Launch', pct: 20 },
];

export default function ChecklistWhyAITC({
  whyStats,
  heading,
  description,
  ctaText,
  testimonial,
  dashboardRows,
  reviews,
}: ChecklistWhyAITCProps) {
  const rows = dashboardRows ?? defaultDashboardRows;

  return (
    <section className='common-padding bg-lightShad2 py-16 md:py-28'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid items-start gap-10 lg:grid-cols-2 lg:gap-16'>

          {/* ── Left: text + stats ─────────────────────────── */}
          <div>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Our Expertise</p>
            <h2 className='mt-3 text-2xl font-bold text-secondary sm:text-3xl md:text-4xl'>
              {heading ?? 'Why Choose AITC for Software Development?'}
            </h2>
            <p className='mt-4 text-base leading-relaxed text-mainBlack'>
              {description ?? 'AITC International helps organisations transform ideas into scalable, secure, and future-ready software solutions. We combine strategic consulting, engineering expertise, AI innovation, and modern development methodologies to deliver measurable business outcomes.'}
            </p>

            {/* Stats grid */}
            <div className='mt-8 grid grid-cols-2 gap-4'>
              {whyStats.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-xl border border-lightShade1 bg-white p-4 text-center shadow-sm sm:p-5'
                >
                  <p className='text-3xl font-bold text-primary'>{stat.value}</p>
                  <p className='mt-1 text-base font-bold text-grey'>{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href='/request-a-quote'
              className='mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto'
            >
              {ctaText ?? 'Talk to Our Software Experts'}
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2.5} strokeLinecap='round' strokeLinejoin='round' className='size-4 shrink-0'>
                <line x1='5' y1='12' x2='19' y2='12' /><polyline points='12 5 19 12 12 19' />
              </svg>
            </Link>
          </div>

          {/* ── Right: purple panel ────────────────────────── */}
          <div className='relative overflow-hidden rounded-2xl bg-secondary p-6 text-white sm:p-8 lg:p-10'>
            {/* Decorative dots */}
            <div className='pointer-events-none absolute right-5 top-5 opacity-10'>
              <svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
                {[5, 25, 45, 65].flatMap((cx) =>
                  [5, 25, 45, 65].map((cy) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r='3' fill='white' />
                  ))
                )}
              </svg>
            </div>

            {/* Dashboard illustration */}
            <div className='mb-6 overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:mb-8'>
              <div className='flex items-center gap-2 border-b border-white/10 px-4 py-3 sm:px-5'>
                <span className='size-3 rounded-full bg-primary/70' />
                <span className='size-3 rounded-full bg-white/20' />
                <span className='size-3 rounded-full bg-white/10' />
              </div>
              <div className='space-y-3 p-4 sm:p-5'>
                {rows.map((row) => (
                  <div key={row.label}>
                    <div className='mb-1 flex items-center justify-between'>
                      <span className='text-sm text-white/70'>{row.label}</span>
                      <span className='text-sm font-bold text-white'>{row.pct}%</span>
                    </div>
                    <div className='h-1.5 overflow-hidden rounded-full bg-white/10'>
                      <div className='h-full rounded-full bg-primary' style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className='text-center'>
              <p className='mb-3 text-base font-semibold leading-snug text-white/95 sm:text-lg'>
                &ldquo;{testimonial ?? "We don't just build software — we build solutions that scale with your business."}&rdquo;
              </p>
              <cite className='text-base text-white/50 not-italic'>
                AITC International — UK Software Development Specialists
              </cite>
            </blockquote>
          </div>
        </div>

        {/* ── Review Slider ──────────────────────────────────────────────── */}
        {reviews && reviews.length > 0 && (
          <ChecklistReviewSlider reviews={reviews} />
        )}
      </div>
    </section>
  );
}
