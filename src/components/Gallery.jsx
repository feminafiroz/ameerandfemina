"use client";

import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, span: "tall", label: "Together Forever" },
  { id: 2, span: "normal", label: "Our Beginning" },
  { id: 3, span: "normal", label: "Love & Joy" },
  { id: 4, span: "wide", label: "Golden Moments" },
  { id: 5, span: "normal", label: "Blessed Days" },
  { id: 6, span: "tall", label: "Eternal Bond" },
  { id: 7, span: "normal", label: "Happiness" },
  { id: 8, span: "normal", label: "Cherished" },
];

const gradients = [
  "linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)",
  "linear-gradient(135deg, #111111 0%, #1A1A1A 100%)",
  "linear-gradient(225deg, #1A1A1A 0%, #111111 100%)",
  "linear-gradient(45deg, #0A0A0A 0%, #1A1A1A 100%)",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            Precious Memories
          </p>
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
          >
            <span className="gold-text">Our Gallery</span>
          </h2>
          <div className="ornament-divider">
            <div className="diamond" />
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
              style={{
                border: "1px solid rgba(212,175,55,0.08)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
            >
              {/* Image Placeholder */}
              <div
                className={`relative w-full overflow-hidden ${img.span === "tall"
                    ? "h-80 md:h-96"
                    : img.span === "wide"
                      ? "h-48 md:h-56"
                      : "h-56 md:h-64"
                  }`}
                style={{
                  background: gradients[index % gradients.length],
                }}
              >
                {/* Decorative Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full flex items-center justify-center"
                      style={{
                        border: "1px solid rgba(212,175,55,0.15)",
                        background: "rgba(212,175,55,0.05)",
                      }}
                    >
                      <span
                        className="text-2xl md:text-3xl"
                        style={{
                          fontFamily: "var(--font-playfair)",
                          background:
                            "linear-gradient(135deg, #D4AF37, #E6C068)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {img.id}
                      </span>
                    </div>
                    <span
                      className="text-[10px] tracking-[3px] uppercase"
                      style={{ color: "rgba(212,175,55,0.3)" }}
                    >
                      Photo {img.id}
                    </span>
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)",
                  }}
                >
                  <div>
                    <p
                      className="text-sm font-medium gold-text"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {img.label}
                    </p>
                  </div>
                </div>

                {/* Zoom Effect on Hover */}
                <div
                  className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(212,175,55,0.03) 0%, transparent 70%)",
                  }}
                />

                {/* Corner Decoration */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M20 0 L20 8 M12 0 L20 0"
                      stroke="rgba(212,175,55,0.5)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-180">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M20 0 L20 8 M12 0 L20 0"
                      stroke="rgba(212,175,55,0.5)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
