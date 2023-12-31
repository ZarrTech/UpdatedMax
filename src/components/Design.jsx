import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Design() {
    const particlesInit = useCallback(async (engine) => {
      console.log(engine);

      await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);
    return (
      <div className="">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
             background: {
            //     color: {
            //         value: "#0d47a1",
            //     },
            },
            fullScreen: {
              enable: true
            },
            style: {
              position: 'absolute',
              width: '50'
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 10,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 300,
                },
                value: 80,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 7 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    );
}
export default Design;
