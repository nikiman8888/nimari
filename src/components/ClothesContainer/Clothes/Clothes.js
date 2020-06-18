import React from "react";
import "./Clothes.css";
import img from  '../../../images/bluza1.png'
const Clothes = (props) => {
    const name = props.name;
    const path = `/images/clothes/${name}.png`;
   
  return (
    <div className="clothes-single">
      <img src = {img} />
      <div>{'Clothes'}</div>
      
    </div>
  );
};

export default Clothes;
