export const cardNameAction = () => (dispatch) => {
  dispatch({
    type: "UPDATE_CARD_NAME",
    payload: "result_of_simple_action",
  });
};

export const cardNumberAction = () => (dispatch) => {
  dispatch({
    type: "UPDATE_CARD_NUMBER",
    payload: "result_of_simple_action",
  });
};

export const cardExpiryAction = () => (dispatch) => {
  dispatch({
    type: "UPDATE_CARD_EXPIRY",
    payload: "result_of_simple_action",
  });
};

export const cardCvvAction = () => (dispatch) => {
  dispatch({
    type: "UPDATE_CARD_CVV",
    payload: "result_of_simple_action",
  });
};
