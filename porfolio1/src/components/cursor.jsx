import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const smallDotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  const isHoveringTarget = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        isHoveringTarget.current = true;
        target.classList.add("cursor-hover"); // Ajout d'une classe pour les boutons et liens
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        isHoveringTarget.current = false;
        target.classList.remove("cursor-hover"); // Retirer la classe quand on sort du bouton
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.3;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.3;

      ringPos.current.x += (dotPos.current.x - ringPos.current.x) * 0.05;
      ringPos.current.y += (dotPos.current.y - ringPos.current.y) * 0.05;

      if (smallDotRef.current) {
        smallDotRef.current.style.transform = `translate(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 15}px, ${ringPos.current.y - 15}px)`;

        // Appliquer les effets lorsque le curseur survole un bouton ou un lien
        const ring = ringRef.current;
        const dot = smallDotRef.current;

        if (isHoveringTarget.current) {
          // Effet loupe inversée : le ring devient plus grand
          ring.style.width = "70px";
          ring.style.height = "70px";
          ring.style.backgroundColor = "#fff";
          ring.style.border = "2px solid #000";
          ring.style.mixBlendMode = "difference"; // Effet de découpe du bouton (loupe inversée)
          ringRef.current.style.transform = `translate(${ringPos.current.x - 35}px, ${ringPos.current.y - 35}px)`;
          dot.style.backgroundColor = "transparent"; // Le petit point devient transparent
        } else {
          // Retour à l'état normal
          ring.style.width = "30px";
          ring.style.height = "30px";
          ring.style.backgroundColor = "transparent";
          ring.style.border = "2px solid #000";
          ring.style.mixBlendMode = "initial";

          dot.style.backgroundColor = "#000"; // Le point devient noir par défaut
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={smallDotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          backgroundColor: "#000",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "30px",
          height: "30px",
          border: "2px solid #000",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.2s, height 0.2s", // Transition fluide lors du redimensionnement
        }}
      />
    </>
  );
};

export default CustomCursor;
