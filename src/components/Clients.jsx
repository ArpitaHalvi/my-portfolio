import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const clients = [
  { name: "Alpha FinTech", industry: "Enterprise Banking" },
  { name: "Omni Retail Inc", industry: "E-Commerce Scaling" },
  { name: "Vertex Health Systems", industry: "Data Analytics" },
  { name: "CloudSync Logistics", industry: "Supply Optimization" },
];

export default function Clients() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="text-center mb-12">
        <h3 className="text-xs uppercase font-mono tracking-widest text-gray-500 flex items-center justify-center space-x-2">
          <ShieldCheck size={14} className="text-cyan-400" />
          <span>Vetted Institutional Alliances</span>
        </h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {clients.map((client, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-[#121225]/30 border border-dashed border-white/10 flex flex-col items-center justify-center text-center group hover:bg-[#121225]/60 hover:border-blue-500/30 transition-all"
          >
            <div className="text-base font-bold text-gray-300 font-mono group-hover:text-white">
              {client.name}
            </div>
            <div className="text-xs text-gray-500 mt-1">{client.industry}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
