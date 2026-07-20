"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
      {/* Animations */}
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
        @keyframes petalFall {
          0%   { transform: translateY(-10px) rotate(0deg);   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes sway {
          0%, 100% { margin-left: 0px; }
          50%       { margin-left: 18px; }
        }
        .petal {
          position: absolute;
          top: -30px;
          pointer-events: none;
          animation: petalFall linear infinite, sway ease-in-out infinite;
        }
      `}</style>
      {/* Background Image (Desktop Only) */}
      <div
        className="absolute inset-0 z-0 block opacity-15 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/herobg.webp')" }}
      />

      {/* Background Swiper (Mobile Only) */}
      {/* <div className="absolute inset-0 z-0 md:hidden pointer-events-none">
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
      </div> */}

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
          style={{
            color: "rgba(138,115,85,0.8)", fontFamily: "serif", fontSize: "clamp(2.4rem, 10vw, 2.6rem)",
            direction: "rtl", textAlign: "center", marginBottom: "0.5rem"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-lg tracking-[6px] md:tracking-[8px] uppercase mb-4"
          style={{ color: "#8A7355", fontFamily: "var(--font-inter)", marginBottom: "0.5rem" }}
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
          className="text-sm md:text-lg tracking-[4px] md:tracking-[6px] uppercase"
          style={{ color: "#1A1A1A", fontFamily: "var(--font-cormorant)", fontWeight: 500, letterSpacing: "0.3em", paddingBottom: "20px", paddingTop: "20px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Monday, September{" "}
          <span style={{ fontSize: "1.6em", fontWeight: 600, color: "#3a3a3aff" }}>21</span>
          th,{" "}
          <span style={{ fontSize: "1.6em", fontWeight: 600, color: "#3a3a3aff" }}>2026</span>
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

      {/* ── Mobile Only: Decorative Border Frame ── */}
      <div
        className="md:hidden absolute inset-4 pointer-events-none z-20"
        style={{ border: "1px solid rgba(212,175,55,0.35)", borderRadius: "2px" }}
      >
        {/* Inner border offset */}
        <div
          style={{
            position: "absolute",
            inset: "6px",
            border: "1px solid rgba(212,175,55,0.15)",
            borderRadius: "1px",
          }}
        />
        {/* Corner flourish — top left */}
        <svg style={{ position: "absolute", top: -1, left: -1 }} width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M2 42 L2 12 Q2 2 12 2 L42 2" stroke="#D4AF37" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <circle cx="2" cy="2" r="2" fill="#D4AF37" opacity="0.7" />
          <path d="M8 36 L8 14 Q8 8 14 8 L36 8" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
        {/* Corner flourish — top right */}
        <svg style={{ position: "absolute", top: -1, right: -1, transform: "scaleX(-1)" }} width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M2 42 L2 12 Q2 2 12 2 L42 2" stroke="#D4AF37" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <circle cx="2" cy="2" r="2" fill="#D4AF37" opacity="0.7" />
          <path d="M8 36 L8 14 Q8 8 14 8 L36 8" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
        {/* Corner flourish — bottom left */}
        <svg style={{ position: "absolute", bottom: -1, left: -1, transform: "scaleY(-1)" }} width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M2 42 L2 12 Q2 2 12 2 L42 2" stroke="#D4AF37" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <circle cx="2" cy="2" r="2" fill="#D4AF37" opacity="0.7" />
          <path d="M8 36 L8 14 Q8 8 14 8 L36 8" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
        {/* Corner flourish — bottom right */}
        <svg style={{ position: "absolute", bottom: -1, right: -1, transform: "scale(-1,-1)" }} width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M2 42 L2 12 Q2 2 12 2 L42 2" stroke="#D4AF37" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <circle cx="2" cy="2" r="2" fill="#D4AF37" opacity="0.7" />
          <path d="M8 36 L8 14 Q8 8 14 8 L36 8" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      {/* ── Mobile Only: Falling Hearts ── */}
      <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none z-5">
        {[
          { left: "8%", delay: "0s", dur: "6s", size: 18 },
          { left: "22%", delay: "1.5s", dur: "8s", size: 14 },
          { left: "38%", delay: "0.8s", dur: "7s", size: 12 },
          { left: "55%", delay: "2.2s", dur: "9s", size: 16 },
          { left: "68%", delay: "0.3s", dur: "6.5s", size: 14 },
          { left: "80%", delay: "1.8s", dur: "7.5s", size: 12 },
          { left: "14%", delay: "3.0s", dur: "8.5s", size: 10 },
          { left: "90%", delay: "2.6s", dur: "6.8s", size: 13 },
        ].map((p, i) => (
          <svg
            key={i}
            className="petal"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}, ${parseFloat(p.dur) * 0.9}s`,
              animationDelay: `${p.delay}, ${p.delay}`,
              opacity: 0,
            }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
              fill="rgba(212,175,55,0.5)"
            />
          </svg>
        ))}
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