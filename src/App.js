import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
