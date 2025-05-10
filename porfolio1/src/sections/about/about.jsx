import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../assets/styles/about.module.css';

export default function AboutSection() {

  return (
    <section className={styles.aboutSection}>
    
      <span className={styles.profile}>
        PROFILE
      </span>
    
      <div>
        <div className={styles.helloDiv}>
          <h1><span className={styles.hello}>HELLO</span></h1>
        </div>
        <div className={styles.meDiv}>
          <p>
            <span>I'm Zephyr Lathuy, </span><br />
            <span>a Full Stack Web Developer</span><br />
            <span>based in Pry, Belgium.</span><br />
            <span>I see the web as a space to tell stories,</span><br />
            <span>shape ideas, and spark connections.</span>
          </p>
        </div>
        <div className={styles.mePlusDiv}>
          <p>
            <span>I design and build digital experiences from front-end to back-end,</span><br />
            <span>blending emotion, clarity, and purpose.</span><br />
            <span>Each project is a chance to learn, collaborate, and turn</span><br />
            <span>ideas into scalable, meaningful products.</span> 
          </p>
        </div>
        <div className={styles.meBeyondDiv}>
          <p>
            <span>Beyond web development, I’m passionate about Machine and Deep Learning.</span><br />
            <span>As AI becomes essential in modern applications, I’m driven to explore how</span><br />
            <span>intelligent systems can enhance user experiences and functionality.</span>
          </p>
        </div>
      </div>
      <div className={styles.mySkills}>
        <p>

        </p>
      </div>
    </section>
  );
};

