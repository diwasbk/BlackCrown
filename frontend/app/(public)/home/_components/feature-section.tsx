"use client";
import { useEffect, useState, useRef } from "react";

export default function FeatureSection() {
  const [hasIntersected, setHasIntersected] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          // Stop observing once triggered so animation doesn't reset when scrolling away
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.1, // Triggers when 10% of the section is visible
        rootMargin: "0px 0px -50px 0px" // Slightly offsets trigger for a better natural feel
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "4K Cinematic",
      description: "Professional-grade 45-60s videos",
      icon: (
        <svg
          className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Scripts Included",
      description: "We tell you exactly what to say",
      icon: (
        <svg
          className="w-8 h-8 transform group-hover:rotate-6 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Tailored Content",
      description: "For real estate, branding & social",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-400 transform group-hover:scale-110 transition duration-300"
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
      ),
    },
    {
      title: "Quick Turnaround",
      description: "Delivered in 3-5 business days",
      icon: (
        <svg
          className="w-8 h-8 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background - transparent */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Subtle accent patterns */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Grid of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out transform ${hasIntersected
                  ? "opacity-100 translate-y-0 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/5"
                  : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-md rounded-2xl border border-gray-700/30 group-hover:border-yellow-400/40 transition-all duration-300" />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative p-8 text-center">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gray-800/30 backdrop-blur-md border border-gray-700/40 group-hover:bg-yellow-400/20 group-hover:border-yellow-400/50 transition-all duration-300 text-yellow-400">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}