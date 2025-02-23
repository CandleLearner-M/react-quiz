import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main1";
import ErrorComp from "./Error";
import Loader from "./Loader";
import Questions from "./Questions";
import Welcome from "./Welcome";

import { reducer, initialState } from "./Reducer";

// TypeScript Types

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

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
          <Welcome questionNumber={questionsNums}>
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "userStarted" })}
            >
              Let's Start
            </button>
          </Welcome>
        )}
        {status === "active" && <Questions questions={questions} />}
      </Main>
    </div>
  );
}
