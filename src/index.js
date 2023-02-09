import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/coozmoo.scss?v=1.0.0";
import "assets/css/custom.css?v=1.0.0";
//import "assets/demo/nucleo-icons-page-styles.css?v=1.0.0";

import OptimizeSearchPage from "pages/optimize-search";
import SearchEngineOptimizationPage from "pages/optimize-search/pages/search-engine-optimization";
import TechnicalSeoPage from "pages/optimize-search/pages/technical-seo";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/optimize-search"
          render={(props) => <OptimizeSearchPage {...props} />}
        />
        <Route
          path="/search-engine-optimization"
          render={(props) => <SearchEngineOptimizationPage {...props} />}
        />
        <Route
          path="/technical-seo"
          render={(props) => <TechnicalSeoPage {...props} />}
        />

        <Redirect to="/optimize-search" />
        <Redirect from="/" to="/optimize-search" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
