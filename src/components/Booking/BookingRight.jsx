import React from "react";

function BookingRight() {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">

      <h2 className="text-3xl font-black text-white">
        Booking <span className="text-yellow-400">Details</span>
      </h2>

      <p className="mt-3 text-gray-400">
        Fill out the form below and we'll contact you shortly to confirm your
        booking.
      </p>

      <form className="mt-10 space-y-6">

        {/* Name */}
        <div>
          <label className="block mb-2 text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl bg-black border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full rounded-xl bg-black border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-gray-300">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+91 9876543210"
            className="w-full rounded-xl bg-black border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block mb-2 text-gray-300">
            Event Type
          </label>

          <select
            className="w-full rounded-xl bg-black border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400 transition"
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
          <label className="block mb-2 text-gray-300">
            Booking Date
          </label>

          <input
            type="date"
            className="w-full rounded-xl bg-black border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-2 text-gray-300">
            Duration
          </label>

          <select
            className="w-full rounded-xl bg-black border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400 transition"
          >
            <option>1 Day</option>
            <option>2 Days</option>
            <option>3 Days</option>
            <option>1 Week</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 text-gray-300">
            Event Location
          </label>

          <input
            type="text"
            placeholder="City / Venue"
            className="w-full rounded-xl bg-black border border-gray-700 px-5 py-4 text-white outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-gray-300">
            Additional Details
          </label>

          <textarea
            rows="5"
            placeholder="Tell us about your event..."
            className="w-full rounded-xl bg-black border border-gray-700 px-5 py-4 text-white outline-none resize-none focus:border-yellow-400 transition"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-full bg-yellow-400 py-4 text-lg font-bold text-black transition hover:bg-yellow-300"
        >
          Book Now
        </button>

      </form>

    </div>
  );
}

export default BookingRight;
