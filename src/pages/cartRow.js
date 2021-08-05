import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/fontawesome-free-solid";

import "./css/cartRow.css";

const CartRow = (props) => {
  const { item, incrementAction, decrementAction, deleteAction } = props;
  return (
    <div key={`item-${item.id}`} className="cart-row">
      <h3>{item.name}</h3> {item.quantity}
      <br />
      {item.total}
      <br />
      <button onClick={() => incrementAction(item.id, item.quantity)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button
        disabled={item.quantity === 0}
        onClick={() => decrementAction(item.id, item.quantity)}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button onClick={() => deleteAction(item.id)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <br />
    </div>
  );
};

export default CartRow;
