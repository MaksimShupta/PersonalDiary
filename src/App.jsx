import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Entry from './pages/Entry';
import MyJournal from './pages/MyJournal';
import Navbar from './components/Navbar';
import './style.css';

function App() {
  return (
    <BrowserRouter>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="entry" element={<Entry />} />
        <Route path="myjournal" element={<MyJournal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;