import Aboutimg from "../../assets/Abouti.webp";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      
      <img
        src={Aboutimg}
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 "></div>

      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="flex justify-center lg:justify-end">

          <div className="max-w-2xl">

            
            <p className="uppercase tracking-[3px] md:tracking-[6px] text-yellow-500 font-semibold">
              About Us
            </p>

           
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              WE CAPTURE
              <br />
              TIMELESS{" "}
              <span className="text-yellow-500">
                STORIES
              </span>
            </h2>

            
            <p className="mt-8 text-black text-sm sm:text-base leading-7 md:leading-8">
              Lens Studio Photography is a creative photography studio
              dedicated to capturing timeless moments. We believe every
              frame tells a story filled with emotions, passion, and
              unforgettable memories.
            </p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

              <div className="flex text-2xl items-center gap-3">
                <FaCheckCircle className="text-yellow-500" />
                <span>Wedding Photography</span>
              </div>

              <div className="flex text-2xl items-center gap-3">
                <FaCheckCircle className="text-yellow-500" />
                <span>Commercial Shoots</span>
              </div>

              <div className="flex text-2xl items-center gap-3">
                <FaCheckCircle className="text-yellow-500" />
                <span>Portrait Sessions</span>
              </div>

              <div className="flex text-2xl items-center gap-3">
                <FaCheckCircle className="text-yellow-500" />
                <span>Fashion Photography</span>
              </div>

              <div className="flex text-2xl items-center gap-3">
                <FaCheckCircle className="text-yellow-500" />
                <span>Fashion & Editorial</span>
              </div>

              <div className="flex text-2xl items-center gap-3">
                <FaCheckCircle className="text-yellow-500" />
                <span>Cinematic Videos</span>
              </div>

            </div>

            
            

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;