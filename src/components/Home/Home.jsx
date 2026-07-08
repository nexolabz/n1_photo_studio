import Cover from "../../assets/coverimage.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center "
      
    >
        <img
        src={Cover}
        alt="Cover"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 px-6 md:px-12 text-white">
        <p className="mb-4 text-yellow-400 uppercase tracking-[2px] md:tracking-[6px]">
          Capturing Moments
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none">
          Every Frame
        </h1>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-yellow-400">
          Tells A Story
        </h1>
        
            <p className="mt-6 text-gray-300 text-sm md:text-lg leading-7 md:leading-8 max-w-xl">
          We don't just take photographs,<br/>
          we capture emotions, preserve memories, <br/>
          and tell stories through our lens.
        </p>
       
      </div>
      
    </section>
  );
};

export default Home;