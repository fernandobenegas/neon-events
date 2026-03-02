import SectionWrapper from "./SectionWrapper";



export default function Services() {
  return (
    <SectionWrapper>
    <section id="servicios" className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
      <h2 className="text-4xl font-bold text-center text-pink-500 mb-16 drop-shadow-[0_0_15px_#ff00ff]">
        Nuestros Servicios
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          "Neón personalizado",
          "Eventos sociales",
          "Eventos corporativos",
        ].map((service, i) => (
          <div
            key={i}
            className="p-10 bg-black border border-pink-500/40 rounded-2xl hover:scale-105 transition duration-300 shadow-[0_0_20px_#ff00ff20]"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              {service}
            </h3>
            <p className="text-gray-400">
              Diseño, fabricación e instalación profesional adaptada a tu evento.
            </p>
          </div>
        ))}
      </div>
    </section>
    </SectionWrapper>
  );
}