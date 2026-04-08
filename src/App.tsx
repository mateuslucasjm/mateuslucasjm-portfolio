import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
