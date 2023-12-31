import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ closeMobileMenu }) => {
  return (
    <>
      <li>
        <Link
          to="/"
          className="block py-2 pl-3 pr-4 md:text-white text-green-950 
          rounded md:bg-transparent md:text-blue-700 md:p-0
          md:dark:text-blue-500"
          aria-current="page"
          onClick={closeMobileMenu} // Close the mobile menu when a link is clicked
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="block py-2 pl-3 pr-4 md:text-white text-green-950
          rounded md:bg-transparent md:p-0"
          aria-current="page"
          onClick={closeMobileMenu} // Close the mobile menu when a link is clicked
        >
          Work
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="block py-2 pl-3 pr-4 md:text-white text-green-950 
          rounded md:bg-transparent md:p-0"
          aria-current="page"
          onClick={closeMobileMenu} // Close the mobile menu when a link is clicked
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="block py-2 pl-3 pr-4 md:text-white text-green-950 
          rounded md:bg-transparent md:p-0"
          aria-current="page"
          onClick={closeMobileMenu} // Close the mobile menu when a link is clicked
        >
          Contact
        </Link>
      </li>
    </>
  );
};

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-green-950 dark:bg-green-950 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://placekitten.com/300/300"
            className="h-8 mr-3 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            RADO
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact Us
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:block items-center justify-between w-full md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  bg-gray-50  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green-950 dark:bg-green-800 md:dark:bg-green-950 dark:border-green-700">
            <NavLinks closeMobileMenu={closeMobileMenu} />{" "}
            {/* Pass the closeMobileMenu function */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
