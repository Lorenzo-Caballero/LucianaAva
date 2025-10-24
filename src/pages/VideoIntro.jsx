import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoTeatro() {
  const [loaded, setLoaded] = useState(false);
  const teatroVideo="video";

  return (
    <section
      id="inicio"
      className="relative flex w-full flex-col items-center justify-center
                 h-screen m-0 p-0 overflow-hidden"
    >
      {/* Fondo artístico con paleta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-[#EBA9D1]/50 via-[#CBA8D6]/50 to-[#F6D97E]/20"
      />

      {/* Contenedor de video */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full h-full overflow-hidden shadow-xl rounded-none"
      >
        {/* Loader */}
        <AnimatePresence>
          {!loaded && (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#EBA9D1]/30 to-[#F6D97E]/30"
            >
              <motion.div
                className="h-16 w-16 rounded-full border-4 border-[#CBA8D6] border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video local sin controles */}
        <motion.video
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.98 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onCanPlayThrough={() => setLoaded(true)}
          className="w-full h-full object-cover block"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={teatroVideo} type="video/mp4" />
          Tu navegador no soporta el video.
        </motion.video>
      </motion.div>
    </section>
  );
}
