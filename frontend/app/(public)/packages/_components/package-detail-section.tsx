"use client";
import { motion } from "framer-motion";
import { packages } from "@/lib/_content";
import { notFound } from "next/navigation";

export default function PackageDetailSection({ slug }: { slug: string }) {
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="bg-black text-white px-6 pb-8">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">
            {pkg.tagline}
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            {pkg.name} <span className="text-white">Package</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl">
            {pkg.description}
          </p>
        </motion.div>

        {/* Pricing & Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-3xl sticky top-24">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-2">Investment</p>
              <div className="text-4xl font-black text-white mb-6">{pkg.price}</div>
              <button className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition-all active:scale-95 cursor-pointer">
                Book This Package
              </button>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-gray-400 text-sm mb-1">Estimated Delivery</p>
                <p className="text-white font-bold">{pkg.deliveryTime}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="bg-gray-900/30 border border-gray-800 p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
                Package Highlights
              </h3>
              <ul className="space-y-6">
                {pkg.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 bg-yellow-400/10 p-1 rounded-full">
                      <svg className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-300 leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}