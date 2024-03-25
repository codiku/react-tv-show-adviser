import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDarkMode } from "./contexts/DarkMode/DarkMode";
import { Detail } from "./pages/Detail/Detail";
import { Home } from "./pages/Home/Home";
import { Payment } from "./pages/Payment/Payment";
export function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <div style={{ backgroundColor: isDarkMode ? "var(--dark-bg)" : "white" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<div>404 Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
