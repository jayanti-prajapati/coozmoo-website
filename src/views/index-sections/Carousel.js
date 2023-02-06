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
              <div style={{ height: "600px" }}>
                <Row>
                  <Col>
                    <img
                      style={{
                        height: "100%",
                      }}
                      src={item.src}
                      alt={item.altText}
                    />
                  </Col>
                  <Col>
                    <div class="slider-module__content">
                      <div class="clipping-mask">
                        <h2 class="h2 gray-font">{item.subTitle}</h2>
                        <h2 class="h3 slider-module__content--title">
                          <span>{item.title}</span>
                        </h2>
                        <div class="slider-module__content--separator"></div>
                        {item.body}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </CarouselItem>
          );
        })}
        <a
          style={{
            // background: "linear-gradient(45deg, black, transparent)",
            // width: "7%",
            color: "green",
            fontSize: "5em",
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
        <a
          style={{
            // background: "linear-gradient(45deg, black, transparent)",
            // width: "7%",
            color: "green",
            fontSize: "5em",
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
      </Carousel>
    </>
  );
}

export default CarouselSection;
