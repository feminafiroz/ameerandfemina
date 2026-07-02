"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "@/components/Particles";
import OpeningScreen from "@/components/OpeningScreen";
import MusicToggle from "@/components/MusicToggle";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import CoupleSection from "@/components/CoupleSection";
import Timeline from "@/components/Timeline";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import Wishes from "@/components/Wishes";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {/* Opening Screen */}
      {!isOpened && <OpeningScreen onOpen={() => setIsOpened(true)} />}

      {/* Main Content */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background Layers */}
            <Particles />
            <div className="noise-overlay" />

            {/* Ambient Orbs */}
            <div className="fixed inset-0 pointer-events-none z-0">
              <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
                  top: "10%",
                  left: "-15%",
                }}
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
                  bottom: "5%",
                  right: "-10%",
                }}
                animate={{
                  x: [0, -40, 0],
                  y: [0, -30, 0],
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Music Toggle */}
            <MusicToggle />

            {/* Page Sections */}
            <main className="relative z-10 ">
              <div className="mx-auto">
              <Hero />

              <QuoteSection
                arabic="وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
                english="And among His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
                reference="Surah Ar-Rum [30:21]"
              />

              <CoupleSection />

              <Timeline />

              <Countdown />

               <QuoteSection
                arabic="رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا"
                english="Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous."
                reference="Surah Al-Furqan [25:74]"
              />

              <EventDetails />

             

              {/* <Gallery /> */}

              {/* <Wishes /> */}

              {/* <RSVP /> */}

              <Footer />
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
