// src/components/ElencoTeatro.jsx
import React, { useState, useEffect, useState as useStateReact } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";

// 🖼️ Fotos locales
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

// 🧠 Información extendida
const descripciones = {
  "Lucía Cases": {
    texto: `Diseñadora gráfica, ilustradora y tatuadora. Su trabajo se mueve entre lo digital y lo manual, explorando diferentes lenguajes visuales para dar forma a ideas, emociones y conceptos. Le interesa la comunicación visual como una herramienta expresiva y cercana, donde cada proyecto mantenga coherencia, identidad y una huella personal. Su proceso parte de lo intuitivo y se apoya en la técnica, buscando equilibrio entre lo estético y lo emocional. Entiende la creación visual como una manera de conectar con quien mira, con quien usa y con quien siente.`,
    mail: "dgluciacases@gmail.com",
    insta: "@luciacases",
  },
  "Candela Chirino": {
    texto: `Docente de distintas universidades y Escuelas de Arte de la ciudad de Mar del Plata. Diseñadora Industrial, Directora de Arte y Vestuarista para medios audiovisuales y teatro. Trabajó en producciones argentinas asociadas con Estados Unidos, Brasil, Honduras, España, Arabia Saudita, Francia y Suecia. Varios de sus trabajos han recibido premios y sido proyectados en reconocidos festivales internacionales de cine. Colabora con compañías de teatro independiente y música experimental de Mar del Plata.`,
    mail: "dicandelachirino@gmail.com",
    insta: "@chirinocandela",
  },
  "Fiorela Brignani": {
    texto: `Desde siempre tuvo una profunda sensibilidad artística y una conexión natural con el arte como forma de expresión. Su recorrido abarca la música, la danza, las artes plásticas y la cerámica. Crear y materializar objetos es una de sus facetas más genuinas, donde combina intuición, juego y sensibilidad estética. Su universo creativo se nutre del movimiento, los materiales y las emociones que los atraviesan.`,
  },
  "Lova Paula Lostra": {
    texto: `Coreógrafa, performer e investigadora somática, especializada en Improvisación y Danza Contemporánea. Es Maestra Nacional de Danza y Licenciada en Composición Coreográfica por la Universidad Nacional de Artes. Formada además en el School for Body-Mind Centering® (BMC®). Es cofundadora del Festival de Cuerpx, Arte y Género y directora de la compañía SOMA transfeminista. Su trabajo fusiona presencia somática, cuerpo-género e improvisación, con un fuerte compromiso político y poético.`,
    mail: "danzatransfeminista@gmail.com",
    insta: "@paulalostra",
  },
  "Randall Lewer": {
    texto: `Músico argentino, guitarrista y compositor, con trayectoria en grabación y producción musical. Se formó en Fattoria de Sonido (Mar del Plata) como técnico de sonido y productor musical. Cursó el profesorado de música en el Conservatorio Luis Gianneo y también es autodidacta. Trabajó con bandas argentinas como Toro, Los Chefferson y Tina La Vedette, entre otras. Además, desarrolló proyectos de teatro y performance, reflejados en su obra local MercurioHg. Actualmente continúa su formación en Suecia y se desempeña como técnico en Victoria Teatern (Malmö).`,
    mail: "randallewer@gmail.com",
    insta: "@randalllewer",
  },
  "Norman Pereyra Wagner": {
    texto: `Comenzó su recorrido artístico en 2005, formándose en la escuela La Luna Circo, donde incursionó en malabares, acrobacias dúo, acrobacias aéreas y clown. Desde 2011 realiza su espectáculo unipersonal Un mundo en la maleta, presentado en diferentes espacios de Mar del Plata. Entre 2013 y 2019 integró el proyecto Circo de la Audacia y en 2023 fue convocado a trabajar en Cirque Du Liban (Dubái, Emiratos Árabes Unidos).`,
    mail: "marotepayaso@gmail.com",
    insta: "@payaso_marote",
  },
  "Gabriela Dumrauf": {
    texto: `En la adolescencia tuvo su primer encuentro con el arte a través del bajo, tomando clases y participando en una banda. Más adelante estudió fotografía y se recibió en la Escuela de Artes Visuales Martín A. Malharro. Con el tiempo amplió su recorrido hacia las artes escénicas, participando en diferentes proyectos de teatro y circo como asistente de producción. Su mirada combina la sensibilidad visual con el trabajo en equipo y la organización de procesos creativos.`,
    mail: "gabriela.dumrauf@gmail.com",
  },
  "Carolina Dumrauf": {
    texto: `Productora y gestora artística. Desde fines de 2003 comenzó a incursionar en el arte en un taller de teatro y ampliando su recorrido hacia el cine, la música, la danza, el circo y la narración. Estudió cine y realizó diferentes formaciones vinculadas a la dirección, producción y gestión integral de proyectos artísticos. A lo largo de los años trabajó en festivales nacionales e internacionales, en obras de teatro, proyectos de circo y como manager de bandas. Ha desarrollado de manera integral numerosos proyectos, combinando la sensibilidad creativa con la organización y la producción.`,
    mail: "carolina.t.dumrauf@gmail.com",
  },
  "Julen Tavo Andiarena Lattes": {
    texto: `Durante su infancia incursionó en la actuación y, más tarde, descubrió su pasión por el detrás de escena. En 2023 se formó en operación de sistemas de sonido e iluminación para espectáculos en vivo. Desde 2014 se desempeña como asistente de producción en obras de teatro, exposiciones de arte y producciones audiovisuales en Mar del Plata.`,
    insta: "@julentavo",
  },
  "La Bicha": {
    texto: `Grupo creativo y artesano que brinda soluciones a través del arte y algo de magia. Aquella idea que parece una ilusión, ellos la hacen realidad.`,
    insta: "@labicha.mdp",
  },
  "Mariana Mora": {
    texto: `Actriz, clown y profesora de teatro. Desde hace más de 25 años trabaja en la escena independiente como actriz y directora, en proyectos públicos y privados. Se formó en la Escuela de Experimentación Teatral La Brecha y en la Escuela Municipal de Arte Dramático Angelina Pagano. Es también operadora en Psicología Social y Arte Terapia, integrando el arte como herramienta de salud y encuentro comunitario. Coordina talleres y participa en producciones teatrales, circenses y performáticas en Mar del Plata y otras ciudades.`,
    insta: "@marianamoramor",
  },
};

// 🎭 Elenco
const elenco = [
  { nombre: "Norman Pereyra Wagner", rol: "Intérprete (Marote)", foto: Marote },
  { nombre: "Carolina Dumrauf", rol: "Autora; producción y dirección general", foto: Caro },
  { nombre: "Mariana Mora", rol: "Dirección", foto: Mora },
  { nombre: "Lova Paula Lostra", rol: "Creación y dirección coreográfica", foto: Lova },
  { nombre: "Randall Lewer", rol: "Música original", foto: Randall },
  { nombre: "Candela Chirino", rol: "Diseño de Vestuario", foto: CandelaC },
  { nombre: "Fiorela Brignani", rol: "Diseño y realización de objetos escénicos", foto: Fiorella },
  { nombre: "Lucía Cases", rol: "Diseño Gráfico e Ilustración", foto: Lucia },
  { nombre: "La Bicha", rol: "Diseño y ejecución de maquillaje", foto: LaBicha },
  { nombre: "Gabriela Dumrauf", rol: "Productora asociada y asistente de producción en gira", foto: Gabriela },
  { nombre: "Julen Tavo Andiarena Lattes", rol: "Asistente de producción", foto: Julen },
];

// Variants para animaciones
const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ElencoTeatro() {
  const [selected, setSelected] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  // Bloquear scroll al abrir modal
  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selected]);

  const handleImageLoad = (name) => {
    setLoadedImages((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <section
      id="equipo"
      className="relative flex flex-col items-center justify-start pt-10 pb-16 px-4 sm:px-6 overflow-hidden scroll-mt-24 font-milonga"
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Nubes */}
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

      {/* Título — queda con serif, no milonga */}
      <span className="relative inline-block text-4xl md:text-5xl font-extrabold text-[#3A2C4B] font-serif tracking-wide mb-10 mt-4">
        Equipo Creativo
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] origin-left rounded-full"
        />
      </span>

      {/* Grid con animación */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-2"
        variants={cardContainer}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {elenco.map((artista, idx) => (
            <motion.div
              key={idx}
              variants={cardItem}
              onClick={() => setSelected(artista)}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-4 sm:p-5 bg-white/70 rounded-2xl shadow-xl backdrop-blur-md border border-[#F6D97E]/70 cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-4 border-[#F6D97E] shadow-lg relative">
                {/* Skeleton Loader */}
                {!loadedImages[artista.nombre] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-full" />
                )}

                {/* Imagen */}
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

              <p className="text-xs sm:text-sm text-[#6E3FA7] mt-1 leading-snug max-w-[150px] sm:max-w-[180px]">
                {artista.rol}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
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
                <h3 className="text-2xl font-bold text-[#3A1F5D]">{selected.nombre}</h3>
                <p className="text-sm text-[#6E3FA7] font-medium mt-1">{selected.rol}</p>
                <p className="text-[#39234B] text-sm sm:text-base mt-4 leading-relaxed text-justify">
                  {descripciones[selected.nombre]?.texto || "Próximamente más información."}
                </p>
                {descripciones[selected.nombre]?.mail && (
                  <p className="mt-3 text-[#39234B] text-sm">📧 {descripciones[selected.nombre].mail}</p>
                )}
                {descripciones[selected.nombre]?.insta && (
                  <p className="text-[#39234B] text-sm">📸 {descripciones[selected.nombre].insta}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
