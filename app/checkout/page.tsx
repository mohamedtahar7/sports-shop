"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import {
  FiLock,
  FiChevronRight,
  FiCheckCircle,
  FiTruck,
  FiArrowLeft,
} from "react-icons/fi";
import Link from "next/link";

const CheckoutPage = () => {
  const { cart, total, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent Hydration Mismatch for Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitted(true);
      // We don't clearCart() here so the success page can potentially show order details
      // but you can call clearCart() if you prefer.
    }, 1500);
  };

  if (!mounted) return null;

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-[#0A58FF] rounded-full flex items-center justify-center mx-auto mb-8">
            <FiCheckCircle className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Confirmed.
          </h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-10 leading-relaxed">
            Your order has been placed successfully. Check your email for the
            receipt and tracking number.
          </p>
          <Link
            href="/"
            onClick={() => clearCart()}
            className="inline-block bg-black text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#0A58FF] transition-colors"
          >
            Return to Home
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 font-sans selection:bg-[#0A58FF] selection:text-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* LEFT: FORM SECTION */}
          <div className="w-full lg:w-7/12">
            <header className="mb-12">
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-black mb-8 transition-colors"
              >
                <FiArrowLeft /> Edit Bag
              </Link>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-6">
                Check
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px #111" }}
                >
                  out
                </span>
              </h1>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0A58FF]">
                <FiLock /> Encrypted Secure Transaction
              </div>
            </header>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Shipping Information */}
              <section className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] border-b border-gray-100 pb-4">
                  01. Shipping Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-gray-50 border-none p-5 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-[#0A58FF] outline-none"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-gray-50 border-none p-5 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-[#0A58FF] outline-none"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-50 border-none p-5 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-[#0A58FF] outline-none"
                />
                <input
                  required
                  type="text"
                  placeholder="Street Address"
                  className="w-full bg-gray-50 border-none p-5 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-[#0A58FF] outline-none"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="City"
                    className="w-full bg-gray-50 border-none p-5 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-[#0A58FF] outline-none"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Wilaya"
                    className="w-full bg-gray-50 border-none p-5 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-[#0A58FF] outline-none"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-gray-50 border-none p-5 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-[#0A58FF] outline-none"
                  />
                </div>
              </section>

              {/* Payment Method */}
              <section className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] border-b border-gray-100 pb-4">
                  02. Payment Method
                </h3>
                <div className="border-2 border-black p-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FiTruck size={24} className="text-[#0A58FF]" />
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-widest">
                        Cash on Delivery
                      </p>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                        Pay in DZD when your gear arrives
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border-4 border-[#0A58FF]" />
                </div>
              </section>

              <button
                type="submit"
                disabled={cart.length === 0}
                className="w-full bg-black text-white py-10 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-[#0A58FF] transition-all flex items-center justify-center gap-4 group disabled:bg-gray-100 disabled:text-gray-400"
              >
                Complete Order
                <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <aside className="w-full lg:w-5/12 lg:sticky lg:top-32">
            <div className="bg-gray-50 p-8 md:p-12">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-gray-400">
                In Your Bag ({cart.length})
              </h3>

              <div className="space-y-8 mb-12 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.selectedSize}`}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-6"
                    >
                      <div className="w-24 h-28 bg-white flex-shrink-0 p-2">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center py-1">
                        <h4 className="text-[11px] font-black uppercase tracking-tight mb-1">
                          {item.name}
                        </h4>
                        <p className="text-[9px] text-gray-400 uppercase font-bold tracking-[0.2em] mb-3">
                          Size: {item.selectedSize}{" "}
                          <span className="mx-2">/</span> Qty: {item.amount}
                        </p>
                        <p className="text-xs font-black">
                          {(item.price * item.amount).toLocaleString()} DZD
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="space-y-4 border-t border-gray-200 pt-8">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-black">
                    {total.toLocaleString()} DZD
                  </span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Shipping</span>
                  <span className="text-[#0A58FF]">Free</span>
                </div>
                <div className="flex justify-between text-2xl font-black uppercase tracking-tighter pt-6 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-[#0A58FF]">
                    {total.toLocaleString()} DZD
                  </span>
                </div>
              </div>

              <div className="mt-10 p-5 bg-white border border-gray-100 flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                  Items reserved for 15:00 minutes
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
