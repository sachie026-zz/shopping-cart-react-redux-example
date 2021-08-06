import React from "react";
import { connect } from "react-redux";
import {
  cardNameAction,
  cardNumberAction,
  cardCvvAction,
  cardExpiryMonthAction,
  cardExpiryYearAction,
} from "../actions/cardActions";
import "./css/cardDetails.css";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  cardNameAction: (value) => dispatch(cardNameAction(value)),
  cardNumberAction: (value) => dispatch(cardNumberAction(value)),
  cardCvvAction: (value) => dispatch(cardCvvAction(value)),
  cardUpdateExpiryMonthAction: (value) =>
    dispatch(cardExpiryMonthAction(value)),
  cardUpdateExpiryYearAction: (value) => dispatch(cardExpiryYearAction(value)),
});

const CardDetails = (props) => {
  const { cardReducer } = props;
  const { name, number, CVV, expiryMonth, expiryYear } = cardReducer;
  const updateCardName = (event) => {
    props.cardNameAction(event.target.value);
  };

  const updateCardNumber = (event) => {
    props.cardNumberAction(event.target.value);
  };

  const updateCardCvv = (event) => {
    props.cardCvvAction(event.target.value);
  };

  const updateCardExpiryMonth = () => {};

  const updateCardExpiryYear = () => {};
  return (
    <div className="card-details-container">
      <h2 className="card-details-header">Card Details</h2>
      <div className="card-details-content">
        <div className="card-type-container">
          <label className="card-details-label">Card Type</label>
          <div className="card-icon-container">
            <div></div>
            <img
              src="https://cpng.pikpng.com/pngl/s/249-2498425_mastercard-2019-logo-mastercard-logo-clipart.png"
              alt="mastercard"
              className="mastercard-icon"
            />
          </div>
        </div>
        <div className="card-name">
          <label className="card-details-label">Name on Card</label>
          <input type="text" value={name} onChange={updateCardName} />
        </div>
        <div className="card-number">
          <label className="card-details-label">Card Number</label>
          <input type="password" value={number} onChange={updateCardNumber} />
        </div>
        <div className="card-expiration-container">
          <div className="card-expiration">
            <label className="card-details-label">Expiration Date</label>
            <div className="card-expiration-inputs">
              <input
                type="text"
                className="card-expiry-input margin-right-15"
                value={expiryMonth}
              />
              <input
                type="text"
                className="card-expiry-input margin-right-15"
                value={expiryYear}
              />
            </div>
          </div>
          <div className="card-cvv">
            <label className="card-details-label">CVV</label>
            <input
              type="number"
              className="card-expiry-input"
              value={CVV}
              onChange={updateCardCvv}
            />
          </div>
        </div>
        <div className="checkout-container">
          <input type="submit" className="checkout-button" value="Check Out" />
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
