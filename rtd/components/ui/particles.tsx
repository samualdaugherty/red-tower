"use client";

import { useCallback } from "react";
import type { Container, Engine } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load the basic preset with all interactions
    await loadBasic(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional callback after particles are loaded
    // Container can be used for advanced interactions if needed
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-[5]"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.8,
              size: 8,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 33,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#FF2B39", "#E6E8DA"], // Red and cream
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top", // Float upward
            random: false,
            straight: false,
            outModes: {
              default: "out",
              top: "out",
              bottom: "bounce",
            },
            attract: {
              enable: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

