import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../assets/styles/project.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const workSection = useRef(null);
  const imgContainerRef = useRef(null);


  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);
  const img6Ref = useRef(null);
  const img7Ref = useRef(null);
  const img8Ref = useRef(null);
  const img9Ref = useRef(null);
  const img10Ref = useRef(null);
useEffect(() => {
  let ctx = gsap.context(() => {
    // 1. Animation du container : il traverse la section pendant 400% de scroll
    gsap.fromTo(
      imgContainerRef.current,
      { y: 0 },
      {
        y: "-300vh", // imgContainer = 400vh, section = 100vh => on le "fait défiler" sur toute sa hauteur
        ease: "none",
        scrollTrigger: {
          trigger: workSection.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
          markers: true
        }
      }
    );

    // 2. Animation des images à l’intérieur du container
    const images = [
      { ref: img1Ref, speed: 0.3, distance: -200 },
      { ref: img2Ref, speed: 0.8, distance: -300 },
      { ref: img3Ref, speed: 0.5, distance: -250 },
      { ref: img4Ref, speed: 1.2, distance: -350 },
      { ref: img5Ref, speed: 0.4, distance: -280 },
      { ref: img6Ref, speed: 0.9, distance: -320 },
      { ref: img7Ref, speed: 0.6, distance: -270 },
      { ref: img8Ref, speed: 1.0, distance: -340 },
      { ref: img9Ref, speed: 0.7, distance: -290 },
      { ref: img10Ref, speed: 1.4, distance: -310 }
    ];

    // 3. Chaque image garde sa vitesse personnalisée pendant le scroll
    images.forEach(({ ref, speed, distance }) => {
      gsap.fromTo(
        ref.current,
        {
          y:  window.innerHeight
        },
        {
          y: distance * speed,
          ease: "none",
          scrollTrigger: {
            trigger: workSection.current,
            start: "top top",
            end: "+=400%", // même durée que le pin
            scrub: true
          }
        }
      );
    });
  });

  return () => ctx.revert();
}, []);



  return (
    <section ref={workSection} className={styles.sectionProject}>
      <span className={styles.works}>WORKS</span>
      <div ref={imgContainerRef} className={styles.imgContainer}>
        <div ref={img1Ref} className={styles.img1}></div>
        <div ref={img2Ref} className={styles.img2}></div>
        <div ref={img3Ref} className={styles.img3}></div>
        <div ref={img4Ref} className={styles.img4}></div>
        <div ref={img5Ref} className={styles.img5}></div>
        <div ref={img6Ref} className={styles.img6}></div>
        <div ref={img7Ref} className={styles.img7}></div>
        <div ref={img8Ref} className={styles.img8}></div>
        <div ref={img9Ref} className={styles.img9}></div>
        <div ref={img10Ref} className={styles.img10}></div>
      </div>
    </section>
  );
}
