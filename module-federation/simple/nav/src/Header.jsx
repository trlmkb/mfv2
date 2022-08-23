import React from "react";
import "./index.scss";

export default ({ count, onClear }) => (
  <header className="header">
    <div className="title"><span>le</span>Shop</div>
    <div className="cart">
      <div className="cart-count">
        {count}
      </div>

      <button
        onClick={onClear}
        className="button"
      >
        Clear Cart
      </button>
    </div>
  </header>
);
