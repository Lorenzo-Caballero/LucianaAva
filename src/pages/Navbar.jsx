import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo from "../assets/algosefuevolando.png";
import building from "../assets/casita.png";
import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  // 🇦🇷 SVG bandera Argentina
  const FlagAR = (
    <svg width="28" height="20" viewBox="0 0 28 20" className="rounded shadow">
      <rect width="28" height="20" fill="#74ACDF" />
      <rect y="6" width="28" height="8" fill="#FFFFFF" />
    </svg>
  );

  // 🇬🇧 SVG bandera UK minimalista
  const FlagUK = (
    <svg width="28" height="20" viewBox="0 0 28 20" className="rounded shadow">
      <rect width="28" height="20" fill="#00247D" />
      <path d="M0 0 L28 20 M28 0 L0 20" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M0 0 L28 20 M28 0 L0 20" stroke="#CF142B" strokeWidth="2" />
      <rect x="12" width="4" height="20" fill="#FFFFFF" />
      <rect width="28" y="8" height="4" fill="#FFFFFF" />
      <rect x="13" width="2" height="20" fill="#CF142B" />
      <rect width="28" y="9" height="2" fill="#CF142B" />
    </svg>
  );

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-[10050] 
        bg-gradient-to-r from-orange-200 via-pink-200 to-purple-300 
        shadow-md overflow-hidden
        font-milonga
      "
    >
      {/* ☁️ NUBES ANIMADAS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[10000]">
        <motion.img
          src={nube2}
          alt="nube izquierda"
          className="absolute top-3 left-10 w-32 md:w-44 opacity-70"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={nube1}
          alt="nube derecha"
          className="absolute top-4 right-16 w-36 md:w-48 opacity-70"
          animate={{ x: [0, -60, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={nube2}
          alt="nube extra"
          className="absolute bottom-1 left-1/2 w-40 md:w-56 opacity-60"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🌈 CONTENIDO nav */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8 z-[10010] font-milonga">

        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Link to="/inicio">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 hover:scale-105 md:w-16 md:h-16 rounded-full shadow-lg border border-white/70 object-cover cursor-pointer"
            />
          </Link>
        </div>

        {/* BOTÓN CASITA (MOBILE) */}
        <button
          className="md:hidden transition-transform duration-300 active:scale-95 relative z-[10020]"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <HiX size={32} className="text-[#C88F96]" />
          ) : (
            <img
              src={building}
              alt="Menú"
              className="w-14 h-14 md:w-10 md:h-10 hover:scale-110 transition-all duration-300 object-contain"
            />
          )}
        </button>

        {/* 🌐 MENÚ PRINCIPAL (DESKTOP) */}
        <div className="hidden md:flex md:space-x-8 items-center font-milonga">
          <Link
            to="/sinopsis"
            className="text-[#5A4A42] bg-[#F8EAD8] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#F4B6A6] hover:text-white hover:shadow-lg hover:scale-105"
          >
            {t("nav.work")}
          </Link>

          <Link
            to="/equipo"
            className="text-[#5A4A42] bg-[#F8EAD8] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#C88F96] hover:text:white hover:shadow-lg hover:scale-105"
          >
            {t("nav.team")}
          </Link>

          <Link
            to="/fotos"
            className="text-[#5A4A42] bg-[#F8EAD8] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#E8A2B0] hover:text:white hover:shadow-lg hover:scale-105"
          >
            {t("nav.photos")}
          </Link>

          <Link
            to="/contacto"
            className="text-[#5A4A42] bg-[#F8EAD8] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#C88F96] hover:text:white hover:shadow-lg hover:scale-105"
          >
            {t("nav.contact")}
          </Link>

          {/* 🌍 BOTÓN CAMBIO DE IDIOMA */}
          <button
            onClick={toggleLanguage}
            className="
              flex items-center gap-2 
              bg-[#FFF4E6] text-[#5A4A42] 
              px-3 py-2 rounded-xl 
              shadow-sm border border-white/60
              transition-all duration-300 
              hover:bg-[#EBC8B2] hover:text-white 
              hover:shadow-lg hover:scale-105
            "
          >
            {i18n.language === "es" ? FlagUK : FlagAR}
          </button>
        </div>
      </div>

      {/* 📱 MENÚ MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-[72px] left-0 w-full bg-gradient-to-b from-[#fce9d8] via-[#f6d6c1] to-[#f3bfb0] 
                       shadow-lg rounded-b-3xl py-4 z-[10060] font-milonga"
          >
            <div className="flex flex-col items-center space-y-4 px-6">

              <Link
                to="/inicio"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-[#5A4A42] bg-[#F8EAD8] py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#E6C4B3] hover:text-white hover:shadow-lg"
              >
                {t("nav.home")}
              </Link>

              <Link
                to="/sinopsis"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-[#5A4A42] bg-[#F8EAD8] py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#F4B6A6] hover:text-white hover:shadow-lg"
              >
                {t("nav.work")}
              </Link>

              <Link
                to="/equipo"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-[#5A4A42] bg-[#F8EAD8] py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#C88F96] hover:text-white hover:shadow-lg"
              >
                {t("nav.team")}
              </Link>

              <Link
                to="/fotos"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-[#5A4A42] bg-[#F8EAD8] py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#E8A2B0] hover:text-white hover:shadow-lg"
              >
                {t("nav.photos")}
              </Link>

              <Link
                to="/contacto"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-[#5A4A42] bg-[#F8EAD8] py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#C88F96] hover:text-white hover:shadow-lg"
              >
                {t("nav.contact")}
              </Link>

              {/* 🌍 CAMBIAR IDIOMA */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full bg-[#FFF4E6] text-[#5A4A42] py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#EBC8B2] hover:text-white hover:shadow-lg"
              >
                {i18n.language === "es" ? FlagUK : FlagAR}
                <span className="ml-2">{i18n.language === "es" ? "EN" : "ES"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainNavigation;
