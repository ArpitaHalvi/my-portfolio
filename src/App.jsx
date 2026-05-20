import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Clients from "./components/Clients";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-gray-100 relative tech-grid selection:bg-cyan-500 selection:text-slate-900">
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[120vh] right-1/4 w-125 h-125 bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[100vh] left-1/3 w-150 h-150 bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" /> */}

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Clients />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
