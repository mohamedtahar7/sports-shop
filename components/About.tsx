"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <main id="about" className="bg-white text-gray-900 font-sans">
      {/* --- 1. Compact Hero --- */}
      <section className="max-w-screen-2xl mx-auto px-4 md:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            custom={0}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#0A58FF] font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
          >
            Since 2024
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
          >
            Built for the <br />
            <span
              className="text-transparent border-text"
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
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-md leading-relaxed mb-8"
          >
            AURA bridges the gap between raw potential and professional
            performance. We engineer high-performance gear that functions as an
            extension of the athlete.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-video lg:aspect-square bg-gray-100 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Performance athlete"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* --- 2. The Core Pillars (Fast Grid) --- */}
      <section className="border-t border-gray-100 py-20">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Precision",
              desc: "Data-driven design for optimal movement.",
            },
            {
              title: "Durability",
              desc: "Built to survive the most grueling sessions.",
            },
            {
              title: "Community",
              desc: "A global network of elite performers.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-black uppercase tracking-widest text-[#0A58FF] mb-3">
                0{i + 1}. {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. Minimal CTA --- */}
      <section className="bg-black text-white py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto px-4"
        >
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
            Join the Movement
          </h2>
          <button className="inline-flex items-center gap-x-4 px-10 py-4 bg-[#0A58FF] text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Shop Elite Gear <FiArrowRight />
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
