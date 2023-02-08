import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

function CarouselSection({ items }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {/* <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          /> */}
        {items.map((item) => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}
            >
              <div style={{ height: "800px" }}>
                <Row>
                  <Col>
                    <img
                      style={{
                        height: "100%",
                      }}
                      src={item.imgUrl}
                      alt={item.imgAlt}
                    />
                  </Col>
                  <Col>
                    <div class="slider-module__content">
                      <div class="clipping-mask">
                        <Row>
                          <Col>
                            <a
                              style={{
                                float: "left",
                                color: "green",
                                fontSize: "2em",
                                position: "relative",
                                marginBottom: "20px",
                              }}
                              className="carousel-control-prev"
                              data-slide="prev"
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                previous();
                              }}
                              role="button"
                            >
                              <i className="now-ui-icons arrows-1_minimal-left"></i>
                            </a>
                          </Col>
                          <Col>
                            <a
                              style={{
                                float: "right",
                                position: "relative",
                                color: "green",
                                fontSize: "2em",
                                marginBottom: "20px",
                              }}
                              className="carousel-control-next"
                              data-slide="next"
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                next();
                              }}
                              role="button"
                            >
                              <i className="now-ui-icons arrows-1_minimal-right"></i>
                            </a>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <h2 class="h2 gray-font">{item.subTitle}</h2>
                            <h2 class="h3 slider-module__content--title">
                              <span>{item.title}</span>
                            </h2>
                            <div class="slider-module__content--separator"></div>

                            <p>{item.body}</p>
                            <a href={item.exploreLink} class="btn btn-lg">
                              Let’s Explore
                            </a>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div style={{ fontSize: "3em" }}>
                              {item.footer.left.digits}
                            </div>
                            <div>{item.footer.left.desc}</div>
                          </Col>
                          <Col>
                            <div style={{ fontSize: "3em" }}>
                              {item.footer.right.digits}
                            </div>
                            <div>{item.footer.right.desc}</div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
}

export default CarouselSection;
