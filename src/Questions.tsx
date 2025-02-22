import Question from "./types";

interface QuestionsProps {
  questions: Question[];
}

export default function Questions({ questions }: QuestionsProps) {
  return (
    <div>
      {questions.map((question) => (
        <div>{question.question}</div>
      ))}
    </div>
  );
}
