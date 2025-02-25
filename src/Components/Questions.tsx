import { motion, AnimatePresence } from "framer-motion";
import Options from "./Options";
import Question from "../common/types";

interface QuestionsProps {
  question: Question;
  answer: number | null;
  dispatch: (action: { type: "newAnswer"; payload: number }) => void;
  activeIdx: number;
}

export default function Questions({
  question,
  answer,
  dispatch,
  activeIdx,
}: QuestionsProps) {
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
        <Options question={question} answer={answer} dispatch={dispatch} />
      </motion.div>
    </AnimatePresence>
  );
}
