import { useState } from "react";
import portfolioData from "./PortfolioData";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const categories = [
    "All",
    "Wedding",
    "Fashion",
    "Portrait",
    "Events",
    "Commercial",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section
      id="portfolio"
      className="bg-black text-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[3px] md:tracking-[6px] text-yellow-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black">
            OUR BEST
            <span className="text-yellow-400">
              {" "}WORK
            </span>
          </h2>

          <p className="mt-5 text-gray-400 text-sm md:text-base">
            Capturing moments that last forever.
          </p>

        </div>

        {/* Category Buttons */}

        <div
          className="
          mt-12
          flex
          gap-3
          md:gap-5
          overflow-x-auto
          whitespace-nowrap
          pb-4
          scrollbar-hide
          justify-start
          md:justify-center
          "
        >
          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-full border transition-all duration-300

              ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {category}
            </button>

          ))}
        </div>

        {/* Portfolio Images */}

        <div
          className="
          mt-12
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >
          {filteredImages.map((item) => (

            <PortfolioCard
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
            />

          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;