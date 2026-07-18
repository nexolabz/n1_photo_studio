import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCamera,
  FaStar,
} from "react-icons/fa";

import FadeIn from "../FadeIn";

import heroC from "../../assets/Cinematic.mp4"

import video1 from "../../assets/video 1.mp4";
import video2 from "../../assets/video 2.mp4";
import video3 from "../../assets/video 3.mp4";
import video4 from "../../assets/video 4.mp4";
import video5 from "../../assets/video 5.mp4";
import video6 from "../../assets/video 6.mp4";

const videos = [video4, video2, video3, video1, video5, video6];

function Cinematic() {
  return (
    <FadeIn>
    <div className="bg-[#F8F6F3] text-black min-h-screen">

      
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-2 text-yellow-500 hover:text-black duration-300"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <h2 className="text-3xl font-black">
          LENS
          <span className="text-yellow-500"> STUDIO</span>
        </h2>

      </div>

     

     

<div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-14 items-center">

 

  <div>

    <video
      autoPlay
      muted
      loop
      playsInline
      className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
    >
      <source src={heroC} type="video/mp4" />
    </video>

   

  </div>


  <div>

    <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
       Cinematic Videography
    </p>

    <h1 className="text-5xl lg:text-7xl font-black mt-5 leading-tight">
      WE CREATE
      <span className="text-yellow-500"> CINEMATIC</span>
      <br />
     STORIES
    </h1>

    <p className="text-gray-600 mt-8 leading-8">
       Professional cinematic videography for weddings,
  events, brands, businesses and personal stories.
  Using creative storytelling, smooth camera movements,
  drone shots and professional editing, we create films
  that you'll love to watch again and again.
    </p>

    <Link to="/booking">
      <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold duration-300">
        Book Your Shoot
      </button>
    </Link>

  </div>

      
</div>
      

      

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <h2 className="text-5xl font-black">
            OUR
            <span className="text-yellow-500">
              {" "} CINEMATIC WORK
            </span>
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {videos.map((video, index) => (
    <video
      key={index}
      src={video}
      controls
      muted
      preload="metadata"
      className="rounded-3xl h-[380px] w-full object-cover bg-white p-3 shadow-2xl"
            />

          ))}

        </div>

      </section>

   

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-center text-5xl font-black">
          PACKAGES
        </h2>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">

          {[
  {
    name: "Basic",
    price: "₹12,999",
    items: [
      "2 Hour Video Shoot",
      "2-3 Min Highlight Film",
      "Full HD Delivery",
    ],
  },
  {
    name: "Premium",
    price: "₹24,999",
    items: [
      "Half Day Shoot",
      "Cinematic Highlight Film",
      "Drone Shots Included",
    ],
  },
  {
    name: "Luxury",
    price: "₹39,999",
    items: [
      "Full Day Coverage",
      "4K Cinematic Film",
      "Drone + Gimbal",
      "Instagram Reels",
    ],
  },
].map((plan) => (

            <div
              key={plan.name}
              className="bg-white rounded-3xl shadow-xl p-10 text-center"
            >

              <FaCamera className="mx-auto text-yellow-500 text-5xl mb-6" />

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <h2 className="text-5xl font-black mt-4">
                {plan.price}
              </h2>

              <div className="mt-8 space-y-4">

                {plan.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}

              </div>

              <Link to="/booking">

                <button className="mt-10 w-full bg-yellow-400 py-4 rounded-full font-semibold hover:bg-yellow-500 duration-300">
                  Book Now
                </button>

              </Link>

            </div>

          ))}

        </div>

      </section>

     <Footer />

    </div>

    </FadeIn>
  );
}

export default Cinematic;