import React from "react";

const CartRow = (props) => {
  const { item, incrementAction, decrementAction, deleteAction } = props;
  return (
    <div key={`item-${item.id}`}>
      <h3>{item.name}</h3> {item.quantity}
      <br />
      {item.total}
      <br />
      <button onClick={() => incrementAction(item.id, item.quantity)}>
        Increment
      </button>
      <button
        disabled={item.quantity === 0}
        onClick={() => decrementAction(item.id, item.quantity)}
      >
        Decrement
      </button>
      <button onClick={() => deleteAction(item.id)}>Delete</button>
      <br />
    </div>
  );
};

export default CartRow;
