import { useState, useEffect } from "react";

import hero1 from "../../assets/homebg/homebg 1.webp";
import hero2 from "../../assets/homebg/homebg 2.webp";
import hero3 from "../../assets/homebg/homebg 3.webp";
import hero4 from "../../assets/homebg/homebg 4.webp";
import hero5 from "../../assets/homebg/homebg 5.webp";
import hero6 from "../../assets/homebg/homebg 6.webp";
import hero7 from "../../assets/homebg/homebg 7.webp";
import hero8 from "../../assets/homebg/homebg 8.webp";

const images = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
  const interval = setInterval(() => {

    setFade(false);

    setTimeout(() => {

      setCurrentImage(prev => (prev + 1) % images.length);

      requestAnimationFrame(() => {
        setFade(true);
      });

    },700); // same as transition duration

  },3000);

  return () => clearInterval(interval);

},[]);


  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center "
    >
      
      <img
        src={images[currentImage]}
        alt="Hero"
        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      
     <div
  className={`absolute inset-0 bg-black transition-opacity duration-700 ${
    fade ? "opacity-30" : "opacity-70"
  }`}
/>

      
      <div className="relative z-10 px-6 md:px-12 text-white">
        <p className="mb-4 text-yellow-600 uppercase tracking-[2px] md:tracking-[6px]">
          Capturing Moments
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none">
          Every Frame
        </h1>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-yellow-500">
          Tells A Story
        </h1>

        <p className="mt-6 text-white-300 text-lg md:text-lg leading-7 md:leading-8 max-w-xl">
          We don't just take photographs,
          
          we capture emotions, preserve memories,
          
          and tell stories through our lens.
        </p>
      </div>
    </section>
  );
};

export default Home;