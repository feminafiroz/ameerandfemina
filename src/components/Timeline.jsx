"use client";

import { motion } from "framer-motion";
import { Church, Heart, PartyPopper } from "lucide-react";

const timelineEvents = [
  {
    icon: Heart,
    title: "First Meeting",
    date: "December 2025",
    description:
      "A chance encounter that felt like destiny. Two souls crossed paths, and the universe whispered that something beautiful was about to begin.",
  },
  // {
  //   icon: Users,
  //   title: "Growing Closer",
  //   date: "August 2022",
  //   description:
  //     "What started as friendship blossomed into something deeper. Every conversation revealed a new reason to fall in love.",
  // },
  // {
  //   icon: Gem,
  //   title: "The Proposal",
  //   date: "January 2024",
  //   description:
  //     "Under a canopy of stars, a question was asked that would change two lives forever. She said yes, and the world stood still.",
  // },
  {
    icon: PartyPopper,
    title: "Engagement",
    date: "January 2026",
    description:
      "Surrounded by family and blessings, two families united in joy. A celebration of love, promise, and a future together.",
  },
  {
    icon: Church,
    title: "The Wedding",
    date: "September 2026",
    description:
      "The day we've been dreaming of. Two hearts become one in the most sacred bond, blessed by the Almighty.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative overflow-hidden  flex flex-col items-center justify-center" style={{ paddingTop: "2rem", paddingBottom: "6rem" }}>
      {/* Background Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs tracking-[6px] uppercase"
            style={{ color: "rgba(212,175,55,0.6)", paddingBottom: "1rem" }}
          >
            Our Journey
          </p>
          <h2
            className="text-3xl md:text-5xl "
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600, paddingBottom: "0.5rem" }}
          >
            <span className="gold-text">Love Story</span>
          </h2>
          <div className="ornament-divider">
            <div className="diamond" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(212,175,55,0.3) 10%, rgba(212,175,55,0.3) 90%, transparent)",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Timeline Items */}
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            const Icon = event.icon;

            return (
              <motion.div
                key={index}
                className={`relative flex items-start  ${isLeft
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
                  } flex-row`}
                style={{ paddingBottom: "2rem" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.3)",
                      boxShadow: "0 0 20px rgba(212,175,55,0.1)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(212,175,55,0.1)",
                        "0 0 30px rgba(212,175,55,0.25)",
                        "0 0 20px rgba(212,175,55,0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <Icon size={18} color="#D4AF37" />
                  </motion.div>
                </motion.div>

                {/* Card */}
                <div style={{ padding: "1rem" }}
                  className={`ml-16 md:ml-0 ${isLeft
                    ? "md:w-[calc(50%-40px)] md:pr-8 md:text-right"
                    : "md:w-[calc(50%-40px)] md:pl-8 md:ml-auto"
                    } w-full`}
                >
                  <motion.div
                    style={{ padding: "1rem" }}
                    className="glass-card  group cursor-default"
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <span
                      className="text-[10px] tracking-[3px] uppercase block"
                      style={{ color: "rgba(212,175,55,0.6)", paddingBottom: "0.5rem" }}
                    >
                      {event.date}
                    </span>
                    <h3
                      className="text-xl md:text-2xl gold-text"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: 600,
                        paddingBottom: "0.75rem",
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "rgba(0, 0, 0, 0.5)",
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
