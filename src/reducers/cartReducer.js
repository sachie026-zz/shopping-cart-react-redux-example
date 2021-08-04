const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        result: action.payload,
      };
    case "DELETE_ITEM":
      return {
        result: action.payload,
      };
    case "UPDATE_ITEM":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
