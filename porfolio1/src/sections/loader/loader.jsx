import { useEffect, useRef, useState } from "react";
import styles from "../../assets/styles/loader.module.css";
import ScrambleText from "scramble-text";
import { gsap } from "gsap";

export default function Loader({ onFinish }) {
  const loaderRef = useRef(null);
  const name1 = useRef(null);
  const name2 = useRef(null);
  const [showLoader, setShowLoader] = useState(true);

  // States pour affichage React-friendly
  const [name1Text, setName1Text] = useState("LATHUY");
  const [name2Text, setName2Text] = useState("ZEPHYR");

  useEffect(() => {
    if (!name1.current || !name2.current) return;

    // Vide le contenu React pour éviter le double affichage
    setName1Text("");
    setName2Text("");

    // Injecte le texte dans le DOM pour ScrambleText
    name1.current.textContent = "LATHUY";
    name2.current.textContent = "ZEPHYR";

    let scramble1, scramble2;
    try {
      scramble1 = new ScrambleText(name1.current, {
        text: "LATHUY",
        characters: "uppercase",
        revealDelay: 80,
        onComplete: () => setName1Text("LATHUY"),
      });
      scramble2 = new ScrambleText(name2.current, {
        text: "ZEPHYR",
        characters: "uppercase",
        revealDelay: 80,
        onComplete: () => setName2Text("ZEPHYR"),
      });
      scramble1.start();
      scramble2.start();
    } catch (e) {
      setName1Text("LATHUY");
      setName2Text("ZEPHYR");
    }

    const totalDuration = Math.max("LATHUY".length, "ZEPHYR".length) * 80;
    const separationDelay = 400;

    const separationTimeout = setTimeout(() => {
      gsap.to(name1.current, {
        xPercent: -1.5,
        yPercent: -7,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.to(name2.current, {
        xPercent: 1.5,
        yPercent: 5,
        duration: 0.8,
        ease: "power2.out",
      });
    }, totalDuration);

    const hideTimeout = setTimeout(() => {
      // Suppression directe sans fade
      setShowLoader(false);
      if (onFinish) onFinish();
    }, totalDuration + separationDelay + 800);
    return () => {
      clearTimeout(separationTimeout);
      clearTimeout(hideTimeout);
    };
  }, [onFinish]);

  if (!showLoader) return null;

  return (
    <section
      ref={loaderRef}
      className={styles.section}
    >
      <div className={styles.heroName}>
        <div className={styles.h3Hero}>
          <div className={styles.name}>
            <span
              ref={name1}
              className={styles.name1}
            >
              {name1Text}
            </span>
            <span
              ref={name2}
              className={styles.name2}
            >
              {name2Text}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}