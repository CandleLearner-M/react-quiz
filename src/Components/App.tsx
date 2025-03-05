import ErrorComp from "./Error";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main1";
import Questions from "./Questions";

import { useQuiz } from "../common/Reducer";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Timer from "./Timer";
import Welcome from "./Welcome";

// TypeScript Types

export default function App() {
  const {
    state: {
      questions,
      status,
      activeIdx,
      answerIdx,
      points,
      highScore,
      remainingSeconds,
    },
    dispatch,
  } = useQuiz();

  const numQuestions = questions.length;
  const maxPoints = questions
    .map((question) => question.points)
    .reduce((acc, curr) => acc + curr, 0);
    
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "error" && <ErrorComp />}
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <Welcome questionNumber={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestions={numQuestions}
              maxPoints={maxPoints}
            />

            <Questions
              question={questions[activeIdx]}
              activeIdx={activeIdx}
              answer={answerIdx}
              dispatch={dispatch}
            />
            <Footer>
              <Timer remainingSeconds={remainingSeconds} dispatch={dispatch} />
              <NextButton
                answer={answerIdx}
                dispatch={dispatch}
                currentIdx={activeIdx}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishedScreen
            maxPossiblePoints={maxPoints}
            points={points}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
