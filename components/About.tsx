"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  // Fixed Variants: Using the Variants type and ensuring 'visible'
  // is handled correctly as a dynamic function.
  const fadeIn: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Slightly slower stagger for a more premium feel
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0], // Smooth cubic-bezier easeOut
      },
    }),
  };

  const imageReveal: Variants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <main
      id="about"
      className="bg-white text-gray-900 font-sans overflow-hidden"
    >
      {/* --- 1. Compact Hero --- */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 lg:py-40 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.p
            custom={0}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-[#0A58FF] font-black tracking-[0.5em] uppercase text-[10px] mb-6"
          >
            Since 2024
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10"
          >
            Built for the <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px #111" }}
            >
              Relentless
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-gray-500 max-w-md leading-relaxed mb-10 font-medium"
          >
            AURA bridges the gap between raw potential and professional
            performance. We engineer gear that functions as a seamless extension
            of the athlete's ambition.
          </motion.p>
        </div>

        {/* Improved Image Reveal */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative aspect-[4/5] lg:aspect-square bg-gray-100 overflow-hidden group"
        >
          <motion.img
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Performance athlete"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* --- 2. The Core Pillars --- */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-16">
          {[
            {
              title: "Precision",
              desc: "Every stitch and silhouette is data-driven to ensure zero restriction during movement.",
            },
            {
              title: "Durability",
              desc: "Sourced from high-tensile materials built to survive the most grueling training cycles.",
            },
            {
              community: true,
              title: "Community",
              desc: "Not just a brand, but a global network of elite performers pushing the boundary.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-12 h-[1px] bg-[#0A58FF] mb-6 group-hover:w-20 transition-all duration-500" />
              <h3 className="text-xs font-black uppercase tracking-widest text-black mb-4">
                0{i + 1}. {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. Minimal CTA --- */}
      <section className="bg-black text-white py-32 text-center relative overflow-hidden">
        {/* Subtle background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20vw] font-black uppercase italic">
            Performance
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10">
            Join the Movement
          </h2>
          <button className="group inline-flex items-center gap-x-6 px-12 py-6 bg-[#0A58FF] text-white font-black uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
            Shop Elite Gear
            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
