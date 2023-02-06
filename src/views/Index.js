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
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          {/* <FullPage> */}
          <div className="section">
            <IndexHeader />
          </div>
          <div className="section" style={{ zIndex: 100 }}>
            <PageHeading />

            <Carousel />
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
