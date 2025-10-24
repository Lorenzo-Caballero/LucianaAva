import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/algosefuevolando.png";
import building from "../assets/casita.png";
import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[10050] bg-gradient-to-r from-orange-200 via-pink-200 to-purple-300 shadow-md overflow-hidden">
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

      {/* 🌈 CONTENIDO NAVBAR */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8 z-[10010]">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg border border-white/70 object-cover"
          />
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
        <div className="hidden md:flex md:space-x-8 items-center">
          {/* 🔸 Botón La Obra */}
          <button
            onClick={() => scrollToSection("sinopsis")}
            className="text-[#5A4A42] bg-[#F8EAD8] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#F4B6A6] hover:text-white hover:shadow-lg hover:scale-105"
          >
            La Obra
          </button>

          {/* 🔸 Botón Equipo Creativo */}
          <button
            onClick={() => scrollToSection("equipo")}
            className="text-[#5A4A42] bg-[#F8EAD8] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#C88F96] hover:text-white hover:shadow-lg hover:scale-105"
          >
            Equipo Creativo
          </button>

          {/* 🔸 Botón Contacto */}
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-[#5A4A42] bg-[#F8EAD8] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#C88F96] hover:text-white hover:shadow-lg hover:scale-105"
          >
            Contacto
          </button>

          {/* 🏠 CASITA COMO BOTÓN DE INICIO CON TOOLTIP A LA DERECHA */}
          <div className="relative group">
            <img
              src={building}
              alt="Inicio"
              onClick={() => scrollToSection("inicio")}
              className="w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition-all duration-300 object-contain cursor-pointer"
            />
            {/* Tooltip a la derecha */}
            <span className="absolute left-[105%] top-1/2 -translate-y-1/2 text-sm bg-[#5A4A42] text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
              Inicio
            </span>
          </div>
        </div>
      </div>

      {/* 📱 MENÚ MOBILE (Dropdown) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-[72px] left-0 w-full bg-gradient-to-b from-[#fce9d8] via-[#f6d6c1] to-[#f3bfb0] shadow-lg rounded-b-3xl py-4 z-[10060]"
          >
            <div className="flex flex-col items-center space-y-4 px-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="w-full text-center text-[#5A4A42] bg-[#F8EAD8] py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#E6C4B3] hover:text-white hover:shadow-lg"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("sinopsis")}
                className="w-full text-center text-[#5A4A42] bg-[#F8EAD8] py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#F4B6A6] hover:text-white hover:shadow-lg"
              >
                La Obra
              </button>
              <button
                onClick={() => scrollToSection("equipo")}
                className="w-full text-center text-[#5A4A42] bg-[#F8EAD8] py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#C88F96] hover:text-white hover:shadow-lg"
              >
                Equipo Creativo
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="w-full text-center text-[#5A4A42] bg-[#F8EAD8] py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#C88F96] hover:text-white hover:shadow-lg"
              >
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainNavigation;
