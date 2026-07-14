import PortfolioCard from "./PortfolioCard";

function PortfolioGallery({ images }) {
  return (
    <div
      className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
      "
    >
      {images.map((item, index) => (
        <PortfolioCard
          key={index}
          image={item.image}
          title={item.title || ""}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default PortfolioGallery;