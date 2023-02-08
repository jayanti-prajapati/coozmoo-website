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
import Section from "components/Common/Section.js";
import PageNavbar from "components/Navbars/PageNavbar.js";

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
      imgUrl:
        "http://coozmooo.my-production-server.com/wp-content/themes/astra/img/service/Technical SEO Backlinko created the Skyscraper Technique to boost search engine visibility and organic traffic.jpg",
      imgAlt: "Nature, United States",
      subTitle: "Technical SEO",
      title:
        "Backlinko - Skyscraper Technique boosting search engine visibility and organic traffic",
      body: (
        <>
          Backlinko, a leading SEO resource blog, created the "Skyscraper
          Technique” to boost online visibility in search engine rankings and
          organic traffic. This technical SEO strategy uses a 3-step approach.
          First, determine user intent by analyzing the first page of the search
          results for specific keywords. Second, customize the site’s content to
          satisfy searchers’ intent. This step requires site owners to leverage
          keywords to improve existing articles or create new blog posts.
        </>
      ),
      exploreLink: "#",

      footer: {
        left: { digits: "40%", desc: "Small businesses outsource" },
        right: { digits: "46%", desc: "All searches" },
      },
    },
  ];
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section" style={{ padding: "0px" }}>
            <IndexHeader />
          </div>
          <PageNavbar />
          <Section>
            <PageHeading
              fadedNumber="01"
              title="Optimize"
              titleColoured="Search"
              desc="By utilizing cutting-edge optimization techniques and utilizing industry-leading SEO strategies, you can elevate your online presence and skyrocket your search engine rankings."
              learnMoreLink="#"
            />
          </Section>
          <Section>
            <CarouselSection items={items}></CarouselSection>
          </Section>
          <Section>
            <Cards />
          </Section>

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
