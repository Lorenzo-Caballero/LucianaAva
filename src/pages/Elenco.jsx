// src/components/ElencoTeatro.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";

import Lucia from "../assets/Lucia Cases - Diseño gráfico e ilustración.jpg";
import Marote from "../assets/Norman Pereyra Wagner.jpg";
import Lova from "../assets/Lova Paula Lostra.jpg";
import LaBicha from "../assets/La Bicha.jpg";
import Julen from "../assets/foto julen.jpg";
import Caro from "../assets/Carolina Dumrauf.jpg";
import CandelaC from "../assets/Candela Chirino - Diseño de vestuario.jpg";
import Fiorella from "../assets/Fiorella Brignani 2.jpg";
import Gabriela from "../assets/Gabriela Dumrauf.jpg";
import Randall from "../assets/randall.jpg";
import Mora from "../assets/mora.jpg";

export default function ElencoTeatro() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const elenco = [
    { key: "norman", nombre: "Norman Pereyra Wagner", foto: Marote },
    { key: "carolina", nombre: "Carolina Dumrauf", foto: Caro },
    { key: "mariana", nombre: "Mariana Mora", foto: Mora },
    { key: "lova", nombre: "Lova Paula Lostra", foto: Lova },
    { key: "randall", nombre: "Randall Lewer", foto: Randall },
    { key: "candela", nombre: "Candela Chirino", foto: CandelaC },
    { key: "fiorella", nombre: "Fiorela Brignani", foto: Fiorella },
    { key: "lucia", nombre: "Lucía Cases", foto: Lucia },
    { key: "labicha", nombre: "La Bicha", foto: LaBicha },
    { key: "gabriela", nombre: "Gabriela Dumrauf", foto: Gabriela },
    { key: "julen", nombre: "Julen Tavo Andiarena Lattes", foto: Julen }
  ];

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selected]);

  const handleImageLoad = (name) => {
    setLoadedImages((prev) => ({ ...prev, [name]: true }));
  };

  // Animaciones
  const cardContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section
      id="equipo"
      className="relative flex flex-col items-center justify-start py-24 pb-16 px-4 sm:px-6 overflow-hidden scroll-mt-24 font-milonga"
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Nubes fondo */}
      <motion.img
        src={nube1}
        className="absolute top-10 left-0 w-48 sm:w-64 opacity-70 z-0"
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src={nube2}
        className="absolute bottom-10 right-0 w-56 sm:w-80 opacity-60 z-0"
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Título */}
      <span className="relative inline-block text-4xl md:text-5xl font-extrabold text-[#3A2C4B] font-serif tracking-wide mb-10 mt-4">
        {t("team.title")}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] origin-left rounded-full"
        />
      </span>

      {/* Grid */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-2"
        variants={cardContainer}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {elenco.map((artista) => (
            <motion.div
              key={artista.key}
              variants={cardItem}
              onClick={() => setSelected(artista)}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-4 sm:p-5 bg-white/70 rounded-2xl shadow-xl backdrop-blur-md border border-[#F6D97E]/70 cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-4 border-[#F6D97E] shadow-lg relative">
                {!loadedImages[artista.nombre] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-full" />
                )}

                <motion.img
                  src={artista.foto}
                  alt={artista.nombre}
                  onLoad={() => handleImageLoad(artista.nombre)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: loadedImages[artista.nombre] ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>

              <h3 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-[#3A1F5D] leading-tight">
                {artista.nombre}
              </h3>

              <p className="text-xs sm:text-sm text-[#6E3FA7] mt-1 leading-snug">
                {t(`team.roles.${artista.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ✨ MODAL EXACTO QUE ME PEDISTE, ADAPTADO A TU SISTEMA DE TRADUCCIONES */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[200] p-4 sm:p-6 mt-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-gradient-to-r from-[#EBA9D1]/95 via-[#CBA8D6]/95 to-[#F6D97E]/95 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center shadow-2xl overflow-hidden max-h-[80vh] flex flex-col font-milonga"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-[#39234B] text-2xl font-bold hover:scale-110 transition-transform z-10"
              >
                ×
              </button>

              {/* Nubes decorativas */}
              <motion.img
                src={nube1}
                className="absolute top-6 left-6 w-24 opacity-30"
                animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
                transition={{ duration: 18, repeat: Infinity }}
              />
              <motion.img
                src={nube2}
                className="absolute bottom-6 right-6 w-28 opacity-25"
                animate={{ x: [0, -10, 0], y: [0, -5, 0] }}
                transition={{ duration: 22, repeat: Infinity }}
              />

              <div className="flex flex-col items-center z-10 relative overflow-y-auto pr-2 custom-scroll">
                <img
                  src={selected.foto}
                  alt={selected.nombre}
                  className="h-28 w-28 rounded-full border-4 border-white shadow-lg object-cover mb-4"
                />

                <h3 className="text-2xl font-bold text-[#3A1F5D]">
                  {selected.nombre}
                </h3>

                <p className="text-sm text-[#6E3FA7] font-medium mt-1">
                  {t(`team.roles.${selected.key}`)}
                </p>

                <p className="text-[#39234B] text-sm sm:text-base mt-4 leading-relaxed text-justify">
                  {t(`team.bio.${selected.nombre}.text`)}
                </p>

                {t(`team.bio.${selected.nombre}.mail`, "") && (
                  <p className="mt-3 text-[#39234B] text-sm">
                    📧 {t(`team.bio.${selected.nombre}.mail`)}
                  </p>
                )}

                {t(`team.bio.${selected.nombre}.insta`, "") && (
                  <p className="text-[#39234B] text-sm">
                    📸 {t(`team.bio.${selected.nombre}.insta`)}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
