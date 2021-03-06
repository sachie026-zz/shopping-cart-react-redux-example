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
import { months, years } from "../utils/utils";

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
    const val = event.target.value;
    if (val.toString().length <= 3) {
      props.cardCvvAction(val);
    }
  };

  const updateCardExpiryMonth = (event) => {
    props.cardUpdateExpiryMonthAction(event.target.value);
  };

  const updateCardExpiryYear = (event) => {
    props.cardUpdateExpiryYearAction(event.target.value);
  };
  return (
    <div className="card-details-container">
      <h2 className="card-details-header">Card Details</h2>
      <div className="card-details-content">
        <div className="card-type-container">
          <label className="card-details-label">Card Type</label>
          <div className="card-icon-container">
            <div className="card-view">
              <div>
                <label className="visa-label">VISA</label>
                <label className="visa-label-watermark">VISA</label>
              </div>
              <label className="card-view-number">**** **** **** ****</label>
              <div className="card-view-footer">
                <label className="card-view-footer-name">
                  {name || "---- ----"}
                </label>
                <label className="card-view-footer-expiry">
                  {expiryMonth || expiryYear
                    ? `${expiryMonth}/${expiryYear.toString().substr(-2)}`
                    : "12/18"}
                </label>
              </div>
            </div>
            <div className="mastercard-container">
              <img
                src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                alt="mastercard"
                className="mastercard-icon"
              />
              <label className="mastercard-label">mastercard</label>
            </div>
          </div>
        </div>
        <div className="card-name">
          <label className="card-details-label">Name on Card</label>
          <input type="text" value={name} onChange={updateCardName} />
        </div>
        <div className="card-number">
          <label className="card-details-label">Card Number</label>
          <input type="number" value={number} onChange={updateCardNumber} />
        </div>
        <div className="card-expiration-container">
          <div className="card-expiration">
            <label className="card-details-label">Expiration Date</label>
            <div className="card-expiration-inputs">
              <select
                name="months"
                id="months"
                className="card-expiry-input margin-right-15"
                onChange={updateCardExpiryMonth}
              >
                {months.map((month, index) => (
                  <option value={index + 1}>{month.toLocaleUpperCase()}</option>
                ))}
              </select>
              <select
                name="years"
                id="years"
                className="card-expiry-input margin-right-15"
                onChange={updateCardExpiryYear}
              >
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
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
