export interface SpecificPageDTO {
  sectionOne: Section;
  sectionTwo: Section;
  sectionThree: Section;
  sectionFour: Section;
  sectionFive: Section;
  sectionSix: Section;
  sectionSeven: Section;
  sectionEight: Section;
  sectionNine: Section;
  sectionTen: Section;
}

export interface Section {
  id: string;
  position: number;
}

export interface HeroData {
  title: string;
  description: string;
  bgImage: string;
  clientLogo: string;
  slogan: string;
  uploadLink: UploadLink;
  industryTag: IndustryTag;
  productTags: ProductTag[];
}

export interface UploadLink {
  iosAppLink: string;
  desktopAppLink: string;
  mobileAppLink: string;
}

export interface IndustryTag {
  id: number;
  name: string;
}

export interface ProductTag {
  id: number;
  name: string;
}
