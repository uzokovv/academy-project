// src/components/effect.tsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Effect = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine); // to'liq animatsiyalar yuklanadi
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ width: "100%", height: "100vh" }}
      options={{
        background: {
          color: "#121723",
        },
        fullScreen: { enable: false },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outMode: "bounce",
          },
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: 5, random: true },
        },
      }}
    />
  );
};

export default Effect;
