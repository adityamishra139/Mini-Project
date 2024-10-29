import React, { useState } from 'react';
import {
  IconChevronDown,
  IconBook2,
  IconHistory,
  IconArrowRightCircle,
} from '@tabler/icons-react';
import { FloatingDock } from '../components/floatingNavbar';
import { links } from '../navbarItems';

const QuizPage = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Quizzes</h1>
        <button
          className="flex items-center space-x-2 px-4 py-2 bg-purple-800 hover:bg-purple-700 rounded-lg transition"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <IconBook2 size={20} />
          <span>Quiz Options</span>
          <IconChevronDown size={16} />
        </button>
        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-6 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg p-4 transition duration-300 ease-out transform scale-100">
            <a
              href="/start-quiz"
              className="flex items-center justify-between px-3 py-2 text-white rounded-lg hover:bg-purple-700 transition"
            >
              <div className="flex items-center space-x-2">
                <IconArrowRightCircle size={18} />
                <span>Start New Quiz</span>
              </div>
            </a>
            <a
              href="/past-quizzes"
              className="flex items-center justify-between px-3 py-2 text-white rounded-lg hover:bg-purple-700 transition mt-2"
            >
              <div className="flex items-center space-x-2">
                <IconHistory size={18} />
                <span>Past Quizzes</span>
              </div>
            </a>
          </div>
        )}
      </header>

      {/* Content */}
      <section className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Concept-Based Quizzes</h2>
          <p className="text-gray-400">
            Challenge yourself with quizzes that focus on specific concepts, designed to improve mastery and problem-solving skills.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Previous Year Questions</h2>
          <p className="text-gray-400">
            Practice with previous year questions to get a feel for the real exam, test your understanding, and track progress over time.
          </p>
        </div>
      </section>
      
      {/* Fixed Bottom Navigation */}

 <div className="fixed bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 left-4 mb-4">
        <FloatingDock items={links} />
      </div>    </div>
  );
};

export default QuizPage;
