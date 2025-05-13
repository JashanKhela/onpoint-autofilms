"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-zinc-800 sticky top-0 z-50">
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
        <nav className="hidden md:flex items-center gap-8 text-lg font-bold">
          <Link
            href="/about"
            className="text-white hover:text-neon-pink transition-colors "
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-white  hover:text-neon-pink transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/gallery"
            className="text-white  hover:text-neon-pink transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/contact"
            className="text-white  hover:text-neon-pink transition-colors"
          >
            Contact Us
          </Link>
          <a
            href="tel:1234567890"
            className="ml-2 text-lg px-4 py-2 border-2 border-neon-pink text-neon-pink rounded-md hover:bg-neon-teal hover:border-black hover:text-black transition-colors"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-pink"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="text-white w-7 h-7" />
            ) : (
              <Menu className="text-white w-10 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur border-t border-zinc-800 px-6 py-6 space-y-6 text-xl md:hidden">

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-neon-pink transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-neon-pink transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-neon-pink transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-neon-pink transition-colors"
          >
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
