"use client";
import CTASection from "../_components/cta-section";
import Footer from "../_components/footer";
import NavBar from "../_components/navbar";
import PackageSection from "../packages/_components/package-section";
import FeatureSection from "./_components/feature-section";
import HeroSection from "./_components/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar/>
      <HeroSection/>
      <FeatureSection/>
      <PackageSection/>
      <CTASection/>
      <Footer/>
    </div>
  );
}