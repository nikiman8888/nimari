import React from "react";
import "./Clothes.css";

const Clothes = (props) => {
    const name = props.name;
    const path = `/images/clothes/${name}.png`;
   
  return (
    <div className="clothes-single">
      <img src = {path} />
      <div>{name}</div>
      
    </div>
  );
};

export default Clothes;
