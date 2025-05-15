import styles from '../../assets/styles/vision.module.css';
import React, { use, useEffect, useRef } from 'react';
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
        y: () => -(visionSteps.scrollHeight - window.innerHeight),
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
                            I provide usability-focused development across various areas, styling, CMS development, motion design, and UI/UX optimization.
                        </span><br />
                        <span className={styles.span2}>
                          I also prioritize performance improvements and accessibility to deliver a smooth and intuitive web experience.   
                        </span>
                    </p>
                </div>
                <div ref={visionStepRef} className={styles.visionStep}>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Direction</div>
                        <div className={styles.stepContent}>
                            <p>
                                In my opinion, deep understanding of the brief and client is a must in the starting point. Determining project goals and functional specifications, knowing competitors and target audiences, making researches will be taken at this stage in order to find a precise combination between Typography, Color, Motion and brand assets. For me, this process is the foundation for solving problems and discovering a right direction for the perfect design.
                            </p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Design</div>
                        <div className={styles.stepContent}>
                            <p>
                                After collecting a right mood and tone in the Direction stage. My mission at this point is connecting the dots and making various versions to find the proper design. My goal is always about creating an exprience that not only emphasises the characteristics of each project but also elegant and satisfied to use. To get that, I have to make sure to work closely with clients and users to get helpful feedbacks and insights for the evolution.
                            </p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Interaction</div>
                        <div className={styles.stepContent}>
                            <p>
                                I belive Motion and interaction  are the key elements that help to bring satisfaction to the audiences the best possible way. A small subtle motion or microinteraction can push the experience to a whole new level effortlessly. I love seeing people get "wow" and keep toying with those interactions. That’s the reason why I often spend a lot of time and effort for this stage on each project.
                            </p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Development</div>
                        <div className={styles.stepContent}>
                            <p>
                                My job is not over when it's still on Figma, or in prototype, design is the final product and as a designer I have to make sure the final product must be absolutely pixel-perfect with the design, from every single element like spacing, composition, typography,... to motion, interaction and of course functionality, responsive devices.
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}