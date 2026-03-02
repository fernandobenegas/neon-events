"use client";
import SectionWrapper from "@/components/SectionWrapper";
export default function Process() {
  return (
    <SectionWrapper>
    <section className="bg-black text-white py-24 px-8">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Cómo Trabajamos
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        
        <div className="p-8 border border-pink-500 rounded-2xl shadow-[0_0_20px_#ff00ff]">
          <h3 className="text-2xl font-bold text-pink-400 mb-4">
            1️⃣ Nos contás tu idea
          </h3>
          <p className="text-gray-400">
            Hablamos por WhatsApp y definimos el estilo, tamaño y tipo de evento.
          </p>
        </div>

        <div className="p-8 border border-cyan-500 rounded-2xl shadow-[0_0_20px_#00ffff]">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            2️⃣ Diseñamos tu neón
          </h3>
          <p className="text-gray-400">
            Creamos una propuesta visual personalizada para tu evento.
          </p>
        </div>

        <div className="p-8 border border-green-500 rounded-2xl shadow-[0_0_20px_#39ff14]">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            3️⃣ Instalamos y brillás
          </h3>
          <p className="text-gray-400">
            Nos encargamos de la instalación para que tu evento destaque.
          </p>
        </div>

      </div>
    </section>
    </SectionWrapper>
  );
}