export interface KeypointsResponse {
  id: string;
  title: string;
  image: string;
  description: string;
  keyPoints: KeyPoint[];
}

export interface KeyPoint {
  id: string;
  title: string;
  description: string;
  image: string;
}
