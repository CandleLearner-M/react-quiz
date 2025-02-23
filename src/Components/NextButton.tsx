interface NextButtonProps {
  answer: number | null;
  dispatch: (action: { type: "nextQuestion" }) => void;
}

export default function NextButton({
  answer,
  dispatch,
}: NextButtonProps) {
  if (answer === null) return;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion"})}
    >
      Next
    </button>
  );
}
