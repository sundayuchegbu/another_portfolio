import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Contact />
    </Layout>
  );
}
