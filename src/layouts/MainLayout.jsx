import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      <Navbar />
      <div
        className={`w-full pt-16 min-h-screen ${
          isHome ? "" : "bg-gradient-to-b from-[#ff9a9e] to-[#fad0c4]"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;