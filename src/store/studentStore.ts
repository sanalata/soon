import { create } from 'zustand';
import { getStudentData, getCourses, getMissingAchievements, getTestResults, getStudentScores } from '../lib/api';
import type { Student, Course, Achievement, TestResult, StudentScore } from '../types/student';

interface StudentState {
  student: Student | null;
  courses: Course[];
  achievements: Achievement[];
  testResults: TestResult[];
  scores: StudentScore[];
  loading: boolean;
  error: string | null;
  fetchStudentData: () => Promise<void>;
}

export const useStudentStore = create<StudentState>((set) => ({
  student: null,
  courses: [],
  achievements: [],
  testResults: [],
  scores: [],
  loading: false,
  error: null,

  fetchStudentData: async () => {
    set({ loading: true, error: null });
    try {
      const student = await getStudentData();
      const [courses, achievements, testResults, scores] = await Promise.all([
        getCourses(student.kademe),
        getMissingAchievements(student.ID),
        getTestResults(student.ID),
        getStudentScores(student.ID)
      ]);

      set({ 
        student,
        courses,
        achievements,
        testResults,
        scores,
        loading: false 
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Veri yükleme hatası',
        loading: false 
      });
    }
  }
}));