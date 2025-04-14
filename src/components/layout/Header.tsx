"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-zinc-800 relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/OnPointAutoFilmsLogo.jpg"
            alt="On Point Auto Films"
            width={250}
            height={200}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-semibold">
          <Link href="/about" className="text-neon-pink hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-neon-pink hover:text-white transition-colors">
            Our Services
          </Link>
          <Link href="/gallery" className="text-neon-pink hover:text-white transition-colors">
            Our Work
          </Link>
          <Link href="/contact" className="text-neon-pink hover:text-white transition-colors">
            Contact Us
          </Link>
          <a
            href="tel:1234567890"
            className="ml-2 text-lg px-4 py-2 border border-neon-pink text-neon-pink rounded-md hover:bg-neon-pink hover:text-black transition-colors"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur border-t border-zinc-800 px-6 py-6 space-y-6 text-xl md:hidden">
          <Link href="/services" onClick={() => setIsOpen(false)} className="block text-neon-pink hover:text-white transition-colors">
            Our Services
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-neon-pink hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="block text-neon-pink hover:text-white transition-colors">
            Our Work
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-neon-pink hover:text-white transition-colors">
            Contact Us
          </Link>

          <a
            href="tel:1234567890"
            className="block text-center px-4 py-2 border border-neon-pink text-neon-pink rounded-md hover:bg-neon-pink hover:text-black transition-colors"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
