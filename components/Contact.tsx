"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  // 🔥 Auto ocultar mensaje después de 3 segundos
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Mensaje enviado correctamente 🚀");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("Error al enviar el mensaje");
      }
    } catch (error) {
      setSuccess("Error de conexión");
    }

    setLoading(false);
  };

  return (
    <section id="contacto" className="bg-gray-950 text-white py-24 px-8">
      <h2 className="text-4xl font-bold text-center text-pink-500 mb-16 drop-shadow-[0_0_15px_#ff00ff]">
        Dejanos tu Consulta
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Nombre"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
          className="p-4 bg-black border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
          className="p-4 bg-black border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <textarea
          placeholder="Contanos tu evento"
          rows={4}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          required
          className="p-4 bg-black border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="py-4 border border-pink-500 rounded-full text-pink-500 hover:bg-pink-500 hover:text-black transition shadow-[0_0_15px_#ff00ff] disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar consulta"}
        </button>

        <AnimatePresence>
          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center text-sm text-cyan-400"
            >
              {success}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </section>
  );
}