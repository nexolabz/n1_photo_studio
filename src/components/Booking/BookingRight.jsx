import React from "react";

function BookingRight() {
  return (
    <div className="bg-yellow-500  rounded-3xl p-8 lg:p-10 shadow-2xl">

      <h2 className="text-3xl font-black text-white">
        Booking <span className="text-black">Details</span>
      </h2>

      <p className="mt-3 text-black">
        Fill out the form below and we'll contact you shortly to confirm your
        booking.
      </p>

      <form className="mt-10 space-y-6">

        
        <div>
          <label className="block mb-2 text-black">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl text-black border border-gray-700 px-5 py-4 bg-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-black">
            Email Address
          </label>

          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full rounded-xl text-black border border-gray-700 px-5 py-4 bg-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-black">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+91 9876543210"
            className="w-full rounded-xl text-black border border-gray-700 px-5 py-4 bg-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block mb-2 text-black">
            Event Type
          </label>

          <select
            className="w-full rounded-xl text-black border border-gray-700 px-5 py-4 bg-white outline-none focus:border-yellow-400 transition"
          >
            <option>Wedding</option>
            <option>Pre Wedding</option>
            <option>Portrait</option>
            <option>Fashion</option>
            <option>Commercial</option>
            <option>Birthday</option>
            <option>Corporate</option>
            <option>Other</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-black">
            Booking Date
          </label>

          <input
            type="date"
            className="w-full rounded-xl text-black border border-gray-700 px-5 py-4 bg-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-2 text-black">
            Duration
          </label>

          <select
            className="w-full rounded-xl text-black border border-gray-700 px-5 py-4 bg-white outline-none focus:border-yellow-400 transition"
          >
            <option>1 Day</option>
            <option>2 Days</option>
            <option>3 Days</option>
            <option>1 Week</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 text-black">
            Event Location
          </label>

          <input
            type="text"
            placeholder="City / Venue"
            className="w-full rounded-xl  text-black border border-gray-700 px-5 py-4 bg-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-black">
            Additional Details
          </label>

          <textarea
            rows="5"
            placeholder="Tell us about your event..."
            className="w-full rounded-xl text-black border border-gray-700 px-5 py-4 bg-white outline-none resize-none focus:border-yellow-400 transition"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-full bg-white py-4 text-lg font-bold text-black transition hover:bg-yellow-300"
        >
          Book Now
        </button>

      </form>

    </div>
  );
}

export default BookingRight;
