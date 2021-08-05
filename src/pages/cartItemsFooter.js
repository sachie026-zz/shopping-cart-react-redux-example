import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  ...state,
});

const CartItemFooter = (props) => {
  const { cartReducer } = props;
  const subTotal = cartReducer.subTotal;
  return (
    <>
      <div>Continue Shopping</div>
      <div>Subtotal:{subTotal}</div>
    </>
  );
};

export default connect(mapStateToProps)(CartItemFooter);
