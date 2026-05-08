"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext"; // Ensure this path is correct
import {
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowRight,
  FiPlus,
  FiMinus,
  FiTrash2,
} from "react-icons/fi";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

const PRODUCT_CATEGORIES = [
  { name: "Men", href: "/products/men" },
  { name: "Women", href: "/products/women" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  // Destructure from Context
  const {
    cart,
    total,
    itemAmount,
    isOpen,
    setIsOpen,
    increaseAmount,
    decreaseAmount,
    removeFromCart,
  } = useCart();

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const sidebarVariants = {
    closed: { x: "100%" },
    open: { x: 0 },
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm font-sans">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* --- 1. Logo Section --- */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="https://i.postimg.cc/k5Ksz546/aura.png"
                alt="AURA Logo"
                className="h-7 w-auto object-contain"
              />
            </Link>
          </div>

          {/* --- 2. Desktop Navigation --- */}
          <ul className="hidden lg:flex items-center gap-x-10 uppercase text-xs font-bold tracking-widest text-gray-800">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[#0A58FF]"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li
              className="relative h-full py-2 cursor-pointer group"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <Link
                href={"/products"}
                className="flex items-center gap-x-1 transition-colors group-hover:text-[#0A58FF]"
              >
                Products
                <motion.div animate={{ rotate: isProductsHovered ? 180 : 0 }}>
                  <FiChevronDown size={16} />
                </motion.div>
              </Link>

              <AnimatePresence>
                {isProductsHovered && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute left-0 mt-4 w-56 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50"
                  >
                    {PRODUCT_CATEGORIES.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-6 py-3 text-[11px] text-gray-700 hover:bg-gray-50 hover:text-[#0A58FF] transition-colors border-b border-gray-50 last:border-none"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* --- 3. Cart Trigger --- */}
          <div className="flex items-center gap-x-2">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-3 group outline-none"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiShoppingBag
                  size={24}
                  strokeWidth={1.5}
                  className="text-gray-900 transition-colors group-hover:text-[#0A58FF]"
                />
                {itemAmount > 0 && (
                  <span className="absolute top-2 right-1.5 bg-[#0A58FF] text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                    {itemAmount}
                  </span>
                )}
              </motion.div>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-900 p-2"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- 4. Cart Sidebar --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-[60]"
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ type: "tween", duration: 0.35, ease: "circOut" }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Your Bag ({itemAmount})
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Cart Content - Scrollable area */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length > 0 ? (
                  <div className="flex flex-col gap-y-6">
                    {cart.map((item) => (
                      <div
                        key={`${item.id}-${item.selectedSize}`}
                        className="flex gap-x-4 border-b border-gray-50 pb-6"
                      >
                        <div className="w-20 h-24 bg-gray-100 flex-shrink-0">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-[13px] font-bold uppercase tracking-tight">
                              {item.name}
                            </h3>
                            <button
                              onClick={() =>
                                removeFromCart(item.id, item.selectedSize)
                              }
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </div>
                          <p className="text-[10px] text-gray-500 uppercase font-bold mb-3 tracking-widest">
                            Size: {item.selectedSize}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center border border-gray-200">
                              <button
                                onClick={() =>
                                  decreaseAmount(item.id, item.selectedSize)
                                }
                                className="p-1 hover:bg-gray-100"
                              >
                                <FiMinus size={14} />
                              </button>
                              <span className="px-3 text-xs font-bold">
                                {item.amount}
                              </span>
                              <button
                                onClick={() =>
                                  increaseAmount(item.id, item.selectedSize)
                                }
                                className="p-1 hover:bg-gray-100"
                              >
                                <FiPlus size={14} />
                              </button>
                            </div>
                            <span className="text-sm font-black">
                              {item.price.toLocaleString()} DZD
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <FiShoppingBag size={48} className="text-gray-200 mb-4" />
                    <p className="text-gray-500 font-medium">
                      Your cart is currently empty.
                    </p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="mt-6 px-8 py-3 bg-[#0A58FF] text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors"
                    >
                      Start Shopping
                    </button>
                  </div>
                )}
              </div>

              {/* Footer Section */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Subtotal
                    </span>
                    <span className="text-xl font-black">
                      {total.toLocaleString()} DZD
                    </span>
                  </div>
                  <Link
                    href={"/checkout"}
                    className="w-full bg-black text-white py-4 font-bold uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-x-2 hover:bg-gray-900 transition-all"
                  >
                    Checkout Now <FiArrowRight />
                  </Link>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- 5. Mobile Nav Menu --- (Unchanged logic, just ensure links work) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full w-full max-w-xs bg-white p-8 z-50 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <img
                  src="https://i.postimg.cc/k5Ksz546/aura.png"
                  alt="AURA"
                  className="h-6"
                />
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <FiX size={28} />
                </button>
              </div>
              <ul className="flex flex-col gap-y-6 uppercase text-lg font-bold tracking-tighter text-gray-900">
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.name}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
                <li className="pt-6 border-t border-gray-100">
                  <p className="text-[#0A58FF] text-xs tracking-widest mb-4">
                    PRODUCTS
                  </p>
                  <ul className="grid grid-cols-1 gap-y-4 text-base font-medium text-gray-600 capitalize">
                    {PRODUCT_CATEGORIES.map((item) => (
                      <li
                        key={item.name}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
