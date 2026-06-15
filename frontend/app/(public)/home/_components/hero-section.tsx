"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden">
        {/* Animated Background with Gradient */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${isMounted ? "opacity-100" : "opacity-0"}`}>
          <Image
            src="/images/hero.jpg"
            alt="Studio Background"
            fill
            className="object-cover transition-transform duration-6000 ease-out"
            style={{
              transform: isMounted ? "scale(1)" : "scale(1.08)",
            }}
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black/50"></div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Content - Main Message */}
            <div className="space-y-8">
              {/* Badge */}
              <div 
                className={`inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 w-fit transition-all duration-700 ease-out transform ${
                  isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-yellow-400">
                  Professional Video Production Studio
                </span>
              </div>

              {/* Main Headline */}
              <div 
                className={`space-y-4 transition-all duration-700 delay-150 ease-out transform ${
                  isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {/* HEADLINE */}
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight uppercase tracking-tighter"
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    letterSpacing: "0em",
                  }}
                >
                  <span className="block text-white">
                    Cinematic Content
                  </span>
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                    That Wins & Gets Clients
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed">
                  Cinematic videos that stop the scroll, capture hearts, and
                  drive results. Professional content for agents, brands, and
                  businesses.
                </p>
              </div>

              {/* Quick Stats */}
              <div 
                className={`grid grid-cols-3 gap-6 py-6 transition-all duration-700 delay-300 ease-out transform ${
                  isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div>
                  <div className="text-3xl font-black text-yellow-400">
                    500+
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Projects Delivered
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-black text-yellow-400">98%</div>
                  <p className="text-sm text-gray-400 mt-1">
                    Client Satisfaction
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-black text-yellow-400">
                    50M+
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Views & Conversions
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-500 ease-out transform ${
                  isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Link
                  href="/packages"
                  className="group inline-flex items-center justify-center space-x-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-yellow-400/20"
                >
                  <span>Explore Packages</span>
                  <svg
                    className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition duration-300 transform hover:scale-105 active:scale-95"
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Watch Portfolio</span>
                </Link>
              </div>
            </div>

            {/* Right Content - Visual Feature Grid */}
            <div 
              className={`hidden lg:grid grid-cols-2 gap-3 h-fit transition-all duration-1000 delay-400 ease-out transform ${
                isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {/* Feature Cards */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 border border-yellow-400/20 rounded-lg p-3 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/5 group">
                <div className="w-7 h-7 bg-yellow-400/20 rounded flex items-center justify-center mb-2 group-hover:bg-yellow-400/30 transition duration-300">
                  <svg
                    className="w-3.5 h-3.5 text-yellow-400 transform group-hover:scale-110 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-white mb-0.5">
                  4K Cinematic
                </h3>
                <p className="text-xs text-gray-400">
                  Professional-grade 45-60s videos
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 border border-yellow-400/20 rounded-lg p-3 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/5 group">
                <div className="w-7 h-7 bg-yellow-400/20 rounded flex items-center justify-center mb-2 group-hover:bg-yellow-400/30 transition duration-300">
                  <svg
                    className="w-3.5 h-3.5 text-yellow-400 transform group-hover:rotate-12 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-white mb-0.5">
                  Scripts Included
                </h3>
                <p className="text-xs text-gray-400">
                  We tell you exactly what to say
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 border border-yellow-400/20 rounded-lg p-3 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/5 group">
                <div className="w-7 h-7 bg-yellow-400/20 rounded flex items-center justify-center mb-2 group-hover:bg-yellow-400/30 transition duration-300">
                  <svg
                    className="w-3.5 h-3.5 text-yellow-400 transform group-hover:scale-110 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-white mb-0.5">
                  Tailored Content
                </h3>
                <p className="text-xs text-gray-400">
                  For real estate, branding & social
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 border border-yellow-400/20 rounded-lg p-3 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/5 group">
                <div className="w-7 h-7 bg-yellow-400/20 rounded flex items-center justify-center mb-2 group-hover:bg-yellow-400/30 transition duration-300">
                  <svg
                    className="w-3.5 h-3.5 text-yellow-400 transform group-hover:scale-110 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-white mb-0.5">
                  Quick Turnaround
                </h3>
                <p className="text-xs text-gray-400">
                  Delivered in 3-5 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}