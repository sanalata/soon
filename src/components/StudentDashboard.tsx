import React, { useEffect, useState } from 'react';
import { Student, Course, Achievement, TestResult, StudentScore } from '../types/student';
import { getStudentData, getCourses, getMissingAchievements, getTestResults, getStudentScores } from '../lib/api';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const StudentDashboard: React.FC = () => {
  const [student, setStudent] = useState<Student | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [scores, setScores] = useState<StudentScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentData = await getStudentData();
        setStudent(studentData);

        if (studentData?.kademe) {
          const coursesData = await getCourses(studentData.kademe);
          setCourses(coursesData);
        }

        if (studentData?.ID) {
          const [achievementsData, resultsData, scoresData] = await Promise.all([
            getMissingAchievements(studentData.ID),
            getTestResults(studentData.ID),
            getStudentScores(studentData.ID)
          ]);

          setAchievements(achievementsData);
          setTestResults(resultsData);
          setScores(scoresData);
        }
      } catch (error) {
        console.error('Veri yükleme hatası:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Hoş geldin, {student?.adSoyad || 'Öğrenci'}
        </h1>
        <p className="text-gray-600">
          {student?.kademe ? `${student.kademe}. Sınıf` : 'Sınıf bilgisi yok'}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <BarChart className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Dersler</h2>
          </div>
          <ul className="space-y-2">
            {courses.map((course) => (
              <li key={course.CourseID} className="flex justify-between items-center">
                <span>{course.CourseName}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <PieChart className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Eksik Kazanımlar</h2>
          </div>
          <ul className="space-y-2">
            {achievements.slice(0, 5).map((achievement) => (
              <li key={achievement.achievementID} className="text-sm">
                {achievement.achievementName}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <LineChart className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Son Sınav Sonuçları</h2>
          </div>
          <ul className="space-y-2">
            {testResults.slice(0, 5).map((result, index) => (
              <li key={index} className="flex justify-between items-center text-sm">
                <span>{result.deneme_name}</span>
                <span className="font-semibold">{result.net} Net</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;