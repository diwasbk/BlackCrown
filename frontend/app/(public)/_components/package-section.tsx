"use client";
import { packages } from "@/lib/_content";
import { useEffect, useState, useRef } from "react";

export default function PackageSection() {
  const [hasIntersected, setHasIntersected] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.05, // Lowered threshold slightly to guarantee mobile triggering
        rootMargin: "0px 0px -20px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-black pb-12 overflow-hidden">
      {/* Packages Section */}
      <section className="relative">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />
        
        <div className={`absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none ${
          hasIntersected ? "animate-[pulse_6s_ease-in-out_infinite]" : ""
        }`} />
        <div className={`absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none ${
          hasIntersected ? "animate-[pulse_8s_ease-in-out_infinite]" : ""
        }`} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-16 sm:mb-4 text-center">
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
              <div className={`w-2 h-2 bg-yellow-400 rounded-full ${hasIntersected ? "animate-ping" : ""}`} />
              <span className="text-xs font-semibold text-yellow-400 uppercase tracking-widest">
                Pricing Plans
              </span>
              <div className={`w-2 h-2 bg-yellow-400 rounded-full ${hasIntersected ? "animate-ping" : ""}`} />
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight text-white">
              What We{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto px-2">
              Real estate professionals across the US trust us to make their homes look good on camera and online.
            </p>
          </div>

          {/* Responsive Layout Wrapper */}
          <div className="flex overflow-x-auto pt-8 pb-12 px-4 -mx-4 snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible md:pb-0 md:px-0 md:mx-0 scrollbar-none mask-edges">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ease-out transform shrink-0 w-[290px] sm:w-[340px] md:w-auto snap-center flex flex-col ${
                  pkg.highlighted ? "lg:scale-105 z-10" : "z-0"
                } ${
                  hasIntersected
                    ? "opacity-100 translate-y-0 lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-yellow-400/5"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card Background */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
                    pkg.highlighted
                      ? "border border-yellow-400 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 shadow-xl shadow-yellow-400/5"
                      : "border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900/50 lg:group-hover:border-yellow-400/40"
                  }`}
                />

                {/* Hover Glow Accent */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                    pkg.highlighted ? "opacity-20" : "opacity-0 lg:group-hover:opacity-10"
                  } bg-gradient-to-br from-yellow-400/30 via-transparent to-transparent`}
                />

                {/* Recommended Badge */}
                {pkg.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`px-4 py-1 bg-yellow-400 text-black text-[10px] sm:text-xs font-black rounded-full uppercase tracking-widest shadow-md ${
                      hasIntersected ? "animate-bounce [animation-duration:3s]" : ""
                    }`}>
                      Recommended
                    </div>
                  </div>
                )}

                {/* Main Card Content Body */}
                <div className="relative p-6 sm:p-8 lg:p-9 flex flex-col flex-grow min-h-[480px] sm:min-h-[520px]">
                  
                  {/* Package Meta Info */}
                  <div className="mb-6 border-b border-gray-800/60 pb-6">
                    <h3
                      className={`text-2xl sm:text-3xl font-black mb-1 transition-colors duration-300 ${
                        pkg.highlighted ? "text-yellow-400" : "text-white lg:group-hover:text-yellow-400"
                      }`}
                    >
                      {pkg.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-gray-400 mb-4">{pkg.services}</p>

                    <div className="space-y-0.5">
                      <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                        Starting at {pkg.startingPrice}
                      </p>
                      <p
                        className={`text-3xl sm:text-4xl font-black tracking-tight transition-transform duration-300 lg:group-hover:scale-[1.02] origin-left ${
                          pkg.highlighted ? "text-yellow-400" : "text-white"
                        }`}
                      >
                        {pkg.price}
                      </p>
                    </div>
                  </div>

                  {/* Features Bullet List */}
                  <div className="mb-8 flex-grow">
                    <ul className="space-y-3.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <div className="mt-1 flex-shrink-0">
                            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-yellow-400/10 border border-yellow-400/30 lg:group-hover/item:bg-yellow-400/30 lg:group-hover/item:scale-110 transition-all duration-300">
                              <svg
                                className="w-2 h-2 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-400 leading-normal lg:group-hover/item:text-gray-200 transition-colors duration-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA Button */}
                  <button
                    className={`w-full py-3 px-4 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto cursor-pointer select-none active:scale-95 ${
                      pkg.highlighted
                        ? "bg-yellow-400 text-black lg:hover:bg-yellow-300 lg:hover:shadow-lg lg:hover:shadow-yellow-400/20"
                        : "bg-gray-900/80 text-white border border-gray-800 lg:hover:bg-gray-800 lg:hover:border-yellow-400/40"
                    }`}
                  >
                    Explore Package
                    <svg
                      className="w-4 h-4 lg:group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>

                  {/* Decorative Subtle Bottom Line */}
                  <div
                    className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transition-opacity duration-500 ${
                      pkg.highlighted ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Mobile Edge Fading Styles & Scrollbar Hider */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 767px) {
          .mask-edges {
            mask-image: linear-gradient(to right, transparent, white 6%, white 94%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, white 6%, white 94%, transparent);
          }
        }
      `}} />
    </div>
  );
}