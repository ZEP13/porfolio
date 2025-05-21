import styles from '../../assets/styles/vision.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrambleText from "scramble-text";
gsap.registerPlugin(ScrollTrigger);




export default function Vision(){

    const sectionVisionRef = useRef(null);
    const visionStepRef = useRef(null);
    const header = useRef(null);
    const titleRefs = useRef([]);
    const [activeTitle, setActiveTitle] = useState(null);
    const [isInSection, setIsInSection] = useState(false);

    const scrambleTitle = (index) => {
        if (titleRefs.current[index]) {
            // S'assurer que le texte original est dans le DOM
            titleRefs.current[index].textContent = titleBox[index].title;
            
            const scramble = new ScrambleText(titleRefs.current[index], {
                characters: "lowercase",
                speed: 0.7, // Vitesse de l'animation
                revealDelay: 0, // Pas de délai avant de révéler
                onComplete: () => {
                    // S'assurer que le texte final est correct
                    titleRefs.current[index].textContent = titleBox[index].title;
                }
            });
            scramble.start();
        }
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionVisionRef.current,
                    start: "top top",
                    end: "+=250%", // Augmenté pour une animation plus longue
                    scrub: 1.5, // Augmenté pour un défilement plus doux
                    pin: true,
                    anticipatePin: 1,
                }
            });

            // Header animation
            timeline.to(header.current, {
                y: `${window.innerHeight - header.current.offsetHeight - (window.innerHeight * 0.18)}`,
                ease: "power1.inOut",
                duration: 1 // Contrôle la vitesse relative de cette animation
            });

            // Animation plus longue des paragraphes
            timeline.fromTo(visionStepRef.current,
                {
                    y: window.innerHeight,
                },
                {
                    y: () => -(visionStepRef.current.scrollHeight),
                    ease: "none",
                    duration: 4 // Durée considérablement augmentée
                }, 
            "-=0.5");
            
            // Observer pour la section entière
            const sectionObserver = new IntersectionObserver(
                ([entry]) => {
                    setIsInSection(entry.isIntersecting);
                },
                { threshold: 0.1 }
            );

            sectionObserver.observe(sectionVisionRef.current);

            // Observer modifié pour les paragraphes
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const index = Array.from(visionStepRef.current.children).indexOf(entry.target);
                    
                    if (entry.isIntersecting) {
                        setActiveTitle(index);
                        scrambleTitle(index); // Ajout de l'effet scramble
                    } else {
                        // Si c'est le dernier paragraphe qui sort
                        if (index === titleBox.length - 1) {
                            setActiveTitle(null);
                        }
                        // Si un paragraphe sort mais qu'aucun autre n'est visible
                        else if (!Array.from(visionStepRef.current.children).some(
                            child => child !== entry.target && child.getBoundingClientRect().top < window.innerHeight * 0.7
                        )) {
                            setActiveTitle(null);
                        }
                    }
                });
            }, {
                threshold: 0.5,
                rootMargin: "-20% 0px -20% 0px"
            });

            // Observer chaque paragraphe
            Array.from(visionStepRef.current.children).forEach(step => {
                observer.observe(step);
            });

            return () => {
                observer.disconnect();
                sectionObserver.disconnect();
            };
        });

        return () => ctx.revert();
    }, []);

    const titleBox = [
        { title: "Discovery phase"},
        { title: "Exploring Visual Directions" },
        { title: "Crafting the Experience" },
        { title: "Final Product Execution"}
    ]

    return(
        <section ref={sectionVisionRef} className={styles.visionSection}>
            <div className={styles.vision}>
                VISION
            </div>
            <div className={styles.visionContainer}>
                <div ref={header} className={styles.visionHeader}>
                    <p>
                        <span className={styles.span1}>
                            I design and develop digital products that prioritize usability, speed, and seamless interaction.
                            From CMS-driven websites to refined UI animations, 
                        </span><br />
                        <span className={styles.span2}>
                            I focus on creating accessible and elegant experiences that are both visually engaging and technically sound.
                        </span>
                    </p>
                </div>
                <div className={styles.titleContainer}>
                    {titleBox.map((item, index) => (
                        <div 
                            key={index} 
                            className={styles.titleBox}
                            style={{ 
                                opacity: activeTitle === index && isInSection ? 1 : 0,
                                transition: 'opacity 0.3s ease',
                                visibility: activeTitle === index && isInSection ? 'visible' : 'hidden'
                            }}
                        >
                            <h2 
                                className={styles.title}
                                ref={el => titleRefs.current[index] = el}
                            >
                                {item.title}
                            </h2>
                        </div>
                    ))}
                </div>
                <div ref={visionStepRef} className={styles.visionStep}>
                    <div className={styles.step}>
                        <div className={styles.stepContent}>
                            <p>
                                For me, every successful project starts with a deep understanding of the client and their vision.
                                At this stage, I focus on defining clear goals and technical requirements, researching the competitive landscape, and identifying the target audience.
                                This discovery phase allows me to align strategy with creativity to find the right balance between typography, color, motion, and brand identity.
                                It’s a critical foundation that helps uncover meaningful directions and design solutions that truly resonate.
                            </p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepContent}>
                            <p>
                                Once the right mood and tone have been defined during the discovery phase, I move on to exploring visual directions.
                                At this stage, my mission is to connect the dots translating strategy into design by experimenting with different concepts and layouts.
                                My goal is to craft an experience that not only reflects the unique identity of each project, but is also elegant, functional, and genuinely enjoyable to use.
                                This process is always collaborative: I work closely with clients and users to gather meaningful feedback and refine the design into its most effective form.
                            </p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepContent}>
                            <p>
                                I believe that motion and interaction are essential to creating truly engaging digital experiences.
                                Even the smallest micro interaction a subtle hover effect, a smooth transition, or a gentle scroll animation can elevate the interface and bring it to life.
                                These details not only enhance usability, but also create emotional responses that make users want to explore and engage more deeply.
                                That's why I devote significant time and attention to interaction design in every project: it's where function meets delight.
                            </p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepContent}>
                            <p>
                                My role extends far beyond the design phase in Figma or prototyping. As a designer, I ensure the final product is meticulously executed, aligning perfectly with the intended design vision.
                                Every detail from spacing and typography to motion, interaction, and responsiveness must be flawlessly implemented across all devices and platforms.
                                I am committed to delivering a seamless, high performance user experience, ensuring that the design is not only visually accurate but also fully functional and intuitive.
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}