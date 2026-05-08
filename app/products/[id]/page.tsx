"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  FiArrowLeft,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiAlertCircle,
} from "react-icons/fi";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useCart();

  // Find the product based on URL ID
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-60 text-center flex flex-col items-center gap-4">
        <FiAlertCircle size={40} className="text-gray-200" />
        <h2 className="text-xl font-black uppercase tracking-tighter">
          Product not found
        </h2>
        <button
          onClick={() => router.push("/products")}
          className="text-[#0A58FF] text-xs font-bold uppercase underline"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-20 font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-12 hover:text-[#0A58FF] transition-colors"
        >
          <FiArrowLeft /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Image */}
          <div className="bg-gray-50 aspect-[4/5] overflow-hidden">
            <img
              src={product.img}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              alt={product.name}
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <p className="text-[#0A58FF] font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
              {product.category} // {product.gender}
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-gray-900">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-gray-900 mb-8">
              {product.price.toLocaleString()} DZD
            </p>

            <hr className="border-gray-100 mb-8" />

            {/* Size Selection */}
            <div className="mb-10">
              <div className="flex justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Select Size
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A58FF] underline cursor-pointer">
                  Size Guide
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 text-[11px] font-bold border transition-all ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-200 text-gray-900 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-6 text-[12px] font-black uppercase tracking-[0.3em] transition-all mb-12 ${
                selectedSize
                  ? "bg-[#0A58FF] text-white hover:bg-black"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {selectedSize ? "Add to Bag" : "Choose a Size First"}
            </button>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              <div className="flex flex-col items-center text-center">
                <FiTruck className="mb-2 text-gray-400" />
                <span className="text-[9px] font-bold uppercase tracking-tight text-gray-500">
                  Fast Delivery
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <FiShield className="mb-2 text-gray-400" />
                <span className="text-[9px] font-bold uppercase tracking-tight text-gray-500">
                  2 Year Warranty
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <FiRefreshCw className="mb-2 text-gray-400" />
                <span className="text-[9px] font-bold uppercase tracking-tight text-gray-500">
                  Easy Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
