import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
  const options =  [
    {
      title: "wedding",
      link:"/wedding"
    },
    {
      title: "kids",
      link:"/kids"
    },
    {
      title: "family",
      link:"/family"
    },
    {
      title: "modeling",
      link:"/modeling"
    },
    {
      title: "kiristina",
      link:"/kiristina"
    },
        {
      title: "maternity",
      link:"/maternity"
    },
    {
      title: "mels",
      link:"/mels"
    },
    {
      title: "teklil",
      link:"/teklil"
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for saved preference
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference === 'true' || false; // Default to false if no preference is stored
  });

  useEffect(() => {
    // Update the HTML class and local storage whenever the mode changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
    
  return (
    <nav className="fixed bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-800 py-4 px-6 w-full z-50">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex gap-2">Tesfa <span className='h-10'>📸</span>
        </div>
        <button
      onClick={toggleDarkMode}
      className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 text-xl" // Increased font size for emojis
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"} // Added aria-label for accessibility
    >
      {isDarkMode ? '🌙' : '☀️'} {/* Moon and Sun emojis */}
    </button>
    <Link to={`/login`}>
    <button className='p-2 rounded dark:bg-black dark:hover:bg-gray-900 dark:text-white text-gray-800 bg-gray-200 hover:bg-gray-50 font-bold'>
    login
    </button>
    </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to={`/`} className=" transition">Home</Link>
          <Link to={`/`} className=" transition">About</Link>
          <Dropdown options={options} />
          <Link to={`/`} className=" transition">Services</Link>
          <Link to={`/`} className=" transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-200 dark:bg-gray-700 rounded-md shadow-md p-4"> {/* Slightly darker mobile menu background */}
          <Link to={`/`} className="block py-2 hover:bg-gray-300 dark:hover:bg-gray-600 px-2 rounded-md transition">Home</Link> {/* Lighter hover on mobile menu items */}
          <Link to={`/`} className="block py-2 hover:bg-gray-300 dark:hover:bg-gray-600 px-2 rounded-md transition">About</Link>
          <Dropdown options={options} />
          <Link to={`/`} className="block py-2 hover:bg-gray-300 dark:hover:bg-gray-600 px-2 rounded-md transition">Services</Link>
          <Link to={`/`} className="block py-2 hover:bg-gray-300 dark:hover:bg-gray-600 px-2 rounded-md transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;