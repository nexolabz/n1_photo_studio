import { useState } from "react";
import portfolioData from "./PortfolioData";
import PortfolioStack from "./PortfolioStack";
import PortfolioGallery from "./PortfolioGallery";

function Portfolio() {
  const categories = [
    "Wedding",
    "Fashion",
    "Portrait",
    "Events",
    "Commercial",
  ];

  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory((prev) =>
      prev === category ? null : category
    );
  };

  return (
    <section
      id="portfolio"
      className="bg-[#F5F1ED] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Portfolio
          </p>

          <h2 className="text-6xl font-black mt-4">
            OUR BEST
            <span className="text-yellow-500">
              {" "}WORK
            </span>
          </h2>

        </div>

        {categories.map((category) => {

          const images = portfolioData.filter(
            (item) => item.category === category
          );

          return (
            <PortfolioStack
              key={category}
              title={category}
              images={images.map((item) => item.image)}
              isOpen={openCategory === category}
              onClick={() => toggleCategory(category)}
            >
              <PortfolioGallery images={images} />
            </PortfolioStack>
          );
        })}

      </div>
    </section>
  );
}

export default Portfolio;