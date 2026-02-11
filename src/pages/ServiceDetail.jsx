import { useParams } from "react-router-dom";
import services from "../data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) return null;

  return (
    <div className="bg-white text-white min-h-screen">

      {/* HERO */}
      <div
        className="h-[90vh] bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative p-20 max-w-5xl">
          
          <h1 className=" font-black text-white text-7xl md:text-8xl  mt-4">
            {service.title}
          </h1>
          <h1 className=" font-black text-white text-7xl md:text-8xl  mt-4">
            {service.subtitle}
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl">
            {service.intro}
          </p>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="max-w-7xl mx-auto py-32 px-12 space-y-40 bg-white text-black">
        {service.sections.map((section, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-24 items-center"
          >
            {/* TEXT */}
            <div className={index % 2 === 0 ? "" : "md:order-2"}>
              <h2 className="text-5xl font-bold mb-6">{section.title}</h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                {section.text}
              </p>
            </div>

            {/* IMAGE */}
            <div className={index % 2 === 0 ? "" : "md:order-1"}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-100 to-blue-150 opacity-40 blur-2xl group-hover:opacity-70 transition" />
                <img
                  src={section.image}
                  className="relative z-10 rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
