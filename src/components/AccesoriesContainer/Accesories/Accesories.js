import React from 'react';
import './Accesories.css';
import img from '../../../images/acc1.png'

const Accesories = (props) => {
    const name = props.name;
    //const path = `../../../images/accesories/${name}.png`;
   //const path = '../../../images/clothes1.jpg';
  return (
    <div className="accesories-single">
      <img src = {img} />
  <div>{'accesories'}</div>
      
    </div>
  );
};

export default Accesories;