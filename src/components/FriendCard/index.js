import React from "react";
import "./style.css";

function FriendCard(props) {
  // console.log('props');
  // console.log(props.id);
  // console.log(props.guessed);

  // console.log(props.indexOf(props.id));
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Id:</strong> {props.id}
          </li>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>Guessed:</strong> {props.guessed}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id, props.guessed)} className="remove">
        x
      </span>
      <span onClick={() => props.handleIncrement(props.id)} className="cscore">
        +
      </span>
      <span onClick={() => props.handleDecrement(props.id)} className="tscore">
        -
      </span>
    </div>
  );
}

export default FriendCard;
