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

const items = [
  {
    src: "http://coozmooo.my-production-server.com/wp-content/themes/astra/img/service/Technical SEO Backlinko created the Skyscraper Technique to boost search engine visibility and organic traffic.jpg",
    altText: "Nature, United States",
    caption: "Nature, United States",
  },
  {
    src: "http://coozmooo.my-production-server.com/wp-content/themes/astra/img/service/Technical SEO Backlinko created the Skyscraper Technique to boost search engine visibility and organic traffic.jpg",
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: "http://coozmooo.my-production-server.com/wp-content/themes/astra/img/service/Technical SEO Backlinko created the Skyscraper Technique to boost search engine visibility and organic traffic.jpg",
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States",
  },
];

function CarouselSection() {
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
              <Row>
                <Col>
                  <img height={"100%"} src={item.src} alt={item.altText} />

                  {/* <div
                    class="slider-module__image  "
                    style={{
                      backgroundPosition: "center center",
                      backgroundImage: `url("http://coozmooo.my-production-server.com/wp-content/themes/astra/img/service/Technical SEO Backlinko created the Skyscraper Technique to boost search engine visibility and organic traffic.jpg")`,
                    }}
                  ></div> */}
                </Col>
                <Col>
                  <div class="slider-module__content">
                    <div class="clipping-mask">
                      <h2 class="h2 gray-font">Technical SEO</h2>
                      <h2 class="h3 slider-module__content--title">
                        <span>
                          Backlinko created the Skyscraper Technique to boost
                          search engine visibility and organic traffic
                        </span>
                      </h2>
                      <div class="slider-module__content--separator"></div>
                      <div class="slider-module__content--caption">
                        <div class="slider-module__content--caption--text">
                          <p>
                            Backlinko, a leading SEO resource blog, created the
                            "Skyscraper Technique” to boost online visibility in
                            search engine rankings and organic traffic. This
                            technical SEO strategy uses a 3-step approach.
                            First, determine user intent by analyzing the first
                            page of the search results for specific keywords.
                            Second, customize the site’s content to satisfy
                            searchers’ intent. This step requires site owners to
                            leverage keywords to improve existing articles or
                            create new blog posts. Lastly, they optimize the
                            User Experience (UX) signals to minimize bounce
                            rate, increase dwell time, and improve organic
                            click-through rates (CTR).
                          </p>
                          {/* <p>
                            Backlinko fulfills this goal by adding a “Table of
                            Contents,” short introductions, H2 and H3
                            sub-headers, and embedded videos in its articles.
                            These elements boost on-site engagement, UX, and
                            organic CTR. Backlinko’s Skyscraper Technique 2.0
                            SEO strategy increased organic traffic by 652% in
                            seven days!
                          </p> */}
                        </div>
                      </div>

                      <div class="slider-module__content--details">
                        <div class="slider-module__content--detail">
                          <div class="slider-module__content--detail--header">
                            49%
                          </div>
                          <div class="slider-module__content--detail--desc">
                            of marketers say that organic search has the best
                            ROI of any marketing channel.
                          </div>
                        </div>
                        <div class="slider-module__content--detail">
                          <div class="slider-module__content--detail--header">
                            200
                          </div>
                          <div class="slider-module__content--detail--desc">
                            According to Backlinko, Google’s algorithm uses over
                            200 website ranking factors.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
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
