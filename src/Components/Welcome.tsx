interface WelcomeProps {
  questionNumber: number;
  dispatch: (action: {type: "start"}) => void;
}

export default function Welcome({ questionNumber, dispatch }: WelcomeProps) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h4>{questionNumber} Questions to test your React Mastery</h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
