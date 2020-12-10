import React from "react";
import "./controlBarComp.css";

import { connect } from "react-redux";

import * as actionTypes from "../../store/actionTypes";
import { valueActions } from "../../store/actions";

const ControlBarComp = (props) => {
  const { val, inputRef, onInc, onAdd, onReset, onMinus, onDecr } = props;

  const resetHandler = () => {
    inputRef.current.value = "";
    onReset();
  };

  console.log(val);
  return (
    <div className="controlBar">
      <button onClick={() => onInc(parseInt(val, 10))}>Increment</button>
      <button onClick={() => onAdd(parseInt(val, 10))}>Add 7</button>
      <button onClick={() => resetHandler()}>Reset</button>
      <button onClick={() => onMinus(parseInt(val, 10))}>Minus 8</button>
      <button onClick={() => onDecr(parseInt(val, 10))}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    val: state.value.value,
    resList: state.result.resultList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInc: (value) => {
      dispatch(valueActions.incDispatcher(value));
    },
    onAdd: (value) => {
      dispatch(valueActions.addDisptacher(value));
    },
    onMinus: (value) => {
      dispatch(valueActions.minusDispatcher(value));
    },
    onDecr: (value) => {
      dispatch(valueActions.decrDispatcher(value));
    },
    onReset: () => dispatch({ type: actionTypes.RESET_RESULT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBarComp);
