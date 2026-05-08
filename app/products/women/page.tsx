"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";

const CATEGORIES = ["All", "Running", "Bodybuilding"];

const WomenPage = () => {
  const [activeCat, setActiveCat] = useState("All");
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const genderMatch = p.gender === "Women" || p.gender === "Unisex";
      const catMatch = activeCat === "All" || p.category === activeCat;
      return genderMatch && catMatch;
    });
  }, [activeCat]);

  return (
    <main className="bg-white min-h-screen pt-24 pb-20 font-sans">
      <section className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-12">
        <p className="text-[#0A58FF] font-bold tracking-[0.4em] uppercase text-[10px] mb-2">
          Elite Apparel
        </p>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
          Women's{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1.5px #111" }}
          >
            Collection
          </span>
        </h1>
      </section>

      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-y border-gray-100 mb-12">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-y-2">
            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
              Filter by Sport
            </span>
            <div className="flex gap-x-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all ${
                    activeCat === cat
                      ? "text-[#0A58FF]"
                      : "text-gray-900 hover:text-[#0A58FF]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-gray-400">
            <FiSearch size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {filteredProducts.length} Results
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-4">
                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </Link>

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-4 border-t border-gray-100">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-3 text-gray-400 text-center">
                      Quick Add
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => addToCart(product, size)}
                          className="text-[10px] font-bold border border-gray-200 hover:border-[#0A58FF] hover:text-[#0A58FF] px-2 py-1 transition-colors min-w-[32px]"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-sm font-black uppercase tracking-tight text-gray-900 group-hover:text-[#0A58FF] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                      {product.category}
                    </p>
                  </Link>
                  <span className="text-sm font-bold text-gray-900">
                    {product.price.toLocaleString()} DZD
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
};

export default WomenPage;
