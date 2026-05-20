import { motion } from "framer-motion";
import { Layout, Server, Database, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: <Layout className="text-blue-400" size={24} />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Flutter",
    ],
  },
  {
    title: "Backend Ecosystem",
    icon: <Server className="text-cyan-400" size={24} />,
    skills: ["Node.js", "Express", "Python", "RESTful APIs"],
  },
  {
    title: "Database",
    icon: <Database className="text-indigo-400" size={24} />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Languages & Tooling",
    icon: <Layers className="text-purple-400" size={24} />,
    skills: ["Java", "Python", "JavaScript", "PHP", "Git / GitHub", "Vercel"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Technical Matrix
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: "rgba(6, 182, 212, 0.4)" }}
            className="p-6 rounded-2xl bg-[#121225]/60 border border-white/5 backdrop-blur-sm transition-colors duration-300 group"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-100">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 font-mono transition-all duration-200 hover:bg-white/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
