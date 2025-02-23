import Question from "./types";

interface State {
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  activeIdx: number;
  answerIdx: null | number;
  points: number;
}

type Action =
  | {
      type: "loading";
    }
  | {
      type: "dataReceived";
      payload: Question[];
    }
  | {
      type: "dataFailed";
    }
  | {
      type: "start";
    }
  | {
      type: "newAnswer";
      payload: number;
    }
  | {
      type: "next";
      payload: number;
    };

export const initialState: State = {
  questions: [],
  status: "loading",
  activeIdx: 0,
  answerIdx: null,
  points: 0,
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
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    case "newAnswer": {
      const question = state.questions[state.activeIdx];
      return {
        ...state,
        answerIdx: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };
    }

    case "next":
      return {
        ...state,
        activeIdx: action.payload,
        answerIdx: null,
      };

    default:
      throw new Error("Action unknown");
  }
};
