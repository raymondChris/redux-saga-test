import React from "react";
import "./inputComp.css";

import { connect } from "react-redux";
import { valueActions } from "../../store/actions";

const InputComp = (props) => {
  const { onChange, inputRef } = props;

  return (
    <input
      ref={inputRef}
      type="string"
      className="input"
      onChange={(e) => onChange(parseInt(e.target.value, 10))}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    val: state.value.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (newVal) => {
      return dispatch(valueActions.changeDispatcher(newVal));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputComp);
