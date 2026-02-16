import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import SinopsisTeatro from "./pages/Sinopsis";
import Elenco from "./pages/Elenco";
import OnlyCollage from "./pages/OnlyCollage";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Siempre visible */}
      <Navbar />

      {/* Solo las páginas animan */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/sinopsis" element={<SinopsisTeatro />} />
          <Route path="/fotos" element={<OnlyCollage />} />
          <Route path="/equipo" element={<Elenco />} />
          <Route path="/contacto" element={<Contact />} />

        </Routes>
      </AnimatePresence>

      {/* Siempre visible */}
      <Footer />
    </>
  );
};

export default App;
