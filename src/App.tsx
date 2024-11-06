import React from 'react';
import { GraduationCap } from 'lucide-react';
import Chat from './components/Chat';

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">DigiKoç</h1>
          <p className="text-lg text-gray-600">
            Kişisel Eğitim Koçunuz
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <Chat />
        </div>
      </div>
    </div>
  );
}