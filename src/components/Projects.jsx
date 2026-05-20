import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, X, ChevronRight } from "lucide-react";

const mockProjects = [
  {
    id: 1,
    title: "SaaS Multi-Tenant Cloud ERP",
    description:
      "Enterprise-grade micro-tenant architecture built for handling high concurrency scale distributions securely.",
    tags: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "DeFi High-Frequency Terminal",
    description:
      "Real-time liquidity pooling dashboard tracking asset streams across cryptographic decentralized ecosystems.",
    tags: ["React Native", "Expo", "Tailwind", "D3.js"],
    heroImage:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Production Deployments
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#121225]/40 border border-white/5 rounded-2xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/5 text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Layers size={16} />
                  <span>View Blueprints</span>
                </button>
                <a
                  href="#live"
                  className="p-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pop-up Window Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Window Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-[#121225] border border-white/10 w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl z-10 overflow-y-auto"
            >
              {/* Window Header */}
              <div className="sticky top-0 bg-[#121225] border-b border-white/10 px-6 py-4 flex items-center justify-between z-20">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-gray-500 pl-2">
                    System // Viewport_Explorer.sh
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Core Body Content */}
              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Simulated Screen Sub-pages Gallery */}
                <div className="space-y-6">
                  <h4 className="text-sm uppercase font-mono tracking-widest text-cyan-400 flex items-center">
                    <ChevronRight size={16} /> Internal Interface Views
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="border border-white/5 rounded-xl overflow-hidden bg-slate-900 group relative"
                      >
                        <img
                          src={img}
                          alt={`Screen View ${i}`}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-mono text-white">
                          Viewpage Context Layout 0{i + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
