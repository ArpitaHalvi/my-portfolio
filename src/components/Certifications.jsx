import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const credentials = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2025",
  },
  {
    title: "Advanced React Architecture Frameworks",
    issuer: "Meta Credentials",
    date: "2025",
  },
  {
    title: "Enterprise Spring Cloud Ecosystems",
    issuer: "Pivotal / VMware",
    date: "2024",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Achievements & Validation
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {credentials.map((cred, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl bg-[#121225]/40 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-3 text-white/5 group-hover:text-cyan-400/10 transition-colors">
              <Award size={64} />
            </div>
            <CheckCircle2 className="text-cyan-400 mb-4" size={20} />
            <h3 className="text-lg font-bold text-gray-100 mb-2 leading-snug">
              {cred.title}
            </h3>
            <div className="text-xs text-gray-400 font-mono">{cred.issuer}</div>
            <div className="text-[10px] text-gray-500 font-mono mt-4">
              VALID_UNTIL // {cred.date}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
