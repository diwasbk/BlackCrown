"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/social-media", label: "Social Media" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/images/logo.jpeg"
                    alt="BLACK CROWN STUDIOS"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-bold text-yellow-400" style={{
                    fontFamily: "var(--font-bebas-neue)",
                    letterSpacing: "0.1em",
                  }}>
                  BLACK CROWN
                </span>
              </Link>
            </div>

            {/* Menu Items (Desktop Only) */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact & CTA (Desktop Only features) */}
            <div className="hidden sm:flex items-center space-x-6">
              <a
                href="tel:+9779876543210"
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm font-medium">+977-9876543210</span>
              </a>
              <Link
                href="/book"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition text-sm"
              >
                Book a Shoot
              </Link>
            </div>

            {/* Mobile Menu Button (Visible only on Mobile/Tablet) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-400 hover:text-yellow-400 focus:outline-none p-2"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  // Close Icon (X)
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-yellow-400/25 px-4 pt-2 pb-6 space-y-3 absolute w-full left-0 transition-all duration-300 ease-in-out">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // close drawer on navigation
                className="block text-gray-300 hover:text-yellow-400 font-medium text-base py-2 border-b border-gray-900"
              >
                {link.label}
              </Link>
            ))}

            {/* Contextual Links inside mobile drawer (For screen sizes missing the desktop header elements) */}
            <div className="pt-4 space-y-4">
              <a
                href="tel:+9779876543210"
                className="flex items-center space-x-2 text-gray-300 sm:hidden"
              >
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm font-medium">+977-9876543210</span>
              </a>
              <Link
                href="/book"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition text-sm"
              >
                Book a Shoot
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
