"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center px-6 pt-24 pb-16 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE: Text Content */}
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.15 }}
          className="flex-1"
        >
          <motion.h1 
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white"
          >
            Ojo Oladapo
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed"
          >
            Software Engineer crafting high-performance web applications and mobile apps with clean code, modern architecture, and intentional design.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a 
              href="#projects" 
              className="px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all active:scale-95 text-sm"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-7 py-3 bg-transparent text-white font-medium rounded-full border border-zinc-700 hover:bg-white/5 transition-all text-sm"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 sm:w-80 md:w-88 aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 group">
            <Image 
              src="/images/oladapo-suit.jpg" 
              alt="Ojo Oladapo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}