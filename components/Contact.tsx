"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FiArrowRight,
  FiMapPin,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("TRANSMISSION SUCCESSFUL", {
        description: "Elite support will contact you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <main
      id="contact"
      className="bg-[#fafafa] text-gray-900 font-sans py-24 lg:py-40 overflow-hidden"
    >
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: "0px",
            background: "#000",
            border: "1px solid #333",
          },
        }}
      />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left Side: Info */}
          <div className="lg:col-span-5">
            <motion.p
              custom={0}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#0A58FF] font-black tracking-[0.5em] uppercase text-[10px] mb-6"
            >
              Support & Inquiries
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10"
            >
              Get In <br />{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px #111" }}
              >
                Touch
              </span>
            </motion.h1>

            <motion.div
              custom={2}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12 mt-16"
            >
              {[
                {
                  icon: FiMail,
                  label: "Email",
                  val: "performance@aurasports.com",
                },
                {
                  icon: FiMapPin,
                  label: "HQ",
                  val: "124 Elite Avenue, NY 10001",
                },
                {
                  icon: FiMessageSquare,
                  label: "Live Chat",
                  val: "Mon-Fri, 9am - 5pm EST",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <item.icon size={20} className="text-[#0A58FF] mt-1" />
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-tight group-hover:text-[#0A58FF] transition-colors cursor-default">
                      {item.val}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            custom={3}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-16 border border-gray-100 shadow-2xl shadow-gray-200/50"
            >
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div className="relative border-b border-gray-200 focus-within:border-[#0A58FF] transition-colors pb-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-none px-0 py-2 text-sm font-bold uppercase focus:ring-0 outline-none placeholder:text-gray-200"
                    placeholder="John Doe"
                  />
                </div>
                <div className="relative border-b border-gray-200 focus-within:border-[#0A58FF] transition-colors pb-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-none px-0 py-2 text-sm font-bold uppercase focus:ring-0 outline-none placeholder:text-gray-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-10 relative border-b border-gray-200 focus-within:border-[#0A58FF] transition-colors pb-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                  Inquiry Type
                </label>
                <select className="w-full bg-transparent border-none px-0 py-2 text-sm font-bold uppercase focus:ring-0 outline-none appearance-none cursor-pointer">
                  <option>Order Support</option>
                  <option>Product Information</option>
                  <option>Elite Partnerships</option>
                </select>
              </div>

              <div className="mb-12 relative border-b border-gray-200 focus-within:border-[#0A58FF] transition-colors pb-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-none px-0 py-2 text-sm font-bold uppercase focus:ring-0 outline-none resize-none placeholder:text-gray-200"
                  placeholder="How can we help you dominate?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-4 py-6 bg-black text-white font-black uppercase text-[11px] tracking-[0.3em] hover:bg-[#0A58FF] transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Transmitting..." : "Send Message"}
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
