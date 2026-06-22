export interface CommonWhyAITCECommerceDTO {
  title?: string;
  mainTitle?: string;
  description: string;
  processItems: ProcessItem[];
}

export interface ProcessItem {
  id: number;
  title: string;
  description: string;
}
