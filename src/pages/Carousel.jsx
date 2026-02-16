import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useTranslation } from "react-i18next";

import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";

import digital from "../assets/digital.jpg";
import LN from "../assets/LN.jpg";
import FM from "../assets/FM.jpg";

const imageMap = {
  digital,
  LN,
  FM,
};

export default function InfiniteNewsCarousel() {
  const { t } = useTranslation();
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(null);
  const SPEED = 50;

  const [newsItems, setNewsItems] = useState([]);

  const handleClick = (url) => window.open(url, "_blank");

  // Cargar noticias desde traducciones
  useEffect(() => {
    const loadNews = async () => {
      const translatedNews = t("news", { returnObjects: true });

      const previews = await Promise.all(
        translatedNews.map(async (item) => {
          try {
            // Caso imagen local
            if (item.image !== "microlink") {
              return {
                title: item.title,
                image: imageMap[item.image],
                url: item.url,
              };
            }

            // Caso Microlink
            const res = await fetch(
              `https://api.microlink.io/?url=${encodeURIComponent(item.url)}`
            );
            const data = await res.json();

            return {
              title: `${item.titlePrefix}${data?.data?.title || ""}`,
              image:
                data?.data?.image?.url ||
                "https://via.placeholder.com/400x200.png?text=No+Image",
              url: item.url,
            };
          } catch (error) {
            console.error("Error loading preview:", error);
            return {
              title: item.title || "Noticia",
              image:
                "https://via.placeholder.com/400x200.png?text=No+Preview",
              url: item.url,
            };
          }
        })
      );

      setNewsItems(previews);
    };

    loadNews();
  }, [t]);

  // Animación infinita
  const animate = (time) => {
    if (!lastTimeRef.current) lastTimeRef.current = time;

    const delta = (time - lastTimeRef.current) / 1000;
    lastTimeRef.current = time;

    const container = containerRef.current;
    if (container) {
      const totalWidth = container.scrollWidth / 2;
      let currentX = x.get();

      currentX -= SPEED * delta;
      if (currentX <= -totalWidth) currentX = 0;

      x.set(currentX);
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] select-none font-milonga">
      {/* Fondo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] -z-10"
      />

      {/* Nubes animadas */}
      <motion.img
        src={nube1}
        alt="Nube"
        className="absolute top-10 left-0 w-64 md:w-80 opacity-70 z-0"
        initial={{ x: -100 }}
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={nube2}
        alt="Nube"
        className="absolute bottom-20 right-0 w-72 md:w-96 opacity-60 z-0"
        initial={{ x: 100 }}
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Título traducido */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-12 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#39234B] text-center relative z-10 drop-shadow-lg font-serif"
      >
        {t("sectionTitle")}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E] origin-left rounded-full"
        />
      </motion.h2>

      {/* Carrusel infinito */}
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-6 cursor-grab active:cursor-grabbing relative z-10"
        drag="x"
        dragElastic={0.15}
        dragConstraints={{ left: -200, right: 200 }}
      >
        {[...newsItems, ...newsItems].map((item, index) => (
          <motion.div
            key={index}
            onClick={() => handleClick(item.url)}
            className="min-w-[300px] md:min-w-[400px] rounded-2xl overflow-hidden bg-white/70 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur border border-amber-200/50"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
              draggable={false}
            />
            <div className="p-4 text-[#39234B]">
              <h3 className="text-lg font-semibold leading-snug">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
