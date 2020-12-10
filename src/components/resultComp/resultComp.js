import React from "react";
import "./resultComp.css";

import { connect } from "react-redux";

const ResultComp = (props) => {
  const { resList } = props;

  const resultList = resList.map((result, i) => {
    return <div key={i}>{result}</div>;
  });
  return (
    <>
      <h2>RESULTS</h2>
      <div className="resultList">{resultList}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    resList: state.result.resultList,
  };
};

export default connect(mapStateToProps)(ResultComp);
