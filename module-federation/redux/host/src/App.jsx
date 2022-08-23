import React from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";

import { StoreProvider, useStore } from "store/store";

import "./index.scss";

const App = () => {
  const { count, increment } = useStore();
  return (
    <div className="page">
      <Header />
      
      <fieldset className="mf-wrap">
        <legend>
          <span className="mf">I am <strong>Host</strong> microfrontend</span>
        </legend>
        
        <div className="count-wrapper">
          <div className="count">
            <div className="count-text">
              Items in cart
            </div>
            <div className="count-number">
              {count}
            </div>
          </div>
          <div className="count-actions-wrap">
            <button
              onClick={increment}
              className="button button--icon"
            >
              <svg className="plus" viewBox="0 0 32 32">
                <path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z"/>
              </svg>
            </button>
            
          </div>
        </div>

      </fieldset>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
