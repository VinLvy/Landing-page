import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Projects />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
