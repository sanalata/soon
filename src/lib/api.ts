import { Student, Course, Achievement, TestResult, StudentScore } from '../types/student';

const API_BASE = '/api';

export const getStudentData = async (): Promise<Student | null> => {
  try {
    const response = await fetch(`${API_BASE}/student.php`);
    if (!response.ok) throw new Error('API hatası');
    return await response.json();
  } catch (error) {
    console.error('Öğrenci verisi alma hatası:', error);
    return null;
  }
};

export const getCourses = async (kademe: number): Promise<Course[]> => {
  try {
    const response = await fetch(`${API_BASE}/courses.php?kademe=${kademe}`);
    if (!response.ok) throw new Error('API hatası');
    return await response.json();
  } catch (error) {
    console.error('Ders verisi alma hatası:', error);
    return [];
  }
};

export const getMissingAchievements = async (studentId: number): Promise<Achievement[]> => {
  try {
    const response = await fetch(`${API_BASE}/achievements.php?student_id=${studentId}`);
    if (!response.ok) throw new Error('API hatası');
    return await response.json();
  } catch (error) {
    console.error('Kazanım verisi alma hatası:', error);
    return [];
  }
};

export const getTestResults = async (studentId: number): Promise<TestResult[]> => {
  try {
    const response = await fetch(`${API_BASE}/test_results.php?student_id=${studentId}`);
    if (!response.ok) throw new Error('API hatası');
    return await response.json();
  } catch (error) {
    console.error('Sınav sonuçları alma hatası:', error);
    return [];
  }
};

export const getStudentScores = async (studentId: number): Promise<StudentScore[]> => {
  try {
    const response = await fetch(`${API_BASE}/scores.php?student_id=${studentId}`);
    if (!response.ok) throw new Error('API hatası');
    return await response.json();
  } catch (error) {
    console.error('Puan bilgileri alma hatası:', error);
    return [];
  }
};