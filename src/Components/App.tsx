import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main1";
import ErrorComp from "./Error";
import Loader from "./Loader";
import Questions from "./Questions";

import { reducer, initialState } from "../common/Reducer";
import Welcome from "./Welcome";

// TypeScript Types

export default function App() {
  const [{ questions, status, activeIdx, answerIdx }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const questionsNums = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "error" && <ErrorComp />}
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <Welcome questionNumber={questionsNums} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Questions
            question={questions[activeIdx]}
            activeIdx={activeIdx}
            answer={answerIdx}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
