import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Entry from './pages/Entry';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path='/' element={<Home />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='entry/:entry' element={<Entry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;