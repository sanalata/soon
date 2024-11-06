import { StudentData, mockStudent } from './mockData';

export type { StudentData };

export const getStudentData = async (studentId: number): Promise<StudentData> => {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For now, return mock data
  return mockStudent;
};

export const calculateProgress = (achieved: number, target: number): number => {
  if (target === 0) return 0;
  return Math.min(Math.round((achieved / target) * 100), 100);
};