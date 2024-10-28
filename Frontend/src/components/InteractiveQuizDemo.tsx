import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have this import
import { motion } from 'framer-motion'; // Ensure you have framer-motion installed
import { IconBrandYoutubeFilled } from '@tabler/icons-react'; // Update import as necessary

// Define a type for the option object
type Option = {
  text: string;
  isCorrect: boolean;
};

export const InteractiveQuizDemo = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [feedback, setFeedback] = useState('');

  const question = {
    text: "If the distance between the earth and the sun were half its present value, the number of days in a year would have been",
    options: [
      { text: "64.5", isCorrect: false },
      { text: "129", isCorrect: true },
      { text: "182.5", isCorrect: false },
      { text: "730", isCorrect: false },
    ],
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setFeedback(option.isCorrect ? "Correct! Great job!" : "Incorrect. Try again!");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full">
        <h3 className="text-gray-300 text-xl font-semibold mb-4">{question.text}</h3>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`text-gray-100 w-full p-3 rounded-lg text-left transition 
                ${selectedOption === option ? 
                  option.isCorrect ? 'bg-green-600' : 'bg-red-600' 
                  : 'bg-gray-700 hover:bg-gray-600'}
              `}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div className={`mt-4 p-3 rounded-md w-full text-center font-semibold ${selectedOption?.isCorrect ? 'bg-green-700' : 'bg-red-700'}`}>
          {feedback}
        </div>
      )}

      <button
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition"
        onClick={() => alert("Redirect to Full Quiz Page")}
      >
        Take the Full Quiz
      </button>
    </div>
  );
};


export default InteractiveQuizDemo;