export interface CourseDetailType {
  id: number;
  title: string;
  price: number;
  slug: string;
  image: string;
  minDuration: number;
  maxDuration: number;
  durationUnit: string;
  description: string;
  completedSessionCount: number;
  nextSession: NextSession;
  runningSessionCount: number;
  courseDetail: CourseDetail;
  relatedCourses: RelatedCourse[];
}

export interface NextSession {
  startDate: string;
}

export interface CourseDetail {
  mainTitle: string;
  description: string;
  syllabusManagement: SyllabusManagement;
  classroomCTASection: ClassroomCtasection;
  courseInsightFeature: CourseInsightFeature;
}

export interface SyllabusManagement {
  totalHours: number;
  syllabus: Syllabus[];
}

export interface Syllabus {
  chapterTitle: string;
  topicTitle: string[];
  hour: number;
}

export interface ClassroomCtasection {
  mainTitle: string;
  description: string;
}

export interface CourseInsightFeature {
  mainTitle: string;
  description: string;
  insights: {
    id: number;
    title: string;
    description: string;
    coverImage: string;
    slug?: string;
    industryTag: {
      name: string;
      createdAt: string;
    };
    insightTags: {
      name: string;
    }[];
  }[];
}

export interface RelatedCourse {
  id: number;
  title: string;
  price: number;
  minDuration: number;
  maxDuration: number;
  durationUnit: string;
  description: string;
  slug: string;
  courseDetail: CourseDetailSmall;
  completedSessionCount: number;
  runningSessionCount: number;
  nextSessionStartDate: string;
}

export interface CourseDetailSmall {
  id: number;
  sessionManagement: SessionManagement[];
}

export interface SessionManagement {
  status: string;
}
