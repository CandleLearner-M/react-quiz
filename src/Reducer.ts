import Question from "./types";

interface State {
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
}

interface Action {
  type: string;
  payload?: number;
}

export const initialState: State = {
  questions: [],
  status: "loading",
};

export const reducer = function (state: State, action: Action) {
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

    case "userStarted":
      return { ...state, status: "active" };

    default:
      throw new Error("Action unknown");
  }
};
