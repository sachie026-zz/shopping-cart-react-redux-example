const initialState = {
  name: "",
  number: "",
  expiryMonth: null,
  expiryYear: null,
  CVV: null,
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
      const { year } = action.payload;
      return {
        ...state,
        expiryYear: year,
      };
    case "UPDATE_CARD_CVV":
      const { cvv } = action.payload;
      return {
        ...state,
        CVV: cvv,
      };
    default:
      return state;
  }
};

export default cardReducer;
