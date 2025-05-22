import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../assets/styles/about.module.css';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ 
  limitCallbacks: true,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});

export default function AboutSection() {
  const sectionRef = useRef(null);
  const profileRef = useRef(null);
  const helloRef = useRef(null);
  const meDivRef = useRef(null);
  const mePlusDivRef = useRef(null);
  const meBeyondDivRef = useRef(null);

useEffect(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000", // scroll length
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1
      }
    });

    // PROFILE
    tl.fromTo(profileRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // HELLO
    tl.fromTo(helloRef.current, 
      { opacity: 0, x: -100 }, 
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, 
      "+=0.5"
    );

    // ME DIV
    tl.fromTo(meDivRef.current, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, 
      "+=0.8"
    );

    // ME PLUS DIV
    tl.fromTo(mePlusDivRef.current, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, 
      "+=1"
    );

    // ME BEYOND DIV
    tl.fromTo(meBeyondDivRef.current, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, 
      "+=1"
    );
  });

  return () => ctx.revert();
}, []);


  return (
    <section ref={sectionRef} className={styles.aboutSection}>
      <div ref={profileRef} className={styles.profile}>
        PROFILE
      </div>

      <div ref={helloRef} className={styles.helloDiv}>
        <h1><span className={styles.hello}>HELLO</span></h1>
      </div>

      <div ref={meDivRef} className={styles.meDiv}>
        <p>
          <span>I'm Lathuy Zephyr, </span><br />
          <span>a Web Developer</span><br />
          <span>
            based in Pry, Belgium.
          </span>
          <br />
          <span>I see the web as a space to tell stories, </span>
          <span>shape ideas, and spark connections.</span>
        </p>
      </div>

      <div ref={mePlusDivRef} className={styles.mePlusDiv}>
        <p>
          <span>I design and build digital experiences from front-end to back-end,</span><br />
          <span>blending emotion, clarity, and purpose.</span><br />
          <span>Each project is a chance to learn, collaborate, and turn</span><br />
          <span>ideas into scalable, meaningful products.</span>
        </p>
        <div className={styles.mySkills}>
          <p>
            <span>My main tools for front are html, css, js, react, bootstrap, tailwind, gsap</span><br />
            <span>And I use php, python, laravel for back-end</span>
          </p>
        </div>
      </div>

      <div ref={meBeyondDivRef} className={styles.meBeyondDiv}>
        <p>
          <span>Beyond web development, I’m passionate about Machine and Deep Learning.</span><br />
          <span>As AI becomes essential in modern applications, I’m driven to explore how</span><br />
          <span>intelligent systems can enhance user experiences and functionality.</span>
        </p>
      </div>
    </section>
  );
}
