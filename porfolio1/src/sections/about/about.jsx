import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../assets/styles/about.module.css';

export default function AboutSection() {

  return (
    <section className={styles.aboutSection}>
      <div>
        <div>
          <span>HELLO</span>
        </div>
          <p>
            I'm Zephyr Lathuy, a Full Stack Web Developer based in Belgium.  
            I see the web as a space to tell stories, shape ideas, and spark connections.
          </p>
          <p>
            I design and build digital experiences from front-end to back-end, blending emotion, clarity, and purpose.  
            Each project is a chance to learn, collaborate, and turn ideas into scalable, meaningful products.
          </p>
          <p>
            Beyond web development, I’m passionate about Machine and Deep Learning.  
            As AI becomes essential in modern applications, I’m driven to explore how intelligent systems can enhance user experiences and functionality.
          </p>

      </div>
    </section>
  );
};

