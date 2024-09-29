import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Project from './components/project/Project';
import Tool from './components/tool/Tool';
import Footer from './components/footer/Footer';

const App = () => {
  React.useEffect(() => {
    document.title = 'Genesis Gallardo';
  }, []);

  return (
    <div className="App">
      <Hero name="Genesis Gallardo" title="Fullstack Developer" />
      <About />
      <Experience />
      <Skill />
      <Tool />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
