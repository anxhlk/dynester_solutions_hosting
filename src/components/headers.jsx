import dynesterLogo from "../assets/dynesterLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-gradient-to-r from-white via-blue-500 to-indigo-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            className="flex items-center dark:text-gray-600 font-medium"
          >
            <img
              src={dynesterLogo}
              className="mr-3 h-6 sm:h-9"
              alt="Dynester Logo"
            />{" "}
            Dynester Solutions LLP
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1  lg:hidden border-none"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 flex-col lg:flex-row lg:space-x-8 lg:mt-0`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 dark:text-white rounded md:items-end"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  href="#"
                  className="block py-2 pr-4 pl-3 dark:text-white rounded"
                >
                  Products
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/services"
                  href="#"
                  className="block py-2 pr-4 pl-3 dark:text-white rounded"
                >
                  Services
                </Link>
              </li> */}
              <li>
                <Link
                  to="/vyaparapp"
                  href="#"
                  className="block py-2 pr-4 pl-3 dark:text-white rounded"
                >
                  Vyapar App
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
