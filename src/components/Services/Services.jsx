import serviceData from "./ServicesData";
import ServiceCard from "./ServicesCard";

function Services() {
  return (
    <section
      id="services"
      className="bg-[#F5F1ED] text-black py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-yellow-400">
            Services
          </p>

          <h2 className="text-6xl font-black mt-4">
            WHAT WE
            <span className="text-yellow-400">
              {" "}OFFER
            </span>
          </h2>

          <p className="text-gray-400 mt-6">
            Photography services tailored to your needs.
          </p>

        </div>

       

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;