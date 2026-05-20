import { motion } from "framer-motion";
import { ArrowUpRight, Code, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Tech Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-mono tracking-wider"
        >
          <Cpu size={16} className="animate-pulse" />
          <span>READY FOR DEPLOYMENT // 2026</span>
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Engineering Scalable <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 drop-shadow-sm">
            Digital Architecture
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-400 text-base sm:text-xl mb-10 leading-relaxed"
        >
          I am a Full-Stack Software Developer building highly
          performance-optimized web systems, interactive user interfaces, and
          robust multi-tenant cloud ecosystems.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Explore Projects</span>
            <ArrowUpRight
              size={18}
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-medium hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
          >
            <Code size={18} />
            <span>Contact Core</span>
          </a>
        </motion.div>
      </div>

      {/* Abstract Grid Mesh Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[700px] h-[700px] border border-dashed border-white/5 rounded-full pointer-events-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
}
