// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

/* 🖥️ Desktop */
import heroDesktopES from "../assets/dossier1.jpg";
import heroDesktopEN from "../assets/dossier.jpg";

/* 📱 Mobile */
import heroMobileES from "../assets/mobile-es.png";
import heroMobileEN from "../assets/mobile-eng.jpg";

export default function Hero() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith("es");

  return (
    <>
      {/* 🧱 Spacer EXACTO del navbar */}
      <div className="h-[72px]" />

      <section
        id="inicio"
        className="
          relative
          w-full
          overflow-hidden
          -mt-px
        "
      >
        {/* 📱 MOBILE M / L → full width, sin franjas */}
        <motion.img
          src={isSpanish ? heroMobileES : heroMobileEN}
          alt="Hero mobile"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="
            block md:hidden
            w-full
            min-h-[70vh]
            object-cover
            object-center
          "
        />

        {/* 🖥️ DESKTOP → hero pantalla completa */}
        <motion.img
          src={isSpanish ? heroDesktopES : heroDesktopEN}
          alt="Hero desktop"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="
            hidden md:block
            w-full
            md:min-h-[calc(100vh-72px)]
            md:h-auto
                        object-cover
          "
        />
      </section>
    </>
  );
}
