"use client";
import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const imageReveal: Variants = {
    hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 1.2, delay: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#fafafa] pt-20"
    >
      {/* Ghost Branding */}
      <div className="absolute right-[-5%] top-[10%] opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[45vw] font-black leading-none tracking-tighter">
          AURA
        </h1>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Text Content */}
        <div className="flex flex-col">
          <motion.span
            custom={0}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-[#0A58FF] font-black tracking-[0.5em] uppercase text-[10px] mb-6"
          >
            New Season Arrival
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-[7.5rem] font-black text-gray-900 leading-[0.8] tracking-tighter uppercase mb-10"
          >
            Unleash <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #111" }}
            >
              Performance
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="max-w-md text-gray-500 text-lg md:text-xl leading-relaxed mb-12 font-medium"
          >
            Engineered for the elite. Explore the latest collection of
            high-performance gear.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <Link href="/products">
              <button className="group relative px-10 py-6 bg-black text-white overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 w-0 bg-[#0A58FF] transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 flex items-center gap-x-4 font-black uppercase text-[11px] tracking-[0.3em]">
                  Shop Collection{" "}
                  <FiArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </span>
              </button>
            </Link>
          </motion.div>

          {/* Specs / Stats */}
          <motion.div
            custom={4}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mt-20 flex gap-x-12 border-t border-gray-200 pt-10"
          >
            {[
              { val: "150+", label: "Pro Athletes" },
              { val: "24/7", label: "Expert Support" },
              { val: "Free", label: "Shipping" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-black text-black">{stat.val}</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-black">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="relative h-[600px] md:h-[800px] w-full group"
        >
          <div className="absolute inset-0 bg-gray-200 overflow-hidden">
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
              alt="High performance training"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#0A58FF]/5" />
          </div>

          {/* Floating Spec Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 -left-8 hidden xl:block bg-white p-8 shadow-2xl border-l-4 border-[#0A58FF] max-w-[260px]"
          >
            <p className="text-[9px] text-[#0A58FF] font-black uppercase tracking-[0.3em] mb-3">
              System.01 / Tech
            </p>
            <h3 className="font-black text-sm text-gray-900 leading-tight uppercase mb-4">
              AURA Pro-Carbon Series Training
            </h3>
            <Link
              href="/products"
              className="text-[10px] font-black border-b border-black pb-1 hover:text-[#0A58FF] hover:border-[#0A58FF] transition-all"
            >
              View Specs
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
