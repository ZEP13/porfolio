import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './sections/hero/hero.jsx';
import Contact from './sections/contact/contact.jsx';
import GestureSection from './sections/ia/ia.jsx';
import AboutSection from './sections/about/about.jsx';
// import Projects from './sections/project/project.jsx';
import CustomCursor from './components/cursor.jsx';
import TechRibbon from './sections/project/banderol.jsx';
// import SkillsSection from './sections/skills/skills.jsx';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=70%',
        scrub: true,
        pin: true,
        
      },
    });
  
    tl.fromTo(
      aboutRef.current,
      { opacity: 0, y: 100, duration: 0.5},
      { opacity: 1, y: 0, duration: 1, ease: 'none' }
    );
  
    return () => {
      tl.kill();
    };
  }, []);
  
  
  return (
    <div>

      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef} style={{ opacity: 0 }}>
        <AboutSection />
      </div>
      {/* <SkillsSection/> */}
      {/* <Projects /> */}

      <Contact />
      <CustomCursor />

    </div>
  );
}

export default App;
