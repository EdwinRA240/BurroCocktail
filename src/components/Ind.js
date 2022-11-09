import React from "react";
import "../Ind.css";

function Ind(props) {
  return (
    <>
      <div className="descripcion-inicio">
        <h1>{props.title}</h1>
        <p>{props.instrucciones}</p>
      </div>
      <div className="img-inicio">
        <img src={props.img} alt="noPic" />
      </div>
    </>
  );
}

export default Ind;
