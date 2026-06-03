"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const wishes = [
  {
    name: "Sarah & Ahmed",
    message:
      "May your marriage be blessed with love, joy, and endless happiness. You two are truly made for each other!",
    date: "2 days ago",
  },
  {
    name: "Fatima Khan",
    message:
      "Wishing you both a lifetime of love and happiness. May Allah bless your union with peace and prosperity.",
    date: "3 days ago",
  },
  {
    name: "Omar Family",
    message:
      "Congratulations on this beautiful journey! May your love grow stronger with each passing day. Barakallahu lakuma.",
    date: "5 days ago",
  },
  {
    name: "Aisha Rahman",
    message:
      "What a beautiful couple! May your life together be filled with laughter, love, and wonderful adventures.",
    date: "1 week ago",
  },
  {
    name: "Hassan & Maryam",
    message:
      "We are so happy for both of you! May this union bring you closer to each other and to the Almighty.",
    date: "1 week ago",
  },
  {
    name: "Yusuf Ali",
    message:
      "MashaAllah! May your marriage be a source of great joy and blessings. Wishing you all the best!",
    date: "2 weeks ago",
  },
];

export default function Wishes() {
  return (
    <section id="wishes" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs tracking-[6px] uppercase mb-4"
            style={{ color: "rgba(212,175,55,0.6)" }}
          >
            Blessings
          </p>
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
          >
            <span className="gold-text">Guest Wishes</span>
          </h2>
          <div className="ornament-divider">
            <div className="diamond" />
          </div>
        </motion.div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="relative p-6 md:p-8 rounded-2xl h-full"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(212,175,55,0.08)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                }}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(212,175,55,0.2)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote
                    size={20}
                    color="rgba(212,175,55,0.3)"
                    className="transform rotate-180"
                  />
                </div>

                {/* Message */}
                <p
                  className="mb-6 leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{wish.message}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.2)",
                      }}
                    >
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "#D4AF37" }}
                      >
                        {wish.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {wish.name}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-[10px]"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                  >
                    {wish.date}
                  </span>
                </div>

                {/* Bottom Accent */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-[1px] transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
