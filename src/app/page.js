import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
