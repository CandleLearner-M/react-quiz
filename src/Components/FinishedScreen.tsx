interface FinishedScreenProps {
  points: number;
  maxPossiblePoints: number;
}

export default function FinishedScreen({
  maxPossiblePoints,
  points,
}: FinishedScreenProps) {
  const resultPercentage = Math.ceil((points / maxPossiblePoints) * 100);
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {resultPercentage}%)
    </p>
  );
}
