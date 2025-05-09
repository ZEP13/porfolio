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
          I'm Zephyr Lathuy
          I'm a Web Developer. 
          I see the web as a space to tell stories,
          shape ideas, and spark connections.
        </p>
        <p>
          Based in Belgium, I craft digital 
          experiences that blend emotion, 
          clarity, and intention.
          Each project is an opportunity to learn
          and turn ideas into meaningful digital experiences.
        </p>
      </div>
    </section>
  );
};

