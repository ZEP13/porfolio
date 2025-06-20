import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './sections/hero/hero.jsx';
import Contact from './sections/contact/contact.jsx';
import AboutSection from './sections/about/about.jsx';
import Projects from './sections/project/project.jsx';
import CustomCursor from './components/cursor.jsx';
import Vision from './sections/vision/vision.jsx';
import Loader from './sections/loader/loader.jsx';

// import TechRibbon from './sections/project/banderol.jsx';
// import SkillsSection from './sections/skills/skills.jsx';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <div>
      {!loaderDone && <Loader onFinish={() => setLoaderDone(true)} />}
      {loaderDone && (
        <>
        
          <Hero />
          <AboutSection />
          <Vision />
          <Projects />
          <Contact />
          <CustomCursor />
        </>
      )}
    </div>
  );
}

export default App;
