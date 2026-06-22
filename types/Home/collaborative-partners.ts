type Partner = {
  id: number;
  name: string;
  companyLogoUrl: string;
  socialMediaLink: string;
};

export type PartnersSection = {
  title: string;
  description: string;
  partner: Partner[];
};

export type Statistics = {
  id: number;
  title: string;
  description: string;
  achievementItems: AchievementItems[];
};

export type AchievementItems = {
  id: number;
  title: string;
  value: string;
  modifier: string;
  achievementNewId: number;
};

export type Popup = {
  web: string;
  tablet: string;
  mobile: string;
  link: string;
  featured: boolean;
};
