import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import ThemeCustomizer from "./components/ThemeCustomizer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Immersive Background Canvas, Cursor, and Panel tools */}
      <CustomCursor />
      <ParticleBackground />
      <ThemeCustomizer />

      {/* Main navigation controls */}
      <Navbar />

      {/* Content wrapper */}
      <main style={{ position: "relative", zIndex: 2 }}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}
