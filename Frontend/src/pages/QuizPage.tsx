import React from 'react';
import SubjectCard from '../components/SubjectCard';

const QuizPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-500 mt-10 mb-6">Choose a Subject</h1>
      <div className="flex justify-center space-x-6">
        <SubjectCard title="Physics" route="/physics" />
        <SubjectCard title="Chemistry" route="/chemistry" />
        <SubjectCard title="Maths" route="/maths" />
      </div>
    </div>
  );
};

export default QuizPage;
