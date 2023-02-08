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

function PageNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [isFixed, setIsFixed] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      console.log(
        "document.documentElement.scrollTop",
        document.documentElement.scrollTop
      );
      if (
        document.documentElement.scrollTop > 820 ||
        document.body.scrollTop > 820
      ) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      <h1>{isFixed}</h1>
      <Navbar
        className={isFixed ? "fixed-top" : ""}
        expand="lg"
        style={{
          background: "#fff",
          zIndex: "10000",
          boxShadow: "none",
        }}
      >
        <Container>
          <div className="navbar-translate">
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
            <Nav
              navbar
              style={{ width: "100%", justifyContent: "space-between" }}
            >
              <NavItem>
                <NavLink
                  style={{ color: "black" }}
                  href="#"
                  onClick={(e) => {}}
                >
                  <p>Optimize Search</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "black" }}
                  href="#"
                  onClick={(e) => {
                    //   e.preventDefault();
                    //   document
                    //     .getElementById("download-section")
                    //     .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Digital Business</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={(e) => {}}
                  style={{ color: "black" }}
                >
                  <p>Socialise Brand</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={(e) => {}}
                  style={{ color: "black" }}
                >
                  <p>Digital Transformations</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={(e) => {}}
                  style={{ color: "black" }}
                >
                  <p>E-Commerce</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={(e) => {}}
                  style={{ color: "black" }}
                >
                  <p>User Experience</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default PageNavbar;
