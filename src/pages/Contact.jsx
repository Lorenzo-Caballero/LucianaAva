// src/components/ContactoTeatro.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";

export default function ContactoTeatro() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío (API, email service, etc.)
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section
      id="contacto"
      className="relative flex w-full flex-col items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E]"
    >
      {/* Fondo artístico */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] -z-10"
      />

      {/* Nubes animadas */}
      <motion.img
        src={nube1}
        alt="Nube flotante"
        className="absolute top-10 left-0 w-64 md:w-80 opacity-70 z-0"
        initial={{ x: -100 }}
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={nube2}
        alt="Nube flotante"
        className="absolute bottom-20 right-0 w-72 md:w-96 opacity-60 z-0"
        initial={{ x: 100 }}
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={nube1}
        alt="Nube flotante"
        className="absolute top-1/2 left-1/3 w-56 md:w-72 opacity-40 z-0"
        initial={{ x: 0 }}
        animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-white/70 p-8 shadow-xl backdrop-blur">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-3xl font-bold text-neutral-800"
        >
          Contáctanos
        </motion.h2>

        {enviado ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600"
          >
            ✅ ¡Tu mensaje fue enviado con éxito!
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu email"
              required
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Tu mensaje"
              rows="5"
              required
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-amber-600"
            >
              Enviar mensaje
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
