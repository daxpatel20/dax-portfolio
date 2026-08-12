import React, { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  useEffect(() => {
    let container;

    const initParticles = async () => {
      try {
        // Load the slim tsParticles bundle
        await loadSlim(tsParticles);

        // Create particles
        container = await tsParticles.load({
          id: "tsparticles",
          options: {
            fullScreen: {
              enable: false,
            },

            fpsLimit: 60,

            background: {
              color: {
                value: "transparent",
              },
            },

            particles: {
              number: {
                value: 70,
                density: {
                  enable: true,
                  width: 1200,
                  height: 800,
                },
              },

              color: {
                value: "#9b6cff",
              },

              shape: {
                type: "circle",
              },

              opacity: {
                value: 0.55,
                random: true,
              },

              size: {
                value: {
                  min: 1,
                  max: 4,
                },
                random: true,
              },

              links: {
                enable: true,
                distance: 160,
                color: "#8b5cf6",
                opacity: 0.28,
                width: 1,
              },

              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,

                outModes: {
                  default: "out",
                },
              },
            },

            interactivity: {
              detectsOn: "window",

              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },

                onClick: {
                  enable: true,
                  mode: "push",
                },

                resize: {
                  enable: true,
                },
              },

              modes: {
                grab: {
                  distance: 200,

                  links: {
                    opacity: 0.5,
                  },
                },

                push: {
                  quantity: 4,
                },
              },
            },

            detectRetina: true,
          },
        });
      } catch (error) {
        console.error(
          "Particles initialization failed:",
          error
        );
      }
    };

    initParticles();

    return () => {
      if (container) {
        container.destroy();
      }
    };
  }, []);

  return (
    <div
      id="tsparticles"
      className="particles-background"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;