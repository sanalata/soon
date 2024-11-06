import React from 'react';
import { useStudentStore } from '../store/studentStore';
import { BarChart, Activity, Target } from 'lucide-react';

const StudentStats: React.FC = () => {
  const { testResults, scores } = useStudentStore();

  const calculateStats = () => {
    if (!testResults?.length) return { averageNet: 0, totalTests: 0 };

    const totalScore = testResults.reduce((sum, result) => sum + result.score, 0);
    return {
      averageNet: totalScore / testResults.length,
      totalTests: testResults.length
    };
  };

  const { averageNet, totalTests } = calculateStats();
  const lastScore = scores?.length > 0 ? scores[0].score : '-';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-2">
          <BarChart className="h-5 w-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold">Ortalama Puan</h3>
        </div>
        <p className="text-2xl font-bold text-indigo-600">{averageNet.toFixed(2)}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-2">
          <Activity className="h-5 w-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold">Toplam Sınav</h3>
        </div>
        <p className="text-2xl font-bold text-indigo-600">{totalTests}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-2">
          <Target className="h-5 w-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold">Son Puan</h3>
        </div>
        <p className="text-2xl font-bold text-indigo-600">{lastScore}</p>
      </div>
    </div>
  );
};

export default StudentStats;