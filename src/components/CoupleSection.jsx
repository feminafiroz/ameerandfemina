"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="relative overflow-hidden  flex flex-col items-center justify-center overflow-hidden "  style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      {/* Background Accent */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(245,238,220,1) 0%, #F5EEDC 70%)",
        }}
      /> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs tracking-[6px] uppercase "
            style={{ color: "rgba(212,175,55,0.6)" , paddingBottom: "1rem"}}
          >
            The Couple
          </p>
          <h2
            className="text-3xl md:text-5xl "
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 , paddingBottom: "1rem"}}
          >
            <span className="gold-text">Two Hearts, One Soul</span>
          </h2>
          <div className="ornament-divider">
            <div className="diamond" />
          </div>
        </motion.div>

        {/* Couple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  items-center relative">
          {/* Groom */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative group"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Image Frame */}
              <div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(212,175,55,0.3)",
                  boxShadow:
                    "0 0 40px rgba(212,175,55,0.1), inset 0 0 40px rgba(0,0,0,0.3)",
                }}
              >
                {/* Placeholder with elegant gradient */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1A1A1A 0%, #111111 50%, #0A0A0A 100%)",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="text-5xl md:text-6xl mb-2"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        background:
                          "linear-gradient(135deg, #D4AF37, #E6C068)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      A
                    </div>
                    <div
                      className="text-[10px] tracking-[3px] uppercase"
                      style={{ color: "rgba(212,175,55,0.5)" }}
                    >
                      Groom
                    </div>
                  </div>
                </div>
                {/* Glow Ring */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    boxShadow: "inset 0 0 30px rgba(212,175,55,0.15)",
                  }}
                />
              </div>
              {/* Decorative Ring */}
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  border: "1px solid rgba(212,175,55,0.1)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Groom Name */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3
                className="text-2xl md:text-3xl gold-text"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 , paddingBottom: "1rem" }}
              >
                Ameer Fahadh
              </h3>
              <p
                className="text-xs tracking-[4px] uppercase mb-3"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}
              >
                Son of
              </p>
              <p
                className="text-sm"
                style={{
                  color: "rgba(0, 0, 0, 0.8)",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.1rem",
                }}
              >
                Mr. Shamnad & Mrs. Thasni
              </p>
            </motion.div>
          </motion.div>

          {/* Center Divider with Heart */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="w-[1px] h-20"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)",
              }}
            />
            <motion.div
              className="my-4 p-3 rounded-full"
              style={{
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={20} color="#D4AF37" fill="rgba(212,175,55,0.3)" />
            </motion.div>
            <div
              className="w-[1px] h-20"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)",
              }}
            />
          </motion.div>

          {/* Mobile Heart Divider */}
          <motion.div
            className="flex md:hidden items-center justify-center my-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="h-[1px] w-16"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,175,55,0.3))",
              }}
            />
            <motion.div
              className="mx-4 p-3 rounded-full"
              style={{
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={18} color="#D4AF37" fill="rgba(212,175,55,0.3)" />
            </motion.div>
            <div
              className="h-[1px] w-16"
              style={{
                background:
                  "linear-gradient(90deg, rgba(212,175,55,0.3), transparent)",
              }}
            />
          </motion.div>

          {/* Bride */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative group"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              {/* Image Frame */}
              <div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(212,175,55,0.3)",
                  boxShadow:
                    "0 0 40px rgba(212,175,55,0.1), inset 0 0 40px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1A1A1A 0%, #111111 50%, #0A0A0A 100%)",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="text-5xl md:text-6xl mb-2"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        background:
                          "linear-gradient(135deg, #D4AF37, #E6C068)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      F
                    </div>
                    <div
                      className="text-[10px] tracking-[3px] uppercase"
                      style={{ color: "rgba(212,175,55,0.5)" }}
                    >
                      Bride
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    boxShadow: "inset 0 0 30px rgba(212,175,55,0.15)",
                  }}
                />
              </div>
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  border: "1px solid rgba(212,175,55,0.1)",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Bride Name */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3
                className="text-2xl md:text-3xl  gold-text"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 , paddingBottom: "1rem"}}
              >
                Femina
              </h3>
              <p
                className="text-xs tracking-[4px] uppercase"
                style={{color: "rgba(0, 0, 0, 0.8)" }}
              >
                Daughter of
              </p>
              <p
                className="text-sm"
                style={{
                 color: "rgba(0, 0, 0, 0.8)",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.1rem",
                }}
              >
                Mr. Firoz & Mrs. Mariyath
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
