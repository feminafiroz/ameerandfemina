"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    kicker: "Sacred Ceremony",
    title: "The Nikah",
    date: "september 21, 2026",
    time: "11:00 AM",
    venue: "Amba Padmam Auditorium",
    location: "Vypin",
    mapUrl: "https://maps.app.goo.gl/FMgKTXZ6JcUvumz18",
  },
 
  {
    kicker: "Evening Celebration",
    title: "Reception",
    date: "september 21, 2026",
    time: "07:00 PM onwards",
    venue: "Town Hall Kochi",
    location: "Kochi",
    mapUrl: "https://maps.google.com",
  },
];

export default function EventDetails() {
  return (
    <section
      id="events"
      className="relative overflow-hidden flex flex-col items-center justify-center"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }} 
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(212,175,55,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ paddingBottom: "4rem" }}
        >
          <p
            className="text-xs tracking-[6px] uppercase"
            style={{ color: "rgba(212,175,55,0.6)", paddingBottom: "0.5rem" }}
          >
            Join Us
          </p>
          <h2
            className="text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600, }}
          >
            <span className="gold-text">Event Schedule</span>
          </h2>
          <div className="ornament-divider">
            <div className="diamond" />
          </div>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl   h-full"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(212,175,55,0.18)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                {/* Top Gold Line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                  }}
                />

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Kicker */}
                  <span
                    className="text-[10px] tracking-[4px] uppercase block"
                    style={{ color: "rgba(212,175,55,0.6)", paddingBottom: "0.75rem" }}
                  >
                    {event.kicker}
                  </span>

                  {/* Event Name */}
                  <h3
                    className="text-2xl md:text-3xl gold-text"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 600,
                      paddingBottom: "1.5rem",
                    }}
                  >
                    {event.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className="w-auto h-[1px] mx-auto"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
                      marginBottom: "1.5rem",
                    }}
                  />

                  {/* Info Items */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div className="flex items-center justify-center gap-3">
                      <Calendar
                        size={14}
                        color="rgba(212,175,55,0.6)"
                      />
                      <div>
                        <span
                          className="block text-[9px] tracking-[3px] uppercase"
                          style={{ color: "rgba(212,175,55,0.5)", paddingBottom: "0.25rem" }}
                        >
                          Date
                        </span>
                        <span
                          className="text-sm"
                          style={{
                            color: "rgba(0, 0, 0, 0.8)",
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "1.1rem",
                          }}
                        >
                          {event.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Clock size={14} color="rgba(212,175,55,0.6)" />
                      <div>
                        <span
                          className="block text-[9px] tracking-[3px] uppercase"
                          style={{ color: "rgba(212,175,55,0.5)", paddingBottom: "0.25rem" }}
                        >
                          Time
                        </span>
                        <span
                          className="text-sm"
                          style={{
                            color: "rgba(0, 0, 0, 0.8)",
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "1.1rem",
                          }}
                        >
                          {event.time}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <MapPin size={14} color="rgba(212,175,55,0.6)" />
                      <div>
                        <span
                          className="block text-[9px] tracking-[3px] uppercase"
                          style={{ color: "rgba(212,175,55,0.5)", paddingBottom: "0.25rem" }}
                        >
                          Location
                        </span>
                        <span
                          className="text-sm block"
                          style={{
                            color: "rgba(0, 0, 0, 0.8)",
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "1.1rem",
                          }}
                        >
                          {event.venue}
                        </span>
                        <span
                          className="text-xs block"
                          style={{ color: "rgba(0, 0, 0, 0.5)" }}
                        >
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Map Button */}
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold inline-flex text-xs"
                    style={{ marginTop: "1rem" }}
                  >
                    <MapPin size={14} />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
