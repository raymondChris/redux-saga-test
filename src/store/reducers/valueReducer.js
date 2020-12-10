import * as actionTypes from "../actionTypes";

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_RESULT:
      return {
        ...state,
        value: 0,
      };
    case actionTypes.CHANGE_VALUE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
