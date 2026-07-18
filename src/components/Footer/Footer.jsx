import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FadeIn from "../FadeIn";

import { Link } from "react-scroll";

function Footer() {
  return (
    <FadeIn>
    <footer className="bg-[#080808] text-white border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-8 py-20">

        

        <div className="grid md:grid-cols-3 gap-16">

         

          <div>

            <h2 className="text-4xl font-bold">
              LENS
              <span className="text-yellow-400">
                {" "}STUDIO
              </span>
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Capturing emotions, preserving memories,
              and telling stories through every frame.
            </p>

          </div>

         

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 duration-300"
              >
                Home
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 duration-300"
              >
                About
              </Link>

              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 duration-300"
              >
                Portfolio
              </Link>

              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 duration-300"
              >
                Services
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 duration-300"
              >
                Contact
              </Link>

            </div>

          </div>

          

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3 items-center">
                <FaMapMarkerAlt className="text-yellow-400" />
                Bhopal, Madhya Pradesh
              </div>

              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-yellow-400" />
                +91 9999999999
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-yellow-400" />
                lensstudio@gmail.com
              </div>

            </div>

           

            <div className="flex gap-4 mt-8">

              <div className="w-11 h-11 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-11 h-11 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-11 h-11 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer">
                <FaYoutube />
              </div>

              <div className="w-11 h-11 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer">
                <FaLinkedinIn />
              </div>

            </div>

          </div>

        </div>

      

        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">

          <p>
            © 2026 Lens Studio. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed & Developed by
            <span className="text-yellow-400">
              {" "}Anuj Kumar
            </span>
          </p>

        </div>

      </div>

    </footer>
    </FadeIn>
  );
}

export default Footer;