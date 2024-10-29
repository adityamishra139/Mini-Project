import { IconStar, IconTrendingUp } from "@tabler/icons-react";
import { FloatingDock } from "../components/floatingNavbar";
import { links } from "../navbarItems";
import { motion } from "framer-motion";

const PerformanceAnalytics = () => {
  const progressData = [
    { concept: "Vectors", score: 85 },
    { concept: "Kinematics", score: 72 },
    { concept: "Thermodynamics", score: 90 },
    { concept: "Electromagnetism", score: 65 },
  ];

  const performanceTrends = [75, 82, 78, 85, 90];
  const recommendedQuizzes = ["Fluid Mechanics", "Wave Optics", "Rotational Dynamics"];

  return (
    <div className="bg-neutral-900 min-h-screen text-white p-8 font-sans relative overflow-hidden">
      {/* Header */}
      <motion.header 
        className="flex justify-between items-center pb-8 border-b border-neutral-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold tracking-tight text-purple-400">Performance Analysis</h1>
        <IconTrendingUp size={32} className="text-purple-400" />
      </motion.header>

      {/* Performance Summary */}
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10">
        {progressData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-neutral-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold tracking-tight">{item.concept}</h2>
              <span className="text-purple-500 font-medium">{item.score}%</span>
            </div>
            <div className="w-full bg-neutral-700 rounded-lg overflow-hidden h-4">
              <motion.div
                className="bg-purple-600 h-full rounded-lg"
                style={{ width: `${item.score}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${item.score}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Mastered & Improvement Areas */}
      <motion.div
        className="bg-neutral-800 p-8 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-3">Mastered & Improvement Areas</h2>
        <p className="text-neutral-400 mb-1">💡 Great job! Concepts like <span className="text-purple-500">Thermodynamics</span> are well mastered.</p>
        <p className="text-neutral-400">🚀 For a higher score, focus on <span className="text-purple-500">Electromagnetism</span>.</p>
      </motion.div>

      {/* Trends Over Time */}
      <motion.div
        className="bg-neutral-800 p-8 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Performance Trends</h2>
        <div className="flex space-x-3">
          {performanceTrends.map((score, index) => (
            <motion.div
              key={index}
              className="bg-purple-600 h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
              whileHover={{ scale: 1.2, backgroundColor: '#8e44ad' }}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {score}%
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recommended Quizzes */}
      <motion.div
        className="bg-neutral-800 p-8 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Recommended Quizzes</h2>
        <ul>
          {recommendedQuizzes.map((quiz, index) => (
            <motion.li
              key={index}
              className="mb-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all">
                Start Quiz on {quiz}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Achievements */}
      <motion.div
        className="bg-neutral-800 p-8 rounded-lg shadow-lg flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
      >
        <IconStar size={36} className="text-yellow-500" />
        <div>
          <h2 className="text-xl font-semibold">Achievements</h2>
          <p className="text-neutral-400">You've reached <span className="text-purple-400">90%</span> in Thermodynamics!</p>
        </div>
      </motion.div>
    <div className="fixed bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 left-4 mb-4">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
