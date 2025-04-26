import React from 'react';
import Hero from './sections/hero/hero.jsx';
import NavBar from './sections/nav/nav-bar.jsx';
import Contact from './sections/contact/contact.jsx';
import GestureSection from './sections/ia/ia.jsx';
import AboutSection from './sections/about/about.jsx';
import Projects from './sections/project/project.jsx';
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutSection />

      <Projects />
      <Contact />
    </div>
  );
}

export default App;