import { motion, AnimatePresence } from "framer-motion";

interface WelcomeProps {
  questionNumber: number;
  dispatch: (action: { type: "start" }) => void;
}

export default function Welcome({ questionNumber, dispatch }: WelcomeProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="welcome"
        className="start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Welcome to The React Quiz!
        </motion.h2>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {questionNumber} Questions to test your React Mastery
        </motion.h4>
        <motion.button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "start" })}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          Let's Start
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
