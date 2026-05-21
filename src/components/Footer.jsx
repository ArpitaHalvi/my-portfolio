import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07070d] border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand System Info */}
        <div className="flex items-center space-x-2 text-sm font-mono text-gray-500">
          <Terminal size={16} className="text-cyan-400 uppercase" />
          <span>© 2026 CREATED BY ARPITA HALVI.</span>
        </div>

        {/* Global Developer Social Footprints */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/ArpitaHalvi"
            className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.28 1.23a11.4 11.4 0 0 1 5.97 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/arpita-halvi-488990251"
            className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5h-3.55V9h3.41v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0z" />
            </svg>
          </a>
          <a
            href="https://leetcode.com/u/ArpitaCode/"
            className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-orange-400 transition-all"
          >
            <img
              src="/leetcode-svgrepo-com.svg"
              alt="Leetcode logo"
              className="w-5 h-5 bg-gray-400 p-0.5 rounded-sm"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
