import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechRibbon() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const circleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        x: -500,
        rotation: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        x: 0,
        rotation: 360,
        scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 30%",
          scrub: true,
          markers: true,
          pin: true,
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 200,
        scale: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "top 20%",
          scrub: true,
          markers: true,
        },
      }
    );

    gsap.to(circleRef.current, {
      rotation: 720,
      scale: 2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        end: "top 10%",
        scrub: true,
        markers: true,
      },
    });

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: -100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "top 10%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} style={{ height: '250vh' }}>
      <div ref={boxRef} style={{ background: 'red', padding: '50px', textAlign: 'center' }}>
        Box Animation
      </div>
      <div ref={textRef} style={{ background: 'green', padding: '50px', textAlign: 'center' }}>
        Text Animation
      </div>
      <div ref={circleRef} style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'blue', margin: '0 auto' }}>
        Circle Animation
      </div>
      <div ref={imageRef} style={{ width: '300px', height: '300px', background: 'url("https://via.placeholder.com/300") no-repeat center center', backgroundSize: 'cover' }}>
        Image Animation
      </div>
    </section>
  );
}
