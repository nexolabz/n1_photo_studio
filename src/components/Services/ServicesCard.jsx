import { Link as RouterLink } from "react-router-dom";

function ServiceCard({
  image,
  title,
  description,
  route,
}) {
  return (
    <RouterLink to={route}>
      <div
        className="
        relative
        h-[500px]
        rounded-3xl
        overflow-hidden
        cursor-pointer
        group
        shadow-xl
        "
      >
        {/* Background Image */}

        <img
          src={image}
          alt={title}
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
          "
        />

        {/* Gradient */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
          "
        />

        {/* Content */}

        <div
          className="
          absolute
          bottom-0
          left-0
          w-full
          p-8
          text-white
          "
        >
          <p
            className="
            uppercase
            tracking-[4px]
            text-yellow-400
            text-sm
            "
          >
            Premium
          </p>

          <h2
            className="
            text-3xl
            font-black
            mt-3
            "
          >
            {title}
          </h2>

          <p
            className="
            mt-4
            text-gray-200
            leading-7
            opacity-0
            translate-y-8
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-500
            "
          >
            {description}
          </p>

          <button
            className="
            mt-8
            px-6
            py-3
            rounded-full
            bg-yellow-400
            text-black
            font-semibold
            hover:scale-105
            duration-300
            "
          >
            Explore →
          </button>
        </div>
      </div>
    </RouterLink>
  );
}

export default ServiceCard;