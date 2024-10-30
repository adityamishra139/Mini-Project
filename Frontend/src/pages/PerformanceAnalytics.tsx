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
    <div className="bg-black min-h-screen text-white p-4 sm:p-8 font-sans relative overflow-hidden">
      {/* Header */}
      <motion.header 
        className="flex justify-between items-center pb-6 border-b border-neutral-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-orange-500">Performance Analysis</h1>
        <IconTrendingUp size={32} className="text-orange-500" />
      </motion.header>

      {/* Bento Grid Container */}
      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Performance Summary */}
        {progressData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 p-6 rounded-xl shadow-lg transform transition duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg sm:text-xl font-semibold">{item.concept}</h2>
              <span className="text-orange-400 font-medium">{item.score}%</span>
            </div>
            <div className="w-full bg-neutral-800 rounded-lg overflow-hidden h-4">
              <motion.div
                className="bg-orange-500 h-full rounded-lg"
                style={{ width: `${item.score}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${item.score}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}

        {/* Mastered & Improvement Areas */}
        <motion.div
          className="bg-neutral-900 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg sm:text-2xl font-semibold text-orange-400 mb-3">Mastered & Improvement Areas</h2>
          <p className="text-neutral-400 mb-2">💡 Mastered: <span className="text-orange-400">Thermodynamics</span>.</p>
          <p className="text-neutral-400">🚀 Focus on <span className="text-orange-400">Electromagnetism</span> for improvement.</p>
        </motion.div>

        {/* Trends Over Time */}
        <motion.div
          className="bg-neutral-900 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-lg sm:text-2xl font-semibold text-orange-400 mb-4">Performance Trends</h2>
          <div className="flex space-x-2">
            {performanceTrends.map((score, index) => (
              <motion.div
                key={index}
                className="bg-orange-600 h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-black"
                whileHover={{ scale: 1.2, backgroundColor: '#FFA726' }}
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
          className="bg-neutral-900 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-lg sm:text-2xl font-semibold text-orange-400 mb-4">Recommended Quizzes</h2>
          <ul>
            {recommendedQuizzes.map((quiz, index) => (
              <motion.li
                key={index}
                className="mb-3"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button className="bg-orange-600 hover:bg-orange-700 text-black px-4 py-2 rounded-lg w-full transition-all">
                  Start Quiz on {quiz}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-neutral-900 p-6 rounded-xl shadow-lg flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <IconStar size={32} className="text-yellow-500" />
          <div>
            <h2 className="text-lg font-semibold text-orange-400">Achievements</h2>
            <p className="text-neutral-400">You've reached <span className="text-orange-400">90%</span> in Thermodynamics!</p>
          </div>
        </motion.div>
      </div>

      {/* Floating Dock */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
