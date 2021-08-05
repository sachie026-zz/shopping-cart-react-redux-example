import React from "react";
import { connect } from "react-redux";
import { cartUpdateAction, cartDeleteAction } from "../actions/cartActions";
import CartItemFooter from "./cartItemsFooter";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  cartUpdateAction: (id, value) => dispatch(cartUpdateAction(id, value)),
  cartDeleteAction: (id) => dispatch(cartDeleteAction(id)),
});

const CartItems = (props) => {
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
      <div>Shopping Cart</div>
      {cartItems.map((item, index) => (
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
      ))}
      <CartItemFooter />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
