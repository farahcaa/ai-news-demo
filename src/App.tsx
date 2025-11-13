import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";

// import Partners from "./pages/partners/Partners";

function App() {
  return (
    // Default font is Inter
    <div className="font-['Inter']">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
