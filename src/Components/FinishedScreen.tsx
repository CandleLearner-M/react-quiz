import { motion, AnimatePresence } from "framer-motion";
import { useQuiz } from "../common/Reducer";

export default function FinishedScreen() {
  const {
    maxPoints: maxPossiblePoints,
    points,
    highScore,
    dispatch,
  } = useQuiz();

  const resultPercentage = Math.ceil((points / maxPossiblePoints) * 100);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={points}
        initial={{
          y: 500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 500,
          opacity: 0,
        }}
      >
        <p className="result">
          You scored <strong>{points}</strong> out of {maxPossiblePoints} (
          {resultPercentage}%)
        </p>
        <p className="highscore">(highScore: {highScore})</p>
        <div>
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "tryAgain" })}
          >
            Try Again
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
