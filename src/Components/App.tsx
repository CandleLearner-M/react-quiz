import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main1";
import ErrorComp from "./Error";
import Loader from "./Loader";
import Questions from "./Questions";

import { reducer, initialState } from "../common/Reducer";
import Welcome from "./Welcome";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";

// TypeScript Types

export default function App() {
  const [{ questions, status, activeIdx, answerIdx, points }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions
    .map((question) => question.points)
    .reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);
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
              idx={activeIdx}
              points={points}
              maxPoints={maxPoints}
              answer={answerIdx}
            />

            <Questions
              question={questions[activeIdx]}
              activeIdx={activeIdx}
              answer={answerIdx}
              dispatch={dispatch}
            />
            <NextButton answer={answerIdx} dispatch={dispatch} currentIdx={activeIdx} numQuestions={numQuestions} />
          </>
        )}

        {status === "finished" && <FinishedScreen maxPossiblePoints={maxPoints} points={points} />}
      </Main>
    </div>
  );
}
