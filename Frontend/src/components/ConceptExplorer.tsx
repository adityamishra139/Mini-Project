import React from 'react';

function ConceptExplorer() {
  const subjects = [
    { name: "Physics", sample: "Sample Question: Calculate the time dilation for an object traveling at 0.9c." },
    { name: "Chemistry", sample: "Sample Question: Determine the molecular structure of a complex organic compound." },
    { name: "Mathematics", sample: "Sample Question: Prove the convergence of a complex series." },
  ];

  return (
    <section className="flex flex-col items-center py-12 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Explore Concepts</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8 px-4">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="relative w-72 h-48 p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:bg-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{subject.name}</h3>
            <p className="text-gray-400">Level: Hard</p>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-sm text-gray-300 p-4">{subject.sample}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-gray-400 text-center max-w-xl px-4">
        Challenge yourself with concept-driven questions designed to push your understanding to the limit. Click on a subject to reveal a sample question.
      </p>
    </section>
  );
}

export default ConceptExplorer;
