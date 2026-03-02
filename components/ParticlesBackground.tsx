"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
  <Particles
    id="tsparticles"
    options={{
      fullScreen: { enable: false },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.4,
          },
        },
      },

      particles: {
        links: {
        enable: true,
        distance: 150,
        color: "#ff00ff",
        opacity: 0.3,
        width: 1,
      },
        number: { value: 120 },
        color: { value: ["#ff00ff", "#00ffff"] },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: { min: 2, max: 5 } },
        move: {
          enable: true,
          speed: 1,
        },
      },
    }}
    className="absolute inset-0 z-0 pointer-events-none"
  />
);
}