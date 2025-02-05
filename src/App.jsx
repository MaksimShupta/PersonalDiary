import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Entry from './pages/Entry';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);  
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={<MainLayout cart={cart} addToCart={addToCart} />} 
        >
          <Route index element={<Home />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='entry/:entry' element={<Entry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;