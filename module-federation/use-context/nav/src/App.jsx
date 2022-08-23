import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import { CountProvider } from "host/store";

import "./index.scss";

const App = () => (
  <CountProvider>
    <div className="container">
      <Header />
      <fieldset className="mf-wrap">
        <legend>
          <span className="mf">I am <strong>Nav</strong></span>
        </legend>

        <div className="count-wrapper">
          This isn't the microfrontend you're looking for.
        </div>
      </fieldset>
    </div>
  </CountProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
