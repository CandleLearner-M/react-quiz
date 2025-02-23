import Options from "./Options";
import Question from "../common/types";

interface QuestionsProps {
  question: Question;
  answer: number | null;
  dispatch: (action: { type: "newAnswer" ; payload: number }) => void;
  activeIdx: number;
}

export default function Questions({
  question,
  answer,
  dispatch,
}: QuestionsProps) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options  question={question} answer={answer} dispatch={dispatch} />

    </div>
  );
}
