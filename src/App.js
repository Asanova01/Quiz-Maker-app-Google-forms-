import { Route, Routes } from "react-router-dom";
import NewQuiz from "./components/NewQuiz";
import CreateQuiz from "./pages/CreateQuiz";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="forms" element={<CreateQuiz />}/>  
        <Route path="forms/new-forms" element={<NewQuiz />} />
      </Routes>
    </>
  );
}

export default App;
