import React, { useEffect } from "react";
import styles from "../../assets/styles/hero.module.css"; // Assurez-vous d'importer le fichier CSS pour le style


  function Hero() {
    return (
        <section className={`${styles.heroSection} ${styles.fadeIn}`}>
            <div className={styles.left}>
                <h1 className={styles.heroName}>Votre Nom Prénom</h1>
                <p className={styles.heroDescription}>
                    Développeur passionné par le web et les nouvelles technologies. Découvrez mes projets et
                    collaborations !
                </p>
            </div>
  
            <div className={styles.right}>
                <img src="/path/to/your/photo.jpg" alt="Votre nom" className={styles.heroImage} />
            </div>
  
                
              <div className={styles.socialLinks}>
                  {/* Titre avant les icônes */}
                  <div className={styles.socialTextContainer}>
                      <p className={styles.socialText}>Mes Réseaux</p>
                      <span className={styles.arrow}>↓</span> {/* Flèche indiquant les liens */}
                  </div>
                  
                  <a href="https://github.com/votreprofil" className={styles.socialLink}>
                      <svg className={styles.socialIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.815 17.625c-.466.434-1.116.625-1.818.625-1.082 0-2.199-.288-2.997-.88-1.56-.88-2.426-2.422-2.426-4.354 0-1.931.866-3.474 2.426-4.354.798-.592 1.915-.88 2.997-.88.702 0 1.352.191 1.818.625 1.064.957 1.056 2.688-.016 3.633-.415.317-.926.465-1.446.465-.522 0-.98-.157-1.347-.429-.552-.404-.815-.984-.815-1.599 0-1.285 1.428-2.363 3.11-2.363 1.483 0 2.743.559 3.016 1.88 1.065 3.354-1.742 6.346-4.654 6.346-2.356 0-4.536-1.042-5.826-2.813-1.267-1.719-1.062-3.658-.577-5.252 0-.453-.225-.898-.645-1.283-.32-.365-.75-.616-1.21-.73-.768-.191-1.551.057-2.089.55-1.119.91-1.551 2.382-1.094 3.722.238.627.566 1.201 1.011 1.627-.148.68-.434 1.303-.773 1.83-.422.66-.767 1.15-1.18 1.502 0 0 1.73-.394 2.453-.947.697-.437.87-.747 1.363-1.503.852-.794 1.439-1.715 1.364-2.595-.066-.392-.286-.767-.615-1.079z"></path>
                      </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/votreprofil" className={styles.socialLink}>
                      <svg className={styles.socialIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path d="M4.98 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm.01 3.85c-.79 0-1.44-.65-1.44-1.44s.65-1.44 1.44-1.44 1.44.65 1.44 1.44-.65 1.44-1.44 1.44zm-.01 3.45c-.8 0-1.44.65-1.44 1.44v8.55h2.88v-8.55c0-.79-.64-1.44-1.44-1.44zM20 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm.01 3.85c-.79 0-1.44-.65-1.44-1.44s.65-1.44 1.44-1.44 1.44.65 1.44 1.44-.65 1.44-1.44 1.44zm-.01 3.45c-.8 0-1.44.65-1.44 1.44v8.55h2.88v-8.55c0-.79-.64-1.44-1.44-1.44z"></path>
                      </svg>
                  </a>
                  <a href="https://www.instagram.com/votreprofil" className={styles.socialLink}>
                      <svg className={styles.socialIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path d="M12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm-1 8h2v7h-2zm-1-4h4c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2v-12c0-.553-.447-1-1-1zm-1 0c-.553 0-1 .447-1 1v12c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-12c0-.553-.447-1-1-1h-6z"></path>
                      </svg>
                  </a>
            
            </div>
        </section>
    );
  }

  

export default Hero;
