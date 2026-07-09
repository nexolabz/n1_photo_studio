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

  const [selectedCategory, setSelectedCategory] = useState("All", "Wedding","Fashion","Portrait","Events","Commercial");

  const filteredImages =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section
      id="portfolio"
      className="bg-[#F5F1ED] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-black">
            OUR BEST
            <span className="text-yellow-500">
              {" "}WORK
            </span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-8">
            Every picture tells a story. Explore our finest work crafted with creativity,
            passion, and timeless memories.
          </p>

        </div>

        {/* Category Buttons */}

        <div className="flex justify-center flex-wrap gap-4 mt-14">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
              px-7
              py-3
              rounded-full
              border
              font-semibold
              duration-300

              ${
                selectedCategory === category
                  ? "bg-yellow-500 border-yellow-500 text-black"
                  : "border-gray-300 text-gray-700 hover:bg-yellow-500 hover:text-black hover:border-yellow-500"
              }
              `}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Gallery */}

        <div
          className="
          mt-20
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-10
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