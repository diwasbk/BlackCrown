"use client";
import { useState, useEffect } from "react";

export default function ContactSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="w-full min-h-screen bg-black text-white relative overflow-hidden flex items-center pt-24 pb-16 md:py-28 lg:py-20">

            {/* Background Premium Ambient Glow Elements */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-gray-950 to-black pointer-events-none" />
            <div className={`absolute top-1/4 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none transition-opacity duration-1000 ${isMounted ? "opacity-100 animate-[pulse_6s_ease-in-out_infinite]" : "opacity-0"}`} />
            <div className={`absolute bottom-10 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none transition-opacity duration-1000 ${isMounted ? "opacity-100 animate-[pulse_8s_ease-in-out_infinite]" : "opacity-0"}`} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">

                    {/* LEFT SIDE: DESIGN SYSTEM TEXT SYSTEM */}
                    <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 justify-center lg:justify-start">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
                            <span className="text-xs font-semibold text-yellow-400 uppercase tracking-widest">
                                Project Initiation
                            </span>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping lg:hidden" />
                        </div>

                        <h1
                            className={`text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none transform transition-all duration-700 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{
                                fontFamily: "var(--font-bebas-neue)",
                                letterSpacing: "0em"
                            }}
                        >
                            Let&apos;s Build <br />
                            <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                                Something Real
                            </span>
                        </h1>

                        <p className={`text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-150 ${isMounted ? "opacity-100" : "opacity-0"}`}>
                            Drop your assets or specify project constraints below. Our production framework maps straight to performance metrics to capture your digital authority.
                        </p>

                        {/* Direct Channel - Now fully optimized to stack beautifully on mobile */}
                        <div className={`pt-6 border-t border-zinc-900/60 max-w-md mx-auto lg:mx-0 transition-all duration-700 delay-300 ${isMounted ? "opacity-100" : "opacity-0"}`}>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Direct Channel</p>
                            <a 
                                href="mailto:client.blackcrown@gmail.com"
                                className="inline-block text-xs sm:text-sm font-black text-white tracking-wide hover:text-yellow-400 transition-colors duration-200"
                            >
                                client.blackcrown@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE: PREMIUM FIELD FORMS */}
                    <div className={`lg:col-span-7 transform transition-all duration-700 delay-100 w-full max-w-2xl mx-auto lg:max-w-none ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="relative">
                            {/* Outer Glass Card Container */}
                            <div className="absolute inset-0 rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 to-gray-900/50 shadow-2xl shadow-black/80" />

                            {/* Inner Focus Glow Highlight Overlay */}
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-yellow-400/5 via-transparent to-transparent opacity-40 pointer-events-none" />

                            <form className="relative p-5 sm:p-10 lg:p-12 space-y-5 sm:space-y-6 bg-transparent rounded-2xl border border-zinc-900/80">
                                {/* Responsive Fields Row (Name & Email) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-zinc-900/20 border border-zinc-800/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-hidden focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/10 transition-all duration-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-zinc-900/20 border border-zinc-800/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-hidden focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="(555) 000-0000"
                                        className="w-full bg-zinc-900/20 border border-zinc-800/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-hidden focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/10 transition-all duration-300"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Project Brief / Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell us about your properties or brand deployment specifications..."
                                        className="w-full bg-zinc-900/20 border border-zinc-800/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-hidden focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/10 transition-all duration-300 resize-none"
                                    />
                                </div>

                                {/* Submittal Action CTA Trigger */}
                                <button
                                    type="submit"
                                    className="w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer select-none active:scale-98 bg-yellow-400 text-black lg:hover:bg-yellow-300 lg:hover:shadow-lg lg:hover:shadow-yellow-400/20"
                                >
                                    <span>Send Inquiry</span>
                                    <svg
                                        className="w-4 h-4 lg:group-hover/btn:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.5}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}