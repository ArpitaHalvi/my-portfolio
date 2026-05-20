import { motion } from "framer-motion";
import { Send, Mail, MapPin, ShieldAlert } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Initialize Connection
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Info Grid Block */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 rounded-2xl bg-[#121225]/40 border border-white/5">
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2 text-cyan-400">
              <span>Core Terminal Info</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Drop an initialized payload message to map out collaborative
              pipelines, discuss multi-tenant deployments, or contract technical
              architecture consults.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300 font-mono">
                  core@dev-architecture.io
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300 font-mono">
                  Remote Deployment // Global Hub
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 text-yellow-400/90 text-xs flex items-start space-x-2">
            <ShieldAlert size={16} className="shrink-0 mt-0.5" />
            <span>
              Encrypted endpoint: Payload packets sent through this form pass
              securely into structured developer queues.
            </span>
          </div>
        </div>

        {/* Input Form Fields Box */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 p-8 rounded-2xl bg-[#121225]/40 border border-white/5"
        >
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">
                  Sender Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                  placeholder="e.g. Linus Torvalds"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">
                  Return Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                  placeholder="e.g. linus@kernel.org"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">
                Payload Packet Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                placeholder="Detail project specifications or engagement parameters here..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold hover:opacity-95 transition-opacity flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/10"
            >
              <Send size={16} />
              <span>Dispatch System Payload</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
