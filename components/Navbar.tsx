"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/#featured" },
  { label: "Sell", href: "/#stats" },
  { label: "Rent", href: "/#featured" },
  { label: "About Us", href: "/#stats" },
  { label: "Contact", href: "/#cta" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 border-b border-gray-100 shadow-sm py-3 backdrop-blur-md"
          : "absolute bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 group">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className={cn(
                  "transition-colors duration-300",
                  scrolled ? "text-gray-900" : "text-white"
                )}
              >
                <path
                  d="M14 2L2 10V26H10V18H18V26H26V10L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  fill="none"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <path
                  d="M8 14L14 9L20 14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={cn(
                  "text-xl font-bold tracking-tight transition-colors duration-300",
                  scrolled ? "text-gray-900" : "text-white"
                )}
              >
                Realteek
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-xs font-semibold uppercase tracking-wider transition-colors duration-300 hover:scale-102",
                  scrolled
                    ? "text-gray-500 hover:text-gray-900"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex">
            <Button
              variant="outline"
              className={cn(
                "rounded-full px-6 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm",
                scrolled
                  ? "border-gray-200 bg-gray-50 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-gray-900"
              )}
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden transition-colors duration-300",
              scrolled ? "text-gray-900" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 border-b border-gray-100 py-6 px-6 shadow-xl backdrop-blur-lg md:hidden animate-fade-in-down">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm font-semibold text-gray-700 hover:text-gray-900 py-1.5 border-b border-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                className="w-full rounded-full bg-gray-900 text-white hover:bg-gray-800 text-xs font-semibold py-5 uppercase tracking-wider"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
