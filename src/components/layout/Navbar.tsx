"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


export function Navbar() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle visibility (Smart Header)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Determine active link
  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return false;
    }
    return pathname === path;
  };

  const isDark = pathname === "/connect";

  return (
    <>
      {/* ── Announcement Bar ── */}
      {announcementVisible && (
        <div
          className={cn(
            "fixed top-0 left-0 right-0 z-[60] bg-[#00BF63] text-white transition-all duration-500 ease-in-out",
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center relative">
            <p className="text-[13px] font-semibold text-center">
              Want to see what AI automation could save your business?{" "}
              <a
                href="/#calculator"
                className="underline underline-offset-2 font-bold hover:text-white/80 transition-colors"
              >
                Try our free ROI Calculator →
              </a>
            </p>
            <button
              onClick={() => setAnnouncementVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-6 text-white/70 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Main Nav ── */}
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 font-inter border-b transition-all duration-500 ease-in-out",
          isDark
            ? "bg-[#0C0C0C] border-white/10"
            : "bg-white border-gray-100",
          announcementVisible ? "top-[40px]" : "top-0",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-4">
            <Image 
              src={isDark ? "/onyx (black bg).svg" : "/onyx.svg"}
              alt="Onyx Logo" 
              width={112}
              height={112}
              className="h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-[15px] font-semibold transition-colors duration-200",
                isActive("/") ? "text-[#00BF63]" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-[15px] font-semibold transition-colors duration-200",
                isActive("/about") ? "text-[#00BF63]" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
              )}
            >
              About
            </Link>
            <a
              href="/#services"
              className={cn("text-[15px] font-semibold transition-colors duration-200", isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900")}
            >
              Services
            </a>
            <a
              href="/#blueprint"
              className={cn("text-[15px] font-semibold transition-colors duration-200", isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900")}
            >
              Blueprint
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/connect" className={cn("px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-[#00BF63] hover:text-white hover:shadow-lg active:scale-95", isDark ? "bg-white text-black" : "bg-[#0C0C0C] text-white")}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle mobile menu"
            className="lg:hidden flex flex-col space-y-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={cn(
                "block w-6 h-0.5 transition-transform",
                isDark ? "bg-white" : "bg-gray-900",
                mobileMenuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 transition-opacity",
                isDark ? "bg-white" : "bg-gray-900",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 transition-transform",
                isDark ? "bg-white" : "bg-gray-900",
                mobileMenuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden font-inter">
          <button
            type="button"
            aria-label="Close mobile menu"
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className={cn(
              "absolute left-0 right-0 border-t border-gray-100 bg-white/95 backdrop-blur-md shadow-2xl overflow-hidden",
              announcementVisible ? "top-[120px]" : "top-20"
            )}
          >
            <div className="max-h-[70vh] overflow-y-auto px-6 py-8">
              <nav className="flex flex-col gap-6 text-[15px] font-medium tracking-[0.18em] uppercase text-center text-gray-900">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "py-1 transition-colors",
                    isActive("/") ? "text-[#00BF63]" : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "py-1 transition-colors",
                    isActive("/about") ? "text-[#00BF63]" : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  About
                </Link>
                <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-600 hover:text-gray-900">
                  Services
                </a>
                <a href="/#blueprint" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-600 hover:text-gray-900">
                  Blueprint
                </a>
              </nav>

              <div className="pt-6">
                <Link
                  href="/connect"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center w-full bg-[#0C0C0C] text-white px-5 py-3 rounded-none font-semibold tracking-wide transition-colors hover:bg-[#00BF63]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
