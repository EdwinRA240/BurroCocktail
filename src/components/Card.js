import React from "react";
import "../App.css";

function Card(props) {
  return (
    <>
      <div className="container">
        <div className="img">
          <img src={props.img} alt="NoPhoto" />
        </div>
        <div className="title">
          <h1>{props.title}</h1>
        </div>
      </div>
    </>
  );
}

export default Card;
