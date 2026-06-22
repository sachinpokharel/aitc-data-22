import Link from 'next/link';

export interface PricingTier {
  title: string;
  price: string;
  topBadge?: string;
  bottomBadge?: string;
  desc: string;
  features: string[];
  highlight: boolean;
  cta: string;
  ctaHref: string;
}

interface PricingCardsProps {
  badge: string;
  heading: string;
  tiers: PricingTier[];
}

export default function PricingCards({ badge, heading, tiers }: PricingCardsProps) {
  return (
    <section className='border-y border-lightShade1 bg-white py-20 md:py-28'>
      <div className='common-padding mx-auto max-w-7xl'>
        <p className='text-center text-xs font-bold uppercase tracking-widest text-primary'>{badge}</p>
        <h2 className='mt-3 text-center text-3xl font-bold text-secondary sm:text-4xl'>{heading}</h2>
        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative flex flex-col rounded-xl p-8 ${
                tier.highlight ? 'bg-secondary text-white shadow-2xl' : 'border border-lightShade1 bg-white'
              }`}
            >
              {tier.highlight && (
                <span className='absolute -top-3 left-6 rounded bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white'>
                  Most popular
                </span>
              )}
              {tier.topBadge && (
                <span
                  className={`mb-5 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    tier.highlight ? 'bg-white/10 text-white/80' : 'bg-primary/10 text-primary'
                  }`}
                >
                  {tier.topBadge}
                </span>
              )}
              <h3 className={`text-xl font-bold ${tier.highlight ? 'text-white' : 'text-secondary'}`}>{tier.title}</h3>
              <p className='mt-1 text-base font-semibold text-primary'>{tier.price}</p>
              <p className={`mt-3 text-base leading-relaxed ${tier.highlight ? 'text-white/75' : 'text-grey'}`}>
                {tier.desc}
              </p>
              <ul className='mt-6 space-y-2.5 text-base'>
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
              <div className='flex-1' />
              {tier.bottomBadge && (
                <span
                  className={`mt-6 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    tier.highlight ? 'bg-white/10 text-white/80' : 'bg-primary/10 text-primary'
                  }`}
                >
                  {tier.bottomBadge}
                </span>
              )}
              <Link
                href={tier.ctaHref}
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
  );
}
