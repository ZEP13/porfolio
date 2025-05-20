import styles from '../../assets/styles/vision.module.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




export default function Vision(){

    const sectionVisionRef = useRef(null);
    const visionStepRef = useRef(null);
    useEffect(() => {
    let ctx = gsap.context(() => {
        const visionSteps = visionStepRef.current;

        gsap.to(visionSteps, {
        y: () => -(visionSteps.scrollHeight),
        ease: "none",
        scrollTrigger: {
            trigger: sectionVisionRef.current,
            start: "top top",
            end: () => "+=" + (visionSteps.scrollHeight),
            scrub: true,
            pin: true,
            anticipatePin: 1,
            markers: true,
        }
        });
    });

    return () => ctx.revert();
    }, []);

    return(
        <section ref={sectionVisionRef} className={styles.visionSection}>
            <div className={styles.vision}>
                VISION
            </div>
            <div className={styles.visionContainer}>
                <div className={styles.visionHeader}>
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
                <div ref={visionStepRef} className={styles.visionStep}>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Discovery phase</div>
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
                        <div className={styles.stepTitle}>Exploring Visual Directions</div>
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
                        <div className={styles.stepTitle}>Crafting the Experience</div>
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
                        <div className={styles.stepTitle}>Final Product Execution</div>
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