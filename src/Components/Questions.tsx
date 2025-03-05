import { motion, AnimatePresence } from "framer-motion";
import Options from "./Options";
import { useQuiz } from "../common/Reducer";




export default function Questions() {
  const {activeIdx, activeQuestion: question } = useQuiz();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIdx}
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{ duration: 0.5 }}
      >
        <h4>{question.question}</h4>
        <Options />
      </motion.div>
    </AnimatePresence>
  );
}
