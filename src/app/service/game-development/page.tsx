import { type Metadata } from 'next';
import Link from 'next/link';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import InlineInquiryForm from '@/components/pages/static-components/InlineInquiryForm';
import Solutions, { type SolutionTab } from '@/components/pages/static-components/solution';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import WeHelpWith from '@/components/pages/static-components/Wehelpwith';

export const metadata: Metadata = {
  title: 'Game Development Services | Custom Game Development | AITC',
  description:
    'Custom game development services — mobile games, multiplayer experiences, AR/VR, and interactive platforms built for engaging player experiences across all devices. Book a free consultation.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/game-development`,
  },
  openGraph: {
    title: 'Game Development Services | Custom Game Development | AITC',
    description:
      'Bring your game idea to life with custom game development services designed to create immersive experiences, captivating gameplay, and scalable gaming platforms across multiple devices.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/game-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const gameSolutionTabs: SolutionTab[] = [
  {
    label: 'Game Design & Strategy',
    desc: 'We help transform game concepts into actionable development plans by defining gameplay mechanics, player journeys, monetization models, and technical requirements before a single line of code is written.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        />
      </svg>
    ),
  },
  {
    label: 'Custom Game Development',
    desc: 'Our developers build custom games tailored to your vision, audience, and platform requirements — ensuring smooth performance, engaging gameplay, and a polished player experience from day one.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z'
        />
      </svg>
    ),
  },
  {
    label: 'Mobile Game Development',
    desc: 'Create high-quality mobile games for iOS and Android with intuitive controls, optimized performance, and engaging user experiences designed for on-the-go players.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3'
        />
      </svg>
    ),
  },
  {
    label: 'Multiplayer Game Development',
    desc: 'Develop real-time multiplayer experiences with matchmaking systems, leaderboards, social features, and seamless player interactions that keep communities engaged.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
        />
      </svg>
    ),
  },
  {
    label: 'AR & VR Game Development',
    desc: 'Build immersive augmented reality and virtual reality games that deliver interactive and highly engaging experiences across ARKit, ARCore, Meta Quest, and other emerging platforms.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Game Maintenance & Live Ops',
    desc: 'Keep your game running smoothly with performance optimization, content updates, bug fixes, feature enhancements, and ongoing technical support to sustain long-term player engagement.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
        />
      </svg>
    ),
  },
];

const whyGame = [
  {
    title: 'Increase User Engagement',
    desc: 'Games encourage active participation and longer interaction times compared to traditional digital experiences. Engaging gameplay mechanics help retain users and build stronger connections with your audience.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
      </svg>
    ),
  },
  {
    title: 'Strengthen Brand Awareness',
    desc: 'Gamified experiences create memorable interactions that increase brand recognition and customer loyalty. Interactive content consistently generates higher engagement than traditional marketing methods.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' />
      </svg>
    ),
  },
  {
    title: 'Create New Revenue Opportunities',
    desc: 'Games can generate revenue through purchases, subscriptions, advertising, sponsorships, and in-game transactions. A well-designed game can become a sustainable digital product with long-term earning potential.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    title: 'Build Stronger Communities',
    desc: 'Multiplayer features, social interactions, and competitive gameplay help create active communities around your game or brand. Strong communities contribute to long-term user retention and organic growth.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Deliver Immersive Experiences',
    desc: 'Modern gaming technologies allow businesses to create highly interactive and personalized experiences. These experiences help capture attention and differentiate products in increasingly competitive digital markets.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Game Planning',
    desc: 'We explore your concept, audience, objectives, gameplay ideas, and technical requirements to establish a clear development roadmap.',
  },
  {
    step: '02',
    title: 'Game Design & Prototyping',
    desc: 'Our team creates gameplay mechanics, user flows, wireframes, and prototypes to validate ideas before full development begins.',
  },
  {
    step: '03',
    title: 'Art & Experience Design',
    desc: 'We design game environments, characters, animations, interfaces, and visual assets that bring your creative vision to life.',
  },
  {
    step: '04',
    title: 'Game Development',
    desc: 'Developers build the game\'s core mechanics, systems, features, and functionality using modern game development technologies.',
  },
  {
    step: '05',
    title: 'Testing & Optimization',
    desc: 'We perform gameplay testing, bug fixing, performance optimization, and quality assurance to ensure a smooth player experience.',
  },
  {
    step: '06',
    title: 'Launch & Deployment',
    desc: 'The game is prepared for launch across selected platforms with proper deployment, store submissions, and release management.',
  },
  {
    step: '07',
    title: 'Live Support & Growth',
    desc: 'After launch, we provide updates, content improvements, performance monitoring, and feature enhancements to support long-term success.',
  },
];

const industries = [
  {
    title: 'Entertainment & Gaming',
    desc: 'Engaging mobile, PC, console, and multiplayer games designed to attract, retain, and grow dedicated player communities.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z' />
      </svg>
    ),
  },
  {
    title: 'Education & E-Learning',
    desc: 'Educational games that make learning interactive, engaging, and effective for students, professionals, and lifelong learners.',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    desc: 'Gamified healthcare experiences that encourage patient engagement, clinical training, wellness tracking, and rehabilitation.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    title: 'Corporate Training',
    desc: 'Simulation-based learning and training games that improve employee engagement, knowledge retention, and skills development.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Marketing & Brand Engagement',
    desc: 'Branded games and gamified campaigns that increase customer interaction, generate leads, and strengthen brand awareness.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46' />
      </svg>
    ),
  },
  {
    title: 'Sports & Fitness',
    desc: 'Fitness applications, sports simulations, and gamified experiences that motivate users, track progress, and improve participation.',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
];

const whyAitc = [
  {
    title: 'Player-Centric Development Approach',
    desc: 'We focus on creating experiences that keep players engaged while aligning with your business goals and product vision. Every design decision is made with the player experience in mind.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z' />
      </svg>
    ),
  },
  {
    title: 'Creative & Technical Expertise',
    desc: 'Our team combines game design, development, art, and user experience expertise to build immersive digital experiences — not just functional software.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' />
      </svg>
    ),
  },
  {
    title: 'Cross-Platform Development',
    desc: 'We develop games that perform seamlessly across mobile, desktop, web, AR, VR, and emerging platforms — reaching your audience wherever they play.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25' />
      </svg>
    ),
  },
  {
    title: 'Scalable Game Architecture',
    desc: 'Our solutions are built to support growing player bases, evolving features, and long-term game performance — without costly infrastructure rebuilds as you scale.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' />
      </svg>
    ),
  },
  {
    title: 'Agile Development Process',
    desc: 'Transparent communication, rapid iterations, and continuous collaboration ensure projects move efficiently from concept to launch — with regular demos along the way.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99' />
      </svg>
    ),
  },
  {
    title: 'Long-Term Support & Enhancement',
    desc: 'We continue supporting your game through updates, content additions, optimization, and ongoing technical improvements to keep your player base engaged after launch.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How long does game development take?',
    answer:
      'Development timelines vary based on game complexity, features, art requirements, multiplayer functionality, and target platforms. A focused mobile game or gamified experience typically takes 12–20 weeks. A full-featured multiplayer or AR/VR game can range from 24–48+ weeks. We provide a detailed timeline estimate after a free scoping call.',
  },
  {
    question: 'How much does game development cost?',
    answer:
      'Costs depend on gameplay complexity, graphics, platforms, features, integrations, and overall project scope. A focused mobile game or branded gamified experience typically starts from $20K–$50K. A full-featured multiplayer or AR/VR game can range from $80K–$250K+. We provide a fixed-price estimate after a discovery call so there are no surprises.',
  },
  {
    question: 'Can you develop games for both mobile and desktop?',
    answer:
      'Yes. We develop games for mobile (iOS and Android), desktop, web, and cross-platform environments. Using engines like Unity and Unreal Engine, we can target multiple platforms from a single codebase — reducing cost and ensuring a consistent experience across devices.',
  },
  {
    question: 'Do you provide game design services?',
    answer:
      'Yes. We offer full game design services including concept development, prototyping, gameplay planning, UI/UX design, player journey mapping, and user testing. Our design team works closely with developers to ensure the player experience is engaging, intuitive, and aligned with your business goals.',
  },
  {
    question: 'Can you build multiplayer games?',
    answer:
      'Absolutely. We develop multiplayer games with real-time interactions, matchmaking systems, leaderboards, and social features using proven multiplayer infrastructure such as Photon, PlayFab, and custom backend solutions on AWS or Google Cloud.',
  },
];

export default function GameDevelopmentPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className='relative overflow-hidden bg-secondary'>
        <div className='pointer-events-none absolute -right-32 -top-32 size-[600px] rounded-full bg-primary/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-24 left-1/4 size-[400px] rounded-full bg-primary/5 blur-2xl' />
        <div
          className='pointer-events-none absolute inset-0 opacity-10'
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className='common-padding relative py-16 md:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              {/* Left — copy */}
              <div>
                <span className='mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm'>
                  <span className='size-1.5 animate-pulse rounded-full bg-primary' />
                  Game Development Services
                </span>
                <h1 className='mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]'>
                  Game Development for{' '}
                  <span className='text-primary'>Engaging Digital Experiences</span>
                </h1>
                <p className='mb-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl'>
                  Bring your game idea to life with custom game development services designed to create immersive
                  experiences, captivating gameplay, and scalable gaming platforms across multiple devices.
                </p>
                <div className='flex flex-col gap-4 sm:flex-row'>
                  <Link
                    href='/book-a-free-consultation'
                    className='rounded-md bg-primary px-7 py-3.5 text-center font-semibold text-white transition-opacity hover:opacity-90'
                  >
                    Book Free Consultation
                  </Link>
                  <Link
                    href='/request-a-quote'
                    className='rounded-md border-2 border-white/30 px-7 py-3.5 text-center font-medium text-white transition-colors hover:border-white hover:bg-white/10'
                  >
                    Get Game Development Estimate →
                  </Link>
                </div>
                <ul className='mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70'>
                  <li><span className='text-primary'>✓</span> Games & Interactive Experiences Delivered</li>
                  <li><span className='text-primary'>✓</span> Experienced Game Developers</li>
                  <li><span className='text-primary'>✓</span> Cross-Platform Development Expertise</li>
                  <li><span className='text-primary'>✓</span> ISO Certified</li>
                </ul>
              </div>

              {/* Right — game metrics card */}
              <div className='hidden lg:block'>
                <div className='relative mx-auto max-w-sm'>
                  <div className='rounded-2xl border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-md'>
                    <div className='mb-5 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-full bg-primary/20'>
                        <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z' />
                        </svg>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-widest text-primary'>Game Analytics</p>
                        <p className='text-sm font-semibold text-white'>Live player metrics</p>
                      </div>
                    </div>
                    <div className='space-y-2.5'>
                      {[
                        { label: 'Daily Active Users', value: '48,200', change: '+34%', up: true },
                        { label: 'Avg. Session Length', value: '22 min', change: '+18%', up: true },
                        { label: 'Day-7 Retention', value: '41%', change: '+12%', up: true },
                        { label: 'In-Game Revenue / Day', value: '$3,840', change: '+27%', up: true },
                      ].map((metric) => (
                        <div
                          key={metric.label}
                          className='flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-2.5'
                        >
                          <span className='text-base text-white/70'>{metric.label}</span>
                          <div className='flex items-center gap-2'>
                            <span className='font-semibold text-white'>{metric.value}</span>
                            <span className='text-xs font-semibold text-green-400'>{metric.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5'>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-white'>60fps</p>
                        <p className='text-xs text-white/50'>Smooth gameplay</p>
                      </div>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-white'>&lt;80ms</p>
                        <p className='text-xs text-white/50'>Multiplayer latency</p>
                      </div>
                    </div>
                  </div>
                  <div className='absolute -bottom-4 -left-6 rounded-xl bg-primary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>NDA before discussion</p>
                    <p className='text-[10px] text-white/70'>Your IP stays protected</p>
                  </div>
                  <div className='absolute -right-4 -top-4 rounded-xl bg-white px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-secondary'>Free Game Consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className='border-b border-gray-100 bg-white'>
        <div className='common-padding mx-auto max-w-screen-2xl py-10'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            {[
              { value: '45+', label: 'Games & experiences delivered' },
              { value: '96%', label: 'Client satisfaction rate' },
              { value: '10 yrs', label: 'Industry experience' },
              { value: '6+', label: 'Platforms supported' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className='text-4xl font-bold text-secondary'>{stat.value}</p>
                <p className='mt-1 text-xs font-bold uppercase tracking-widest text-grey'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* ── SERVICES ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16'>
            <div className='lg:sticky lg:top-24 lg:w-80 lg:shrink-0'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>What we offer</p>
              <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
                From Concept to Launch: Complete Game Development Services
              </h2>
              <p className='mt-4 text-base leading-relaxed text-grey'>
                From mobile games and multiplayer experiences to immersive 3D worlds, our game development services cover
                every stage — from concept and design to development, launch, and ongoing support.
              </p>
              <Link
                href='/book-a-free-consultation'
                className='mt-6 inline-flex items-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-800'
              >
                Book Free Consultation →
              </Link>
            </div>
            <div className='flex-1 grid gap-5 sm:grid-cols-2'>
              {[
                {
                  num: '01',
                  title: 'Game Design & Strategy',
                  desc: 'We help transform game concepts into actionable development plans by defining gameplay mechanics, player journeys, monetization models, and technical requirements.',
                },
                {
                  num: '02',
                  title: 'Custom Game Development',
                  desc: 'Our developers build custom games tailored to your vision, audience, and platform requirements, ensuring smooth performance and engaging gameplay.',
                },
                {
                  num: '03',
                  title: 'Mobile Game Development',
                  desc: 'Create high-quality mobile games for iOS and Android with intuitive controls, optimized performance, and engaging user experiences.',
                },
                {
                  num: '04',
                  title: 'Multiplayer Game Development',
                  desc: 'Develop real-time multiplayer experiences with matchmaking systems, leaderboards, social features, and seamless player interactions.',
                },
                {
                  num: '05',
                  title: 'AR & VR Game Development',
                  desc: 'Build immersive augmented reality and virtual reality games that deliver interactive and highly engaging experiences across platforms.',
                },
                {
                  num: '06',
                  title: 'Game UI/UX Design',
                  desc: 'We design intuitive game interfaces, player journeys, menus, HUDs, and interactive experiences that enhance engagement and usability.',
                },
                {
                  num: '07',
                  title: 'Game Maintenance & Live Operations',
                  desc: 'Keep your game running smoothly with performance optimization, content updates, bug fixes, feature enhancements, and ongoing technical support.',
                },
              ].map((service) => (
                <div
                  key={service.num}
                  className='group rounded-xl border border-lightShade1 bg-white p-6 transition-shadow hover:shadow-md'
                >
                  <span className='font-mono text-xs font-bold text-primary'>{service.num}</span>
                  <h3 className='mt-2 text-base font-bold text-secondary'>{service.title}</h3>
                  <p className='mt-2 text-base leading-relaxed text-grey'>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY INVEST IN GAME DEVELOPMENT ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>The business case</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why Businesses and Brands Are Investing in Interactive Gaming Experiences
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Games have become one of the most powerful forms of digital engagement — from entertainment and education to
            marketing and customer engagement, game development helps businesses connect with audiences through immersive
            and memorable experiences.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whyGame.map((item) => (
              <div key={item.title} className='rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                  {item.icon}
                </div>
                <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA 1 ── */}
      <section className='bg-primary'>
        <div className='common-padding mx-auto max-w-screen-2xl py-14 md:py-16'>
          <div className='flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left'>
            <div className='max-w-2xl'>
              <p className='text-xs font-bold uppercase tracking-widest text-white/70'>Game Strategy</p>
              <h2 className='mt-2 text-2xl font-bold text-white md:text-3xl'>
                Ready to turn your game idea into an unforgettable player experience? Let&apos;s create a game that
                engages players, builds communities, and delivers lasting impact.
              </h2>
            </div>
            <Link
              href='/book-a-free-consultation'
              className='shrink-0 rounded-md bg-white px-8 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90'
            >
              Schedule a Game Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>How we work</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            How Our Game Development Process Brings Ideas to Life
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Our game development process combines creativity, technical expertise, and player-focused design to deliver
            high-quality gaming experiences across platforms.
          </p>
          <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {processSteps.slice(0, 4).map((step) => (
              <div key={step.step} className='relative rounded-xl border border-lightShade1 bg-lightShad2 p-7'>
                <div className='mb-3'>
                  <span className='flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white'>
                    {step.step}
                  </span>
                </div>
                <h3 className='text-base font-bold text-secondary'>{step.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className='mt-5 grid gap-5 md:grid-cols-3'>
            {processSteps.slice(4).map((step) => (
              <div key={step.step} className='relative rounded-xl border border-lightShade1 bg-lightShad2 p-7'>
                <div className='mb-3'>
                  <span className='flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white'>
                    {step.step}
                  </span>
                </div>
                <h3 className='text-base font-bold text-secondary'>{step.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS (TABBED) ── */}
      <Solutions
        badge='Game development solutions'
        heading='End-to-End Game Development Services'
        subheading='From mobile games and AR/VR experiences to multiplayer platforms — start with what you need and expand as your player base grows.'
        tabs={gameSolutionTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get a project estimate'
        ctaHref='/request-a-quote'
      />

      {/* ── TECHNOLOGIES ── */}
      <Technologies
        heading='Technologies Behind Exceptional Gaming Experiences'
        subheading='We use industry-leading game engines, development frameworks, and technologies to create immersive, high-performance gaming experiences across platforms.'
      />

      {/* ── MID CTA 2 ── */}
      <section className='relative overflow-hidden bg-lightShad2'>
        <div className='pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-primary/5 blur-2xl' />
        <div className='common-padding mx-auto max-w-screen-2xl py-16 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Ready to build?</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
              Got a Game Idea? Let&apos;s Build It Together
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-mainBlack'>
              Turn your game concept into an engaging player experience with expert guidance, creative design, and
              end-to-end development support.
            </p>
            <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <Link
                href='/request-a-quote'
                className='w-full rounded-md bg-secondary px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-purple-800 sm:w-auto'
              >
                Discuss Your Game Development Project →
              </Link>
              <Link
                href='/book-a-free-consultation'
                className='w-full rounded-md border-2 border-secondary px-8 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white sm:w-auto'
              >
                Book a Free Call
              </Link>
            </div>
            <p className='mt-4 text-base text-grey'>No commitment · NDA on request · Reply within 24 hours</p>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Verticals we serve</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Game Development Solutions for Diverse Industries
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Gaming technology is no longer limited to entertainment. We develop interactive gaming experiences that help
            organizations engage audiences, educate users, promote brands, and create new digital opportunities.
          </p>
          <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {industries.map((industry) => (
              <div
                key={industry.title}
                className={`rounded-xl border border-lightShade1 p-6 transition-shadow hover:shadow-md ${industry.color}`}
              >
                <div className={`mb-4 ${industry.iconColor}`}>{industry.icon}</div>
                <h3 className='text-base font-bold text-secondary'>{industry.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AITC ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Why AITC</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why Studios, Startups, and Brands Choose AITC for Game Development
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Creative expertise, technical depth, and full IP ownership — without the rates you&apos;d pay in the UK, US,
            or Australia.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whyAitc.map((item) => (
              <div key={item.title} className='rounded-xl border border-lightShade1 bg-white p-6'>
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                  {item.icon}
                </div>
                <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POST REVIEWS CTA ── */}
      <PostReviewsCTA
        badge='Game Development'
        heading='Ready to Create a Game That Captivates Players from Day One?'
        description='Turn your vision into an engaging gaming experience with a team experienced in design, development, and long-term game success. From concept to live operations, we handle it all.'
        primaryLabel='Schedule a Consultation'
        primaryHref='/book-a-free-consultation'
        secondaryLabel='Get a Free Project Estimate'
        secondaryHref='/request-a-quote'
      />

      {/* ── WE ALSO HELP WITH ── */}
      <WeHelpWith
        heading='We Also Help With'
        description='Game development is one part of a broader digital product strategy. From mobile apps and AI solutions to custom software and SaaS platforms, our Nepal-based engineering team covers every layer of your product — at 70% less than local development rates.'
        theme='light'
        items={[
          {
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            title: 'Mobile App Development',
            desc: 'iOS and Android apps built for performance and engagement.',
            href: '/mobile-application-development',
          },
          {
            iconBg: 'bg-[#fff3e8]',
            iconColor: 'text-[#ff7500]',
            title: 'AI Software Development',
            desc: 'Intelligent AI features and automation built into your digital products.',
            href: '/service/ai-software-development',
          },
          {
            iconBg: 'bg-[#f1eef8]',
            iconColor: 'text-[#3d2d72]',
            title: 'MVP Development',
            desc: 'Validated minimum viable product to test your concept before full build.',
            href: '/service/mvp-development',
          },
          {
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            title: 'Custom Software Development',
            desc: 'End-to-end software solutions built around your unique business processes.',
            href: '/custom-software-development',
          },
          {
            iconBg: 'bg-teal-100',
            iconColor: 'text-teal-600',
            title: 'SaaS Development',
            desc: 'Cloud-native subscription platforms built for scale and growth.',
            href: '/service/saas-development',
          },
          {
            iconBg: 'bg-orange-100',
            iconColor: 'text-orange-600',
            title: 'Dedicated Development Team',
            desc: 'Long-term game developers embedded in your studio or product team.',
            href: '/services/dedicated-development-team',
          },
        ]}
      />

      {/* ── FINAL CTA + FORM ── */}
      <section className='relative overflow-hidden bg-secondary text-white'>
        <svg
          className='absolute inset-x-0 top-0 h-32 w-full opacity-20'
          viewBox='0 0 1440 128'
          fill='none'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <path d='M0 100 L220 40 L400 90 L600 20 L800 85 L1000 35 L1200 90 L1440 55' stroke='#486581' strokeWidth='1' />
        </svg>
        <div className='common-padding relative mx-auto max-w-screen-2xl py-20 md:py-28'>
          <div className='grid items-start gap-10 lg:grid-cols-[2fr_3fr]'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Start your project</p>
              <h2 className='mt-3 text-3xl font-bold sm:text-4xl'>
                Let&apos;s Scope Your Game Development Project
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-white/80'>
                Share your game idea and we&apos;ll come back with a creative direction, technical approach, timeline,
                and cost range — no obligation, no commitment.
              </p>
              <ul className='mt-8 space-y-3 text-white/75'>
                <li className='flex items-center gap-2'>
                  <span className='text-primary'>✓</span> Free discovery call included
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-primary'>✓</span> Fixed-price estimate available
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-primary'>✓</span> NDA before any project discussion
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-primary'>✓</span> Reply within 1 business day
                </li>
              </ul>
              <div className='mt-8 flex flex-wrap items-center gap-3'>
                {['ISO 9001', 'ISO 27001', 'GDPR Ready', 'AWS Partner'].map((badge) => (
                  <span
                    key={badge}
                    className='rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80'
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <InlineInquiryForm
              preselectedService='Game Development'
              preselectedIndustry='Technology'
              formName='bofu-game-development'
              heading='Get your game development estimate'
              subheading="Tell us your game concept and we'll respond with a creative and technical recommendation within 24 hours."
              ctaLabel='Send my requirements'
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get Game Estimate' quoteHref='/request-a-quote' />
    </>
  );
}
