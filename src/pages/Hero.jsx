// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import portada from "../assets/algosefuehero.jpg";
import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-12 md:py-20 pt-10 md:pt-24 min-h-screen overflow-hidden"
    >
      {/* 🎨 Fondo degradado animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] z-0"
      />

      {/* ☁️ Nubes animadas */}
      <motion.img
        src={nube1}
        alt="Nube flotante"
        className="absolute top-10 left-0 w-56 md:w-80 opacity-60 z-0"
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={nube2}
        alt="Nube flotante"
        className="absolute bottom-16 right-0 w-64 md:w-96 opacity-50 z-0"
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={nube1}
        alt="Nube flotante"
        className="absolute top-1/2 left-1/3 w-48 md:w-72 opacity-30 z-0"
        animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🖼️ Imagen principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="order-1 md:order-2 pt-12 md:pt-2 md:mt-0 md:w-1/2 flex justify-center z-10"
      >
        <img
          src={portada}
          alt="Algo se fue volando"
          className="rounded-[2rem] shadow-2xl w-[80%] md:w-[70%]"
        />
      </motion.div>

      {/* 📝 Bloque de texto */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left z-10 mt-8 md:mt-0"
      >
        <h1
          className="text-5xl md:text-6xl font-bold text-[#F6D97E] mb-4 leading-tight tracking-wide drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Algo se fue <br />
          Volando
        </h1>

        <h2
          className="text-2xl md:text-3xl font-light text-white mb-6 italic drop-shadow-[2px_2px_3px_rgba(0,0,0,0.4)]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Un ritual payaso para lo que ya no está
        </h2>

        {/* 🎟️ Botón Próxima función */}
        <motion.a
          href="https://eltelonteatro.com/event/34362?fbclid=PAb21jcANg0WJleHRuA2FlbQIxMQABp1lTjuK9SzLbzaZ6IBSl0j4cS4X1FrSn1QoV6qBkOTwJmxtsap_umT4vzuNy_aem_i13H7lA3fwdu4ksSnrZX9Q"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#E3A82B] hover:bg-[#F0B73A] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Próxima función
        </motion.a>
      </motion.div>
    </section>
  );
}
