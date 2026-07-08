function PortfolioCard({ image, title, category }) {
  return (
    <div className="group relative overflow-hidden rounded-xl cursor-pointer">

      <img
        src={image}
        alt={title}
        className="w-full h-[380px] object-cover duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-end p-6">

        <p className="text-yellow-400 uppercase tracking-[4px]">
          {category}
        </p>

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

      </div>

    </div>
  );
}

export default PortfolioCard;