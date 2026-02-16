// src/components/OnlyCollage.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";

// 📸 Imágenes
import peaple from "../assets/IMG_8666.jpg";
import peaple2 from "../assets/IMG_8800.jpg";
import peaple3 from "../assets/IMG_8682.jpg";
import peaple4 from "../assets/IMG_8683.jpg";
import peaple7 from "../assets/IMG_8710.jpg";
import peaple8 from "../assets/IMG_8706.jpg";
import peaple9 from "../assets/IMG_8715.jpg";
import peaple10 from "../assets/IMG_8720.jpg";
import peaple11 from "../assets/IMG_8765.jpg";

const OnlyCollage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 🟣 BLOQUEAR SCROLL CUANDO EL MODAL ESTÁ ABIERTO
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";   // bloquear scroll
    } else {
      document.body.style.overflow = "auto";     // habilitar scroll
    }

    // limpieza por seguridad
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  // 🎞️ Variantes para animaciones escalonadas
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="fotos"
      className="relative flex flex-col items-center justify-center py-16 px-4 md:px-10 overflow-hidden min-h-screen"
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

      {/* 🖼️ COLLAGE */}
      <motion.div
        className="relative z-10 w-[95vw] max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-wrap sm:flex-nowrap justify-between pt-8 gap-2 overflow-hidden">

          {/* 📸 Izquierda */}
          <motion.div
            className="grid grid-cols-3 gap-x-1 gap-y-0 w-full sm:w-2/3"
            variants={containerVariants}
          >
            {[peaple, peaple3, peaple2, peaple4, peaple7, peaple8].map(
              (src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Imagen ${i + 1}`}
                  className="w-full h-96 sm:h-112 lg:h-full border-4 border-white rounded-xl object-cover shadow-md cursor-pointer"
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(src)}
                />
              )
            )}
          </motion.div>

          {/* 📸 Derecha */}
          <motion.div
            className="flex flex-col gap-2 w-full sm:w-1/3 hidden lg:flex"
            variants={containerVariants}
          >
            {[peaple9, peaple10, peaple11].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Imagen ${i + 7}`}
                className="w-full h-80 sm:h-80 lg:h-96 border-4 border-white rounded-xl object-cover shadow-md cursor-pointer"
                variants={imageVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* 🔍 MODAL ZOOM */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[20000] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OnlyCollage;