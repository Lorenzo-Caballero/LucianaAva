import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";

export default function SinopsisTeatro() {
  const [showInfo, setShowInfo] = useState(false);

  // 📜 Textos
  const sinopsis = [
    "Un espectáculo unipersonal de humor absurdo, centrado en el personaje de Marote, que transita con ternura y comicidad el proceso de un duelo muy particular: la pérdida de ese objeto preciado que tanto cuidó.",
    "A través de una sucesión de escenas visuales, físicas y simbólicas, Marote atraviesa las distintas etapas del duelo —negación, ira, tristeza y aceptación—, cargando una bolsa repleta de recuerdos y objetos con los que juega, transforma y resignifica.",
    "La obra propone un lenguaje escénico sin palabras, sostenido en el cuerpo, los objetos, el ritmo y la imagen, donde lo absurdo y lo poético se entrelazan para hablar, sin decir, de lo que ya no está.",
  ];

  const infoSections = [
    {
      title: "Formato",
      content: `Espectáculo unipersonal
Sin texto hablado
Teatro físico / humor absurdo / poesía visual
Duración aproximada: 35 minutos
Público: todas las edades
Ideal y adaptable a espacios no convencionales, calle, festivales, carpas, escenarios o ruedos, con o sin infraestructura técnica.`,
    },
    {
      title: "Equipo creativo",
      content: `Intérprete: Norman Pereyra Wagner (Marote)
Idea original y dramaturgia; producción general y supervisión artística: Carolina Dumrauf
Dirección: Mariana Mora
Creación y dirección coreográfica: Lova Paula Lostra
Música original: Randall Lewer
Diseño de vestuario: Candela Chirino
Realización de vestuario: Pato García
Diseño y realización de objetos escénicos: Fiorella Brignani
Diseño y ejecución de maquillaje: La Bicha Soluciones Artísticas
Diseño gráfico e ilustración: Lucía Cases
Asistente de producción: Julen Tavo Andiarena Lattes
Productora asociada y asistente de producción en gira: Gabriela Dumrauf.`,
    },
    {
      title: "Estilo escénico y referencias",
      content: `Humor físico, absurdo, silencioso
Juego con objetos, uso simbólico de elementos cotidianos
Estética y referencias: Clown contemporáneo y circo-teatro.`,
    },
    {
      title: "Temas que atraviesa",
      content: `El paso del tiempo
El apego a la imagen propia
La memoria y los objetos como portales al pasado
La identidad y su transformación.`,
    },
    {
      title: "Objetivo del proyecto",
      content: `Crear un espectáculo escénico breve, con fuerte carga visual, musical y emocional, que conecte con un público amplio desde el humor, la ternura y la nostalgia.
La propuesta está basada en una dramaturgia sin texto, centrada en el cuerpo, la música y los objetos, con una estética poética, absurda y delicada.
El proyecto se desarrollará a lo largo de 2025 con miras a realizar funciones y participar en festivales durante:
Temporada de verano 2026 en Mar del Plata (Argentina)
Gira de verano europeo 2026 (junio – septiembre).`,
    },
  ];

  // 🔒 Bloqueo del scroll cuando el modal está abierto
  useEffect(() => {
    if (showInfo) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [showInfo]);

  return (
    <section
      id="sinopsis"
      className="relative flex w-full flex-col items-center justify-center px-6 py-32 overflow-hidden scroll-mt-24 font-milonga"
    >
      {/* 🎨 Fondo degradado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E]"
      />

      {/* ☁️ Nubes animadas */}
      <motion.img
        src={nube1}
        alt="Nube flotante"
        className="absolute top-10 left-0 w-64 md:w-80 opacity-70 z-0"
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={nube2}
        alt="Nube flotante"
        className="absolute bottom-20 right-0 w-72 md:w-96 opacity-60 z-0"
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={nube1}
        alt="Nube flotante"
        className="absolute top-1/2 left-1/3 w-56 md:w-72 opacity-40 z-0"
        animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 📜 Contenido principal */}
      <div className="relative z-10 w-full max-w-4xl rounded-3xl bg-white/30 p-12 backdrop-blur-xl border border-white/20 shadow-2xl font-milonga">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="mb-10 text-center"
        >
          {/* 👇 ESTE TÍTULO MANTIENE SU FUENTE ORIGINAL */}
          <span className="relative inline-block text-4xl md:text-5xl font-extrabold text-[#3A2C4B] font-serif tracking-wide">
            Algo se fue volando
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] origin-left rounded-full"
            />
          </span>
        </motion.h2>

        {/* 🪶 Párrafos */}
        {sinopsis.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            viewport={{ once: false }}
            className="mb-6 text-center text-lg md:text-xl text-[#3A2C4B] font-light leading-relaxed font-milonga"
          >
            {p}
          </motion.p>
        ))}

        {/* 🔘 Botón Más información */}
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowInfo(true)}
            className="px-8 py-3 bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] text-[#3A1F5D] font-semibold rounded-full shadow-lg backdrop-blur-sm border border-white/40 hover:shadow-xl transition-all font-milonga"
          >
            Más información
          </motion.button>
        </div>
      </div>

      {/* 💫 Modal */}
      <AnimatePresence>
        {showInfo && (
          <InfoModal
            infoSections={infoSections}
            nube1={nube1}
            nube2={nube2}
            onClose={() => setShowInfo(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// 🧩 Modal de información
function InfoModal({ infoSections, nube1, nube2, onClose }) {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const scrollGlow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[200] p-4 sm:p-6 font-milonga"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        ref={scrollRef}
        className="relative bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] rounded-3xl p-10 sm:p-12 max-w-3xl w-full text-left shadow-2xl overflow-y-auto max-h-[80vh] custom-scroll mt-16 font-milonga"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-[#3A2C4B] text-3xl font-bold hover:scale-110 transition-transform"
        >
          ×
        </button>

        {/* ☁️ Nubes */}
        <motion.img
          src={nube1}
          className="absolute top-6 left-6 w-24 opacity-25"
          animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.img
          src={nube2}
          className="absolute bottom-6 right-6 w-28 opacity-20"
          animate={{ x: [0, -10, 0], y: [0, -5, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
        />

        {/* 📖 Contenido */}
        <div className="relative z-10 text-[#3A1F5D] text-sm sm:text-base leading-relaxed space-y-8 font-milonga">
          {infoSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative inline-block mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#3A1F5D] font-milonga">
                  {section.title}
                </h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  viewport={{ once: false }}
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] origin-left rounded-full"
                />
              </div>
              <p className="whitespace-pre-line text-[#2C1E3A]/80 font-light font-milonga">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ✨ Línea reactiva al scroll */}
        <motion.div
          style={{ scaleX: scrollGlow, opacity: scrollGlow }}
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] origin-left rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
