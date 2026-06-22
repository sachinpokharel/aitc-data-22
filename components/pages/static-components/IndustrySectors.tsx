import Link from 'next/link';

export interface IndustrySector {
  name: string;
  tagline: string;
  desc: string;
  useCases: string[];
  href: string;
  accentColor: string;
  iconBg: string;
  icon: React.ReactNode;
}

interface IndustrySectorsProps {
  badge?: string;
  heading: string;
  subheading?: string;
  sectors: IndustrySector[];
  bg?: 'dark' | 'white' | 'light';
}

export default function IndustrySectors({
  badge,
  heading,
  subheading,
  sectors,
  bg = 'light',
}: IndustrySectorsProps) {
  const isDark = bg === 'dark';

  return (
    <section
      className={`common-padding py-16 sm:py-20 md:py-28 ${
        isDark ? 'bg-secondary' : bg === 'light' ? 'bg-lightShad2' : 'bg-white'
      }`}
    >
      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <div className='mb-10 md:mb-14'>
          {badge && (
            <p className={`mb-3 text-xs font-bold uppercase tracking-widest ${isDark ? 'text-primary' : 'text-primary'}`}>
              {badge}
            </p>
          )}
          <div className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
            <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-secondary'}`}>
              {heading}
            </h2>
            {subheading && (
              <p className={`max-w-xs text-sm leading-relaxed sm:text-right ${isDark ? 'text-white/60' : 'text-grey'}`}>
                {subheading}
              </p>
            )}
          </div>
        </div>

        {/* Minimal card grid */}
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {sectors.map((sector, i) => (
            <Link
              key={i}
              href={sector.href}
              className={`group flex items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-200 ${
                isDark
                  ? 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                  : 'border-lightShade1 bg-white hover:border-primary/30 hover:shadow-sm'
              }`}
            >
              {/* Icon */}
              <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${sector.iconBg}`}>
                {sector.icon}
              </div>

              {/* Text */}
              <div className='min-w-0 flex-1'>
                <p className={`truncate text-base font-semibold leading-tight ${isDark ? 'text-white' : 'text-secondary'}`}>
                  {sector.name}
                </p>
                <p className={`mt-0.5 truncate text-sm ${isDark ? 'text-white/50' : 'text-grey'}`}>
                  {sector.tagline}
                </p>
              </div>

              {/* Arrow */}
              <svg
                className={`size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
                  isDark ? 'text-white/30 group-hover:text-white/60' : 'text-gray-300 group-hover:text-primary'
                }`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
