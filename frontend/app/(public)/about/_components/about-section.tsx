"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function AboutSection() {
    const [isMounted, setIsMounted] = useState(false);
    const [storyIntersected, setStoryIntersected] = useState(false);
    const [valuesIntersected, setValuesIntersected] = useState(false);

    const storyRef = useRef<HTMLDivElement>(null);
    const valuesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);

        const createObserver = (setIntersected: (val: boolean) => void) => {
            return new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIntersected(true);
                    }
                },
                { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
            );
        };

        const storyObserver = createObserver(setStoryIntersected);
        const valuesObserver = createObserver(setValuesIntersected);

        if (storyRef.current) storyObserver.observe(storyRef.current);
        if (valuesRef.current) valuesObserver.observe(valuesRef.current);

        return () => {
            storyObserver.disconnect();
            valuesObserver.disconnect();
        };
    }, []);

    const coreValues = [
        {
            title: "Cinematic Precision",
            description: "We don't just record video; we compose it. Every frame uses luxury lighting and high-end glass to elevate your brand value.",
            icon: (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "Conversion First",
            description: "Hook-driven pacing tailored for algorithms. We construct visual stories explicitly engineered to keep viewers scrolling and generate inbound leads.",
            icon: (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
        {
            title: "Zero-Friction Execution",
            description: "From scripting templates to professional delivery frames, we provide full creative direction so you know exactly what to say on camera.",
            icon: (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* SECTION 1: ABOUT HERO */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
                {/* Background Layer consistent with Main Hero */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${isMounted ? "opacity-100" : "opacity-0"}`}>
                    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/80 to-black"></div>
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
                        <div className={`w-2 h-2 bg-yellow-400 rounded-full ${isMounted ? "animate-ping" : ""}`} />
                        <span className="text-xs font-semibold text-yellow-400 uppercase tracking-widest">
                            Behind The Lens
                        </span>
                        <div className={`w-2 h-2 bg-yellow-400 rounded-full ${isMounted ? "animate-ping" : ""}`} />
                    </div>

                    {/* Headline */}
                    <h1
                        className={`text-5xl sm:text-7xl lg:text-8xl font-black leading-none uppercase tracking-tighter transition-all duration-700 delay-150 ease-out transform ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                        style={{ fontFamily: "var(--font-bebas-neue)", letterSpacing: "0em", }}
                    >
                        We Build Visual <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                            Authority
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p
                        className={`text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ease-out transform ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                    >
                        We are an elite video production unit engineered for agents, creators, and modern brands.
                        We turn property listings and corporate profiles into high-production cinematic assets.
                    </p>
                </div>
            </section>

            {/* SECTION 2: THE STUDIO MISSION & STORY */}
            <section ref={storyRef} className="relative py-20 border-t border-gray-900 bg-linear-to-b from-black via-gray-950 to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column: Narrative Content */}
                        <div className={`space-y-6 transition-all duration-1000 ease-out transform ${storyIntersected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                            }`}>
                            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                                Our Story: <br />
                                <span className="bg-linear-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                                    Killing the Boring Corporate Video
                                </span>
                            </h2>
                            <div className="space-y-4 text-gray-400 text-base sm:text-lg leading-relaxed">
                                <p>
                                    Founded by a team of filmmakers and commercial marketing strategists, we realized
                                    traditional marketing videos lacked soul. They failed to capture attention, and worse,
                                    failed to close deals.
                                </p>
                                <p>
                                    We changed the game by bringing Hollywood-level composition, fast pacing, and intentional
                                    psychological hooks to social media and digital platforms. Based in the US, our studio handles
                                    everything from creative script outlines to final meticulous multi-platform color grading.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Visual Component Placeholder Container */}
                        <div className={`relative aspect-video rounded-3xl overflow-hidden border border-gray-800 bg-gray-900/40 transition-all duration-1000 delay-200 ease-out transform ${storyIntersected ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                            }`}>
                            <Image
                                src="/images/studio-setup.jpg" // Swap with actual team/studio image asset
                                alt="Our Production Setup"
                                fill
                                className="object-cover opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>

                            {/* Overlay Callout box matching card designs */}
                            <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4">
                                <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-1">Our Objective</p>
                                <p className="text-sm text-gray-200 font-medium">Maximize retention, establish perceived premium value, and capture clean high-intent leads.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 3: CORE PRINCIPLES / STRATEGY */}
            <section ref={valuesRef} className="relative bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl sm:text-6xl font-black mb-4 uppercase tracking-tight text-white">
                            Why Brands <br className="sm:hidden" />
                            <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                                Choose Us
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg">
                            We separate your content from standard mobile point-and-shoot footage through structural, high-fidelity visual principles.
                        </p>
                    </div>

                    {/* Principles Responsive Grid matching Package layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className={`group relative flex flex-col p-6 sm:p-8 rounded-3xl transition-all duration-700 ease-out transform bg-linear-to-br from-gray-950 to-gray-900/40 border border-gray-800 lg:hover:border-yellow-400/40 ${valuesIntersected ? "opacity-100 translate-y-0 lg:hover:-translate-y-2" : "opacity-0 translate-y-12"
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {/* Glow Accent */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 lg:group-hover:opacity-5 bg-linear-to-br from-yellow-400/40 via-transparent to-transparent transition-opacity duration-300 pointer-events-none" />

                                {/* Icon Container */}
                                <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition duration-300">
                                    {value.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                                    {value.title}
                                </h3>

                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}