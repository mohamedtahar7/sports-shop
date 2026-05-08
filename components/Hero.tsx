"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

const Hero = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] mt-4 flex items-center overflow-hidden bg-[#fafafa]"
    >
      {/* Background Graphic / Aesthetic Element */}
      <div className="absolute right-[-5%] top-[10%] opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[40vw] font-black leading-none tracking-tighter">
          AURA
        </h1>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* --- Text Content --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.span
            variants={itemVariants}
            className="text-[#0A58FF] font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            New Season Arrival
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6"
          >
            Unleash Your <br />
            <span
              className="text-transparent border-text stroke-black"
              style={{ WebkitTextStroke: "2px #111" }}
            >
              Performance
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-md text-gray-600 text-lg md:text-xl leading-relaxed mb-10"
          >
            Engineered for the elite. Explore our latest collection of
            high-performance running shoes, boxing gear, and professional
            training equipment.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="/products">
              <button className="group relative px-8 py-4 bg-[#0A58FF] text-white overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
                <span className="relative z-10 flex items-center gap-x-2 font-bold uppercase text-xs tracking-widest">
                  Shop Collection <FiArrowRight size={18} />
                </span>
              </button>
            </Link>
          </motion.div>

          {/* Trust Badges / Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex gap-x-12 border-t border-gray-100 pt-8"
          >
            <div>
              <p className="text-2xl font-black text-gray-900">150+</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Pro Athletes
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900">24/7</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Expert Support
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900">Free</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Global Shipping
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Image Section --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="relative h-[500px] md:h-[700px] w-full"
        >
          {/* Main Visual Placeholder */}
          <div className="absolute inset-0 bg-gray-200 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
              alt="High performance athlete training"
              className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            {/* Blue Overlay Tint */}
            <div className="absolute inset-0 bg-[#0A58FF]/5" />
          </div>

          {/* Floating Detail Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -left-10 hidden md:block bg-white p-6 shadow-2xl max-w-[240px] z-20"
          >
            <p className="text-[10px] text-[#0A58FF] font-black uppercase tracking-[0.2em] mb-2">
              Editor's Choice
            </p>
            <h3 className="font-black text-gray-900 leading-tight uppercase mb-4">
              AURA Pro-Carbon Running Series
            </h3>
            <Link
              href="/products/running"
              className="text-xs font-bold border-b-2 border-[#0A58FF] pb-1 hover:text-[#0A58FF] transition-colors"
            >
              Explore Tech
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gray-200 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
