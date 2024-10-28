import React from 'react';

function ProgressTracker() {
  const subjects = [
    { name: "Physics", progress: 80 },
    { name: "Chemistry", progress: 65 },
    { name: "Mathematics", progress: 90 },
  ];

  return (
    <section className="py-12 bg-gray-900 text-white text-center">
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8 px-4">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-48 md:w-60 transition-transform transform animate-wave"
            style={{
              animationDelay: `${index * 0.3}s`, // Stagger animation by index
            }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4">{subject.name}</h3>
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  strokeWidth="10"
                  className="text-gray-600 fill-none"
                  strokeDasharray="282.6"
                  strokeDashoffset="0"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  strokeWidth="10"
                  className="text-purple-500 fill-none"
                  strokeDasharray="282.6"
                  strokeDashoffset={282.6 - (282.6 * subject.progress) / 100}
                  style={{
                    transition: 'stroke-dashoffset 0.6s ease-out',
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg md:text-xl font-bold">{subject.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-gray-400 text-sm md:text-base px-4 max-w-full">
        Keep track of your progress across subjects. Aim for 100% mastery in each area to be fully prepared.
      </p>
    </section>
  );
}

export default ProgressTracker;
