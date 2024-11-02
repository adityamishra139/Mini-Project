import React, { useState, useEffect } from 'react';
const quizData = {
    "Thermodynamics": [
        {
            "question": "The temperature of a gas is -78 degrees Celsius and the average translational kinetic energy of its molecules is K. What is the temperature at which the average translational kinetic energy of the molecules of the same gas becomes 2K?",
            "options": {
                "A": "-78 degrees Celsius",
                "B": "127 degrees Celsius",
                "C": "-39 degrees Celsius",
                "D": "117 degrees Celsius"
            },
            "answer": "B",
            "explanation": "The correct temperature is derived from the formula relating temperature to kinetic energy."
        },
        {
            "question": "The volume of an ideal gas (γ=1.5) is changed adiabatically from 5 litres to 4 litres. What is the ratio of initial pressure to final pressure?",
            "options": {
                "A": "4/5",
                "B": "8/(5√5)",
                "C": "2/√5",
                "D": "16/25"
            },
            "answer": "B",
            "explanation": "You can calculate the pressure ratio using the adiabatic process formula."
        }
    ]
};

const QuizTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        // Select a random question from the JSON
        const questions = quizData.Thermodynamics;
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
    }, []);

    const handleAnswer = (option) => {
        setUserAnswer(option);
        setResult(option === currentQuestion.answer ? "correct" : "incorrect");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-orange-500 mb-6">Thermodynamics Quiz</h1>
            {currentQuestion ? (
                <div className="bg-gray-800 rounded-lg p-6 w-3/4 md:w-1/2">
                    <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
                    <div className="flex flex-col">
                        {Object.keys(currentQuestion.options).map((key) => (
                            <button
                                key={key}
                                className={`bg-gray-700 text-white rounded p-2 mb-2 transition-colors duration-300 ${
                                    userAnswer === key ? (result === "correct" ? "bg-green-500" : "bg-red-500") : ""
                                }`}
                                onClick={() => handleAnswer(key)}
                            >
                                {key}: {currentQuestion.options[key]}
                            </button>
                        ))}
                    </div>
                    {userAnswer && (
                        <div className="mt-4">
                            <p className={`text-lg ${result === "correct" ? "text-green-400" : "text-red-400"}`}>
                                {result === "correct" ? "Correct!" : "Incorrect!"}
                            </p>
                            <p className="text-gray-400">{currentQuestion.explanation}</p>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading question...</p>
            )}
        </div>
    );
}

export default QuizTest
