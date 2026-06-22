export interface JobDescriptionProps {
  id: number;
  jobTitle: string;
  slug: string;
  location: string;
  positionLevel: string;
  numberOfOpening: number;
  jobType: string;
  salary: number;
  expiryDate: string;
  coverImage: string;
  description: string;
  specification: string;
}

type HiringProcessListsProps = {
  title: string;
  description: string;
  image: string;
  id: number;
  index: string;
};
export interface HiringProcessProps {
  sectionTitle: string;
  mainTitle: string;
  description: string;
  hiringProcessLists: HiringProcessListsProps[];
}
