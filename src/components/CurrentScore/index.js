import React from "react";
import "./style.css";

function CurrentScore(props) {
  return <h3 className="currentScore">{props.children}</h3>;
}

export default CurrentScore;
