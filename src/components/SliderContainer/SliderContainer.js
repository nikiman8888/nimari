import React, { useState, useEffect } from "react";
import "./SliderContainer.css";
import i1 from "../../images/slider1.jpg";
import ImgComp from "../ImgComp/ImgComp";
import anime from "animejs";

function SliderContainer() {
  
  let [counter, updateCounter] = useState(1);
  let [x, setX] = useState(0);
  //let arr1 = new Array(arr.length);
  let arr = [
   
    <ImgComp src={i1} />,
    <ImgComp src={i1} />,
    <ImgComp src={i1} />,
    <ImgComp src={i1} />,
    <ImgComp src={i1} />,
    <ImgComp src={i1} />,
    <ImgComp src={i1} />,
    
  ];
  const goLeft = () => {
    x === 0 ? setX(-100 * arr.length + 100) : setX(x + 100); // -300 to get the last 3 photos
    if (counter === 1) {
      updateCounter(arr.length);
    } else {
      updateCounter(counter-1);
    }
  };

  const goRight = () => {
    x === -100 * arr.length + 100 ? setX(0) : setX(x - 100);
    // 300 to get the first 3 photos
    if (counter === arr.length) {
      updateCounter(1);
    } else {
      updateCounter(counter+1);
    }
  };

  useEffect(() => {
    anime({
      targets: ".center",
      scale: 1,
    });
  }, []);

  return (
    <div className="new-slider-container">
      <h1>Hoви Продукти</h1>
      <div className="new-slider-wrapper">
      
        <div className="new-slider">
        <button className="left-direction" onClick={goLeft}>
          <i className="fas fa-chevron-circle-left"></i>
        </button>
          {arr.map((item, index) => {
           
            return (
              <div
                key={index}
                className="single-img"
                style={{ transform: `translateX(${x}%)` }}
              >
                {item}
              </div>
            );
          })}
          <button className="right-direction" onClick={goRight}>
          <i className="fas fa-chevron-circle-right"></i>
        </button>
        </div>
        
      </div>
      <p>
        {counter} / {arr.length}
      </p>
    </div>
  );
}

export default SliderContainer;
