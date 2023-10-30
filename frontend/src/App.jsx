import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Navbar, Tasks, Jobs, Home } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="task" element={<Tasks />} />
        <Route path="job" element={<Jobs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
    // <Navbar />
  );
}

export default App
