export interface OfferedCourseResponsePagination {
  data: OfferedCourseResponse;
  pagination: {
    total: {
      page: number;
      limit: number;
    };
    next: {
      page: number | null;
      limit: number;
    };
    prev: {
      page: number | null;
      limit: number;
    };
  };
}

export interface OfferedCourseResponse {
  id: number;
  mainTitle: string;
  description: string;
  courses: CourseDTO[];
}

export interface CourseDTO {
  id: number;
  title: string;
  price: number;
  minDuration: number;
  maxDuration: number;
  durationUnit: string;
  description: string;
  slug: string;
  image?: string;
  courseDetail: CourseDetail;
  completedSessionCount: number;
  runningSessionCount: number;
  nextSessionStartDate: string;
}

export interface CourseDetail {
  id: number;
  sessionManagement: SessionManagement[];
}

export interface SessionManagement {
  status: string;
}
