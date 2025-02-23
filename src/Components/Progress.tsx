interface ProgressProps {
  idx: number;
  numQuestions: number;
  points: number;
  maxPoints: number;
  answer: number | null;
}

export default function Progress({
  idx,
  maxPoints,
  numQuestions,
  points,
  answer,
}: ProgressProps) {
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
