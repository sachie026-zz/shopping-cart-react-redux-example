import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/fontawesome-free-solid";

import "./css/cartRow.css";

const CartRow = (props) => {
  const { item, incrementAction, decrementAction, deleteAction } = props;
  return (
    <div key={`item-${item.id}`} className="cart-row">
      <div className="item-image">
        <img src={item.src} alt="item" />
      </div>
      <div className="item-name">
        <label className="item-name-label">{item.name}</label>
        <label className="item-id-label">{item.id}</label>
      </div>
      <div className="item-quantity-container">
        <button
          disabled={item.quantity === 0}
          onClick={() => decrementAction(item.id, item.quantity)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div className="item-quantity">{item.quantity}</div>
        <button onClick={() => incrementAction(item.id, item.quantity)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="item-total">
        <var>
          <sup>$</sup>
          {item.total.toFixed(2)}
        </var>
      </div>

      <div className="item-remove">
        <button onClick={() => deleteAction(item.id)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default CartRow;
