const initialStoreState = {
  cartItems: [
    {
      id: "4231646",
      name: "Chicken Momo",
      quantity: 1,
      price: 10.50,
      total: 10.50,
    },
    {
      id: "4231647",
      name: "Spicy Mexican potatoes",
      quantity: 1,
      price: 8.50,
      total: 8.50,
    },
    {
      id: "4231648",
      name: "Breakfast",
      quantity: 1,
      price: 5.90,
      total: 5.90,
    },
  ],
  subTotal: 24.90,
};

const cartReducer = (state = initialStoreState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // as we do not have the add action, returning the state as it is
      return {
        ...state,
      };

    case "DELETE_ITEM":
      let deleteItemIndex;
      const afterDeleteItems = state.cartItems.filter((item, index) => {
        if (item.id === action.payload.id) {
          deleteItemIndex = index;
        }
        return item.id !== action.payload.id;
      });

      const newSubTotal =
        state.subTotal - state.cartItems[deleteItemIndex].total;
      return {
        ...state,
        cartItems: afterDeleteItems,
        subTotal: newSubTotal,
      };

    case "UPDATE_ITEM":
      const { id, quantity } = action.payload;
      let updatedSubTotal = 0;
      const updatedItems = state.cartItems.map((item) => {
        const temp = Object.assign({}, item);
        if (item.id === id) {
          temp.quantity = quantity;
          temp.total = quantity * temp.price;
        }
        updatedSubTotal += temp.total;
        return temp;
      });

      return {
        ...state,
        cartItems: updatedItems,
        subTotal: updatedSubTotal,
      };
    default:
      return state;
  }
};

export default cartReducer;
