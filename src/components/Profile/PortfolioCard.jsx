function PortfolioCard({ image }) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-lg
        cursor-pointer
      "
    >
      <img
        src={image}
        alt=""
        className="
          w-full
          h-[320px]
          object-cover
          duration-500
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/40
          opacity-0
          group-hover:opacity-100
          duration-500
        "
      ></div>
    </div>
  );
}

export default PortfolioCard;