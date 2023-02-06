/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer
      className="footer"
      data-background-color="black"
      style={{ marginTop: "70px" }}
    >
      <Container>
        <nav>
          <ul>
            <li>
              <a href="#">Coozmoo</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          <a href="#">Coozmoo</a> © {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
