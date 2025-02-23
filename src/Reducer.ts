import Question from "./types";

interface State {
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  activeIdx: number;
}

interface Action {
  type: string;
  payload?: Question[];
}

export const initialState: State = {
  questions: [],
  status: "loading",
  activeIdx: 0,
};

export const reducer = function (state: State, action: Action): State {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        status: "loading",
      };
    case "dataReceived":
      return {
        ...state,
        questions: action.payload ?? [],
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };

    case "userStarted":
      return { ...state, status: "active" };

    default:
      throw new Error("Action unknown");
  }
};
