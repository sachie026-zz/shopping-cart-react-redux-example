import React from "react";
import { connect } from "react-redux";
import { cartUpdateAction } from "../actions/cartActions";
import CartItems from "./cartItems";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  cartUpdateAction: (id, value) => dispatch(cartUpdateAction(id, value)),
});

const ShoppingCartContainer = (props) => {
  // const { cartReducer } = props;
  // const cartItems = cartReducer.cartItems;
  // const incrementAction = (id, quantity) => {
  //   props.cartUpdateAction(id, quantity + 1);
  // };

  // const decrementAction = (id, quantity) => {
  //   props.cartUpdateAction(id, quantity - 1);
  // };

  return (
    <>
      {/* <pre>{JSON.stringify(props)}</pre>
      <div>Shopping Cart</div>
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
          <br />
        </div>
      ))} */}
      <CartItems />
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
