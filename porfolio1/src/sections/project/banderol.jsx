import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from '../../assets/styles/banderol.module.css';

function TechRibbon() {
  const ribbonRef = useRef(null);

  useEffect(() => {
    const el = ribbonRef.current;
    const totalWidth = el.scrollWidth;

    // Récupère tous les éléments à animer
    const techItems = el.children;

    // Animer les éléments à l'intérieur de la div
    gsap.to(techItems, {
      x: `-${totalWidth / 2}px`, // Déplace les éléments
      duration: 10,
      ease: 'linear',
      repeat: -1, // Répéter indéfiniment
      stagger: 0.2, // Décale légèrement chaque élément pour un effet de défilement fluide
      modifiers: {
        x: (x) => {
            // Revenir à 0 lorsque l'élément atteint la fin
            const totalWidth = el.scrollWidth;
            return parseFloat(x) % totalWidth + 'px';
        },
        },
    });
  }, []);

  return (
    <div className={styles.techRibbonContainer}>
      <div className={styles.techRibbon} ref={ribbonRef}>
        {[
          'JavaScript',
          'React',
          'Node.js',
          'Python',
          'GSAP',
          'TypeScript',
          'MongoDB',
          'Tailwind',
          'JavaScript',
          'React',
          'Node.js',
        ].map((tech, index) => (
          <span key={index} className={styles.techItem}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechRibbon;
