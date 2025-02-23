import Question from "./types";

interface QuestionsProps {
  question: Question;
}

export default function Questions({
  question: { correctOption, id, options, points, question },
}: QuestionsProps) {
  return (
    <div>
      <h4>{question}</h4>
      <div className="options">
        {options.map((option) => (
          <button key={option} className="btn btn-option btn-ui">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
