import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const positions = [
  {
    role: "Software Developer",
    company: "Vipprow",
    period: "March 2026 - Present",
    tags: [
      "Next.js",
      "React JS",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    details:
      "I have successfully created four landing pages from scratch, each designed with a focus on responsive layouts, modern UI/UX practices, and performance optimization. Additionally, I collaborated with another team member to build a full website, contributing to both the front-end architecture and integration of dynamic features.Beyond web development, I also developed a mobile application using React Native with Expo CLI, ensuring cross-platform compatibility, smooth navigation, and an intuitive user interface. This project highlights my ability to work across both web and mobile ecosystems, leveraging modern frameworks to deliver scalable solutions.",
  },
  {
    role: "Frontend Mobile Developer",
    company: "Starial",
    period: "June 2025 - Oct 2025",
    details:
      "Developed the complete mobile application UI for Starial using Flutter, focusing on responsive design, smooth user experience, and modern interface architecture. Integrated REST APIs for dynamic data handling and implemented reusable components to ensure scalability and maintainability. Collaborated on creating high-performance mobile screens with clean state management and optimized frontend workflows.",
    tags: ["Flutter", "MySQL"],
  },
  {
    role: "Full-Stack Web Development Intern",
    company: "Starial",
    period: "March 2025 - May 2025",
    details:
      "Worked on the development of Starial’s web platform by building responsive and modern user interfaces along with backend integration. Developed scalable frontend components, integrated APIs, and contributed to creating a seamless user experience across the application. Gained hands-on experience in full-stack development, database connectivity, and optimizing application performance using modern web technologies.",
    tags: ["React JS", "Node.js", "Express", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-card-dark/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {positions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 group"
            >
              {/* Timeline Indicator Node Pin */}
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-bg-dark border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-300 z-10" />

              {/* Absolute side date element block on medium viewports */}
              <div className="hidden md:block absolute -left-36 top-1 text-sm font-mono text-gray-500 w-24 text-right">
                {item.period}
              </div>

              <div className="p-6 rounded-xl bg-[#121225]/50 border border-white/5 hover:border-white/10 transition-colors">
                <span className="md:hidden block text-xs font-mono text-cyan-400 mb-1">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-gray-100 flex items-center space-x-2">
                  <Briefcase size={16} className="text-blue-400" />
                  <span>{item.role}</span>
                </h3>
                <h4 className="text-sm font-mono text-gray-400 mt-1 mb-3">
                  {item.company}
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/5 text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
