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
      const { name } = action.payload;
      return {
        ...state,
        name: name,
      };
    case "UPDATE_CARD_NUMBER":
      const { number } = action.payload;
      return {
        ...state,
        number: number,
      };
    case "UPDATE_CARD_EXPIRY_MONTH":
      const { month } = action.payload;
      return {
        ...state,
        expiryMonth: month,
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
