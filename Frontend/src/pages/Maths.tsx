import React from 'react';
import { Link } from 'react-router-dom';

const Maths = () => {
  const topics = ["Calculus", "Algebra", "Trigonometry", "Coordinate Geometry", "Probability", "Vectors"];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Mathematics Topics</h1>
      <p className="text-gray-400 mb-10 text-center w-3/4 md:w-1/2">
        Mathematics is the language of the universe. Explore the essentials of Calculus, Algebra, and more to prepare effectively for your exams.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <Link to={`/maths/${topic}`} key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-white">{topic}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Maths;