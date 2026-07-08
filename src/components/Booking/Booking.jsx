import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import BookingLeft from "./BookingLeft";
import BookingRight from "./BookingRight";
import Footer from "../Footer/Footer";

function Booking() {
  return (
    <section className="min-h-screen bg-black text-white">

    
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
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

<Footer/>

export default Booking;