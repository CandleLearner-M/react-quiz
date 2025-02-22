import Question from "./types";

interface QuestionsProps {
  questions: Question[];
}

export default function Questions({ questions }: QuestionsProps) {
  console.log(questions)
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>{question.question}</div>
      ))}
    </div>
  );
}
