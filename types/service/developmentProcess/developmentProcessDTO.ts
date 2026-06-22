export interface DevelopmentProcessDTO {
  id: string;
  title: string;
  description: string;
  image: string;
  processItems: ProcessItem[];
}

export interface ProcessItem {
  id: string;
  index: number;
  title: string;
  description: string;
  image: string;
}
