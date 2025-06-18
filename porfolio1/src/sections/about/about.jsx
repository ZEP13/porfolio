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
  const span1Ref = useRef(null);
  const span2Ref = useRef(null);
  const span3Ref = useRef(null);
  const span4Ref = useRef(null);
  const span5Ref = useRef(null);
  const span6Ref = useRef(null);
  const span7Ref = useRef(null);
  const span8Ref = useRef(null);
  const span9Ref = useRef(null);

useEffect(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=4000", // Augmenté pour plus de scroll
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1
      }
    });

    // PROFILE en arrière-plan
    tl.fromTo(profileRef.current, 
      { opacity: 0 }, 
      { opacity: 0.25, duration: 0.5 }
    );

    // HELLO et ME DIV ensemble
    tl.fromTo(helloRef.current,
      { 
        opacity: 0,
        x: -100,
      },
      { 
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }
    )
    .fromTo(meDivRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 1,
        duration: 0.1
      }
    )
    .fromTo(meDivRef.current.querySelectorAll('span'),
      { 
        opacity: 0,
        y: 20,
        rotateX: -15
      },
      { 
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: {
          each: 0.8,
          ease: "power3.out"
        }
      },
      "-=0.5"
    )
    .to([helloRef.current, meDivRef.current], {
      opacity: 0,
      y: -30,
      duration: 1.2,
      delay: 1.5
    }, "+=1");

tl
  // Mise en place initiale (caché en bas)
  .set(mePlusDivRef.current, { 
    opacity: 0,
    visibility: 'hidden',
    y: '115vh'
  })

  // Label de départ
  .addLabel("startMePlus", "+=1")

  // Apparition douce
  .to(mePlusDivRef.current, {
    opacity: 1,
    visibility: 'visible',
    duration: 1.5,
    ease: "power2.out"
  }, "startMePlus")


  // Scroll simulé (scroll de y = 25vh vers -125vh)
  .to(mePlusDivRef.current, { 
    duration: 10,
    y: () => `-${window.innerHeight * 1.25}px`, // from 25vh to -125vh
    ease: "none",
    onUpdate: function() {
      const spans = [
        span1Ref, span2Ref, span3Ref, span4Ref,
        span5Ref, span6Ref, span7Ref, span8Ref, span9Ref
      ];
      
      spans.forEach((spanRef, index) => {
        if (!spanRef.current) return;
        
        const rect = spanRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementTop = rect.top;

        // Animation active si l'élément est entre 20% et 80% du viewport
        let fillProgress = 0;
        if (elementTop < viewportHeight * 0.8 && elementTop > viewportHeight * 0.2) {
          fillProgress = (viewportHeight * 0.8 - elementTop) / (viewportHeight * 0.6);
          fillProgress = Math.min(Math.max(fillProgress, 0), 1);
        } else if (elementTop <= viewportHeight * 0.2) {
          fillProgress = 1;
        }

        gsap.set(spanRef.current, {
          '--fill-progress': `${fillProgress * 100}%`
        });
      });
    }
  })

  // Fade-out à la fin
  .to(mePlusDivRef.current, {
    opacity: 0,
    visibility: 'hidden',
    duration: 1.5
  } );


    // Séquence ME BEYOND DIV
    tl.fromTo(meBeyondDivRef.current,
      { 
        opacity: 0, 
        y: 50,
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5,
        ease: "power2.out"
      }
    )
    .to(meBeyondDivRef.current, {
      opacity: 0,
      y: -30,
      duration: 1.5,
      delay: 1.5,
      ease: "power2.inOut"
    },
    "+=1"
    );

    // Fade out final du PROFILE
    tl.to(profileRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 1.5,
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
          <span ref={span1Ref} className={styles.fillSpan}>I design and build digital</span>
          <span ref={span2Ref} className={styles.fillSpan}>experiences from front-end</span>
          <span ref={span3Ref} className={styles.fillSpan}>to back-end,</span>

          <span ref={span4Ref} className={styles.fillSpan}>blending emotion, clarity, and</span> 
          <span ref={span5Ref} className={styles.fillSpan}>purpose.</span>
          <span ref={span6Ref} className={styles.fillSpan}>Each project is a chance to</span>  
          <span ref={span7Ref} className={styles.fillSpan}>learn, collaborate, and turn</span>
          <span ref={span8Ref} className={styles.fillSpan}>ideas into scalable,</span> 
          <span ref={span9Ref} className={styles.fillSpan}> meaningful products.</span>
        </p>
        <div className={styles.mySkills}>
          <p>
            <span>My main tools for front are html, css, js, react, bootstrap, tailwind, gsap</span><br />
            <span>And I use php, python, SQL, MongoDB, laravel for back-end</span>
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
