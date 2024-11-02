import React, { useState } from 'react';
import { motion } from "framer-motion";
import { IconStar, IconTrendingUp } from "@tabler/icons-react";

// Example JSON data for Physics - Thermodynamics
const physicsData = {
    "Physics": [
        {
            "Topic": "Thermodynamics",
            "Questions": [
                "The temperature of a gas is -78 degree Celsius and the average translational kinetic energy of its molecules is K. The temperature at which the average translational kinetic energy of the molecules of the same gas becomes 2K is:",
                "The volume of an ideal gas (γ=1.5) is changed adiabatically from 5 litres to 4 litres. The ratio of initial pressure to final pressure is:",
                "A sample of 1 mole gas at temperature T is adiabatically expanded to double its volume. If adiabatic constant for the gas is γ=32, then the work done by the gas in the process is:",
                "A diatomic gas (γ=1.4) does 100 J of work in an isobaric expansion. The heat given to the gas is:",
                "Given below are two statements:\nStatement (I): The mean free path of gas molecules is inversely proportional to square of molecular diameter.\nStatement (II): Average kinetic energy of gas molecules is directly proportional to absolute temperature of gas.\nIn the light of the above statements, choose the correct answer from the options given below:"
            ],
            "Options": [
                { "A": "-78 degree Celsius", "B": "127 degree Celsius", "C": "-39 degree Celsius", "D": "117 degree Celsius" },
                { "A": "4/5", "B": "8/(5√5)", "C": "2/√5", "D": "16/25" },
                { "A": "RT[2+√2]", "B": "RT[2-√2]", "C": "(R/T)([2-√2])", "D": "(T/R)[2+√2]" },
                { "A": "150J", "B": "490J", "C": "350J", "D": "250J" },
                { "A": "Statement I is false but Statement II is True", "B": "Both Statement I and II are True", "C": "Statement I is True but Statement II is False", "D": "Both Statement I and II are False" }
            ],
            "Answer": [
                "D", // Correct answer option key for each question
                "B",
                "B",
                "C",
                "B"
            ]
        }
    ]
};

const ThermodynamicsQuiz = () => {
    const quizData = physicsData.Physics[0]; // Assuming we're displaying the first topic
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleOptionClick = (option) => {
        if (isAnswered) return; // Prevent clicking if already answered

        setSelectedOption(option);
        setIsAnswered(true);
        const isCorrectAnswer = option === quizData.Answer[currentQuestionIndex];
        setIsCorrect(isCorrectAnswer);

        // Update counts based on the answer
        if (isCorrectAnswer) {
            setCorrectCount((prevCount) => prevCount + 1);
        } else {
            setWrongCount((prevCount) => prevCount + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < quizData.Questions.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedOption(null);
            setIsAnswered(false);
            setIsCorrect(null);
        } else {
            setQuizCompleted(true); // Set quiz as completed when all questions are answered
        }
    };

    const currentQuestion = quizData.Questions[currentQuestionIndex];
    const totalQuestions = quizData.Questions.length;
    const overallScore = (correctCount / totalQuestions) * 100;

    return (
        <div className="min-h-screen bg-black text-white p-10">
            <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">{quizData.Topic}</h1>
            {!quizCompleted ? (
                <div className="max-w-lg mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">{currentQuestionIndex + 1}. {currentQuestion}</h2>
                    <div className="mt-4">
                        {Object.entries(quizData.Options[currentQuestionIndex]).map(([key, value]) => (
                            <button
                                key={key}
                                className={`w-full bg-gray-600 text-white rounded p-2 mb-2 transition-all duration-300 hover:bg-orange-600
                                    ${isAnswered && ((key === selectedOption && isCorrect) ? "bg-green-500" : (key === selectedOption ? "bg-red-500" : ""))}`}
                                onClick={() => handleOptionClick(key)}
                            >
                                <span className="font-bold">{key}:</span> {value}
                            </button>
                        ))}
                    </div>
                    {isAnswered && (
                        <div className="mt-4 text-center">
                            <p className={`text-lg ${isCorrect ? "text-green-400" : "text-red-400"}`}>
                                {isCorrect ? "Correct!" : "Incorrect!"}
                            </p>
                            <button 
                                onClick={handleNextQuestion} 
                                className={`mt-4 p-2 rounded bg-orange-500 text-white hover:bg-orange-400 transition duration-300`}>
                                {currentQuestionIndex < quizData.Questions.length - 1 ? "Next Question" : "Finish Quiz"}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="max-w-lg mx-auto bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                    <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
                    <p className="text-lg">You answered:</p>
                    <p className="text-xl font-bold text-green-400">Correct: {correctCount}</p>
                    <p className="text-xl font-bold text-red-400">Wrong: {wrongCount}</p>
                    <p className="text-lg">Total Questions: {totalQuestions}</p>
                    <p className="text-lg">Score: {overallScore.toFixed(2)}%</p>

                    {/* Performance Analytics Section */}
                    <div className="bg-gray-700 p-6 rounded-xl shadow-lg mt-6">
                        <motion.h2 className="text-lg sm:text-2xl font-semibold text-orange-400 mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            Performance Analysis
                        </motion.h2>
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-neutral-400">
                                    💡 {overallScore > 80 ? "Mastered: " : "Need Improvement: "}
                                    <span className="text-orange-400">{overallScore > 80 ? "Thermodynamics" : "Focus on Improvement Areas"}</span>
                                </p>
                            </div>
                            <div className="flex items-center">
                                <IconTrendingUp size={32} className="text-orange-500" />
                            </div>
                        </div>
                        <div className="w-full bg-gray-600 rounded-lg overflow-hidden h-4 mb-2">
                            <motion.div
                                className="bg-orange-500 h-full rounded-lg"
                                style={{ width: `${overallScore.toFixed(2)}%` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${overallScore.toFixed(2)}%` }}
                                transition={{ duration: 1 }}
                            ></motion.div>
                        </div>
                        <p className="text-lg">Overall Score: {overallScore.toFixed(2)}%</p>
                    </div>

                    <button 
                        onClick={() => window.location.reload()} 
                        className="mt-4 p-2 rounded bg-green-500 text-white hover:bg-green-400 transition duration-300">
                        Restart Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThermodynamicsQuiz;
