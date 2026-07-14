import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-xl">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-8 py-5">

          
          <RouterLink to="/" className="flex items-center gap-3">

            <img
              src={logo}
              alt="Lens Studio Logo"
              className="w-12 h-12 rounded-full object-cover"
            />

            <h2 className="text-3xl font-black tracking-wider">
              LENS
              <span className="text-yellow-400"> STUDIO</span>
            </h2>

          </RouterLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-black">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Book Button */}
          <RouterLink to="/booking">
            <button className="hidden md:block rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition">
              Book Now
            </button>
          </RouterLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            fixed
            top-[88px]
            left-0
            w-full
            z-40
            bg-white
            border-t
            border-gray-200
            shadow-lg
          "
        >
          <ul className="flex flex-col items-center gap-6 py-6">

            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;