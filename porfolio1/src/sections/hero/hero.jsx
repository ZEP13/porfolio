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

  const title = useRef(null);
  const uldiv = useRef(null);
  const [showList, setShowList] = useState(false);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.headerDiv}>
        <p className={styles.collabSpan}>
          <span>Open to creative collaborations</span><br />
          <span>and meaningful opportunities</span>
        </p>
        <a className={styles.contactHeader} href="">CONTACT</a>
        </div>
      </header>
      
      <div className={styles.heroName}>
        <h3 className={styles.h3Hero}>
        <div
            ref={title}
            className={styles.name}
            onMouseEnter={() => setShowList(true)}
            onMouseLeave={() => setShowList(false)}
          >
            <span className={styles.name1}>LATHUY</span>  
            <span className={styles.name2}>ZEPHYR</span>
          </div>
          <div  ref={uldiv}
              className={`${styles.heroDivUL} ${showList ? styles.visibleUL : ""}`}
            >
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
          <span className={styles.word1}>Refined</span> digital{" "}
          <span
            ref={wordRef2}
            className={styles.word2}
            onMouseEnter={() => handleHover(wordRef2, setText2, "experiences")}
          >
            {text2}
          </span>.<br />
          <span className={styles.word3}>Passionate</span> about UI &{" "}
          <span className={styles.word4}>motion</span>.<br />
          Crafting
          <span className={styles.word5}> intuitive</span>,{" "}
          <span className={styles.word6}>creative</span>{" "}
          <span className={styles.word7}>interfaces</span>.
        </p>
      </div>
      <div>
        <p className={styles.descriptionPunsh}>
          <span>I DESIGN CLEAN, FLUID, AND INTELLIGENT INTERFACES.</span><br />
          <span>EVERY DETAIL MATTERS —</span><br />
          <span>FROM VISUAL CLARITY TO <a href="" className={styles.code}>CODE</a> PRECISION.</span><br />
          <span>WHERE AESTHETICS MEET FUNCTIONAL THINKING.</span>
        </p>
      </div>
    </section>
  );
}
