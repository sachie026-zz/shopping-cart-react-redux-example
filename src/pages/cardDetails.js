import React from "react";
import { connect } from "react-redux";
import { cartUpdateAction, cartDeleteAction } from "../actions/cartActions";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  cartUpdateAction: (id, value) => dispatch(cartUpdateAction(id, value)),
  cartDeleteAction: (id) => dispatch(cartDeleteAction(id)),
});

const CardDetails = (props) => {
  const { cartReducer } = props;
  const cartItems = cartReducer.cartItems;
  const incrementAction = (id, quantity) => {
    props.cartUpdateAction(id, quantity + 1);
  };

  const decrementAction = (id, quantity) => {
    props.cartUpdateAction(id, quantity - 1);
  };

  const deleteAction = (id, quantity) => {
    props.cartDeleteAction(id, quantity - 1);
  };

  return (
    <>
      <pre>{JSON.stringify(props)}</pre>
      <div>Card Details</div>
      {cartItems.map((item, index) => (
        <div key={`item-${item.id}`}>
          <h1>{item.name}</h1> {item.quantity}
          <br />
          <button onClick={() => incrementAction(item.id, item.quantity)}>
            Increment
          </button>
          <button onClick={() => decrementAction(item.id, item.quantity)}>
            Decrement
          </button>
          <button onClick={() => deleteAction(item.id)}>Delete</button>
          <br />
        </div>
      ))}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
