import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.webp'; // Assuming you have a logo image in assets/images

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="Ibros Constructions & Architectural Designs LLC" className="h-10 mr-4" />
          <h3 className="text-sm md:text-lg">Ibros Constructions & Architectural Designs LLC</h3>
        </div>
        <nav className="hidden md:flex space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'hover:underline text-white'}
          >
            Home
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'hover:underline text-white'}
          >
            Projects
          </NavLink>
        </nav>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white p-4">
          <NavLink 
            to="/" 
            className="block py-2" 
            onClick={toggleMenu}
            activeClassName="text-blue-500 underline"
          >
            Home
          </NavLink>
          <NavLink 
            to="/gallery/residential" 
            className="block py-2" 
            onClick={toggleMenu}
            activeClassName="text-blue-500 underline"
          >
            Projects
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
