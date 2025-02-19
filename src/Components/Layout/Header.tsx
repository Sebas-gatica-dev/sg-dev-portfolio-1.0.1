import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black pt-6 pb-4 mx-auto w-full lg:px-24 flex flex-col md:flex-row md:items-center md:justify-around md:px-6 px-8">
      {/* Logo y Botón de Menú */}
      <div className="text-white text-sm items-center flex flex-row justify-between lg:justify-start">
        <Link to="/" className="lg:pr-8 text-lg font-semibold">Sg.dev</Link>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none inline-flex items-center justify-center md:hidden p-2"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú Principal */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col flex-grow pl-8 md:flex md:flex-row md:justify-center md:pb-0`}
      >
        <div className="mx-2 items-center mb-2 inline-flex md:mt-0 lg:ml-auto mt-5 list-none justify-center">

       
        <div className="mx-2 items-center mb-2 inline-flex md:mt-0 lg:ml-auto mt-5 list-none">
          <Link
          onClick={() => setIsMenuOpen(false)}
            to="/"
            className="items-center text-sm font-extrabold justify-center focus:outline-none text-black inline-flex bg-white border-2 border-white duration-200 focus-visible:outline-white focus-visible:ring-white hover:bg-transparent hover:border-white lg:w-auto px-4 py-1.5 rounded-full text-center hover:text-white w-full"
          >
            Home
          </Link>
        </div>
        <div className="mx-2 items-center mb-2 inline-flex md:mt-0 lg:ml-10 mt-5 list-none">
          <Link
          onClick={() => setIsMenuOpen(false)}
            to="/features"
            className="items-center text-sm font-extrabold justify-center focus:outline-none text-black inline-flex bg-white border-2 border-white duration-200 focus-visible:outline-white focus-visible:ring-white hover:bg-transparent hover:border-white lg:w-auto px-4 py-1.5 rounded-full text-center hover:text-white w-full"
          >
            Features
          </Link>
        </div>
        <div className="mx-2 items-center mb-2 inline-flex md:mt-0 lg:ml-10 mt-5 list-none">
          <Link
          onClick={() => setIsMenuOpen(false)}
            to="/projects"
            className="items-center text-sm font-extrabold justify-center focus:outline-none text-black inline-flex bg-white border-2 border-white duration-200 focus-visible:outline-white focus-visible:ring-white hover:bg-transparent hover:border-white lg:w-auto px-4 py-1.5 rounded-full text-center hover:text-white w-full"
          >
            Projects
          </Link>
        </div>
        <div className="mx-2 items-center mb-2 inline-flex md:mt-0 lg:ml-10 mt-5 list-none">
          <Link
          onClick={() => setIsMenuOpen(false)}
            to="/contact"
            className="items-center text-sm font-extrabold justify-center focus:outline-none text-black inline-flex bg-white border-2 border-white duration-200 focus-visible:outline-white focus-visible:ring-white hover:bg-transparent hover:border-white lg:w-auto px-4 py-1.5 rounded-full text-center hover:text-white w-full"
          >
            Contact
          </Link>
        </div>

        </div>
      </nav>

    
    </div>
  );
}