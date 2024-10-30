import React, { useState } from 'react';
import { IconChevronDown, IconBook2, IconHistory, IconArrowRightCircle, IconStar } from '@tabler/icons-react';
import { FloatingDock } from '../components/floatingNavbar';
import { links } from '../navbarItems';

const QuizPage = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-orange-500">Quizzes</h1>
        <button
          className="flex items-center space-x-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded-lg transition-all"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <IconBook2 size={20} />
          <span>Quiz Options</span>
          <IconChevronDown size={16} />
        </button>
        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-6 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg p-4 transition duration-300">
            <a href="/start-quiz" className="flex items-center justify-between px-3 py-2 text-white rounded-lg hover:bg-orange-500 transition">
              <div className="flex items-center space-x-2">
                <IconArrowRightCircle size={18} />
                <span>Start New Quiz</span>
              </div>
            </a>
            <a href="/past-quizzes" className="flex items-center justify-between px-3 py-2 text-white rounded-lg hover:bg-orange-500 transition mt-2">
              <div className="flex items-center space-x-2">
                <IconHistory size={18} />
                <span>Past Quizzes</span>
              </div>
            </a>
          </div>
        )}
      </header>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Featured Quiz Panel */}
        <div className="col-span-1 md:col-span-2 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-orange-400 mb-3">Featured Quiz</h2>
          <p className="text-gray-400 mb-4">
            Try our most popular quiz to challenge yourself and master critical topics.
          </p>
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition">
            Start Featured Quiz
          </button>
        </div>

        {/* Quiz Statistics */}
        <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-400 mb-3">Quiz Statistics</h2>
          <ul className="text-gray-400 space-y-2">
            <li>Quizzes Taken: <span className="text-white">120</span></li>
            <li>Average Score: <span className="text-white">85%</span></li>
            <li>Best Score: <span className="text-white">98%</span></li>
            <li>Concept Mastered: <span className="text-white">10/15</span></li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="md:col-span-2 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-orange-400 mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition">
              <IconArrowRightCircle size={20} />
              <span>Start New Quiz</span>
            </button>
            <button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition">
              <IconHistory size={20} />
              <span>View Past Quizzes</span>
            </button>
            <button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition">
              <IconStar size={20} />
              <span>Recommended Quizzes</span>
            </button>
          </div>
        </div>

        {/* Quiz Categories */}
        <div className="col-span-1 md:col-span-3 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-orange-400 mb-3">Quiz Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-orange-300">Concept-Based Quizzes</h3>
              <p className="text-gray-400 mt-2">
                Focused quizzes to test specific concepts and improve understanding.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-orange-300">Previous Year Questions</h3>
              <p className="text-gray-400 mt-2">
                Practice with previous years’ questions for real exam preparation.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-orange-300">Trending Quizzes</h3>
              <p className="text-gray-400 mt-2">
                Stay updated with the latest trending quizzes among your peers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-auto max-w-lg p-4">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default QuizPage;
