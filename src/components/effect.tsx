import { useEffect, useRef } from 'react'
// import { tsParticles } from 'tsparticles';

const Effect = () => {
        const particlesRef = useRef(null);

        useEffect(() => {
          if (!particlesRef.current) return;
      
          tsParticles.load(particlesRef.current.id, {
            fullScreen: { enable: false }, // Faqat section ichida ishlaydi
            background: { color: "#121723" },
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
              collisions: { enable: true },
              move: { enable: true, outMode: "bounce", speed: 1 },
              number: { density: { enable: true, value_area: 800 }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { random: true, value: 5 },
            },
          });
        }, []);
      
        return particlesRef;
}

export default Effect