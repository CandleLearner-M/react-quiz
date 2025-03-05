import { useQuiz } from "../common/Reducer";


export default function Progress() {
  const {points, activeIdx: idx, answerIdx: answer, numQuestions, maxPoints}  = useQuiz();
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
