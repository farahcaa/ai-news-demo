import { BrowserRouter, Route, Routes } from "react-router";
import News from "./pages/News";
import You from "./pages/You";
import Layout from "./components/layout/Layout";
import Alerts from "./pages/Alert";

// import Partners from "./pages/partners/Partners";

function App() {
  return (
    // Default font is Inter
    <div className="font-['Inter']">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<News />} path="/ai" />
            <Route element={<You />} path="/you" />
            <Route element={<Alerts />} path="/alert" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
