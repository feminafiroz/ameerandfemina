"use client";

import { motion } from "framer-motion";

export default function QuoteSection({ arabic, english, reference, alternate }) {
  return (

    <section className="w-full   flex flex-col items-center justify-center overflow-hidden" 
      style={{
        background: alternate
          ? "linear-gradient(180deg, #F2EDE0 0%, #F8F4EC 50%, #F2EDE0 100%)"
          : "linear-gradient(180deg, #F8F4EC 0%, #FBF8F2 50%, #F8F4EC 100%)",
      }}
    >
      <div className="relative py-24 md:py-32 overflow-hidden  " style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>

        {/* Light cream background */}
        <div
          className="absolute inset-0"
       
      />

      {/* Subtle warm glow behind content */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 100%)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg"
        style={{ background: "linear-gradient(90deg, transparent 5%, rgba(180,140,40,0.3) 50%, transparent 95%)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 text-center">

        {/* Opening quote mark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: "rgba(182, 144, 47, 0.2)",
            fontFamily: "Georgia, serif",
            fontSize: "6rem",
            lineHeight: 0.4,
            marginBottom: "0.5rem",
            userSelect: "none",
          }}
        >
          ❝
        </motion.div>

        {/* Arabic Text */}
        <motion.p
          className="mb-8 leading-[1.9]"
          style={{
            color: "rgba(139,100,20,0.9)",
            fontFamily: "serif",
            fontSize: "clamp(1rem, 4.4vw, 2.2rem)",
            direction: "rtl",
            textAlign: "center",
            textShadow: "0 0 30px rgba(212,175,55,0.1)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {arabic}
        </motion.p>

        {/* Ornament divider */}
        <motion.div
          className="flex items-center justify-center gap-4 my-7"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block h-[1px] w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35))" }} />
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="7" y="0" width="4" height="4" transform="rotate(45 9 2)" fill="rgba(212,175,55,0.55)" />
            <rect x="5" y="7" width="8" height="8" transform="rotate(45 9 9)" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
          </svg>
          <span className="block h-[1px] w-16" style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.35), transparent)" }} />
        </motion.div>

        {/* English Translation */}
        <motion.p
          className="mb-7"
          style={{
            color: "rgba(60,45,20,0.65)",
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            fontStyle: "italic",
            lineHeight: 2,
            letterSpacing: "0.01em",
          }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          &ldquo;{english}&rdquo;
        </motion.p>

        {/* Reference */}
        <motion.p
          className="text-[10px] tracking-[5px] uppercase"
          style={{ color: "rgba(139,100,20,0.55)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          — {reference} —
        </motion.p>
      </div>

      {/* Bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent 5%, rgba(180,140,40,0.3) 50%, transparent 95%)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
    </section>
  );
}