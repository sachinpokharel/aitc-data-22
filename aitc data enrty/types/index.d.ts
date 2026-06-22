export type CommonSubServiceSection = {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  subTitle?: string;
  points?: string[];
  keyPoints?: {
    id?: string;
    title?: string;
    description?: string;
    image?: string;
    index?: number;
  }[];
};

export type CommonSubServiceHeroSection = {
  id?: number;
  title?: string;
  description: string;
  bgImage: string;
};

export type CommonSubServiceHeroSectionMultipleImages = {
  id?: number;
  title?: string;
  description: string;
  image: {
    id: number;
    url: string;
  }[];
};

export type CommonSubServiceMultipleSection = {
  id: string;
  title: string;
  description: string;
  image: string;
  points?: string[];
  keyPoints: string[];
};

export type CommonSubServiceProcessSection = {
  id: string;
  title: string;
  description: string;
  image?: string;
  processItems: {
    id: string;
    index: number;
    title: string;
    description: string;
    image: string;
    points?: string[];
  }[];
};

export type CommonSubServiceCTA = {
  id: string;
  mainTitle: string;
  description: string;
};

export type CommonServiceRelatedServices = {
  id: string;
  mainTitle: string;
  description: string;
  serviceShowcases: {
    id: string;
    title: string;
  }[];
};

export interface SeoDataResponse {
  id: number;
  description: string;
  title: string;
  imageUrl: string;
}
