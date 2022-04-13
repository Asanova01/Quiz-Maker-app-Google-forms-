import { Route, Routes } from "react-router-dom";
import CreateForms from "./pages/CreateForms";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="forms" element={<CreateForms />}>
          <Route path="new-forms" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
