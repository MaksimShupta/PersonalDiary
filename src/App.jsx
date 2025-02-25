import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import MyJournal from "./pages/MyJournal";
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import "@fontsource/carter-one";
import "@fontsource/caudex";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="calendar" element={<Calendar />} />
          <Route path="myjournal" element={<MyJournal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
