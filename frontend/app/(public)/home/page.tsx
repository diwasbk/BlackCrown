"use client";
import NavBar from "../_components/navbar";
import PackageSection from "../_components/package-section";
import FeatureSection from "./_components/feature-section";
import HeroSection from "./_components/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar/>
      <HeroSection/>
      <FeatureSection/>
      <PackageSection/>
    </div>
  );
}