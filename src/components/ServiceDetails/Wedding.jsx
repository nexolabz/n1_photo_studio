import { Link } from "react-router-dom";
import {FaArrowLeft,} from "react-icons/fa";

import weddingHero from "../../assets/WeddingHero.webp";



const packages = [
  {
    title: "Silver",
    price: "₹15,999",
    features: [
      "1 Photographer",
      "200 Edited Photos",
      "Online Gallery",
      "Basic Album",
    ],
  },
  {
    title: "Gold",
    price: "₹29,999",
    features: [
      "2 Photographers",
      "Drone Coverage",
      "500 Edited Photos",
      "Premium Album",
    ],
  },
  {
    title: "Premium",
    price: "₹49,999",
    features: [
      "2 Photographers",
      "2 Cinematic Videographers",
      "Drone Coverage",
      "Wedding Teaser",
      "Luxury Album",
    ],
  },
];

function WeddingPage() {
  return (
    <>

    
     
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
    
    <div className="bg-white text-black">


      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
         style={{
    backgroundImage: `url(${weddingHero})`,
  }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-5">

          <p className="uppercase tracking-[6px] text-yellow-400">
            Wedding Photography
          </p>

          <h1 className="text-5xl md:text-7xl text-white font-black mt-5">
            CAPTURE YOUR
            <span className="text-yellow-400"> FOREVER</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            We preserve your most precious memories with cinematic storytelling,
            candid emotions, and timeless photography.
          </p>

          <Link to="/booking">
            <button className="mt-10 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 duration-300">
              Book Now
            </button>
          </Link>

        </div>
      </section>

      

      <section className="max-w-7xl mx-auto py-24 px-8">

        <h2 className="text-4xl font-bold mb-8">
          About Our Wedding Services
        </h2>

        <p className="text-gray-400 leading-8">
          Your wedding is one of the most important days of your life. Our
          professional photographers capture every smile, every emotion and
          every unforgettable moment in a timeless way.
        </p>

      </section>

      

      

      <section className="max-w-7xl mx-auto py-24 px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          Wedding Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((item, index) => (

            <div
              key={index}
              className="border border-zinc-700 rounded-2xl p-8 hover:border-yellow-400 duration-300"
            >

              <h3 className="text-3xl font-bold">
                {item.title}
              </h3>

              <p className="text-yellow-400 text-4xl mt-6">
                {item.price}
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">

                {item.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}

              </ul>

              <Link to="/booking">

                <button className="mt-10 w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-yellow-300 duration-300">
                  Book Now
                </button>

              </Link>

            </div>

          ))}

        </div>

      </section>

      

      <section className="max-w-7xl mx-auto py-24 px-8">

        <h2 className="text-4xl font-bold mb-10">
          Why Choose Lens Studio?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div>✔ Professional Team</div>
          <div>✔ Cinematic Videos</div>
          <div>✔ Drone Photography</div>
          <div>✔ Premium Album Design</div>
          <div>✔ Fast Delivery</div>
          <div>✔ Unlimited Memories</div>

        </div>

      </section>

      

      <section className="py-24 bg-[#111] text-center">

        <h2 className="text-5xl text-white font-black">
          Ready To Capture
          <span className="text-yellow-400"> Your Story?</span>
        </h2>

        <p className="mt-6 text-gray-400">
          Let's make your wedding unforgettable.
        </p>

        <Link to="/booking">

          <button className="mt-10 bg-yellow-400 text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-300 duration-300">
            Book Your Session
          </button>

        </Link>

      </section>

    </div>

    </>
  );
}

export default WeddingPage;