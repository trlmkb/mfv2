import React from "react";

import { useCount } from "host/store";

export default () => {
  const [count, setCount] = useCount();
  return (
    <header className="header">
      <div className="title"><span>le</span>Shop</div>
      <div className="cart">
        <div className="cart-count">
          {count}
        </div>

        <button
          onClick={() => setCount(0)}
          className="button"
        >
          Clear Cart
        </button>
      </div>
    </header>
  );
};
