import Image from 'next/image';
import Link from 'next/link';

interface PostReviewsCTAProps {
  onEstimatorOpen?: () => void;
  secondaryHref?: string;
  badge?: string;
  heading?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
}

export default function PostReviewsCTA({
  onEstimatorOpen,
  secondaryHref = '/free-project-estimate',
  badge = 'Ready to Build Your Ecommerce Solution?',
  heading = "Let's Turn Your Ecommerce Vision Into Reality",
  description = "Whether you're launching a new online store, migrating platforms, or scaling an existing ecommerce business, our team can help you plan, build, and grow with confidence.",
  primaryLabel = 'Free Consultation',
  secondaryLabel = 'Get Estimate',
  primaryHref = '#contact',
}: PostReviewsCTAProps) {
  return (
    <section className='overflow-hidden bg-secondary text-white'>
      <div className='mx-auto flex max-w-7xl flex-col items-end gap-8 px-6 lg:flex-row'>
        {/* Text + CTAs */}
        <div className='flex-1 py-16 text-center md:text-left'>
          <span className='mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold'>{badge}</span>
          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>{heading}</h2>
          <p className='mb-8 max-w-xl text-lg text-white/90'>{description}</p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row md:justify-start'>
            <Link
              href={primaryHref}
              className='rounded-lg bg-white px-8 py-4 font-bold text-secondary transition hover:opacity-90'
            >
              {primaryLabel}
            </Link>
            {onEstimatorOpen ? (
              <button
                onClick={onEstimatorOpen}
                className='rounded-lg border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-secondary'
              >
                {secondaryLabel}
              </button>
            ) : (
              <Link
                href={secondaryHref}
                className='rounded-lg border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-secondary'
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>

        {/* Woman cutout */}
        <div className='relative hidden h-[28rem] w-80 shrink-0 lg:block lg:w-[26rem]'>
          <Image
            src='/images/a-woman-in-a-business-suit-stands-in-an-office-smiling-directly-at-the-camera-the-background-includes-subtle-interior-details-photo-removebg-preview.png'
            alt='Business consultant'
            fill
            className='object-contain object-bottom'
          />
        </div>
      </div>
    </section>
  );
}
