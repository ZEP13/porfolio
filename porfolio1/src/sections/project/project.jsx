import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../assets/styles/project.module.css';


export default function Projects() {

  return (
    <section className={styles.sectionProject}>
      <span className={styles.works}>
              WORKS
      </span>
    </section>
  );
}

