export type IntroductionDTO = {
  id: string;
  title: string;
  description: string;
  image: string;
  points: string[];
};

export type SerivceWeOfferDTO = {
  id: string;
  title: string;
  description: string;
  image: string;
  keyPoints: {
    title: string;
    description: string;
  }[];
};

export type TechToolsDTO = {
  id: number;
  mainTitle: string;
  techToolShowcases: {
    id: number;
    name: string;
    icon: string;
  }[];
};

export type AchievementsDTO = {
  mainTitle: string;
  description: string;
  awardShowcases: Award[];
};

export type Award = {
  id: number;
  name: string;
  icon: string;
};

export type RelatedServicesDTO = {
  id: string;
  mainTitle: string;
  description: string;
  serviceShowcases: {
    id: string;
    title: string;
    slug: string;
    clientSlug: string;
  }[];
};

export interface OurWorkServiceDTO {
  id: string;
  title: string;
  description: string;
  projectShowcases: ProjectShowcase[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  bgImage: string;
  slug: string;
  industryTag: IndustryTag;
  productTags: ProductTag[];
}

export interface IndustryTag {
  id: number;
  name: string;
}

export interface ProductTag {
  id: number;
  name: string;
}

export interface DesingServiceDTO {
  id: string;
  title: string;
  keyPoints: KeyPoint[];
}

export interface KeyPoint {
  id: string;
  title: string;
  description: string;
  image: string;
  bulletPoints: BulletPoint[];
}

export interface BulletPoint {
  id: string;
  title: string;
  description?: string;
}
