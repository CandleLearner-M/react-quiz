import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main1";
import ErrorComp from "./Error";
import Loader from "./Loader";
import Questions from "./Questions";
import Question from "./types";

// TypeScript Types

interface State {
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
}

interface Action {
  type: string;
  payload?: number;
}

const initialState: State = {
  questions: [],
  status: "loading",
};
const reducer = function (state: State, action: Action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        status: "loading",
      };
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };

    default:
      throw new Error("Action unknown");
  }
};

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
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
        {status === 'ready' && <Welcome />}
        {status === "active" && <Questions questions={questions} />}
      </Main>
    </div>
  );
}
