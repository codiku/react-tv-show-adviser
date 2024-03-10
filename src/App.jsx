import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail/Detail";
import { Home } from "./pages/Home/Home";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
