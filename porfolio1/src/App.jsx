import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './sections/hero/hero.jsx';
import Contact from './sections/contact/contact.jsx';
import GestureSection from './sections/ia/ia.jsx';
import AboutSection from './sections/about/about.jsx';
import Projects from './sections/project/project.jsx';
import CustomCursor from './components/cursor.jsx';
import Vision from './sections/vision/vision.jsx';

// import TechRibbon from './sections/project/banderol.jsx';
// import SkillsSection from './sections/skills/skills.jsx';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Vision />
      {/* <SkillsSection/> */}
      <Projects />

      <Contact />
      <CustomCursor />

    </div>
  );
}

export default App;
