import { useQuiz } from "../common/Reducer";

export default function NextButton() {
  const {
    answerIdx: answer,
    dispatch,
    activeIdx: currentIdx,
    numQuestions,
  } = useQuiz();

  if (answer === null) return;
  if (currentIdx < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "done" })}>
      Finish
    </button>
  );
}
