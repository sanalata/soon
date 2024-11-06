export interface Student {
  ID: number;
  adSoyad: string;
  kademe: number;
  SchoolID: number;
  classID?: number;
  learning_style?: string;
}

export interface Course {
  CourseID: number;
  CourseName: string;
  kademe: number;
}

export interface Achievement {
  achievementID: number;
  achievementName: string;
  CourseID: number;
  unitsID: number;
}

export interface TestResult {
  deneme_id: number;
  deneme_name: string;
  course_id: number;
  net: number;
  dogru_sayisi: number;
  yanlis_sayisi: number;
}

export interface StudentScore {
  Score_id: number;
  score: string;
  deneme_id: number;
  skor_turu_id: number;
  submission_date: string;
}