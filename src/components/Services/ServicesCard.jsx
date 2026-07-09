function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div
      className="group bg-white shadow-xl rounded-2xl
      p-8 hover:border-yellow-400 duration-300 cursor-pointer"
    >
      <Icon className="text-5xl text-yellow-400 mb-6 group-hover:scale-110 duration-300" />

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7">
        {description}
      </p>

      
    </div>
  );
}

export default ServiceCard;