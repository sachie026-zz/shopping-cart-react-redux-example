import React from "react";
import { connect } from "react-redux";
import { cartUpdateAction } from "../actions/cartActions";
import CartItems from "./cartItems";
import CardDetails from "./cardDetails";

import "./css/shoppingCartContainer.css";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  cartUpdateAction: (id, value) => dispatch(cartUpdateAction(id, value)),
});

const ShoppingCartContainer = (props) => {
  return (
    <div className="cart-container">
      <CartItems />
      <CardDetails />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
