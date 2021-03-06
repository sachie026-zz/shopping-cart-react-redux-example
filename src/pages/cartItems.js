import React from "react";
import { connect } from "react-redux";
import { cartUpdateAction, cartDeleteAction } from "../actions/cartActions";
import CartItemFooter from "./cartItemsFooter";
import CartRow from "./cartRow";
import "./css/cartItems.css";

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
    <div className="cart-items-container">
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <CartRow
          key={`itemkey${index}`}
          item={item}
          incrementAction={incrementAction}
          decrementAction={decrementAction}
          deleteAction={deleteAction}
        />
      ))}
      <CartItemFooter />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
