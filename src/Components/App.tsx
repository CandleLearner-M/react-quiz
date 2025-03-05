import ErrorComp from "./Error";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main1";
import Questions from "./Questions";

import { useQuiz } from "../common/Reducer";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Timer from "./Timer";
import Welcome from "./Welcome";

// TypeScript Types

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "error" && <ErrorComp />}
        {status === "loading" && <Loader />}
        {status === "ready" && <Welcome />}
        {status === "active" && (
          <>
            <Progress />

            <Questions />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishedScreen />}
      </Main>
    </div>
  );
}
