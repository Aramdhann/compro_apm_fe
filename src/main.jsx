import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import "./i18n";
import Loading from "./components/Loading.jsx";
import ReactGA from "react-ga4";

ReactGA.initialize("G-0ZVLSMJB72");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "page-view",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
