export interface DomainHoistingDTO {
  id: string;
  title: string;
  description: string;
  hostingPlans: HostingPlan[];
  enterpriseSolution: EnterpriseSolution;
}

export interface HostingPlan {
  id: string;
  price: number;
  bestFor: string;
  features: string[];
}

export interface EnterpriseSolution {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}
