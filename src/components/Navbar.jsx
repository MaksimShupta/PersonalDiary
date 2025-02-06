import React from 'react';
import { Link, useLocation } from 'react-router';
import Button from './Button';

const Navbar = () => {
  const location = useLocation(); 

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent backdrop-blur-md z-50">
      <div className="logo">
        <Link to="/" className="text-white text-2xl font-carter">DailyCanvas</Link>
      </div>
      <div className="nav-links flex space-x-6">
        <Link to="/myjournal" className="text-white text-lg hover:bg-white hover:bg-opacity-20 px-3 py-1 rounded transition">My Journal</Link>
        <Link to="/calendar" className="text-white text-lg hover:bg-white hover:bg-opacity-20 px-3 py-1 rounded transition">Calendar</Link>
      </div>
    </nav>
  );
};

export default Navbar;