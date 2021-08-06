import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";

import "./css/cartItemsFooter.css";

const mapStateToProps = (state) => ({
  ...state,
});

const CartItemFooter = (props) => {
  const { cartReducer } = props;
  const subTotal = cartReducer.subTotal;
  return (
    <div className="cart-items-footer-container">
      <div className="continue-shopping">
        <FontAwesomeIcon icon={faArrowLeft} size="6px" />
        <label className="continue-shopping-label">Continue Shopping</label>
      </div>
      <div className="subtotal-section">
        <label className="subtotal-label">Subtotal:</label>
        <label className="subtotal-value"> ${subTotal.toFixed(2)}</label>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(CartItemFooter);
