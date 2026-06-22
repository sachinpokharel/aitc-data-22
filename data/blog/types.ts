export type Author = {
  name: string;
  role: string;
  initials: string;
};

export type TOCItem = {
  id: string;
  label: string;
};

export type SoftwareType = {
  num: string;
  title: string;
  desc: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type IntegrationItem = {
  title: string;
  desc: string;
};

// iconType maps to an SVG preset in BlogTemplate
export type TechItem = {
  iconType: 'ai' | 'cloud' | 'iot' | 'analytics' | 'chatbot' | 'voice' | 'contactless' | 'predictive';
  title: string;
  desc: string;
};

export type ChallengeItem = {
  title: string;
  desc: string;
};

export type CostRow = {
  type: string;
  features: string;
  usd: string;
  npr: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type RelatedPost = {
  id: number;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
};

export type NavPost = {
  slug: string;
  title: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  author: Author;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  toc: TOCItem[];
  intro: string[];
  sections: {
    understanding: {
      desc: string[];
      benefits: string[];
    };
    types: SoftwareType[];
    features: Array<{ title: string; desc: string }>;
    processSteps: ProcessStep[];
    integrations: IntegrationItem[];
    technologies: TechItem[];
    challenges: ChallengeItem[];
    costTable: CostRow[];
    ongoingCosts: string[];
    partnerChecklist: Array<{ title: string; desc: string }>;
    whyAitc: {
      body: string[];
      services: string[];
    };
    futureTrends: {
      body: string[];
      trends: string[];
    };
    conclusion: string[];
  };
  faqs: FAQItem[];
  relatedPosts: RelatedPost[];
  prevPost?: NavPost;
  nextPost?: NavPost;
};
