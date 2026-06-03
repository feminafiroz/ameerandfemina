"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    // Audio source can be set here when a music file is available
    // audioRef.current.src = "/music/wedding.mp3";

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay blocked by browser
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      className="music-toggle"
      onClick={toggleMusic}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle music"
    >
      <div className={`music-bars ${isPlaying ? "playing" : ""}`}>
        <span style={{ height: isPlaying ? "8px" : "4px" }} />
        <span style={{ height: isPlaying ? "14px" : "4px" }} />
        <span style={{ height: isPlaying ? "6px" : "4px" }} />
        <span style={{ height: isPlaying ? "12px" : "4px" }} />
      </div>
    </motion.button>
  );
}
