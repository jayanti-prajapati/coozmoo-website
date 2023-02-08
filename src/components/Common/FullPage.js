import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

const FullPage = ({ children }) => (
  <ReactFullpage
    navigation
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return <div>{children}</div>;
    }}
  />
);

export default FullPage;
