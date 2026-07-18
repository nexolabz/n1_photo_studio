import React from "react";
import BookingImage from "../../assets/all2.jpg";

import { FaCheckCircle } from "react-icons/fa";

function BookingLeft() {
  return (
    <div className="relative h-[700px] rounded-3xl overflow-hidden">

      
      <img
        src={BookingImage}
        alt="Booking"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/30"></div>

      
      <div className="absolute inset-0 z-10 flex flex-col justify-end px-10 pb-45">

        
        <p className="uppercase tracking-[6px] text-yellow-400 font-semibold text-sm">
          Reserve Your Date
        </p>

        
        <h2 className="mt-4 text-5xl md:text-6xl font-black leading-none">
          BOOK YOUR
          <br />
          <span className="text-yellow-400">
            DREAM SHOOT
          </span>
        </h2>

        
        <p className="mt-6 text-gray-200 leading-8 max-w-md">
          Every unforgettable moment deserves to be captured with
          creativity, passion and timeless quality. Reserve your
          session today and let us turn your memories into stories.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-xl">

          <div className="flex items-center gap-3 ">
            <FaCheckCircle className="text-yellow-400" />
            <span>Wedding Photography</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-yellow-400" />
            <span>Portraits Photography</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-yellow-400" />
            <span>Commercial Shoots</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-yellow-400" />
            <span>Cinematic Videos</span>
          </div>

          <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-400" />
                <span>Fashion & Editorial</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-400" />
                <span>Events Photography</span>
              </div>

        </div>

       
        <div className="mt-10 w-24 h-1 bg-yellow-400 rounded-full"></div>

      </div>

    </div>
  );
}

export default BookingLeft;