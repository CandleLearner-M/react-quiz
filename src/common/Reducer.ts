import Question from "./types";
import quests from '../../data/questions.json'

console.log(quests.questions)
interface State {
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  activeIdx: number;
  answerIdx: null | number;
  points: number;
  highScore: number;
  remainingSeconds: number;
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
      type: "nextQuestion";
    }
  | { type: "done" }
  | {
      type: "tryAgain";
    }
  | { type: "tick" };

const SEC_PER_QUESTION = 30;

export const initialState: State = {
  questions: quests.questions,
  status: "ready",
  activeIdx: 0,
  answerIdx: null,
  points: 0,
  highScore: 0,
  remainingSeconds: 5,
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
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return {
        ...state,
        status: "active",
        remainingSeconds: state.questions.length * SEC_PER_QUESTION,
      };

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

    case "nextQuestion":
      return {
        ...state,
        activeIdx: state.activeIdx + 1,
        answerIdx: null,
      };

    case "done":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "tryAgain":
      return {
        ...initialState,
        status: "ready",
        highScore: state.highScore,
        questions: state.questions,
      };

    case "tick":
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1 || 0,
        status: state.remainingSeconds === 0 ? "finished" : state.status,
        highScore:
          state.remainingSeconds === 0 && state.points > state.highScore
            ? state.points
            : state.highScore,
      };

    default:
      throw new Error("Action unknown");
  }
};
