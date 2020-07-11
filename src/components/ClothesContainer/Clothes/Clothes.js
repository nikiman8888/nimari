import React from "react";
import "./Clothes.css";
import img from '../../../images/bluza1.png';

const Clothes = (props) => {
    const name = props.name;
    const path = `/images/clothes/${name}.png`;// this path is for real usess
   
    //return the  img hardcore ,because of github pages to not broke the img path.
    //the real way is to  loop the array in parent component and get the name from props. 
    //like this  we have the path of img.
  return (
    <div className="clothes-single">
      <img src = {img} alt = "clothes"/>          
    </div>
  );
};

export default Clothes;
