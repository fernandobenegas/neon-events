"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

const images = [
  "/neon01.png",
  "/neon02.png",
  "/neon03.png",
  "/neon04.png",
  "/neon05.png",
  "/neon06.png",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SectionWrapper>
      <section id="galeria" className="bg-black text-white py-24 px-8">
        
        {/* Título animado */}
        <motion.h2
          className="text-4xl font-bold text-center text-pink-500 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Proyectos Destacados
        </motion.h2>

        {/* Grid con stagger */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 neon-card"
              onClick={() => setSelected(src)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-black">
                <Image
                  src={src}
                  alt="Neon Event"
                  width={500}
                  height={500}
                  className="object-cover w-full h-72 group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-lg tracking-widest drop-shadow-[0_0_10px_#ff00ff]">
                    Ver proyecto
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <Image
              src={selected}
              alt="Preview"
              width={800}
              height={800}
              className="rounded-xl max-h-[80vh] object-contain"
            />
          </div>
        )}

      </section>
    </SectionWrapper>
  );
}