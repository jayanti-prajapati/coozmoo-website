import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  CardText,
  CardSubtitle,
  CardBody,
  CardImg,
  CardTitle,
  Card,
  CardGroup,
  Row,
  Col,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [isTransparent, setIsTransparent] = React.useState(true);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 429 ||
        document.body.scrollTop > 429
      ) {
        setNavbarColor("");
        setIsTransparent(false);
      } else if (
        document.documentElement.scrollTop < 430 ||
        document.body.scrollTop < 430
      ) {
        setNavbarColor("navbar-transparent");
        setIsTransparent(true);
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        expand="lg"
        style={{ background: isTransparent ? "" : "#fff" }}
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#" target="_blank" id="navbar-brand">
              {isTransparent && (
                <img
                  style={{ width: "156px" }}
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/logo-light.png")}
                ></img>
              )}
              {!isTransparent && (
                <img
                  style={{ width: "156px" }}
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/logo_.png")}
                ></img>
              )}
            </NavbarBrand>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {/*  <NavItem>
                <NavLink
                  style={{ color: isTransparent ? "#fff" : "black" }}
                  href="#"
                  onClick={(e) => {}}
                >
                  <p>Digital</p>
                </NavLink>
              </NavItem> */}

              <UncontrolledDropdown nav style={{ position: "inherit" }}>
                <DropdownToggle
                  style={{ color: isTransparent ? "#fff" : "black" }}
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  {/* <i className="now-ui-icons design_app mr-1"></i> */}
                  <p>Digital</p>
                </DropdownToggle>
                <DropdownMenu style={{ width: "100%" }}>
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://picsum.photos/318/180"
                              top
                              width="100%"
                            />
                            <CardBody>
                              <CardTitle tag="h5">Card title</CardTitle>
                              <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                              >
                                Card subtitle
                              </CardSubtitle>
                              <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </CardText>
                              <Button>Button</Button>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src="https://picsum.photos/318/180"
                              top
                              width="100%"
                            />
                            <CardBody>
                              <CardTitle tag="h5">Card title</CardTitle>
                              <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                              >
                                Card subtitle
                              </CardSubtitle>
                              <CardText>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </CardText>
                              <Button>Button</Button>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  style={{ color: isTransparent ? "#fff" : "black" }}
                  href="#pablo"
                  onClick={(e) => {}}
                >
                  <p>Solutions</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: isTransparent ? "#fff" : "black" }}
                  href="#pablo"
                  onClick={(e) => {
                    //   e.preventDefault();
                    //   document
                    //     .getElementById("download-section")
                    //     .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Company</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={(e) => {}}
                  style={{ color: isTransparent ? "#fff" : "black" }}
                >
                  <i style={{ color: "#87c500" }} class="fa fa-phone mr-2 "></i>
                  <p>+1 (443) 583-8949</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <Button
                  style={{ fontSize: "1rem" }}
                  className="nav-link "
                  href="#"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  Estimate Project
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
