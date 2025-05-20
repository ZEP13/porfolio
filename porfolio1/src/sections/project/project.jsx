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
    // Pin la section entière avec une hauteur plus grande
    ScrollTrigger.create({
      trigger: workSection.current,
      start: "top top",
      end: "+=400%", // Augmenté pour plus d'espace de défilement
      pin: true,
      scrub: 1,
      pinSpacing: true,
      markers: true // Pour déboguer les points de déclenchement
    });

    // Configuration des vitesses différentes pour chaque image
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
      { ref: img10Ref, speed: 0.2, distance: -230 }
    ];

    // Application des animations avec des vitesses différentes
    images.forEach(({ ref, speed, distance }) => {
      gsap.fromTo(ref.current,
        {
          y: window.innerHeight // Commence en bas de la fenêtre
        },
        {
          y: distance * speed * 3, // Distance parcourue plus importante
          ease: "none",
          scrollTrigger: {
            trigger: workSection.current,
            start: "top bottom", // Commence quand le haut de la section atteint le bas de la fenêtre
            end: "bottom top", // Finit quand le bas de la section atteint le haut de la fenêtre
            scrub: true,
            markers: true // Pour déboguer
          }
        });
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
