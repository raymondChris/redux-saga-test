import * as actionTypes from "../actionTypes";

export const incDispatcher = (value) => {
  return {
    type: actionTypes.INC_VALUE_INIT,
    value: value,
  };
};

export const addDisptacher = (value) => {
  return {
    type: actionTypes.ADD_VALUE_INIT,
    value: value,
  };
};

export const minusDispatcher = (value) => {
  return {
    type: actionTypes.MINUS_VALUE_INIT,
    value: value,
  };
};

export const decrDispatcher = (value) => {
  return {
    type: actionTypes.DECR_VALUE_INIT,
    value: value,
  };
};

export const changeDispatcher = (value) => {
  return (dispatch) => {
    dispatch(change(value));
  };
};

export const change = (value) => {
  return {
    type: actionTypes.CHANGE_VALUE,
    value: value,
  };
};
