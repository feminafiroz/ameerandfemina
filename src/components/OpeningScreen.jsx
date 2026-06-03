"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

export default function OpeningScreen({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [sealBroken, setSealBroken] = useState(false);

  const handleOpen = useCallback(() => {
    if (isOpening) return;
    setSealBroken(true);
    setIsOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1000);
  }, [isOpening, onOpen]);

  return (
    <AnimatePresence>
      {!isOpening || sealBroken ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: "#F5EEDC" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
                top: "-10%",
                left: "-10%",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
                bottom: "-10%",
                right: "-10%",
              }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Envelope Container */}
          <div className="relative flex flex-col items-center justify-center px-6 py-12 md:py-20">
            {/* Envelope Halves */}
            <motion.div
              className="absolute inset-0 flex"
              initial={{ opacity: 1 }}
              animate={
                sealBroken ? { opacity: 0 } : {}
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="w-1/2 h-full origin-right"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(245,238,220,0.95))",
                  borderRight: "1px solid rgba(212,175,55,0.15)",
                }}
                animate={sealBroken ? { x: "-100%", opacity: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="w-1/2 h-full origin-left"
                style={{
                  background:
                    "linear-gradient(225deg, rgba(212,175,55,0.08), rgba(245,238,220,0.95))",
                  borderLeft: "1px solid rgba(212,175,55,0.15)",
                }}
                animate={sealBroken ? { x: "100%", opacity: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            {/* Top Ornament */}
            <motion.div
              style={{ paddingBottom: "2rem" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                width="120"
                height="30"
                viewBox="0 0 120 30"
                fill="none"
                className="opacity-50"
              >
                <path
                  d="M0 15 Q30 0 60 15 Q90 30 120 15"
                  stroke="#8A7355"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M20 15 Q45 5 60 15 Q75 25 100 15"
                  stroke="#8A7355"
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle cx="60" cy="15" r="2" fill="#8A7355" opacity="0.6" />
              </svg>
            </motion.div>

            {/* Preface Text */}
            <motion.p
              className="text-sm md:text-base tracking-[6px] uppercase"
              style={{
                color: "#8A7355",
                fontFamily: "var(--font-inter)",
                paddingBottom: "1.5rem",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Wedding Ceremony of
            </motion.p>

            {/* Couple Names */}
            <motion.h1
              className="text-5xl sm:text-5xl md:text-8xl font-semibold text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                background:
                  "linear-gradient(135deg, #B8941F 0%, #D4AF37 40%, #8B6914 60%, #D4AF37 80%, #B8941F 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                paddingBottom: "2rem",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                backgroundPosition: ["0% 50%", "200% 50%"],
              }}
              transition={{
                opacity: { duration: 1, delay: 0.7 },
                scale: { duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
                backgroundPosition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              Ameer & Femina
            </motion.h1>

            {/* Arabic Blessing */}
            <motion.div
              className="text-2xl md:text-5xl text-center"
              style={{
                color: "rgba(11, 11, 11, 1)",
                fontFamily: "serif",
                direction: "rtl",
                textAlign: "center",
                paddingBottom: "2rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.div>

            {/* Wax Seal Button */}
            <motion.div
              className="relative cursor-pointer group"
              onClick={handleOpen}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                sealBroken
                  ? { scale: [1, 1.3, 0], opacity: [1, 0.5, 0], rotate: 180 }
                  : { opacity: 1, scale: 1 }
              }
              transition={
                sealBroken
                  ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                  : { duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }
              }
              whileHover={!sealBroken ? { scale: 1.1 } : {}}
              whileTap={!sealBroken ? { scale: 0.95 } : {}}
            >
              {/* Glow Ring */}
              <motion.div
                className="absolute -inset-6 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Seal */}
              <div
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #C19B2E, #8B6914)",
                  boxShadow:
                    "0 0 40px rgba(212,175,55,0.35), inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)",
                }}
              >
                <span
                  className="text-3xl md:text-5xl"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "rgba(10,10,10,0.85)",
                    textShadow: "0 1px 2px rgba(255,255,255,0.35)",
                  }}
                >
                  A&F
                </span>
              </div>
            </motion.div>

            {/* Tap Indicator */}
            <motion.div
              className="flex items-center gap-4"
              style={{ marginTop: "2rem" }}
              initial={{ opacity: 0 }}
              animate={
                sealBroken ? { opacity: 0 } : { opacity: [0, 1, 0.5, 1] }
              }
              transition={{
                duration: 2,
                delay: 1.8,
                repeat: sealBroken ? 0 : Infinity,
                repeatType: "reverse",
              }}
            >
              <span
                className="block w-8 h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #8A7355)",
                }}
              />
              <span
                className="text-xs tracking-[4px] uppercase"
                style={{ color: "rgba(26, 26, 26, 0.5)" }}
              >
                Tap the seal to open
              </span>
              <span
                className="block w-8 h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, #8A7355, transparent)",
                }}
              />
            </motion.div>
          </div>

          {/* Full-screen wipe on open */}
          {sealBroken && (
            <motion.div
              className="absolute inset-0 z-[300]"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, #F5EEDC 70%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
