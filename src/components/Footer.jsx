import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-8 px-4 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section (Copyright & Social Icons) */}
        <div className="mb-4 md:mb-0 flex flex-col md:flex-row items-center">
          <p className="text-sm mr-4">&copy; {new Date().getFullYear()} myPhoto Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebookF} /> {/* Font Awesome Facebook Icon */}
            </Link>
            <Link href="#" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} /> {/* Font Awesome Twitter Icon */}
            </Link>
            <Link href="#" className="hover:text-red-500">
            <FontAwesomeIcon icon={faInstagram} /> {/* Font Awesome Instagram Icon */}
            </Link>
            <Link href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} /> {/* Font Awesome Github Icon */}
            </Link>
          </div>
        </div>

        {/* Right Section (Links/Navigation) */}
        <div className="flex space-x-6 md:space-x-12 text-sm mx-2">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
       {/* Optional: Add Link subtle line above the footer */}
      <div className="border-t border-gray-700 mt-6 pt-2 w-full"></div>
    </footer>
  );
};

export default Footer;