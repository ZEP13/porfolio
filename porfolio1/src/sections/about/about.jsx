
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../assets/styles/about.module.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const progressRef = useRef([]);
  const infoRef = useRef([]);
  const interestRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, { opacity: 0, y: -40, duration: 1, ease: "power3.out" });
      gsap.from(infoRef.current, { opacity: 0, x: 40, duration: 1, delay: 0.3, stagger: 0.2, ease: "power2.out" });
      gsap.from(progressRef.current, { width: 0, duration: 1.2, delay: 0.5, stagger: 0.2, ease: "power2.out" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "JavaScript", level: 65 },
    { name: "React", level: 90 },
    { name: "Python", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "PHP/MySQL", level: 90 },
    { name: "ML/DL", level: 30 },
  ];

  const personalInfo = [
    { label: "Nom", value: "Ton Nom" },
    { label: "Localisation", value: "Ta Ville, Ton Pays" },
    { label: "Email", value: "ton.email@example.com" },
    { label: "Langues", value: "Français, Anglais" },
    { label: "Telephone", value: "+25444552454" },
  ];


  return (
    <section ref={sectionRef} id="about" className={styles.aboutSection}>
      {/* Colonne gauche - À propos */}
      <div className={styles.left}>
        <h2 ref={titleRef} className={styles.title}>À propos de moi</h2>
        <p className={styles.description}>
          Développeur full-stack, j’aime créer des solutions numériques où le design rencontre la performance. Je conçois, développe et optimise des interfaces web, mobiles et back-end en mettant l’utilisateur au centre de l’expérience.
        </p>

        <div className={styles.info}>
          {personalInfo.map((info, i) => (
            <div key={i} ref={el => infoRef.current[i] = el} className={styles.infoItem}>
              <span className={styles.label}>{info.label}</span>
              <span className={styles.value}>{info.value}</span>
            </div>
          ))}
        </div>

        <a href="/ton-cv.pdf" download className={styles.cvButton}>
          Télécharger mon CV
        </a>
      </div>

      {/* Colonne droite - Skills & intérêts */}
      <div className={styles.right}>
        <h3 className={styles.subTitle}>Connaissances techniques</h3>
        <div className={styles.skills}>
          {skills.map((skill, i) => (
            <div key={i} className={styles.skill}>
              <div className={styles.skillHeader}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className={styles.skillBarBg}>
                <div
                  ref={el => progressRef.current[i] = el}
                  className={styles.skillBarFill}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;
