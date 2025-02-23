interface NextButtonProps {
  answer: number | null;
  activeIdx: number;
  dispatch: (action: { type: "next"; payload: number }) => void;
}

export default function NextButton({
  activeIdx,
  answer,
  dispatch,
}: NextButtonProps) {
  const hasAnswered = answer !== null;
  return (
    hasAnswered && (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "next", payload: activeIdx + 1 })}
      >
        Next
      </button>
    )
  );
}
