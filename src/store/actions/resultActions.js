import * as actionTypes from "../actionTypes";

export const addResultDispatcher = (value) => {
  return (dispatch) => {
    dispatch(addResult(value));
  };
};

export const addResult = (value) => {
  return { type: actionTypes.ADD_RESULT, value: value };
};
