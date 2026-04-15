import services from "../data/services";

function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-400">
          Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition"
            >
              <img
                src={service.imgPath}
                alt={service.title}
                className="w-full h-1/2 "
              />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
