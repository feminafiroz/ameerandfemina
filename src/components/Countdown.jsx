"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-09-21T11:00:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountUnit({ value, label, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative w-20 h-24 sm:w-24 sm:h-28 md:w-32 md:h-36 flex items-center justify-center rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(212,175,55,0.15)",
          boxShadow:
            "0 0 30px rgba(212,175,55,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
        whileHover={{
          borderColor: "rgba(212,175,55,0.3)",
          boxShadow: "0 0 40px rgba(212,175,55,0.1)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Top Shine */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)",
          }}
        />
        <motion.span
          key={value}
          className="text-3xl sm:text-4xl md:text-5xl font-bold gold-text relative z-10"
          style={{ fontFamily: "var(--font-playfair)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </motion.div>
      <span
        className="mt-3 text-[10px] sm:text-xs tracking-[3px] uppercase"
        style={{ color: "rgba(0, 0, 0, 0.4)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="relative  flex flex-col items-center justify-center overflow-hidden"  style={{ paddingTop: "1rem", paddingBottom: "6rem" }} >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs tracking-[6px] uppercase"
            style={{ color: "rgba(212,175,55,0.6)", paddingBottom: "1rem" }}
          >
            Save the Date
          </p>
          <h2
            className="text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600, paddingBottom: "1.5rem" }}
          >
            <span className="gold-text">Counting the Moments</span>
          </h2>
          <p
            className="text-sm md:text-base"
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.1rem",
              paddingBottom: "3rem",
            }}
          >
            Until two hearts become one
          </p>
        </motion.div>

        {/* Countdown Grid */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-8">
          <CountUnit value={timeLeft.days} label="Days" delay={0.1} />
          <motion.span
            className="text-2xl md:text-3xl gold-text self-start mt-8 md:mt-10"
            style={{ fontFamily: "var(--font-playfair)" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            :
          </motion.span>
          <CountUnit value={timeLeft.hours} label="Hours" delay={0.2} />
          <motion.span
            className="text-2xl md:text-3xl gold-text self-start mt-8 md:mt-10"
            style={{ fontFamily: "var(--font-playfair)" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            :
          </motion.span>
          <CountUnit value={timeLeft.minutes} label="Mins" delay={0.3} />
          <motion.span
            className="text-2xl md:text-3xl gold-text self-start mt-8 md:mt-10"
            style={{ fontFamily: "var(--font-playfair)" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          >
            :
          </motion.span>
          <CountUnit value={timeLeft.seconds} label="Secs" delay={0.4} />
        </div>

        {/* Date Display */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ornament-divider">
            <div className="diamond" />
          </div>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="text-center">
              <span
                className="block text-3xl md:text-4xl font-bold gold-text"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Monday
              </span>
            </div>
            <div
              className="w-[1px] h-12"
              style={{ background: "rgba(212,175,55,0.2)" }}
            />
            <div className="text-center">
              <span
                className="block text-5xl md:text-6xl font-bold gold-text"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                21
              </span>
            </div>
            <div
              className="w-[1px] h-12"
              style={{ background: "rgba(212,175,55,0.2)" }}
            />
            <div className="text-center">
              <span
                className="block text-lg gold-text"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                September
              </span>
              <span
                className="block text-lg gold-text"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                2026
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
