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
            className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <title>LeetCode</title>
              <path d="M13.483 0a1.39 1.39 0 0 0-.726.233l-9.82 6.33a1.39 1.39 0 0 0-.34 1.956 1.39 1.39 0 0 0 1.957.34l9.82-6.33A1.39 1.39 0 0 0 14.714.57 1.39 1.39 0 0 0 13.483 0zm2.634 3.512a1.39 1.39 0 0 0-1.189.785L10.02 14.516a1.39 1.39 0 0 0 .736 1.845 1.39 1.39 0 0 0 1.845-.736l4.907-10.22a1.39 1.39 0 0 0-.671-1.83 1.39 1.39 0 0 0-.72-.063zm-10.557 6.788a1.39 1.39 0 0 0-1.926.342l-3.32 5.1a1.39 1.39 0 0 0 .343 1.926 1.39 1.39 0 0 0 1.925-.341l3.32-5.1a1.39 1.39 0 0 0-.342-1.927zM22.25 10.422a1.39 1.39 0 0 0-1.874.5l-5.63 9.42a1.39 1.39 0 0 0 .5 1.875 1.39 1.39 0 0 0 1.874-.5l5.63-9.42a1.39 1.39 0 0 0-.5-1.875zm-10.027 7.642a1.39 1.39 0 0 0-1.39 1.39v3.156a1.39 1.39 0 0 0 2.78 0v-3.156a1.39 1.39 0 0 0-1.39-1.39z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
