export interface ProductDevelopmentDTO {
  title: string;
  workflowProcessDetail: WorkflowProcessDetail[];
}

export interface WorkflowProcessDetail {
  id: number;
  title: string;
  iconUrl: string;
  description: string;
  slug: string;
  processRepresentImageUrl: string;
  workflowStep: string[];
}
