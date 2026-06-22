export interface InstructorsDTO {
  mainTitle: string;
  instructors: Instructo[];
}

export interface Instructo {
  id: number;
  name: string;
  designation: string;
  image: string;
}
