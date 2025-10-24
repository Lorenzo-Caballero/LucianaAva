import { motion } from "framer-motion";
import Logo from "../assets/algosefuevolando.png";
import "./Footer.css"; // Para la animación del gradiente

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-animate py-6">
      <div className="mx-auto max-w-4xl px-6 flex flex-col items-center text-center gap-6">
        
        {/* Logo animado */}
        <motion.img
          src={Logo}
          alt="Logo - Algo se fue volando"
          className="h-16 w-16 rounded-full shadow-lg border-2 border-white/70 object-cover bg-white/60"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Línea decorativa */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80%", opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-[1px] bg-white/40"
        />

        {/* Texto poético / créditos */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-lg font-semibold text-white drop-shadow-sm"
        >
          © {new Date().getFullYear()} Algo se fue volando · Un viaje donde lo{" "}
          <span className="font-medium text-[#8A5CA4]">absurdo</span> y lo{" "}
          <span className="font-medium text-[#f33c91]">poético</span> se entrelazan.
        </motion.p>
      </div>
    </footer>
  );
}
