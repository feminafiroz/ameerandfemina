"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F5EEDC" }}
    >
      {/* Background Image (Desktop Only) */}
      <div
        className="absolute inset-0 z-0 hidden md:block opacity-15 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/herobg.webp')" }}
      />

      {/* Background Swiper (Mobile Only) */}
      <div className="absolute inset-0 z-0 md:hidden pointer-events-none">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          speed={1200}
          style={{ width: "100%", height: "100%" }}
        >
          {["/images/img1.png", "/images/img2.png", "/images/img3.png"].map(
            (src, i) => (
              <SwiperSlide key={i} style={{ width: "100%", height: "100%" }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url('${src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.25,
                  }}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {/* Background Gradient Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.12) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(212,175,55,0.06) 0%, transparent 50%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.06) 0%, transparent 50%)" }} />
      </div>

      {/* ── NEW: Radial Pulse ── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 380,
          background: "radial-gradient(ellipse, rgba(212,175,55,0.18) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.14, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Lanterns */}
      <motion.div
        className="absolute left-[8%] top-[15%] w-1 h-16 rounded-full opacity-35"
        style={{ background: "linear-gradient(to bottom, #D4AF37, transparent)", boxShadow: "0 0 20px rgba(212,175,55,0.3)" }}
        animate={{ y: [0, -20, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[20%] w-1 h-12 rounded-full opacity-30"
        style={{ background: "linear-gradient(to bottom, #D4AF37, transparent)", boxShadow: "0 0 15px rgba(212,175,55,0.2)" }}
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Decorative Corners */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12 opacity-35"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 60 L0 20 Q0 0 20 0 L60 0" stroke="#8A7355" strokeWidth="0.5" fill="none" />
          <path d="M0 40 L0 15 Q0 0 15 0 L40 0" stroke="#8A7355" strokeWidth="0.3" fill="none" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-35 rotate-180"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 60 L0 20 Q0 0 20 0 L60 0" stroke="#8A7355" strokeWidth="0.5" fill="none" />
          <path d="M0 40 L0 15 Q0 0 15 0 L40 0" stroke="#8A7355" strokeWidth="0.3" fill="none" />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Bismillah */}
        <motion.div
          className=""
          style={{ color: "rgba(138,115,85,0.8)", fontFamily: "serif", fontSize: "clamp(2.4rem, 10vw, 2.6rem)",
            direction: "rtl", textAlign: "center", marginBottom: "0.5rem" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-lg tracking-[6px] md:tracking-[8px] uppercase mb-4"
          style={{ color: "#8A7355", fontFamily: "var(--font-inter)" , marginBottom: "0.5rem" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Wedding Ceremony of
        </motion.p>

        {/* Names */}
        <motion.h1
          className="mb-4"
          style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(3.5rem, 10vw, 7rem)", fontWeight: 500, lineHeight: 1.1 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ── NEW: Shimmer on names via CSS animation injected inline ── */}
          <style>{`
            @keyframes goldShimmer {
              0%   { background-position: 0% center; }
              100% { background-position: 200% center; }
            }
            .name-shimmer {
              background: linear-gradient(90deg, #B8860B 0%, #D4AF37 30%, #FFD700 50%, #D4AF37 70%, #B8860B 100%);
              background-size: 200% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: goldShimmer 3.5s linear infinite;
              filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
            }
            @keyframes btnSheen {
              0%, 100% { left: -75%; }
              50%       { left: 125%; }
            }
            .btn-gold {
              position: relative;
              overflow: hidden;
            }
            .btn-gold::after {
              content: '';
              position: absolute;
              top: -50%; left: -75%;
              width: 50%; height: 200%;
              background: rgba(255,255,255,0.2);
              transform: skewX(-20deg);
              animation: btnSheen 4s 3s ease-in-out infinite;
            }
          `}</style>

          <span className="block name-shimmer">Ameer</span>

          {/* ── NEW: & glow burst ── */}
          <motion.span
            className="block text-2xl md:text-4xl relative md:top-4 top-2"
            style={{ fontFamily: "var(--font-cormorant)", color: "#8A7355", fontWeight: 300, fontStyle: "italic" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [0, 1.2, 1],
              textShadow: [
                "0 0 0px transparent",
                "0 0 24px rgba(212,175,55,0.6)",
                "0 0 10px rgba(212,175,55,0.2)",
              ],
            }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            &
          </motion.span>

          <span className="block name-shimmer" style={{ animationDelay: "0.4s" }}>Femina</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-3 my-6 md:my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block h-[1px] w-16 md:w-24" style={{ background: "linear-gradient(90deg, transparent, #8A7355)" }} />
          <span className="block w-2 h-2 rotate-45" style={{ background: "#8A7355" }} />
          <span className="block h-[1px] w-16 md:w-24" style={{ background: "linear-gradient(90deg, #8A7355, transparent)" }} />
        </motion.div>

        {/* Date */}
        <motion.p
          className="text-sm md:text-lg tracking-[4px] md:tracking-[6px] uppercase "
          style={{ color: "#1A1A1A", fontFamily: "var(--font-cormorant)", fontWeight: 500, letterSpacing: "0.3em", paddingBottom: "20px", paddingTop: "20px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Monday, September 21th, 2026
        </motion.p>

        {/* Open Invitation Button */}
        {/* <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <button onClick={scrollToNext} className="btn-gold">
            <span>Open Invitation</span>
          </button>
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.3, 0.6] }}
        transition={{ duration: 2, delay: 3, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-[3px] uppercase" style={{ color: "rgba(26,26,26,0.6)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} color="#8A7355" />
        </motion.div>
      </motion.div>
    </section>
  );
}