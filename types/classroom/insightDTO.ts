export interface InsightResponse {
  id: number;
  mainTitle: string;
  description: string;
  insights: Insight[];
}

export interface Insight {
  id: number;
  title: string;
  description?: string;
  coverImage: string;
  industryTag: IndustryTag;
  insightTags: InsightTag[];
}

export interface IndustryTag {
  name: string;
  createdAt: string;
}

export interface InsightTag {
  name: string;
}
