import { motion } from "framer-motion";
import { useQuiz } from "../common/Reducer";

//  question={question} answer={answer} dispatch={dispatch}
export default function Options() {
  const { answerIdx: answer, activeQuestion: question, dispatch } = useQuiz();

  const hasAnswered = answer !== null;
  return (
    <>
      <div className="options">
        {question.options.map((option, index) => (
          <motion.button
            initial={{
              x: 0,
            }}
            animate={{
              x:
                index === answer && index !== question.correctOption
                  ? [90, -90, 90, -90, 0]
                  : 0,
              y:
                index === answer && index === question.correctOption
                  ? [10, -40, 10, 0]
                  : 0,
            }}
            transition={{
              duration: 0.3,
            }}
            key={option}
            style={{
              backgroundColor:
                index === answer && index !== question.correctOption
                  ? "#FF6161"
                  : "",
            }}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : ""
                : ""
            }`}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </>
  );
}
