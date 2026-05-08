"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMapPin,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);

      toast.success("Message Transmitted", {
        description: "Our elite support team will contact you within 24 hours.",
      });

      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <main
      id="contact"
      className="bg-[#fafafa] text-gray-900 font-sans min-h-screen py-20 lg:py-32"
    >
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "0px",
            fontFamily: "inherit",
          },
          className: "uppercase tracking-wide text-xs",
          success: {
            iconTheme: { primary: "#0A58FF", secondary: "#fff" },
          },
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-screen-xl mx-auto px-4 md:px-8"
      >
        {/* --- 1. Centered Header --- */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.p
            variants={fadeInUp}
            className="text-[#0A58FF] font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
          >
            Support & Inquiries
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 text-sm md:text-base leading-relaxed"
          >
            Whether you need gear recommendations, order support, or want to
            discuss elite partnerships, our team is ready to assist.
          </motion.p>
        </div>

        {/* --- 2. Info Cards (Horizontal Row) --- */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white p-8 border border-gray-100 flex flex-col items-center text-center">
            <FiMail size={24} className="text-[#0A58FF] mb-4" />
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-2">
              Email
            </h3>
            <p className="text-gray-500 text-xs">performance@aurasports.com</p>
          </div>
          <div className="bg-white p-8 border border-gray-100 flex flex-col items-center text-center">
            <FiMapPin size={24} className="text-[#0A58FF] mb-4" />
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-2">
              Headquarters
            </h3>
            <p className="text-gray-500 text-xs">124 Elite Avenue, NY 10001</p>
          </div>
          <div className="bg-white p-8 border border-gray-100 flex flex-col items-center text-center">
            <FiMessageSquare size={24} className="text-[#0A58FF] mb-4" />
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-2">
              Live Chat
            </h3>
            <p className="text-gray-500 text-xs">
              Available Mon-Fri, 9am - 5pm EST
            </p>
          </div>
        </motion.div>

        {/* --- 3. The Form (Contained & Focused) --- */}
        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#0A58FF] focus:ring-1 focus:ring-[#0A58FF] transition-all rounded-none"
                  placeholder="JOHN DOE"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#0A58FF] focus:ring-1 focus:ring-[#0A58FF] transition-all rounded-none"
                  placeholder="JOHN@EXAMPLE.COM"
                />
              </div>
            </div>

            {/* Subject Select */}
            <div className="mb-8">
              <label
                htmlFor="subject"
                className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3"
              >
                Inquiry Type
              </label>
              <select
                id="subject"
                className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#0A58FF] focus:ring-1 focus:ring-[#0A58FF] transition-all rounded-none appearance-none cursor-pointer"
              >
                <option value="order">Order Support</option>
                <option value="product">Product Information</option>
                <option value="partnership">Elite Partnerships</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div className="mb-10">
              <label
                htmlFor="message"
                className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-[#0A58FF] focus:ring-1 focus:ring-[#0A58FF] transition-all resize-none rounded-none"
                placeholder="HOW CAN WE HELP YOU DOMINATE?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-x-3 py-5 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-[#0A58FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Transmitting..." : "Send Message"}
              {!isSubmitting && <FiArrowRight size={16} />}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Contact;
