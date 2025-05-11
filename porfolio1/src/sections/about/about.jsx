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

    
    // Animation config pour chaque élément
    const animations = [
      {
        ref: profileRef,
        from: { opacity: 0, scale: 0.5 },
        to: { opacity: 1, scale: 1 },
        range: [0, 100]
      },
      {
        ref: helloRef,
        from: { opacity: 0, x: -200 },
        to: { opacity: 1, x: 0 },
        out: { opacity: 0, x: 200 },
        range: [100, 200, 300]
      },
      {
        ref: meDivRef,
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        out: { opacity: 0, scale: 0.8 },
        range: [300, 400, 500]
      },
      {
        ref: mePlusDivRef,
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        out: { opacity: 0, scale: 0.8 },
        range: [500, 600, 700]
      },
      {
        ref: meBeyondDivRef,
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        out: { opacity: 0, scale: 0.8 },
        range: [700, 800, 900]
      }
    ];

    let ctx = gsap.context(() => {
      // Pin principal de la section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3500",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        markers: true,
      });

      // Vos animations personnalisées
      animations.forEach(({ ref, from, to, out, range }) => {
        // Entrée de l'élément
        gsap.fromTo(
          ref.current,
          from,
          {
            ...to,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${range[0]} top`,
              end: `top+=${range[1]} top`,
              scrub: 1,
              markers: true,
            },
          }
        );

        // Sortie de l'élément (si définie)
        if (out) {
          gsap.to(ref.current, {
            ...out,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${range[1]} top`,
              end: `top+=${range[2]} top`,
              scrub: 1,
              markers: true,
            }
          });
        }
      });
    });

    // Nettoyage à la destruction du composant
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
          <span>a Full Stack Web Developer</span><br />
          <span>based in Pry, Belgium.</span><br />
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
