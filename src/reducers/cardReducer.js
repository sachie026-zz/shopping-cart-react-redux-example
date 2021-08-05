const initialState = {};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CARD_NAME":
      return {
        result: action.payload,
      };
    case "UPDATE_CARD_NUMBER":
      return {
        result: action.payload,
      };
    case "UPDATE_CARD_EXPIRY":
      return {
        result: action.payload,
      };
    case "UPDATE_CARD_CVV":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer;
