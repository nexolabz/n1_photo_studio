import { useState, useEffect } from "react";
import heroVideo from "../../assets/hero.mp4";

import FadeIn from "../FadeIn";


const Home = () => {
  
  return (
    <FadeIn>
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center "
    >

      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover transition-opacity"
>
  <source src={heroVideo} type="video/mp4" />
</video>
      

      
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
    </FadeIn>
  );
};

export default Home;