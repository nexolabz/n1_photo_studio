function PortfolioCard({ image, title, category }) {
  return (
    <div
      className="
      bg-white
      p-3
      rounded-md
      shadow-xl
      transition-all
      duration-500
      hover:scale-105
      hover:-rotate-2
      hover:shadow-2xl
      cursor-pointer
      "
    >
      <img
        src={image}
        alt={title}
        className="
        w-full
        h-[300px]
        object-cover
        rounded-sm
        "
      />

      <div className="pt-4 pb-2 text-center">

        <h3 className="text-xl font-bold text-black">
          {title}
        </h3>

        
      </div>
    </div>
  );
}

export default PortfolioCard;