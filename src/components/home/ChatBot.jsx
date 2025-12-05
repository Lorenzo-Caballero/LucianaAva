import React, { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import axios from "axios";
import assistent from "../../assets/assistent.png";

const ChatBot = () => {
  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [enviandoMensaje, setEnviandoMensaje] = useState(false);
  const [mostrarTooltip, setMostrarTooltip] = useState(false);
  const mensajesRef = useRef(null);

  useEffect(() => {
    if (mensajesRef.current) {
      mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight;
    }
  }, [mensajes]);

  const handleEnviarMensaje = async () => {
    if (!nuevoMensaje.trim() || enviandoMensaje) return;

    const texto = nuevoMensaje.trim();
    setNuevoMensaje("");
    setMensajes((prev) => [...prev, { texto, origen: "usuario" }]);
    setEnviandoMensaje(true);

    setMensajes((prev) => [
      ...prev,
      { texto: "Escribiendo...", origen: "asistente", temporal: true },
    ]);

    try {
      const respuesta = await obtenerRespuestaDesdeServidor(texto);

      setMensajes((prev) =>
        prev.map((m) =>
          m.temporal ? { texto: respuesta, origen: "asistente" } : m
        )
      );
    } catch (error) {
      const textoError =
        error?.message ||
        "Lo siento, hubo un problema al conectar con el asistente.";

      setMensajes((prev) =>
        prev.map((m) =>
          m.temporal
            ? { texto: `Error: ${textoError}`, origen: "asistente" }
            : m
        )
      );
    } finally {
      setEnviandoMensaje(false);
    }
  };

  const obtenerRespuestaDesdeServidor = async (mensajeUsuario) => {
    const endpoint = "https://gestoradmin.store/index.php?recurso=apiai";

    try {
      const resp = await axios.post(
        endpoint,
        { mensaje: mensajeUsuario },
        { timeout: 20000 }
      );

      if (resp.data?.error) {
        throw new Error(resp.data.error);
      }

      if (resp.data?.respuesta) {
        return resp.data.respuesta;
      }

      throw new Error("Respuesta inválida o vacía del servidor");
    } catch (err) {
      if (err.response) {
        throw new Error(
          err.response.data?.error ||
            `Error HTTP ${err.response.status} desde el servidor`
        );
      } else if (err.request) {
        throw new Error("No se recibió respuesta del servidor");
      } else {
        throw new Error(err.message);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleEnviarMensaje();
  };

  const handleChatToggle = () => setChatAbierto(!chatAbierto);
  const handleCloseChat = () => setChatAbierto(false);
  const handleMouseEnter = () => setMostrarTooltip(true);
  const handleMouseLeave = () => setMostrarTooltip(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-milonga">
      {/* BOTÓN FLOTANTE */}
      <button
        onClick={handleChatToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none ${
          chatAbierto ? "hidden" : "bg-amber-100"
        }`}
      >
        <img src={assistent} alt="Asistente" className="w-12 h-12" />
      </button>

      {/* TOOLTIP */}
      {mostrarTooltip && !chatAbierto && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-16 right-4 px-3 py-1 bg-amber-200 text-gray-800 text-sm rounded-lg shadow font-milonga"
        >
          Soy tu asistente de Producción
        </motion.div>
      )}

      {/* PANEL DEL CHAT */}
      {chatAbierto && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-amber-50 p-4 rounded-xl shadow-2xl w-80 max-w-[90vw] flex flex-col max-h-[70vh] sm:max-h-[60vh] overflow-hidden border border-amber-200 font-milonga"
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-2 border-b border-amber-200 pb-2">
            <span className="font-semibold text-gray-700 text-lg font-milonga">
              Asistente de Producción
            </span>
            <button
              onClick={handleCloseChat}
              className="text-gray-600 hover:text-gray-900"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* MENSAJES */}
          <div
            ref={mensajesRef}
            className="flex-1 overflow-y-auto mb-2 space-y-2 flex flex-col pr-1 font-milonga"
            style={{ minHeight: "200px" }}
          >
            {mensajes.map((mensaje, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`px-4 py-2 rounded-2xl max-w-[80%] break-words font-milonga ${
                  mensaje.origen === "usuario"
                    ? "bg-amber-300 text-gray-900 self-end"
                    : "bg-white text-gray-800 self-start border border-amber-100"
                }`}
              >
                {mensaje.texto}
              </motion.div>
            ))}
          </div>

          {/* INPUT */}
          <div className="flex items-center mt-2 space-x-2 w-full font-milonga">
            <input
              type="text"
              value={nuevoMensaje}
              onChange={(e) => setNuevoMensaje(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribí tu mensaje..."
              className="flex-1 min-w-0 border border-amber-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50 text-gray-800 font-milonga"
              disabled={enviandoMensaje}
            />
            <button
              onClick={handleEnviarMensaje}
              disabled={enviandoMensaje}
              className="flex-shrink-0 bg-amber-300 hover:bg-amber-400 text-gray-900 rounded-full px-4 py-2 font-semibold shadow transition-all duration-200 disabled:opacity-60 font-milonga"
            >
              {enviandoMensaje ? "..." : "Enviar"}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatBot;
