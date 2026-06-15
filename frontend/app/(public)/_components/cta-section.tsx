"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function CTASection() {
  const [hasIntersected, setHasIntersected] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          // Disconnect observer once triggered so animations don't replay on scroll-up
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.15, // Triggers when 15% of the component is visible
        rootMargin: "0px 0px -30px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* CTA Section */}
      <section className="py-16  bg-black overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading Animation */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white transition-all duration-700 ease-out transform ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Ready to Elevate Your Content?
          </h2>

          {/* Paragraph Animation */}
          <p
            className={`text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 transition-all duration-700 ease-out transform ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Let&apos;s create something extraordinary together. Book a
            consultation today.
          </p>

          {/* Button Animation */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Link
              href="/contact"
              className="inline-block bg-yellow-400 text-black px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-yellow-400/20"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}