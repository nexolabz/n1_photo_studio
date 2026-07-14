import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import BookingLeft from "./BookingLeft";
import BookingRight from "./BookingRight";
import Footer from "../Footer/Footer";

function Booking() {
  return (
    <section className="min-h-screen bg-[#F5F1ED] text-black">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition"
        >
          <button
            class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
          >
            <div class="bg-yellow-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#000000"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <p class="translate-x-2">Go Back</p>
          </button>
        </Link>

        <h2 className="text-3xl font-black tracking-wider">
          LENS
          <span className="text-yellow-400"> STUDIO</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="uppercase tracking-[6px] text-yellow-400 font-semibold">
          Booking
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-black uppercase">
          BOOK YOUR
          <span className="text-yellow-400"> SESSION</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
          Reserve your special day with Lens Studio. Whether it's a wedding,
          portrait, fashion, commercial shoot, or cinematic video, we're here to
          turn your moments into timeless memories.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <BookingLeft />

          <BookingRight />
        </div>
      </div>
    </section>
  );
}

<Footer />;

export default Booking;
