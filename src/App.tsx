import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main1";


// TypeScript Types
interface Question {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  id: string;
}

interface State {
  question: Question[];
}


interface Action {
  type: string,
  payload: number;
}


const initialState: State = {
  question: [],
};
const reducer = function (state: State, action: Action) {
  return state;
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
