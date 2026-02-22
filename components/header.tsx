"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/config";
import { getPhoneUrl } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[1000] border-b border-dark-border backdrop-blur-[20px] transition-all duration-300 ${
          scrolled
            ? "bg-dark-bg/95 shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
            : "bg-dark-bg/85"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
          <a href="#home" className="flex items-center gap-3 no-underline text-white">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center font-black text-lg text-dark-bg">
              HP
            </div>
            <div className="text-[15px] font-bold">
              Hyde Park <span className="text-gold">Central</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-gold text-sm font-medium transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getPhoneUrl()}
              className="bg-gold hover:bg-gold-light text-dark-bg px-5 py-2 rounded-lg font-bold text-sm transition-colors no-underline"
              dir="ltr"
            >
              {siteConfig.phoneDisplay}
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden bg-transparent border-none text-white text-2xl cursor-pointer p-2"
            aria-label="القائمة"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[1001] bg-dark-bg/98 backdrop-blur-[20px] flex flex-col items-center justify-center gap-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 left-6 bg-transparent border-none text-white text-3xl cursor-pointer"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-gold text-xl font-medium transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-white hover:text-gold text-xl font-medium transition-colors no-underline"
          >
            تواصل معنا
          </a>
          <a
            href={getPhoneUrl()}
            className="text-gold text-xl font-medium no-underline"
            dir="ltr"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
      )}
    </>
  );
}
