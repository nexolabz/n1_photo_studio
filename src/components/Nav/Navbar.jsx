import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 z-50 w-full shadow-xl bg-black backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <h2 className="text-3xl font-black tracking-wider">
            LENS
            <span className="text-yellow-400"> STUDIO</span>
          </h2>

          <ul className="hidden md:flex items-center gap-10 text-white">
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

          <RouterLink to="/booking">
            <button className="hidden md:block rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400">
              Book Now
            </button>
          </RouterLink>

          <button className="md:hidden text-3xl" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 ">
          <ul className="flex flex-col items-center gap-6 py-6">
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

          <RouterLink to="/booking">
            <button className="hidden md:block rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400">
              Book Now
            </button>
          </RouterLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
