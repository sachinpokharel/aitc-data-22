import Image from 'next/image';

const L = '/images/techstack/';

type SectionTheme = 'white' | 'light' | 'dark';

const themes: Record<SectionTheme, { section: string; heading: string; sub: string }> = {
  white: { section: 'bg-white', heading: 'text-secondary', sub: 'text-grey' },
  light: { section: 'bg-lightShad2', heading: 'text-secondary', sub: 'text-grey' },
  dark: { section: 'bg-secondary', heading: 'text-white', sub: 'text-white/70' },
};

interface TechItem {
  name: string;
  icon: string;
}

const techs: TechItem[] = [
  { name: 'React', icon: `${L}React.svg` },
  { name: 'Next.js', icon: `${L}Next.js.svg` },
  { name: 'Vue.js', icon: `${L}Vue.js.svg` },
  { name: 'Angular', icon: `${L}Angular.svg` },
  { name: 'Node.js', icon: `${L}Node.js.svg` },
  { name: 'PostgreSQL', icon: `${L}PostgresSQL.svg` },
  { name: 'AWS', icon: `${L}AWS.svg` },
  { name: 'Azure', icon: `${L}Azure.svg` },
  { name: 'Postman', icon: `${L}Postman.svg` },
];

interface TechnologiesProps {
  theme?: SectionTheme;
  heading?: string;
  subheading?: string;
  items?: TechItem[];
}

export default function Technologies({
  theme = 'white',
  heading = 'Tools & Technologies',
  subheading = 'Check the technologies for Software development solutions that can help broaden your businesses digital borders with the skills of our team.',
  items = techs,
}: TechnologiesProps) {
  const tk = themes[theme];
  return (
    <section id='technologies' className={`py-12 sm:py-16 ${tk.section}`}>
      <div className='mx-auto max-w-7xl px-4 text-center sm:px-6'>
        <h2 className={`mb-3 text-2xl font-bold sm:text-3xl ${tk.heading}`}>{heading}</h2>
        <p className={`mx-auto mb-8 max-w-2xl text-sm sm:mb-10 sm:text-base ${tk.sub}`}>{subheading}</p>
        <div className='flex flex-wrap justify-center gap-3'>
          {items.map((t) => (
            <div
              key={t.name}
              className='flex items-center gap-2 rounded-full border border-lightShade1 bg-white px-4 py-2 shadow-sm transition-all hover:border-secondary/30 hover:shadow-md'
            >
              <Image src={t.icon} alt={t.name} width={20} height={20} className='shrink-0 object-contain' />
              <span className='text-sm font-medium text-mainBlack'>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
