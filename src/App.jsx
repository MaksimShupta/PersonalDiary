import { BrowserRouter, Routes, Route } from 'react-router';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Entry from './pages/Entry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="entry/:entry" element={<Entry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;