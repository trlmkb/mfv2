import React from "react";

import useStore from "host/store";

export default () => {
  const { count, clear } = useStore();
  return (
    <header className="header">
    <div className="title"><span>le</span>Shop</div>
    <div className="cart">
      <div className="cart-count">
        {count}
      </div>

      <button
        onClick={clear}
        className="button"
      >
        Clear Cart
      </button>
    </div>
  </header>
  );
};
