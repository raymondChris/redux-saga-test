import * as actionTypes from "../actionTypes";

const inisialState = {
  resultList: [],
};

const reducer = (state = inisialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RESULT:
      const newList = [...state.resultList];
      newList.push(action.value);
      return {
        ...state,
        resultList: [...newList],
      };
    case actionTypes.RESET_RESULT:
      return {
        ...state,
        resultList: [],
      };
    default:
      return state;
  }
};

export default reducer;
