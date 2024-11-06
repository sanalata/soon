export const mockStudent = {
  ID: 1,
  adSoyad: "Örnek Öğrenci",
  kademe: 9,
  SchoolID: 1,
  classID: 1,
  learning_style: "Visual"
};

export const mockCourses = [
  { CourseID: 1, CourseName: "Matematik", kademe: 9 },
  { CourseID: 2, CourseName: "Fizik", kademe: 9 },
  { CourseID: 3, CourseName: "Kimya", kademe: 9 },
  { CourseID: 4, CourseName: "Biyoloji", kademe: 9 },
  { CourseID: 5, CourseName: "Türkçe", kademe: 9 }
];

export const mockAchievements = [
  { achievementID: 1, achievementName: "Üslü Sayılar", CourseID: 1, unitsID: 1 },
  { achievementID: 2, achievementName: "Köklü Sayılar", CourseID: 1, unitsID: 1 },
  { achievementID: 3, achievementName: "Hareket", CourseID: 2, unitsID: 2 },
  { achievementID: 4, achievementName: "Kuvvet", CourseID: 2, unitsID: 2 },
  { achievementID: 5, achievementName: "Periyodik Sistem", CourseID: 3, unitsID: 3 }
];

export const mockTestResults = [
  { deneme_id: 1, deneme_name: "Deneme 1", course_id: 1, net: 35.5, dogru_sayisi: 38, yanlis_sayisi: 5 },
  { deneme_id: 2, deneme_name: "Deneme 2", course_id: 1, net: 37.25, dogru_sayisi: 40, yanlis_sayisi: 5 },
  { deneme_id: 3, deneme_name: "Deneme 3", course_id: 1, net: 38.75, dogru_sayisi: 41, yanlis_sayisi: 4 }
];

export const mockScores = [
  { Score_id: 1, score: "420.5", deneme_id: 1, skor_turu_id: 1, submission_date: "2024-03-15" },
  { Score_id: 2, score: "435.75", deneme_id: 2, skor_turu_id: 1, submission_date: "2024-03-22" },
  { Score_id: 3, score: "445.25", deneme_id: 3, skor_turu_id: 1, submission_date: "2024-03-29" }
];