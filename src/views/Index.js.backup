import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import ParallaxElements from "./index-sections/ParallaxElements.js";
import { Col, Row } from "reactstrap";
import PageHeading from "components/Common/PageHeading.js";
import FullPage from "components/Common/FullPage.js";
import ContactMe from "./index-sections/ContactMe.js";
import Cards from "./index-sections/Cards.js";
import CarouselSection from "./index-sections/Carousel.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const items = [
    {
      src: "http://coozmooo.my-production-server.com/wp-content/themes/astra/img/service/Technical SEO Backlinko created the Skyscraper Technique to boost search engine visibility and organic traffic.jpg",
      altText: "Nature, United States",
      caption: "Nature, United States",
      subTitle: "Technical SEO",
      title:
        "Backlinko - Skyscraper Technique boosting search engine visibility and organic traffic",
      body: (
        <>
          <p>
            Backlinko, a leading SEO resource blog, created the "Skyscraper
            Technique” to boost online visibility in search engine rankings and
            organic traffic. This technical SEO strategy uses a 3-step approach.
            First, determine user intent by analyzing the first page of the
            search results for specific keywords. Second, customize the site’s
            content to satisfy searchers’ intent.
          </p>

          <Row>
            <Col>
              <div style={{ fontSize: "2em" }}>49%</div>
              <div>
                of marketers say that organic search has the best ROI of any
                marketing channel.
              </div>
            </Col>
            <Col>
              <div style={{ fontSize: "2em" }}>200</div>
              <div>
                According to Backlinko, Google’s algorithm uses over 200 website
                ranking factors.
              </div>
            </Col>
          </Row>
        </>
      ),
    },
    {
      src: "http://coozmooo.my-production-server.com/wp-content/themes/astra/img/service/Local SEO Uber.jpg",
      altText: "Nature, United States",
      caption: "Nature, United States",
      subTitle: "Link Building",
      title:
        "Learn - neilpatel.com implements a successful link-building strategy",
      body: (
        <>
          <p>
            Neil Patel, the founder of neilpatel.com and co-founder of Crazy Egg
            and Hello Bar, combines several SEO strategies to help companies
            grow their revenue. The UN and former US President Barack Obama have
            recognized Neil Patel as a top web entrepreneur. What is his secret?
            Patel implements the best link-building strategies. First, he
            searches for websites linked to 3 or 4 competitors and requests the
            site owners to link to neilpatel.com. This approach increases the
            chances of getting industry-specific links.
          </p>

          <Row>
            <Col>
              <div style={{ fontSize: "2em" }}>67.5%</div>
              <div>
                of SEOs say that backlinks impact search engine rankings.
              </div>
            </Col>
            <Col>
              <div style={{ fontSize: "2em" }}>77.2%</div>
              <div>
                Long-form content with 3,000 words or more receives 77.2% more
                external links than short-form posts with less than 1,000 words
              </div>
            </Col>
          </Row>
        </>
      ),
    },
    {
      src: "http://coozmooo.my-production-server.com/wp-content/themes/astra/img/service/Google Local.jpg",
      altText: "Nature, United States",
      caption: "Nature, United States",
      subTitle: "Google Local",
      title:
        "Google Local Service increasing visibility for local search queries",
      body: (
        <>
          <p>
            A local taxi company partnered with an SEO specialist to increase
            visibility for local search queries. The taxi business operates in a
            city with 200,000 residents, 60 million tourists, and two
            international airports. Although the company’s website had a high
            organic ranking for location-based queries, it didn’t appear in the
            local pack for city searches.
          </p>

          <Row>
            <Col>
              <div style={{ fontSize: "2em" }}>40%</div>
              <div>
                of small businesses outsource their local SEO operations.
              </div>
            </Col>
            <Col>
              <div style={{ fontSize: "2em" }}>46%</div>
              <div>of all searches include location.</div>
            </Col>
          </Row>
        </>
      ),
    },
  ];
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          {/* <FullPage> */}
          <div className="section" style={{ padding: "0px" }}>
            <IndexHeader />
          </div>
          <div className="section" style={{ zIndex: 100 }}>
            <PageHeading />
          </div>{" "}
          <div className="section" style={{ zIndex: 100 }}>
            <CarouselSection items={items}></CarouselSection>
          </div>
          <div className="section" style={{ zIndex: 100 }}>
            {/* <ContactMe /> */}
            <Cards />
          </div>
          {/* </FullPage> */}
          {/*           
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />

          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download />
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          <ParallaxElements /> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
