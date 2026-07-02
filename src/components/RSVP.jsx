"use client";

import { motion } from "framer-motion";
import { Check, MessageSquare, Phone, Send, User, Users } from "lucide-react";
import { useState } from "react";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", phone: "", guests: "", message: "" });
  };

  const fields = [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      icon: User,
      placeholder: "Enter your full name",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      icon: Phone,
      placeholder: "Your phone number",
    },
    {
      name: "guests",
      label: "Number of Guests",
      type: "number",
      icon: Users,
      placeholder: "How many guests?",
    },
  ];

  return (
    <section id="rsvp" className="relative overflow-hidden  flex flex-col items-center justify-center overflow-hidden " style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        {/* Section Title */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs tracking-[6px] uppercase"
            style={{ color: "rgba(212,175,55,0.6)", marginBottom: "1rem" }}
          >
            Be Our Guest
          </p>
          <h2
            className="text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600, marginBottom: "1.5rem" }}
          >
            <span className="gold-text">RSVP</span>
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "rgba(0, 0, 0, 0.6)",
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.1rem",
            }}
          >
            Kindly confirm your attendance
          </p>
          <div className="ornament-divider">
            <div className="diamond" />
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="relative rounded-3xl "
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(212,175,55,0.1)",
            boxShadow: "0 8px 60px rgba(0,0,0,0.3)",
            padding: "8px 30px 30px 30px",
            paddingBottom: "1rem",
            paddingTop: "1rem",

          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative Top Line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",

            }}
          />

          {isSubmitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                style={{
                  background: "rgba(212,175,55,0.15)",
                  border: "2px solid rgba(212,175,55,0.3)",
                  marginBottom: "1.5rem",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: 2 }}
              >
                <Check size={28} color="#D4AF37" />
              </motion.div>
              <h3
                className="text-2xl gold-text"
                style={{ fontFamily: "var(--font-playfair)", marginBottom: "0.75rem" }}
              >
                Thank You!
              </h3>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Your response has been recorded. We look forward to celebrating
                with you!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {fields.map((field, index) => {
                const Icon = field.icon;
                return (
                  <motion.div
                    key={field.name}
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Floating Label */}
                    <motion.label
                      className="absolute left-12 pointer-events-none"
                      style={{
                        color:
                          focusedField === field.name || formData[field.name]
                            ? "#D4AF37"
                            : "rgba(21, 0, 0, 0.6)",
                        fontFamily: "var(--font-inter)",
                        fontSize:
                          focusedField === field.name || formData[field.name]
                            ? "0.7rem"
                            : "0.9rem",
                        top:
                          focusedField === field.name || formData[field.name]
                            ? "8px"
                            : "20px",
                        transition: "all 0.3s ease",
                        letterSpacing: "1px",
                      }}
                    >
                      {field.label}
                    </motion.label>

                    {/* Icon */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Icon
                        size={16}
                        color={
                          focusedField === field.name
                            ? "#D4AF37"
                            : "rgba(0, 0, 0, 0.55)"
                        }
                        style={{ transition: "color 0.3s ease" }}
                      />
                    </div>

                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required={field.name !== "guests"}
                      className="w-full rounded-xl outline-none transition-all duration-300"
                      style={{
                        background: "rgba(0, 0, 0, 0.04)",
                        border: `1px solid ${focusedField === field.name
                            ? "rgba(212,175,55,0.5)"
                            : "rgba(0, 0, 0, 0.06)"
                          }`,
                        padding:
                          focusedField === field.name || formData[field.name]
                            ? "26px 20px 10px 44px"
                            : "18px 20px 18px 44px",
                        color: "#000000",
                        fontFamily: "var(--font-inter)",
                        fontSize: "1.05rem",
                        boxShadow:
                          focusedField === field.name
                            ? "0 0 20px rgba(212,175,55,0.1)"
                            : "none",
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Message Textarea */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.label
                  className="absolute left-12 pointer-events-none"
                  style={{
                    color:
                      focusedField === "message" || formData.message
                        ? "#D4AF37"
                        : "rgba(21, 0, 0, 0.6)",
                    fontFamily: "var(--font-inter)",
                    fontSize:
                      focusedField === "message" || formData.message
                        ? "0.75rem"
                        : "1.05rem",
                    top:
                      focusedField === "message" || formData.message
                        ? "8px"
                        : "20px",
                    transition: "all 0.3s ease",
                    letterSpacing: "1px",
                  }}
                >
                  Your Message
                </motion.label>

                <div className="absolute left-4 top-5">
                  <MessageSquare
                    size={16}
                    color={
                      focusedField === "message"
                        ? "#D4AF37"
                        : "rgba(0, 0, 0, 0.55)"
                    }
                    style={{ transition: "color 0.3s ease" }}
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full rounded-xl outline-none transition-all duration-300 resize-none"
                  style={{
                    background: "rgba(0, 0, 0, 0.04)",
                    border: `1px solid ${focusedField === "message"
                        ? "rgba(212,175,55,0.5)"
                        : "rgba(0, 0, 0, 0.06)"
                      }`,
                    padding:
                      focusedField === "message" || formData.message
                        ? "26px 20px 12px 44px"
                        : "18px 20px 18px 44px",
                    color: "#000000",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9rem",
                    boxShadow:
                      focusedField === "message"
                        ? "0 0 20px rgba(212,175,55,0.1)"
                        : "none",
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                style={{ paddingTop: "0.5rem" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-3"
                  style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "50px" }}
                >
                  <span>Send Wishes</span>
                  <Send size={18} />
                </button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
