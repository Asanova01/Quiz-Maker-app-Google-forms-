import { Route, Routes } from "react-router-dom";
import NewForm from "./components/NewForm";
import CreateForms from "./pages/CreateForms";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="forms" element={<CreateForms />}/>  
        <Route path="forms/new-forms" element={<NewForm />} />
      </Routes>
    </>
  );
}

export default App;
