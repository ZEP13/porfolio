import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Projet 1", description: "Description du projet 1", image: "/path/to/project1.jpg" },
  { title: "Projet 2", description: "Description du projet 2", image: "/path/to/project2.jpg" },
  { title: "Projet 3", description: "Description du projet 3", image: "/path/to/project3.jpg" },
  { title: "Projet 4", description: "Description du projet 4", image: "/path/to/project4.jpg" },
];

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 0',
            end: '0 bottom',
            scrub: 1,
            pin: true, // Épingle l'élément pendant qu'il est visible
            markers: true,
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
              });
            },
            onLeave: () => {
              gsap.to(el, {
                opacity: 0,
                y: -100,
                duration: 1,
                ease: "power3.in"
              });
            },
          },
        }
      );
    });
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh' }}>
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (projectRefs.current[index] = el)}
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            padding: '2rem',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '80%',
              maxHeight: '60vh',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
