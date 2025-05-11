import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from '../../assets/styles/skills.module.css';

const SkillsSection = () => {
  const containerRef = useRef();

  useEffect(() => {
    let easeFactor = 0.05;
    let scene, camera, renderer, planeMesh;
    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let prevPosition = { x: 0.5, y: 0.5 };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;

      void main() {
        vec2 mouseDir = u_mouse - u_prevMouse;
        vec2 center = vUv;
        vec2 pixelOffset = center - u_mouse;

        float dist = length(pixelOffset);
        float strength = smoothstep(0.3, 0.0, dist);

        vec2 offset = -mouseDir * strength * 0.15;

        // Pixelisation
        vec2 pixelUV = floor((vUv - offset) * 40.0) / 40.0;

        vec4 color = texture2D(u_texture, pixelUV);
        gl_FragColor = color;
      }
    `;

    function createTextTexture(text = "SKILLS") {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 2048;
      canvas.height = 1024;

      ctx.fillStyle = '#f5f5f5'; // fond clair
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'black'; // texte noir
      ctx.font = 'bold 150px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      return new THREE.CanvasTexture(canvas);
    }

    function initialize(texture) {
      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      camera.position.z = 1;

      const shaderUniforms = {
        u_mouse: { value: new THREE.Vector2() },
        u_prevMouse: { value: new THREE.Vector2() },
        u_texture: { value: texture },
      };

      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );

      scene.add(planeMesh);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);
    }

    function animate() {
      requestAnimationFrame(animate);

      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

      if (planeMesh && planeMesh.material.uniforms) {
        planeMesh.material.uniforms.u_mouse.value.set(mousePosition.x, 1.0 - mousePosition.y);
        planeMesh.material.uniforms.u_prevMouse.value.set(prevPosition.x, 1.0 - prevPosition.y);
      }

      renderer.render(scene, camera);

      // Update previous position
      prevPosition.x = mousePosition.x;
      prevPosition.y = mousePosition.y;
    }

    function handleMouseMove(e) {
      const bounds = containerRef.current.getBoundingClientRect();
      targetMousePosition.x = (e.clientX - bounds.left) / bounds.width;
      targetMousePosition.y = (e.clientY - bounds.top) / bounds.height;
    }

    const texture = createTextTexture("SKILLS");
    initialize(texture);
    animate();

    containerRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (renderer) renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container} ref={containerRef}></div>
    </section>
  );
};

export default SkillsSection;

