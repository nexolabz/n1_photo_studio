import { motion } from "framer-motion";

function PortfolioStack({
  title,
  images,
  isOpen,
  onClick,
  children,
}) {
  return (
    <div className="mb-14">

      

      <h2
        className="text-4xl font-black text-center text-black mb-10 cursor-pointer"
        onClick={onClick}
      >
        {title}
      </h2>

      {/* deck of cards */}

      <div
        onClick={onClick}
        className="relative w-[280px] h-[360px] mx-auto cursor-pointer"
      >
        {/* Card 4 */}

        <motion.div
          animate={{
            rotate: isOpen ? -15 : 6,
            x: isOpen ? -170 : 0,
            y: isOpen ? 40 : 18,
          }}
          transition={{ duration: .6 }}
          className="absolute w-full h-full bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src={images[3] || images[0]}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 3 */}

        <motion.div
          animate={{
            rotate: isOpen ? -8 : 4,
            x: isOpen ? -90 : 0,
            y: isOpen ? 25 : 12,
          }}
          transition={{ duration: .6 }}
          className="absolute w-full h-full bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <img
            src={images[2] || images[0]}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 2 */}

        <motion.div
          animate={{
            rotate: isOpen ? 8 : 2,
            x: isOpen ? 90 : 0,
            y: isOpen ? 20 : 6,
          }}
          transition={{ duration: .6 }}
          className="absolute w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <img
            src={images[1] || images[0]}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 1 */}

        <motion.div
          animate={{
            rotate: isOpen ? 15 : 0,
            x: isOpen ? 170 : 0,
            y: isOpen ? 40 : 0,
            scale: isOpen ? .95 : 1,
          }}
          transition={{ duration: .6 }}
          className="absolute w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-white"
        >
          <img
            src={images[0]}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

     

      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: .5 }}
        className="overflow-hidden mt-16"
      >
        {children}
      </motion.div>

    </div>
  );
}

export default PortfolioStack;