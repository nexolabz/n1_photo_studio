import { Link } from "react-router-dom";
import FadeIn from "../FadeIn";
import Footer from "../../components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa";

import one from "../../assets/portfolio/wedding/1.webp";
import two from "../../assets/portfolio/wedding/2.webp";
import three from "../../assets/portfolio/wedding/3.webp";
import four from "../../assets/portfolio/wedding/5.webp";
import five from "../../assets/portfolio/wedding/4.webp";
import six from "../../assets/portfolio/wedding/6.webp";
import weddingHero from "../../assets/WeddingHero.webp";
import homebg3 from "../../assets/homebg/homebg 3.webp";

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
    
      <div className=" max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
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


      <div className="bg-[#F8F6F3] text-black">
        <FadeIn delay={0.2}>
        <section
          className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${weddingHero})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-center px-5">
            <p className="uppercase tracking-[6px] text-yellow-400">
              Wedding Photography
            </p>

            <h1 className="text-5xl md:text-7xl text-white font-black mt-5">
              CAPTURE YOUR
              <span className="text-yellow-400"> FOREVER</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-gray-300">
              We preserve your most precious memories with cinematic
              storytelling, candid emotions, and timeless photography.
            </p>

            <Link to="/booking">
              <button className="mt-10 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </section>
</FadeIn>

<FadeIn delay={0.4}>
        <section className="max-w-7xl mx-auto py-24 px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img
              src={homebg3}
              alt=""
              className="rounded-2xl h-[500px] w-full object-cover shadow-2xl"
            />

            <div>
              <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
                About
              </p>

              <h2 className="text-5xl font-black mt-4">
                YOUR LOVE,
                <span className="text-yellow-500"> OUR STORY</span>
              </h2>

              <p className="text-gray-500 leading-8 mt-8">
                Every wedding is unique. Our goal is to preserve every smile,
                every emotion, and every unforgettable moment with timeless
                photography and cinematic storytelling.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <h3 className="text-4xl font-black text-yellow-500">500+</h3>
                  <p>Wedding Shoots</p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-yellow-500">8+</h3>
                  <p>Years Experience</p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-yellow-500">100%</h3>
                  <p>Happy Couples</p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-yellow-500">24/7</h3>
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
</FadeIn>

<FadeIn delay={0.6}>
        <section className="max-w-7xl mx-auto py-20 px-8">
          <h2 className="text-5xl font-black text-center mb-14">
            Wedding
            <span className="text-yellow-500"> Moments</span>
          </h2>

          <div className="grid md:grid-cols-3  gap-4 ">
            <img
              src={one}
              className="bg-white h-[320px] p-3 shadow-2xl rotate-[-3deg] hover:rotate-0 hover:scale-105 duration-300"
            />
 
            <img
              src={five}
              className="bg-white p-3 h-[320px] shadow-2xl rotate-[5deg] hover:rotate-0 hover:scale-105 duration-300"
            />

            <img
              src={three}
              className="bg-white p-3 h-[320px] shadow-2xl rotate-[-3deg] hover:rotate-0 hover:scale-105 duration-300"
            />
            <img
              src={four}
              className="bg-white p-3 h-[320px] shadow-2xl rotate-[-3deg] hover:rotate-0 hover:scale-105 duration-300"
            />

            <img
              src={two}
              className="bg-white p-3 h-[320px] shadow-2xl rotate-[5deg] hover:rotate-0 hover:scale-105 duration-300"
            />

            <img
              src={six}
              className="bg-white p-3 h-[320px] shadow-2xl rotate-[-3deg] hover:rotate-0 hover:scale-105 duration-300"
            /> 
          </div>
        </section>
</FadeIn>

<FadeIn delay={0.6}>
        <section className="max-w-7xl mx-auto py-24 px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Wedding Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white  p-10 text-center
                  text-black
                  rounded-3xl
                  
                  shadow-xl
                  hover:-translate-y-3
                  hover:border-yellow-400
                  
                  duration-300
                  "
              >
                <h3 className="text-3xl font-bold">{item.title}</h3>

                <p className="text-yellow-400 text-4xl font-bold mt-6">{item.price}</p>

                <ul className="mt-8 space-y-4 text-black">
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

    </FadeIn>    

        <Footer/>
      </div>
      
    </>
  );
}

export default WeddingPage;
