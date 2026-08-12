import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

const App = () => {
  return (
    <div className="app">
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Portfolio Content */}
      <div className="portfolio-content">
        <Header />

        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Resume />
          <Testimonials />
          <Blog />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;