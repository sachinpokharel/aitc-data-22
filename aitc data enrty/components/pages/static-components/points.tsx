import Image from 'next/image';
import Link from 'next/link';

export interface PointItem {
  id?: string;
  title: string;
  icon?: string;
}

interface PointsSectionProps {
  heading: string;
  description?: string;
  points: PointItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  theme?: 'white' | 'light';
}

export default function PointsSection({
  heading,
  description,
  points,
  ctaLabel,
  ctaHref = '/contact-us',
  className = '',
  theme = 'light',
}: PointsSectionProps) {
  return (
    <section
      className={`common-padding py-12 md:py-16 ${theme === 'light' ? 'bg-lightShad2' : 'bg-white'} ${className}`}
    >
      <div className='mx-auto max-w-6xl'>
        <h2 className='mb-3 text-2xl font-bold text-secondary md:text-3xl'>{heading}</h2>
        {description && <p className='mb-10 max-w-2xl text-base leading-relaxed text-grey'>{description}</p>}

        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
          {points.map((item, index) => (
            <div
              key={item.id ?? index}
              className='group flex w-full items-center gap-4 rounded-lg p-4 [background:linear-gradient(90deg,#F8F8FF_6%,#EDEDFF_100%)]'
            >
              <Image
                src={item.icon ?? '/icons/arrow.png'}
                alt=''
                width={100}
                height={100}
                className='h-6 w-4 shrink-0 object-contain'
              />
              <p className='text-lg leading-snug text-mainBlack transition-all duration-300 group-hover:translate-x-1'>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {ctaLabel && (
          <div className='mt-10'>
            <Link
              href={ctaHref}
              className='inline-block rounded-lg bg-primary px-8 py-3.5 font-bold text-white transition-all hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)]'
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
