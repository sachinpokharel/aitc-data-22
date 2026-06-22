import type { FAQ } from '@/components/pages/static-components/faqs';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WhyAITCCard } from '@/data/vs/freelancer-vs-software-development-company-data';

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroStats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '150+', label: 'Projects Delivered' },
  { value: 'ISO', label: 'Trusted Development Partner' },
];

export const heroData = {
  badge: 'Platform Strategy · Web App · Mobile App',
  headline: 'Web App vs Mobile App: Which Should You Build First?',
  description:
    'Compare development cost, reach, performance, user experience, and long-term maintenance to choose the right platform for your product.',
  primaryCTA: { label: 'Get Free Consultation', href: '/book-a-free-consultation' },
  secondaryCTA: { label: 'Compare Platforms', href: '#comparison' },
};

// ─── Quick Answer Cards ───────────────────────────────────────────────────────

export interface WebMobileModelCard {
  model: string;
  tagline: string;
  bestFor: string[];
  cta: { label: string; href: string };
}

export const quickAnswerCards: WebMobileModelCard[] = [
  {
    model: 'Web App',
    tagline: 'Accessible from any browser, no installation required',
    bestFor: [
      'Broad audience reach across all devices',
      'SaaS products and dashboards',
      'B2B platforms and admin tools',
      'Content-heavy and data-driven products',
      'Faster time to market',
    ],
    cta: { label: 'Build a Web App', href: '/request-a-quote' },
  },
  {
    model: 'Mobile App',
    tagline: 'Native experience built for iOS and Android',
    bestFor: [
      'On-the-go and high-frequency use',
      'Offline functionality required',
      'Push notifications and re-engagement',
      'Hardware access — camera, GPS, biometrics',
      'High-engagement consumer apps',
    ],
    cta: { label: 'Build a Mobile App', href: '/request-a-quote' },
  },
];

// ─── Feature-by-Feature Breakdown ────────────────────────────────────────────

export interface WebMobileFeatureComparison {
  feature: string;
  category: string;
  webApp: string;
  mobileApp: string;
}

export const featureBreakdown: WebMobileFeatureComparison[] = [
  {
    feature: 'Development Cost',
    category: 'Initial investment',
    webApp: 'Generally lower — one codebase runs across all devices and browsers without separate platform builds.',
    mobileApp: 'Higher cost — separate iOS and Android builds or a cross-platform framework with platform-specific work.',
  },
  {
    feature: 'Time to Market',
    category: 'Launch speed',
    webApp: 'Faster to build and deploy — no app store review or approval process before users can access it.',
    mobileApp: 'Longer cycle — app store submission, review, and approval add time before the app goes live.',
  },
  {
    feature: 'User Accessibility',
    category: 'How users access it',
    webApp: 'Accessible from any browser on any device instantly — no download or installation required.',
    mobileApp: 'Requires download and installation from the App Store or Google Play before first use.',
  },
  {
    feature: 'Offline Functionality',
    category: 'Works without internet',
    webApp: 'Limited offline capability — requires a Progressive Web App (PWA) setup to work without connection.',
    mobileApp: 'Full offline support built-in — works without internet using local device storage.',
  },
  {
    feature: 'Device Features',
    category: 'Hardware access',
    webApp: 'Limited access — camera, GPS, and biometrics require browser permission and are not always reliable.',
    mobileApp: 'Full native access to camera, GPS, push notifications, biometrics, sensors, and file system.',
  },
  {
    feature: 'Performance',
    category: 'Speed & responsiveness',
    webApp: 'Good performance for most use cases — dependent on browser engine and network quality.',
    mobileApp: 'Faster, more responsive native performance — optimized directly for the device hardware.',
  },
  {
    feature: 'Updates & Maintenance',
    category: 'How changes are delivered',
    webApp: 'Instant updates — deploy changes and every user gets the latest version immediately.',
    mobileApp: 'App store review required — users must update manually or enable automatic updates.',
  },
  {
    feature: 'User Re-engagement',
    category: 'Bringing users back',
    webApp: 'Lower re-engagement — relies on email, browser notifications, or direct visits.',
    mobileApp: 'Higher re-engagement — push notifications reach users directly on their home screen.',
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export interface WebMobileProcessStep {
  step: number;
  title: string;
  desc: string;
  isOngoing?: boolean;
}

export const webAppProcess: WebMobileProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Requirements',
    desc: 'Define product goals, user flows, platform requirements, and the right technology stack.',
  },
  {
    step: 2,
    title: 'UI/UX Design',
    desc: 'Design responsive interfaces that work consistently across desktop, tablet, and mobile browsers.',
  },
  {
    step: 3,
    title: 'Frontend Development',
    desc: 'Build the user interface using modern web frameworks — React, Next.js, or Vue.js.',
  },
  {
    step: 4,
    title: 'Backend & API Development',
    desc: 'Build APIs, databases, authentication systems, and all server-side business logic.',
  },
  {
    step: 5,
    title: 'Testing & QA',
    desc: 'Cross-browser and cross-device testing to ensure consistent performance and usability.',
  },
  {
    step: 6,
    title: 'Deployment & Continuous Updates',
    desc: 'Deploy to production and ship updates instantly — no app store delays, ever.',
    isOngoing: true,
  },
];

export const mobileAppProcess: WebMobileProcessStep[] = [
  {
    step: 1,
    title: 'Platform Strategy',
    desc: 'Decide between native (iOS/Android) or cross-platform (Flutter, React Native) based on requirements.',
  },
  {
    step: 2,
    title: 'UI/UX Design',
    desc: 'Design platform-specific interfaces following iOS Human Interface Guidelines and Material Design principles.',
  },
  {
    step: 3,
    title: 'App Development',
    desc: 'Build the app with native or cross-platform frameworks including all hardware integrations.',
  },
  {
    step: 4,
    title: 'Backend & API Integration',
    desc: 'Connect to backend services, push notification systems, payment gateways, and third-party APIs.',
  },
  {
    step: 5,
    title: 'Testing & QA',
    desc: 'Device-specific testing across iOS and Android versions, screen sizes, and real-world conditions.',
  },
  {
    step: 6,
    title: 'App Store Submission & Updates',
    desc: 'Submit to App Store and Google Play, manage reviews, releases, versioning, and ongoing updates.',
    isOngoing: true,
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const pricingModels: PricingTier[] = [
  {
    title: 'Web App',
    price: 'Browser-Based Delivery Model',
    desc: 'A single codebase that runs across all browsers and devices — faster to build, easier to update.',
    features: [
      'Lower initial development cost',
      'Single codebase across all devices',
      'No app store fees or approval delays',
      'Instant updates and deployments',
      'Easier to maintain and iterate',
    ],
    bottomBadge: 'Best for: SaaS platforms · B2B tools · Dashboards · Admin panels · Content products',
    highlight: false,
    cta: 'Build a web app',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Mobile App',
    price: 'Native Mobile Delivery Model',
    desc: 'A purpose-built app for iOS and Android delivering native performance, hardware access, and push engagement.',
    features: [
      'Native device performance',
      'Full hardware and sensor access',
      'Push notification capability',
      'Offline functionality included',
      'Higher user retention and engagement',
    ],
    bottomBadge: 'Best for: Consumer apps · On-demand services · High-engagement products · Field tools',
    highlight: true,
    cta: 'Build a mobile app',
    ctaHref: '/request-a-quote',
  },
];

// ─── Real Scenarios ───────────────────────────────────────────────────────────

export interface WebMobileScenarioCard {
  title: string;
  model: 'Web App' | 'Mobile App';
  desc: string;
}

export const realScenarios: WebMobileScenarioCard[] = [
  {
    title: 'B2B SaaS Dashboard',
    model: 'Web App',
    desc: 'Users access the platform from office devices through a browser. A web app delivers full functionality without installation friction.',
  },
  {
    title: 'Fitness Tracking App',
    model: 'Mobile App',
    desc: 'Needs GPS, accelerometer, offline logging, and push reminders — capabilities that only a native mobile app can fully deliver.',
  },
  {
    title: 'E-Commerce Admin Panel',
    model: 'Web App',
    desc: 'Managers use desktops and laptops to manage inventory and orders. A browser-based tool is faster to build and always up to date.',
  },
  {
    title: 'Food Delivery App',
    model: 'Mobile App',
    desc: 'Real-time GPS tracking, push notifications for order updates, and in-app payments make mobile the only viable platform.',
  },
  {
    title: 'Internal Business Tool',
    model: 'Web App',
    desc: 'Employees access it from company devices through a browser — no app store, no installation, instant updates for everyone.',
  },
  {
    title: 'Social or Community App',
    model: 'Mobile App',
    desc: 'Daily engagement, push notifications, photo sharing, and in-app messaging demand the full native mobile experience.',
  },
];

// ─── Decision Tool ────────────────────────────────────────────────────────────

export interface WebMobileDecisionOption {
  label: string;
  recommendation: 'Web App' | 'Mobile App';
}

export interface WebMobileDecisionQuestion {
  question: string;
  options: WebMobileDecisionOption[];
}

export const decisionToolQuestions: WebMobileDecisionQuestion[] = [
  {
    question: 'How will your users primarily access the product?',
    options: [
      { label: 'From a desktop or laptop browser', recommendation: 'Web App' },
      { label: 'From their smartphone on the go', recommendation: 'Mobile App' },
      { label: 'Both browser and mobile equally', recommendation: 'Web App' },
    ],
  },
  {
    question: 'Do you need native device features?',
    options: [
      { label: 'No — browser-based functionality is enough', recommendation: 'Web App' },
      { label: 'Yes — camera, GPS, push notifications, or offline', recommendation: 'Mobile App' },
      { label: 'Push notifications are the main requirement', recommendation: 'Mobile App' },
    ],
  },
  {
    question: 'What is your primary product goal?',
    options: [
      { label: 'Broad reach across all devices with fast deployment', recommendation: 'Web App' },
      { label: 'High daily engagement and user retention on mobile', recommendation: 'Mobile App' },
      { label: 'Both — I want to launch fast and add mobile later', recommendation: 'Web App' },
    ],
  },
];

// ─── Real Projects ────────────────────────────────────────────────────────────

export interface WebMobileProjectCard {
  title: string;
  model: 'Web App' | 'Mobile App';
  desc: string;
}

export const realProjects: WebMobileProjectCard[] = [
  {
    title: 'SaaS Dashboard Platform',
    model: 'Web App',
    desc: 'A full-featured web application with real-time data, user roles, and reporting delivered as a responsive browser-based product.',
  },
  {
    title: 'iOS & Android Consumer App',
    model: 'Mobile App',
    desc: 'Cross-platform mobile app built with Flutter including offline mode, push notifications, and camera integration.',
  },
  {
    title: 'B2B Management Platform',
    model: 'Web App',
    desc: 'A complex multi-user web platform with integrations, reporting dashboards, and role-based access control.',
  },
  {
    title: 'On-Demand Service App',
    model: 'Mobile App',
    desc: 'Native mobile app with real-time GPS tracking, payment processing, and push notifications for iOS and Android.',
  },
];

// ─── Why AITC ─────────────────────────────────────────────────────────────────

export { WhyAITCCard };

export const whyAITCCards: WhyAITCCard[] = [
  {
    title: 'Platform Strategy Guidance',
    point: 'We evaluate your target users, product goals, and budget to recommend web app, mobile app, or both.',
    benefit: 'This prevents building the wrong platform and wasting development budget on the wrong audience.',
  },
  {
    title: 'Full Web Development Capability',
    point: 'We build modern web applications using React, Next.js, and scalable backend systems.',
    benefit: 'This gives you a fast, maintainable product that works perfectly across all devices and browsers.',
  },
  {
    title: 'Native & Cross-Platform Mobile',
    point: 'We build iOS and Android apps using Flutter, React Native, Swift, and Kotlin.',
    benefit: 'This ensures your mobile app delivers native performance on every device your users carry.',
  },
  {
    title: 'Unified Backend for Both Platforms',
    point: 'We architect shared backend systems that power both web and mobile products from one API.',
    benefit: 'This reduces cost and complexity significantly when you decide to build on both platforms.',
  },
  {
    title: 'Post-Launch Support & Updates',
    point: 'We manage web deployments, app store submissions, and continuous improvements across both platforms.',
    benefit: 'This ensures your product stays current and keeps improving long after the initial launch.',
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: 'Which is cheaper to build — a web app or a mobile app?',
    answer:
      'Web apps are generally less expensive initially since one codebase runs across all browsers and devices. Mobile apps require platform-specific development which adds time and cost, especially when building for both iOS and Android.',
  },
  {
    question: 'Can I have both a web app and a mobile app?',
    answer:
      'Yes. Many products start with a web app and add a mobile app as the user base and engagement needs grow. A well-designed shared backend serves both platforms efficiently.',
  },
  {
    question: 'What is a Progressive Web App (PWA)?',
    answer:
      "A PWA is a web app that behaves like a native mobile app — it can be installed on a home screen, works offline, and can send push notifications. It is a cost-effective way to bridge web and mobile without a separate app store build.",
  },
  {
    question: 'Which drives better user engagement — web or mobile?',
    answer:
      'Mobile apps generally drive higher re-engagement through push notifications and home screen presence. Web apps have broader reach without installation friction. The right choice depends on how frequently and where your users need to access the product.',
  },
  {
    question: 'Do mobile apps need separate builds for iOS and Android?',
    answer:
      'Not necessarily. Cross-platform frameworks like Flutter and React Native allow a single codebase to run on both iOS and Android, significantly reducing cost and development time while still delivering near-native performance.',
  },
  {
    question: 'Can AITC build both a web app and a mobile app?',
    answer:
      'Yes. We have full-stack web and mobile development teams. We often design shared backend architecture so both products can be built efficiently and maintained together without duplicating infrastructure.',
  },
];