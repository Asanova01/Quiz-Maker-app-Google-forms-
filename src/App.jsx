import { Route, Routes } from "react-router-dom";
import Answer from "./components/Answer";
import NewQuiz from "./components/NewQuiz";
import Question from "./components/Question";
import CreateQuiz from "./pages/CreateQuiz";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="forms" element={<CreateQuiz />} />
        <Route path="forms/new-forms" element={<NewQuiz />}>
          <Route path="question" element={<Question />} />
          <Route path="answer" element={<Answer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;