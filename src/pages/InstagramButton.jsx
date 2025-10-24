import React from "react";
import { motion } from "framer-motion";

const InstagramButton = () => {
  const handleInstagramRedirect = () => {
    const instagramUrl = "https://www.instagram.com/algosefuevolando/"; // Cambia esto por tu perfil real
    window.open(instagramUrl, "_blank");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // Efecto hover
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-6 z-10 p-2 cursor-pointer"
      onClick={handleInstagramRedirect}
    >
     {/* Redes o iconos adicionales */}
     <div className="flex gap-4 mt-2 ">
          <a
            href="https://www.instagram.com/algosefuevolando"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-12 w-12"
              >
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.965.24 2.426.402a4.92 4.92 0 011.78 1.03 4.92 4.92 0 011.03 1.78c.162.46.347 1.255.402 2.425.058 1.265.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.965-.402 2.426a4.92 4.92 0 01-1.03 1.78 4.92 4.92 0 01-1.78 1.03c-.46.162-1.255.347-2.425.402-1.265.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.965-.24-2.426-.402a4.92 4.92 0 01-1.78-1.03 4.92 4.92 0 01-1.03-1.78c-.162-.46-.347-1.255-.402-2.425C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.965.402-2.426a4.92 4.92 0 011.03-1.78 4.92 4.92 0 011.78-1.03c.46-.162 1.255-.347 2.425-.402C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.845.3 4.042.542a7.13 7.13 0 00-2.57 1.06A7.13 7.13 0 00.42 4.17c-.242.803-.414 1.728-.472 3.01C-.012 8.332 0 8.736 0 12s.012 3.668.07 4.948c.058 1.282.23 2.207.472 3.01a7.13 7.13 0 001.06 2.57 7.13 7.13 0 002.57 1.06c.803.242 1.728.414 3.01.472C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.282-.058 2.207-.23 3.01-.472a7.13 7.13 0 002.57-1.06 7.13 7.13 0 001.06-2.57c.242-.803.414-1.728.472-3.01C23.988 15.668 24 15.264 24 12s-.012-3.668-.07-4.948c-.058-1.282-.23-2.207-.472-3.01a7.13 7.13 0 00-1.06-2.57 7.13 7.13 0 00-2.57-1.06c-.803-.242-1.728-.414-3.01-.472C15.668.012 15.264 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
          {/* Puedes agregar más iconos aquí */}
        </div>
    </motion.div>
  );
};

export default InstagramButton;
