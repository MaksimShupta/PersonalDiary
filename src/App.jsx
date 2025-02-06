import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Entry from "./pages/Entry";
import MyJournal from "./pages/MyJournal";
import MainLayout from "./layouts/MainLayout";
import "@fontsource/carter-one";
import "@fontsource/caudex";
import "./style.css";
import React, { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="calendar"
          element={<Calendar setSelectedDate={setSelectedDate} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="calendar" element={<Calendar />} />
          <Route path="entry" element={<Entry />} />
          <Route path="myjournal" element={<MyJournal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
