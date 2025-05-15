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
      // === 1. SCROLL TIMELINE ANIMATIONS ===
      const timelineAnimations = [
        {
          ref: profileRef,
          from: { opacity: 0, scale: 0.5 },
          to: { opacity: 1, scale: 1 },
          range: [0, 200]
        },
        {
          ref: helloRef,
          from: { opacity: 0 },
          to: { opacity: 1 },
          out: { opacity: 0, x: 200 },
          range: [220, 400, 1000]
        },
        {
          ref: meDivRef,
          from: { opacity: 0, y: 100 },
          to: { opacity: 1, y: 0 },
          out: { opacity: 0, scale: 0.8 },
          range: [220, 800, 900],
          children: [
            {
            selector: ".char",
            from: { opacity: 0, y: 20 },
            to: { opacity: 1, y: 0 },
            duration: 0.06, //Combien de temps dure l'animation elle-même
            stagger: 0.03, //Intervalle entre les animations des éléments enfants multiples
            ease: "power3.out",
            offset: 0.1 // Quand l'animation débute dans la timeline, relatif au parent
            },
            {
              selector: ".emphasis",
              from: { scale: 0, opacity: 0 },
              to: { scale: 1, opacity: 1 },
              duration: 0.8,
              stagger: 0.1,
              ease: "elastic.out(1, 0.3)",
              offset: 0.2
            }
          ]
        },
        {
          ref: mePlusDivRef,
          from: { opacity: 0, y: 100 },
          to: { opacity: 1, y: 0 },
          out: { opacity: 0, scale: 0.8 },
          range: [1200, 1500, 2000]
        },
        {
          ref: meBeyondDivRef,
          from: {
            opacity: 0,
            '--bg-pos': '100%'
          },
          to: {
            opacity: 1,
            '--bg-pos': '0%'
          },
          out: { opacity: 0},
          range: [2200, 3200, 3400],
          ease: 'none',


        }
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3500",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          markers: true
        }
      });

      timelineAnimations.forEach(({ ref, from, to, out, range, children }) => {
        const start = range[0] / 3500;
        const end = range[1] / 3500;

        tl.fromTo(ref.current, from, {
          ...to,
          ease: "power2.inOut",
          duration: end - start
        }, start);

        if (out) {
          const outStart = range[1] / 3500;
          const outEnd = range[2] / 3500;

          tl.to(ref.current, {
            ...out,
            ease: "power2.inOut",
            duration: outEnd - outStart
          }, outStart);
        }

        if (children) {
          children.forEach(({ selector, from, to, stagger, offset, duration, ease }) => {
            const elements = ref.current.querySelectorAll(selector);
            if (!elements.length) {
              console.warn(`⚠️ Aucun élément trouvé pour ${selector}`);
              return;
            }

            tl.fromTo(elements, from, {
              ...to,
              stagger: stagger ?? 0,
              duration: duration ?? 0.4,
              ease: ease ?? "power2.out"
            }, start + (offset ?? 0.1));
          });
        }
      });

      // === 2. VIEW-BASED ANIMATIONS ===
      const viewTriggeredAnimations = [
        {
          triggerRef: meDivRef,
          selector: ".line",
          from: { width: 0 },
          to: { width: "100%", duration: 1, ease: "power2.out" },
          start: "top center"
        }
      ];

      viewTriggeredAnimations.forEach(({ triggerRef, selector, from, to, start }) => {
        const elements = triggerRef.current.querySelectorAll(selector);
        if (!elements.length) return;

        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: start,
          toggleActions: "play none none none",
          once: true,
          delay: 0.2,
          onEnter: () => {
            const computedStyle = window.getComputedStyle(triggerRef.current);
            const visible = computedStyle.opacity !== "0" && computedStyle.display !== "none";

            if (visible) {
              gsap.fromTo(elements, from, to);
            }
          }
        });
      });
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
        <div className={`${styles.line} line`} />
        <p>
          <span>I'm Lathuy Zephyr, </span><br />
          <span>a Full Stack Web Developer</span><br />
          <span className="location">
            {"based in Pry, Belgium.".split("").map((char, i) => (
              <span key={i} className="char">{char}</span>
            ))}
            <br />
            <span className="emphasis">Remote ready.</span>
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
