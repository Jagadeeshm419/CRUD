import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Components/Add";
import View from "./Components/View";
import Update from "./Components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />} exact />
          <Route path="/view" element={<View />} exact />
          <Route path="/update" element={<Update />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
