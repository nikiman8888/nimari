import React from 'react';
import './Accesories.css';
import img from '../../../images/acc1.png'
const Accesories = (props) => {
    const name = props.name;
    const path = `/images/accesories/${name}.png`; //for real usess

    //we do same here .harcore img  to prevent img path broke in gh pages.
    //the real way is to loop the imgs in parent component and here we take in path the name of each img 
   
  return (
    <div className="accesories-single">
      <img src = {img} alt = "accesories" />

    </div>
  );
};

export default Accesories;