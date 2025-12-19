"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image 
            src="/yaib_prod_icon_removebg_preview.png" 
            alt="Yaiba Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold tracking-wide text-white">YAIBA</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/team" className="hover:text-white transition">Team</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Hamburger */}
        <button 
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10 flex flex-col px-6 py-2 gap-2">
          <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
          <Link href="/team" className="text-gray-300 hover:text-white transition">Team</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition">Projects</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
