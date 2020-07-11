import React from "react";
import "./Clothes.css";

const Clothes = (props) => {
    const name = props.name;
    const path = `/images/clothes/${name}.png`;
   
  return (
    <div className="clothes-single">
      <img src = {path} alt = "clothes"/>
           
    </div>
  );
};

export default Clothes;
