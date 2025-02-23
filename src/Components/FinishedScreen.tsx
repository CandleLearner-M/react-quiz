interface FinishedScreenProps {
  points: number;
  maxPossiblePoints: number;
}

export default function FinishedScreen({maxPossiblePoints, points} : FinishedScreenProps) {
  const resultPercentage = (points / maxPossiblePoints) * 100;
  return (
    <p>
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {resultPercentage}%)
    </p>
  );
}
