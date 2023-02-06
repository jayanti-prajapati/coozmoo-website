import { Card, CardText, CardTitle, Col, Row } from "reactstrap";

const Cards = () => {
  return (
    <Row>
      <Col>
        <div class="single-row-module">
          <div class="single-row-module__item single-row-module__item--4 single-row-module__item--center">
            <div class="single-row-module__wrapper single-row-module__wrapper_linked">
              <a
                class="single-row-module__link"
                href="mobile-app-development-services"
              >
                <div class="single-row-module__icon">
                  <span class="single-row-module__icon_text">
                    <i class="fab fa fa-search"></i>
                  </span>
                </div>
                <div class="single-row-module__title">
                  <h5> Search Engine Optimization </h5>
                </div>
                <div class="single-row-module__desc">
                  <span></span>
                  <p class="p1">
                    Unleash the power of exceptional SEO, elevate your online
                    presence, and dominate your competition today.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="single-row-module__item single-row-module__item--4 single-row-module__item--center">
            <div class="single-row-module__wrapper single-row-module__wrapper_linked">
              <a
                class="single-row-module__link"
                href="mobile-app-development-services "
              >
                <div class="single-row-module__icon">
                  <span class="single-row-module__icon_text">
                    <i class="fab fa fa-link"></i>
                  </span>
                </div>
                <div class="single-row-module__title">
                  <h5> Link Building Service </h5>
                </div>
                <div class="single-row-module__desc">
                  <span></span>
                  <p class="p1">
                    Experience unmatched website authority with our elite Link
                    Building Off-Page SEO Service.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="single-row-module__item single-row-module__item--4 single-row-module__item--center">
            <div class="single-row-module__wrapper single-row-module__wrapper_linked">
              <a
                class="single-row-module__link"
                href="mobile-app-development-services "
              >
                <div class="single-row-module__icon">
                  <span class="single-row-module__icon_text">
                    <i class="fab fa fa-user"></i>
                  </span>
                </div>
                <div class="single-row-module__title">
                  <h5> Guest Posts &amp; Outreach </h5>
                </div>
                <div class="single-row-module__desc">
                  <span></span>
                  <p class="p1">
                    Maximize your online visibility through strategic Guest
                    Posting and Outreach efforts that optimize results.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="single-row-module__item single-row-module__item--4 single-row-module__item--center">
            <div class="single-row-module__wrapper single-row-module__wrapper_linked">
              <a
                class="single-row-module__link"
                href="mobile-app-development-services "
              >
                <div class="single-row-module__icon">
                  <span class="single-row-module__icon_text">
                    <i class="fas fa fa-map-marker"></i>
                  </span>
                </div>
                <div class="single-row-module__title">
                  <h5> Google Local Service </h5>
                </div>
                <div class="single-row-module__desc">
                  <span></span>
                  <p class="p1">
                    Dominate local search rankings with our expert GMB, Google
                    Local Services, and Local SEO services.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>{" "}
      </Col>
    </Row>
  );
};

export default Cards;
