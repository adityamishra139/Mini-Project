import React, { useState } from 'react';

// Define a type for the option object
type Option = {
  text: string;
  isCorrect: boolean;
};

function InteractiveQuizDemo() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [feedback, setFeedback] = useState('');

  // Define the question structure
  const question = {
    text: "What is the acceleration due to gravity on Earth's surface?",
    options: [
      { text: "9.8 m/s²", isCorrect: true },
      { text: "7.8 m/s²", isCorrect: false },
      { text: "10.5 m/s²", isCorrect: false },
      { text: "5.6 m/s²", isCorrect: false },
    ],
  };

  // Update the type of 'option' parameter to 'Option'
  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setFeedback(option.isCorrect ? "Correct! Great job!" : "Incorrect. Try again!");
  };

  return (
    <section className="flex flex-col items-center py-12 px-4 bg-gray-900 text-white text-center  shadow-lg max-w-full mx-auto">
      <h2 className="text-3xl font-bold mb-6">Try a Sample Question</h2>
      
      {/* Sample Question */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-lg">
        <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full p-3 rounded-lg text-left transition
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

      {/* Feedback Message */}
      {feedback && (
        <div className={`mt-4 p-3 rounded-md w-lg text-center font-semibold ${selectedOption?.isCorrect ? 'bg-green-700' : 'bg-red-700'}`}>
          {feedback}
        </div>
      )}

      {/* CTA Button */}
      <button
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition"
        onClick={() => alert("Redirect to Full Quiz Page")}
      >
        Take the Full Quiz
      </button>
    </section>
  );
}

export default InteractiveQuizDemo;
