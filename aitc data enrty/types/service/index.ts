export type BannerSection = {
  id: number;
  title: string;
  description: string;
  bgImage: string;
};

export type Service = {
  id: string; // UUID type identifier
  title: string;
  description: string;
  bgImage: string;
  clientSlug: string;
  slug: string;
};

export type ServiceHeader = {
  id: string;
  mainTitle: string;
  sectionTitle: string;
  description: string;
};

export type KeyPoint = {
  id: number;
  keywords: string;
  description: string;
};

export type BenefitsSection = {
  id: string; // UUID type identifier
  mainTitle: string;
  description: string;
  sectionTitle: string;
  keyPoints: KeyPoint[];
};

export interface ServicesListDTO {
  id: string;
  title: string;
  description: string;
  bgImage: string;
}

export interface SubServicesListDTO {
  title: string;
  description: string;
  subServices: SubService[];
}

export interface SubService {
  id: string;
  title: string;
  slug: string;
  redirectLink: string;
  description: string;
  isSubServiceDetail: boolean;
}
