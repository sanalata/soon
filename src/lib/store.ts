import { create } from 'zustand';

interface StudentState {
  name: string;
  grade: number;
  courses: Course[];
  achievements: Achievement[];
  goals: Goals;
  targetSchool: TargetSchool | null;
  setStudentData: (data: Partial<StudentState>) => void;
}

interface Course {
  id: number;
  name: string;
}

interface Achievement {
  id: number;
  courseId: number;
  name: string;
  completed: boolean;
}

interface Goals {
  weekly: number;
  monthly: number;
  general: number;
  progress: {
    weekly: number;
    monthly: number;
    general: number;
  };
}

interface TargetSchool {
  name: string;
  targetScore: number;
  currentScore: number;
  averageScore: number;
}

export const useStore = create<StudentState>((set) => ({
  name: '',
  grade: 0,
  courses: [],
  achievements: [],
  goals: {
    weekly: 0,
    monthly: 0,
    general: 0,
    progress: {
      weekly: 0,
      monthly: 0,
      general: 0,
    },
  },
  targetSchool: null,
  setStudentData: (data) => set((state) => ({ ...state, ...data })),
}));