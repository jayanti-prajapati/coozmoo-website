/*eslint-disable*/
import ColouredSpan from "components/Common/ColouredSpan";
import React, { useCallback } from "react";
import Particles from "react-particles";

// reactstrap components
import { Container } from "reactstrap";
import { loadFull } from "tsparticles";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpeg") + ")",
          }}
          ref={pageHeader}
        ></div>

        <Container>
          <div
            style={{
              // position: "absolute",
              top: "0",
              height: "100vh",
              width: "100vw",
              zIndex: "99",
              // width: "100%",
            }}
          >
            <Particles
              height="100vh"
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                particles: {
                  number: {
                    value: 80,
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                  },
                  color: {
                    value: "#ffffff",
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000",
                    },
                    polygon: {
                      nb_sides: 5,
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100,
                    },
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 5,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 20,
                      size_min: 0.1,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200,
                    },
                  },
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "grab",
                    },
                    onclick: {
                      enable: true,
                      mode: "push",
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 150,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                    push: {
                      particles_nb: 4,
                    },
                    remove: {
                      particles_nb: 2,
                    },
                  },
                },
                retina_detect: true,

                config_demo: {
                  hide_card: false,
                  background_color: "#b61924",
                  background_image: "",
                  background_position: "50% 50%",
                  background_repeat: "no-repeat",
                  background_size: "cover",
                },
              }}
            />
          </div>
          <div className="content-center brand">
            <h1 className="h1-seo">
              360-Degree Fully Optimized Digital Solutions<br></br> to
              <ColouredSpan> grow your business </ColouredSpan>
              organically
            </h1>

            <p>
              Empowering brands to extraordinary heights with top-of-the-line
              <ColouredSpan> Digitalized Monetized Brandized </ColouredSpan>
              <br></br>
              ever-evolving digital solutions.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
