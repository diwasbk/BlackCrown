"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerSections = [
    {
      title: "Explore Solutions",
      links: [
        { href: "/services", label: "Our Services" },
        { href: "/listing-media", label: "Listing Media" },
        { href: "/packages", label: "Pricing Packages" },
      ],
    },
    {
      title: "Agency Profile",
      links: [
        { href: "/about", label: "About Our Studio" },
        { href: "/portfolio", label: "Cinematic Works" },
        { href: "/contact", label: "Book Consultation" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM14 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.56 4.2 1.25 1.48 3.12 2.34 5.06 2.45v3.91c-1.4-.24-2.71-.88-3.79-1.84-.73-.65-1.31-1.46-1.72-2.36v7.55c0 1.09-.2 2.18-.61 3.19-.95 2.41-3.1 4.14-5.65 4.53-2.51.42-5.13-.53-6.84-2.43C2.55 17.06 2 14.32 2.92 11.78c.78-2.18 2.61-3.89 4.85-4.47 1.05-.28 2.15-.29 3.21-.05v3.97c-.77-.23-1.6-.19-2.34.12-1.38.56-2.27 2.05-2.11 3.53.15 1.57 1.42 2.85 3 3.01 1.7.19 3.23-.93 3.55-2.6.07-.36.09-.73.09-1.1V0l-.06.02z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#030303] text-gray-400 font-sans border-t border-gray-900/60 overflow-hidden">
      {/* Top ambient luxury lighting streak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/12 w-80 h-80 bg-yellow-400/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Main Grid Section */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-gray-900/40">
          {/* Brand Stack (Spans 4 Columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <Link href="/" className="inline-block group self-start">
              <span className="text-2xl font-black tracking-widest text-yellow-400 group-hover:text-yellow-400 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  letterSpacing: "0.1em",
                }}>
                BLACK CROWN
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed font-normal">
              Premium cinematic solutions and digital authority platforms architected exclusively for elite real estate professionals worldwide.
            </p>
          </div>

          {/* Mapping Dynamic Navigation Columns (Spans 4 Columns total) */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-4">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                  {section.title}
                </span>
                <nav className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xs font-medium text-gray-400 hover:text-yellow-400 hover:pl-2 border-l border-transparent hover:border-yellow-400/30 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Interactive Action Hub (Spans 4 Columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 w-full max-w-md">
            <div>
              <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                Insider Access
              </span>
              <p className="text-xs text-gray-600">
                Receive visual assets strategies directly to your inbox.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center group/form">
              <input
                type="email"
                placeholder="Enter elite professional email"
                className="w-full bg-gray-950/40 border border-gray-900 focus:border-yellow-400 rounded-full px-4 py-3.5 text-xs text-gray-300 placeholder-gray-700 focus:outline-none transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 bg-gray-900 border border-gray-800 hover:border-yellow-400/40 hover:bg-yellow-400 text-gray-400 hover:text-black transition-all duration-300 p-2 rounded-full group/btn cursor-pointer"
              >
                <svg className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Lower Metadata Utility Strip */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright Section */}
          <div className="text-center sm:text-left order-3 sm:order-1">
            <p className="text-xs text-gray-600 tracking-wide">
              &copy; {currentYear} BLACK CROWN STUDIOS. All rights reserved.
            </p>
          </div>

          {/* Micro-Designed Social Grid Items */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-9 h-9 rounded-xl bg-gradient-to-b from-gray-950 to-black border border-gray-900/60 flex items-center justify-center text-gray-500 hover:text-yellow-400 hover:border-yellow-400/20 shadow-sm transition-all duration-300 hover:-translate-y-1"
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Designer signature link */}
          <div className="text-center sm:text-right order-2 sm:order-3">
            <p className="text-xs text-gray-600 tracking-wide">
              Designed and Developed by{" "}
              <a
                href="https://www.codevajra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 font-semibold hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
              >
                CodeVajra
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}