import { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <img src={logo} alt="Ibro Construction LLC" className="h-10 mr-4" />
          <h1 className="text-2xl">Ibro Construction LLC</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <Link to="/gallery/residential" className="hover:underline">Gallery</Link>
        </nav>
        <button onClick={toggleMenu} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white p-4">
          <Link to="/" className="block py-2" onClick={toggleMenu}>Home</Link>
          <a href="#services" className="block py-2" onClick={toggleMenu}>Services</a>
          <a href="#projects" className="block py-2" onClick={toggleMenu}>Projects</a>
          <a href="#about" className="block py-2" onClick={toggleMenu}>About Us</a>
          <a href="#contact" className="block py-2" onClick={toggleMenu}>Contact</a>
          <Link to="/gallery/residential" className="block py-2" onClick={toggleMenu}>Gallery</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
