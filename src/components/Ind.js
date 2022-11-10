import React from "react";
import "../Ind.css";
import "../App.css";

const Ind = (props) => {
  return (
    <>
      <div className="descripcion-inicio">
        <h1>{props.title}</h1>
        <h3>{props.instrucciones}</h3>
        <h4>Ingredient:</h4>
        {props.ingredientes.map((e,i) => {
          if (e === null) return ""
          else return <p>{i+1}.-{e}</p>;
        })}
      </div>
      <div className="img-inicio">
        <img src={props.img} alt="noPic" />
      </div>
    </>
  );
};

export default Ind;
