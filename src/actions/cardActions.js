export const cardNameAction = (value) => (dispatch) => {
  dispatch({
    type: "UPDATE_CARD_NAME",
    payload: value,
  });
};

export const cardNumberAction = (value) => (dispatch) => {
  dispatch({
    type: "UPDATE_CARD_NUMBER",
    payload: value,
  });
};

export const cardExpiryMonthAction = (value) => (dispatch) => {
  dispatch({
    type: "UPDATE_CARD_EXPIRY_MONTH",
    payload: value,
  });
};

export const cardExpiryYearAction = (value) => (dispatch) => {
  dispatch({
    type: "UPDATE_CARD_EXPIRY_YEAR",
    payload: value,
  });
};

export const cardCvvAction = (value) => (dispatch) => {
  dispatch({
    type: "UPDATE_CARD_CVV",
    payload: value,
  });
};
