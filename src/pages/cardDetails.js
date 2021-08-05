import React from "react";
import { connect } from "react-redux";
import {
  cardNameAction,
  cardNumberAction,
  cardCvvAction,
  cardExpiryMonthAction,
  cardExpiryYearAction,
} from "../actions/cardActions";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <div>Card Details</div>
      <div>
        <label>Card Type</label>
        <label>VISA Mastercard</label>
        <br />
        <label>Name on Card</label>
        <input type="text" value={name} onChange={updateCardName} />
        <br />
        <label>Card Number</label>
        <input type="number" value={number} onChange={updateCardNumber} />
        <br />
        <label>Expiration Date</label>
        <input type="text" value={expiryMonth} />
        <input type="text" value={expiryYear} />
        <br />
        <label>CVV</label>
        <input type="number" value={CVV} onChange={updateCardCvv} />
        <br />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
