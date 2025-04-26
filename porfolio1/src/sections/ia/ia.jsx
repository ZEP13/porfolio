import React, { useRef, useEffect, useState } from "react";
import styles from "../../assets/styles/ia.module.css";
import Webcam from "react-webcam";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";

export default function GestureSection() {
  const webcamRef = useRef(null);
  const [bgColor, setBgColor] = useState("black");
  const [gestureMessage, setGestureMessage] = useState("Levez votre doigt pour changer la couleur");
  const [isLoading, setIsLoading] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [handPoints, setHandPoints] = useState([]); // Points des mains pour visualisation

  const carouselImages = [
    "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Image+1",
    "https://via.placeholder.com/300x200/00FF00/FFFFFF?text=Image+2",
    "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Image+3",
  ];

  useEffect(() => {
    let animationFrameId;

    const runDetection = async () => {
      const detector = await handPoseDetection.createDetector(
        handPoseDetection.SupportedModels.MediaPipeHands,
        {
          runtime: "mediapipe",
          modelType: "lite",
          solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915",
        }
      );

      setIsLoading(false);

      const detect = async () => {
        if (
          webcamRef.current &&
          webcamRef.current.video.readyState === 4
        ) {
          const video = webcamRef.current.video;
          const hands = await detector.estimateHands(video);

          if (hands.length > 0) {
            const hand = hands[0];

            // Visualiser les points des mains pour la détection
            const points = hand.keypoints.map((point) => ({
              x: point.x * video.videoWidth,
              y: point.y * video.videoHeight,
            }));
            setHandPoints(points);

            const indexFingerTip = hand.keypoints[8]; // Point du bout du doigt (index)
            const thumbTip = hand.keypoints[4]; // Point du bout du pouce

            // Vérifier si le doigt est levé pour changer la couleur de fond
            if (indexFingerTip.y < hand.keypoints[6].y) {
              setBgColor("blue");
              setGestureMessage("Vous avez levé votre doigt ! Couleur changée en bleu.");
            } else {
              setBgColor("green");
              setGestureMessage("Levez votre doigt pour changer la couleur.");
            }

            // Détection de la main fermée
            const isHandClosed = hand.keypoints.every(
              (point, index) => {
                if (index === 8 || index === 4) return true; // Exclure les doigts
                return point.y > hand.keypoints[5].y; // Vérifie si les doigts sont repliés
              }
            );

            if (isHandClosed) {
              setBgColor("black");
              setGestureMessage("Main fermée. Couleur réinitialisée.");
            }

            // Logique pour défiler le carousel avec les gestes
            if (indexFingerTip.y < hand.keypoints[6].y && thumbTip.y < hand.keypoints[3].y) {
              setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
            }

          } else {
            setBgColor("black");
            setGestureMessage("Aucune main détectée. Essayez de bouger la main.");
          }
        }

        animationFrameId = requestAnimationFrame(detect);
      };

      detect();
    };

    runDetection();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1>Démo de gestes avec Webcam</h1>
      {isLoading && <p>Chargement du modèle...</p>}
      
      <div style={{ marginBottom: 20 }}>
        <p>{gestureMessage}</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Caméra à gauche */}
        <Webcam
          ref={webcamRef}
          style={{
            width: 300,
            height: 200,
            borderRadius: 10,
            marginTop: 20,
            marginRight: 20,
          }}
        />

        {/* Carousel à droite */}
        <div
          style={{
            width: 300,
            height: 200,
            backgroundColor: "gray",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={carouselImages[carouselIndex]}
            alt={`carousel-image-${carouselIndex}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
        </div>
      </div>

      {/* Légende sous la caméra */}
      <div style={{ marginTop: 20, color: "white" }}>
        <p>Levez votre doigt pour changer l'image du carousel.</p>
      </div>

      {/* Visualisation des points de la main (pour debugging) */}
      {handPoints.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {handPoints.map((point, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top: point.y,
                left: point.x,
                width: 10,
                height: 10,
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
