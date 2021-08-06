const initialState = {
  name: "",
  number: "",
  expiryMonth: "",
  expiryYear: "",
  CVV: "",
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CARD_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "UPDATE_CARD_NUMBER":
      return {
        ...state,
        number: action.payload,
      };
    case "UPDATE_CARD_EXPIRY_MONTH":
      return {
        ...state,
        expiryMonth: action.payload,
      };
    case "UPDATE_CARD_EXPIRY_YEAR":
      return {
        ...state,
        expiryYear: action.payload,
      };
    case "UPDATE_CARD_CVV":
      return {
        ...state,
        CVV: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer;
