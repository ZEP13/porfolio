import { useRef, useState } from "react";
import styles from "../../assets/styles/hero.module.css";
import ScrambleText from "scramble-text";

export default function Hero() {

  const wordRef2 = useRef(null);
  const [text2, setText2] = useState("Experiences");

  const handleHover = (ref, setText, originalText) => {
    if (ref.current) {
      setText(""); // Vide l'affichage côté React pour éviter le double affichage
      // Injecte le texte dans le DOM pour que scramble-text le lise
      ref.current.textContent = originalText;
  
      const scramble = new ScrambleText(ref.current, {
        characters: "lowercase",
        revealDelay: 100,
        onComplete: () => {
          setText(originalText); // Réaffiche le texte une fois l'animation terminée
        },
      });
      scramble.start(); // Lance l'animation
    }
  };

  
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.headerDiv}>
          <p className={styles.collabSpan}><span>Open for any</span><br />
            <span>collaborations and offers</span></p>
          <a className={styles.contactHeader} href="">CONTACT</a>
        </div>
      </header>
      
      <div className={styles.heroName}>
        <h3 className={styles.h3Hero}>
        <div className={styles.name}>
            <span className={styles.name1}>LATHUY</span>  
            <span className={styles.name2}>ZEPHYR</span>
          </div>
          <div className={styles.heroDivUL}>
            <ul className={styles.listHero}>
              <li>MOTION DESIGN</li>
              <li>WEB DEVELOPMENT</li>
              <li>MOBILE DEVELOPMENT</li>
              <li>VISUAL DESIGN</li>
            </ul>
          </div>
        </h3>
      </div>
      <div>
        <p className={styles.descriptionHero}>
          <span className={styles.word1}>Refined</span> Digital{" "}
          <span
            ref={wordRef2}
            className={styles.word2}
            onMouseEnter={() => handleHover(wordRef2, setText2, "Experiences")}
          >
            {text2}
          </span>
          .<br />
          <span className={styles.word3}>Passionate</span> About UI &{" "}
          <span className={styles.word4}> Motion</span>
          .<br />
          Crafting
          <span className={styles.word5}> Intuitive</span>,{" "}
          <span className={styles.word6}>Creative</span>{" "}
          <span className={styles.word7}> Interfaces</span>.
        </p>
      </div>

      <div>
        <p className={styles.descriptionPunsh}>
          <span>I DESIGN CLEAN, FLUID, AND INTELLIGENT INTERFACES.</span><br />
          <span>EVERY DETAIL MATTERS —</span><br />
          <span>FROM VISUAL CLARITY TO <a href="" className={styles.code}>CODE</a> PRECISION.</span><br />
          <span>BLENDING AESTHETICS WITH FUNCTIONAL THINKING.</span>
        </p>
      </div>
    </section>
  );
}
