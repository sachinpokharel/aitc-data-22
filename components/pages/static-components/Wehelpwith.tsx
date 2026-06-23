type SectionTheme = 'white' | 'light' | 'dark';

const themes: Record<
  SectionTheme,
  { section: string; heading: string; sub: string; card: string; cardHeading: string; cardText: string }
> = {
  white: {
    section: 'bg-white',
    heading: 'text-secondary',
    sub: 'text-grey',
    card: 'bg-lightShad2 border border-lightShade1',
    cardHeading: 'text-secondary',
    cardText: 'text-grey',
  },
  light: {
    section: 'bg-lightShad2',
    heading: 'text-secondary',
    sub: 'text-grey',
    card: 'bg-white border border-lightShade1',
    cardHeading: 'text-secondary',
    cardText: 'text-grey',
  },
  dark: {
    section: 'bg-secondary',
    heading: 'text-white',
    sub: 'text-white/70',
    card: 'bg-white/10 border border-white/15',
    cardHeading: 'text-white',
    cardText: 'text-white/70',
  },
};

export interface WeHelpItem {
  title: string;
  desc: string;
  href?: string;
  iconBg: string;
  iconColor: string;
  abbr?: string;
  icon?: React.ReactNode;
}

interface WeHelpWithProps {
  heading?: string;
  description?: string;
  items?: WeHelpItem[];
  theme?: SectionTheme;
}

const ServiceIcon = ({ className }: { className: string }) => (
  <svg className={className} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2'
    />
  </svg>
);

const defaultItems: WeHelpItem[] = [
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'Web App Development',
    desc: 'Reach out to an even wider audience with a custom, widely accessible web app.',
    href: '/services',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Corporate Website Development',
    desc: 'Ensure an effective online presence for your business with a corporate site.',
    href: '/services',
  },
  {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'MVP Development',
    desc: 'Take the first step on the way to a successful business with an MVP.',
    href: '/services/mvp-development',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'SaaS Development',
    desc: 'Meet your business goals with a powerful, custom SaaS solution.',
    href: '/services/saas-development',
  },
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'Testing & QA',
    desc: 'Make sure the quality of your solution meets your expectations.',
    href: '/services',
  },
  {
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'UI/UX Design',
    desc: 'Beat the competition with a modern, breathtaking & user-friendly design.',
    href: '/services',
  },
];

function ItemCard({
  item,
  cardClass,
  headingClass,
  textClass,
}: {
  item: WeHelpItem;
  cardClass: string;
  headingClass: string;
  textClass: string;
}) {
  const inner = (
    <div className={`h-full rounded-xl p-5 transition hover:shadow-md ${cardClass}`}>
      <div className={`mb-3 flex size-8 items-center justify-center rounded-lg ${item.iconBg}`}>
        {item.abbr ? (
          <span className={`text-xs font-black ${item.iconColor}`}>{item.abbr}</span>
        ) : item.icon ? (
          item.icon
        ) : (
          <ServiceIcon className={`size-4 ${item.iconColor}`} />
        )}
      </div>
      <h4 className={`mb-1 text-lg font-bold ${headingClass}`}>{item.title}</h4>
      <p className={`text-base ${textClass}`}>{item.desc}</p>
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} className='block h-full'>
        {inner}
      </a>
    );
  }
  return <div className='h-full'>{inner}</div>;
}

export default function WeHelpWith({
  heading = 'We Also Help With',
  description = 'Your tech partner needs to be well versed in all kinds of software-related services. As the software development process involves different stages and cycles, the most natural solution is to have them all performed by the same team of experts.',
  items = defaultItems,
  theme = 'light',
}: WeHelpWithProps) {
  const tk = themes[theme];

  return (
    <section className={`py-12 sm:py-16 md:py-20 ${tk.section}`}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex flex-col items-start gap-8 md:flex-row md:gap-16'>
          {/* Left */}
          <div className='md:w-1/3'>
            <h2 className={`mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl ${tk.heading}`}>{heading}</h2>
            <p className={`text-lg leading-relaxed ${tk.sub}`}>{description}</p>
          </div>

          {/* Right */}
          <div className='w-full md:w-2/3'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
              {items.map((item, i) => (
                <ItemCard
                  key={i}
                  item={item}
                  cardClass={tk.card}
                  headingClass={tk.cardHeading}
                  textClass={tk.cardText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
