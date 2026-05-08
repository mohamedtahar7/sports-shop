"use client";
import React from "react";
import Link from "next/link";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12 font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-y-8">
        {/* --- 1. Brand Logo --- */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://i.postimg.cc/k5Ksz546/aura.png"
            alt="AURA Logo"
            className="h-5 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        </Link>

        {/* --- 2. Minimal Links --- */}
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <li>
            <Link
              href="/shipping"
              className="hover:text-[#0A58FF] transition-colors"
            >
              Shipping
            </Link>
          </li>
          <li>
            <Link
              href="/returns"
              className="hover:text-[#0A58FF] transition-colors"
            >
              Returns
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              className="hover:text-[#0A58FF] transition-colors"
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className="hover:text-[#0A58FF] transition-colors"
            >
              Privacy
            </Link>
          </li>
        </ul>

        {/* --- 3. Socials & Copyright --- */}
        <div className="flex flex-col items-center md:items-end gap-y-4 flex-shrink-0">
          <div className="flex items-center gap-x-6 text-gray-400">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#0A58FF] hover:scale-110 transition-all"
            >
              <FiInstagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#0A58FF] hover:scale-110 transition-all"
            >
              <FiTwitter size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-[#0A58FF] hover:scale-110 transition-all"
            >
              <FiYoutube size={18} strokeWidth={1.5} />
            </a>
          </div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
            &copy; {currentYear} AURA SPORTS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
