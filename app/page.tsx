import Hero from "../components/Hero";
import MotionProvider from "../components/MotionProvider";
import Navbar from "../components/Navbar";
import { About, Awards, Contact, Experience, Footer, Projects, Skills } from "../components/Sections";

export default function Home() {
  return (
    <MotionProvider>
      <div className="scene" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
