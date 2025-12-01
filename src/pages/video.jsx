import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import nube1 from "../assets/nube1.png";
import nube2 from "../assets/nube2.png";
import videoSrc from "./video-teatro.mp4";

export default function VideoResponsive() {
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef(null);
  const hideTimer = useRef(null);

  // Detect fullscreen changes
  useEffect(() => {
    const handler = () => {
      const fs =
        document.fullscreenElement === videoRef.current ||
        document.fullscreenElement !== null;

      setIsFullscreen(fs);
      setShowControls(true);

      if (fs) startHideTimer();
    };

    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Hide controls after 3 seconds
  const startHideTimer = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // When tapping fullscreen video → show controls
  const onFullscreenTap = () => {
    if (!isFullscreen) return;
    setShowControls(true);
    startHideTimer();
  };

  // Autoplay with fallback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = false;
      video
        .play()
        .catch(() => {
          video.muted = true;
          setMuted(true);
          video.play().catch(() => {});
        });
    };

    tryPlay();

    const enableSound = () => {
      if (video.muted) {
        video.muted = false;
        setMuted(false);
      }
      window.removeEventListener("click", enableSound);
    };

    window.addEventListener("click", enableSound);

    return () => window.removeEventListener("click", enableSound);
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!document.fullscreenElement) {
      if (video.requestFullscreen) video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <section
      id="inicio"
      className="
        relative w-full overflow-hidden flex justify-center items-center
        mt-20 bg-gradient-to-r from-[#EBA9D1] via-[#CBA8D6] to-[#F6D97E]
      "
      style={{ minHeight: "90vh" }}
    >
      {/* Nubes */}
      <motion.img
        src={nube1}
        className="absolute top-10 left-0 w-64 md:w-80 opacity-70 z-0"
        initial={{ x: -100 }}
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 40, repeat: Infinity }}
      />

      <motion.img
        src={nube2}
        className="absolute bottom-20 right-0 w-72 md:w-96 opacity-60 z-0"
        initial={{ x: 100 }}
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 50, repeat: Infinity }}
      />

      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-10"
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-14 h-14 border-4 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-[90vh]">
        {/* Touch detection in fullscreen */}
        <div
          className="absolute inset-0 z-20"
          onClick={onFullscreenTap}
          style={{ touchAction: "manipulation" }}
        />

        {/* VIDEO */}
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          playsInline
          loop
          onLoadedData={() => setLoading(false)}
          onPause={() => videoRef.current.play()}
          className="
            w-full h-full object-cover object-[center_30%]
            pointer-events-none
          "
        />

        {/* CUSTOM CONTROLS */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 right-6 flex gap-4 z-30"
            >
              {/* 🔈 MUTE BUTTON */}
              <button
                onClick={toggleMute}
                className="bg-black/60 p-3 rounded-full backdrop-blur-md hover:bg-black/80 duration-150"
              >
                {muted ? (
                  /* 🔇 ICON */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    width="28"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M16.5 12l4.24-4.24-1.41-1.41L15.09 10.6l-4.24-4.24L9.44 7.77 13.68 12l-4.24 4.24 1.41 1.41 4.24-4.24 4.24 4.24 1.41-1.41z" />
                    <path d="M5 9v6h4l5 5V4l-5 5z" />
                  </svg>
                ) : (
                  /* 🔊 ICON */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    width="28"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M5 9v6h4l5 5V4l-5 5z" />
                    <path d="M16 7.82v8.36c1.21-.91 2-2.37 2-3.18s-.79-2.27-2-3.18z" />
                  </svg>
                )}
              </button>

              {/* ⛶ FULLSCREEN BUTTON */}
              <button
                onClick={toggleFullscreen}
                className="bg-black/60 p-3 rounded-full backdrop-blur-md hover:bg-black/80 duration-150"
              >
                {isFullscreen ? (
                  /* ❌ EXIT FULLSCREEN */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    width="28"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 16h4v2H4v-6h2zm12-8h-4V6h6v6h-2zM6 10H4V4h6v2H6zm12 6v2h-6v-2h4z" />
                  </svg>
                ) : (
                  /* ⛶ ENTER FULLSCREEN */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    width="28"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 14H5v5h5v-2H7zm10 5h-5v-2h3v-3h2zm0-15h-3V2h-2v5h5zm-8-3H7v3H5V2h4z" />
                  </svg>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
