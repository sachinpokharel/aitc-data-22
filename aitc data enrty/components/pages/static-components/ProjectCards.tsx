import Link from 'next/link';

export interface ProjectCard {
  industry: string;
  category: string;
  title: string;
  desc: string;
  href: string;
}

interface ProjectCardsProps {
  badge?: string;
  heading: string;
  description?: string;
  items: ProjectCard[];
  bg?: 'white' | 'light';
  viewAllHref?: string;
}

export default function ProjectCards({
  badge,
  heading,
  description,
  items,
  bg = 'light',
  viewAllHref,
}: ProjectCardsProps) {
  return (
    <section className={`common-padding py-20 md:py-24 ${bg === 'light' ? 'bg-lightShad2' : 'bg-white'}`}>
      <div className='mx-auto max-w-6xl'>
        {badge && <p className='text-xs font-bold uppercase tracking-widest text-primary'>{badge}</p>}
        <h2 className={`${badge ? 'mt-3' : ''} text-2xl font-bold text-secondary md:text-3xl`}>{heading}</h2>
        {description && <p className='mt-4 max-w-2xl text-lg text-mainBlack'>{description}</p>}
        <div className='mt-10 grid gap-6 md:grid-cols-3'>
          {items.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className='group flex flex-col rounded-xl border border-lightShade1 bg-white p-6 transition-colors hover:border-primary'
            >
              <div className='flex items-center gap-2'>
                <span className='rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary'>
                  {project.category}
                </span>
                <span className='text-xs text-grey'>{project.industry}</span>
              </div>
              <h3 className='mt-4 font-bold text-secondary transition-colors group-hover:text-primary'>
                {project.title}
              </h3>
              <p className='mt-2 flex-1 text-base text-grey'>{project.desc}</p>
              <span className='mt-4 text-base font-semibold text-primary'>View project →</span>
            </Link>
          ))}
        </div>
        {viewAllHref && (
          <div className='mt-8'>
            <Link
              href={viewAllHref}
              className='text-sm font-semibold text-primary underline underline-offset-4 hover:no-underline'
            >
              View all our work →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
