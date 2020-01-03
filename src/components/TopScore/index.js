import React from "react";
import "./style.css";

function TopScore(props) {
  return <h3 className="topScore">{props.children}</h3>;
}

export default TopScore;
