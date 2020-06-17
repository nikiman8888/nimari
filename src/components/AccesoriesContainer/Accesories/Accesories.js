import React from 'react';
import './Accesories.css';

const Accesories = (props) => {
    const name = props.name;
    const path = `/images/accesories/${name}.png`;
   
  return (
    <div className="accesories-single">
      <img src = {path} />
      <div>{name}</div>
      
    </div>
  );
};

export default Accesories;