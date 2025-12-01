import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleWhatsappRedirect = () => {
    const phone = "31613950280"; // Cambia por tu número real sin + ni espacios
    const message = "Hola! Le contacto desde su web algosefuevolando.com.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-24 z-10 p-2 cursor-pointer"
      onClick={handleWhatsappRedirect}
    >
      <div className="flex gap-4 mt-2">
        <a
          href="#"
          onClick={handleWhatsappRedirect}
          className="text-white hover:text-green-400 transition-colors duration-300"
        >
          {/* Ícono de WhatsApp estilo circular */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-12 w-12"
          >
            <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.589 4.445 1.708 6.37L3.2 28.8l6.64-1.706c1.857.99 3.948 1.507 6.161 1.507 7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-1.875 0-3.683-.497-5.28-1.441l-.378-.224-3.94 1.012 1.052-3.84-.246-.395a10.54 10.54 0 01-1.61-5.449c0-5.84 4.76-10.6 10.6-10.6s10.6 4.76 10.6 10.6-4.76 10.6-10.6 10.6zm5.447-7.987c-.297-.148-1.76-.867-2.033-.966-.273-.099-.472-.148-.672.148-.198.297-.771.966-.945 1.164-.173.198-.347.223-.643.074-.297-.148-1.254-.462-2.39-1.475-.883-.787-1.48-1.76-1.653-2.057-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.148-.173.198-.298.298-.496.099-.198.05-.372-.025-.521-.074-.148-.672-1.613-.92-2.207-.242-.579-.487-.5-.672-.51a2.69 2.69 0 00-.571-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.48 0 1.465 1.064 2.875 1.213 3.074.148.198 2.095 3.2 5.074 4.488.708.305 1.26.488 1.691.625.711.226 1.358.194 1.87.118.571-.085 1.76-.719 2.01-1.413.248-.694.248-1.29.173-1.414-.074-.124-.273-.198-.57-.347z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;
