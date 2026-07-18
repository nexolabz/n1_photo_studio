import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCamera,
  FaStar,
} from "react-icons/fa";

import FadeIn from "../FadeIn";

 import fashionHero from "../../assets/fashion-hero.jpg";

import img1 from "../../assets/portfolio/fashion/fa1.webp";
import img2 from "../../assets/portfolio/fashion/fa2.webp";
import img3 from "../../assets/portfolio/fashion/fa3.webp";
import img4 from "../../assets/portfolio/fashion/fa4.webp";
import img5 from "../../assets/portfolio/fashion/fa5.webp";
import img6 from "../../assets/portfolio/fashion/fa6.webp";

const gallery = [img1, img2, img3, img4, img5, img6];

function Fashion() {
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

    <img
      src={fashionHero}
      alt="Fashion"
      className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
    />

  </div>

  

  <div>

    <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
      Fashion Photography
    </p>

    <h1 className="text-5xl lg:text-7xl font-black mt-5 leading-tight">
      WE CREATE
      <span className="text-yellow-500"> ICONIC</span>
      <br />
      FASHION STORIES
    </h1>

    <p className="text-gray-600 mt-8 leading-8">
      Premium fashion photography for models,
      designers, influencers and clothing brands.
      From studio editorials to luxury outdoor campaigns,
      we deliver images that define your identity.
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
              {" "}GALLERY
            </span>
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {gallery.map((image, index) => (

            <img
              key={index}
              src={image}
              alt=""
              className="rounded-3xl h-[380px] w-full object-cover hover:scale-105 duration-300 cursor-pointer bg-white p-3 shadow-2xl"
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
              price: "₹7,999",
              items: [
                "2 Hour Shoot",
                "20 Edited Photos",
                "1 Outfit",
              ],
            },
            {
              name: "Premium",
              price: "₹14,999",
              items: [
                "4 Hour Shoot",
                "50 Edited Photos",
                "Multiple Outfits",
              ],
            },
            {
              name: "Luxury",
              price: "₹24,999",
              items: [
                "Full Day Shoot",
                "Unlimited Photos",
                "Cinematic Reel",
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

     <Footer/>

    </div>

    </FadeIn>
  );
}

export default Fashion;