"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden  flex flex-col items-center justify-center overflow-hidden "  style={{ paddingTop: "3rem", paddingBottom: "1rem" , paddingLeft: "1rem",paddingRight: "1rem"}}>

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Arabic Blessing */}
        <motion.div
          style={{ marginBottom: "2rem" }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-4xl md:text-5xl"
           style={{
              marginBottom: "1rem",
              color: "#C99A2E",
              fontFamily: "serif",
              direction: "rtl",
              lineHeight: 1.2,
            }}
          >
            بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي
            خَيْرٍ
          </p>
          <p
            className="text-sm md:text-base italic"
            style={{
              color: "rgba(0, 0, 0, 0.8)",
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            &ldquo;May Allah bless you and shower His blessings upon you and
            unite you both in goodness.&rdquo;
          </p>
        </motion.div>

        {/* Animated Decorative Line */}
        <motion.div
          className="flex items-center justify-center gap-4"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="block h-[2px] w-20 md:w-44"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.9))",
            }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="w-3 h-3 rotate-45"
              style={{
                background: "#D4AF37",
                boxShadow: "0 0 10px rgba(212,175,55,0.8)",
              }}
            />
          </motion.div>
          <motion.span
            className="block h-[2px] w-20 md:w-44"
            style={{
              background: "linear-gradient(90deg, rgba(212,175,55,0.9), transparent)",
            }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3
            className="text-2xl md:text-4xl gold-text"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600, marginBottom: "1rem" }}
          >
            Ameer & Femina
          </h3>
          <p
            className="text-xs tracking-[4px] uppercase"
            style={{ color: "rgba(0, 0, 0, 0.7)", marginBottom: "2rem" }}
          >
            September 21, 2026
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex items-center justify-center gap-4"
          style={{ marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {[Globe, Share2, Mail].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,175,55,0.65)",
              }}
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(212,175,55,0.7)",
                background: "rgba(212,175,55,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} color="rgba(212,175,55,0.8)" />
            </motion.a>
          ))}
        </motion.div>

        {/* Final Animation - Floating Hearts */}
        <motion.div
          className="flex items-center justify-center gap-2"
          style={{ marginBottom: "2rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                size={12}
                color="rgba(212,175,55,0.8)"
                fill="rgba(212,175,55,0.8)"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Made with Love */}
        <motion.p
          className="text-[10px] tracking-[5px] uppercase"
          style={{ color: "rgba(255,255,255,0.15)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Made with{" "}
          <Heart
            size={10}
            className="inline"
            color="rgba(212,175,55,0.9)"
            fill="rgba(212,175,55,0.9)"
          />{" "}
          Love
        </motion.p>

        {/* Copyright */}
        <motion.div
          style={{ marginTop: "1.5rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p
            className="text-[10px] tracking-[4px] uppercase"
            style={{ color: "rgba(0, 0, 0, 0.8)" }}
          >
            &copy; 2026 Ameer & Femina
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
