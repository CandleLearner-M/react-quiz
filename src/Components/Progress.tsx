import { useQuiz } from "../common/Reducer";

interface ProgressProps {
  numQuestions: number;
  maxPoints: number;
}

export default function Progress({
  maxPoints,
  numQuestions,
}: ProgressProps) {
  const {state: {points, activeIdx: idx, answerIdx: answer} } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={idx + Number(answer !== null)} />
      <p>
        Question <strong>{idx + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
}
