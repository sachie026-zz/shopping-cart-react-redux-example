export const cartAddAction = () => (dispatch) => {
  dispatch({
    type: "ADD_ITEM",
    payload: "result_of_simple_action",
  });
};

export const cartDaleteAction = () => (dispatch) => {
  dispatch({
    type: "DELETE_ITEM",
    payload: "result_of_simple_action",
  });
};

export const cartUpdateAction = () => (dispatch) => {
  dispatch({
    type: "UPDATE_ITEM",
    payload: "result_of_simple_action",
  });
};
