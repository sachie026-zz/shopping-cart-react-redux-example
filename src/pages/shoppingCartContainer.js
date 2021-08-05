import React from "react";
import { connect } from "react-redux";
import { cartUpdateAction } from "../actions/cartActions";
import CartItems from "./cartItems";
import CardDetails from "./cardDetails";

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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CartItems />
      <CardDetails />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
