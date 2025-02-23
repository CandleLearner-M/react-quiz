interface NextButtonProps {
  answer: number | null;
  dispatch: (action: { type: "nextQuestion" | "done" }) => void;
  currentIdx: number;
  numQuestions: number;
}

export default function NextButton({
  answer,
  dispatch,
  currentIdx,
  numQuestions,
}: NextButtonProps) {
  console.log(currentIdx < numQuestions - 2, currentIdx, numQuestions - 2);
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
