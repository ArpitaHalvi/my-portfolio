import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Projects Completed" },
  // { value: "99.8%", label: "Application Uptime" },
  // { value: "15+", label: "Enterprise Clients" },
  { value: "50K+", label: "Lines of Code" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-card-dark/40 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
