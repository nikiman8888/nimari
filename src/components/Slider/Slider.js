import React, { Component } from "react";
import "./Slider.css";
import Img from "../ImgComp/ImgComp";
import i1 from "../../images/slider1.jpg";
import i2 from "../../images/slider2.jpg";
import i3 from "../../images/slider3.jpg";
import i4 from "../../images/slider4.jpg";
import i5 from "../../images/slider5.jpg";
import anime from 'animejs';

//<i class="fas fa-chevron-left"></i>
//<i class="fas fa-chevron-right"></i>
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate: 0,
      arr1:[1,2,3,4,5],
      arr: [
        <Img src={i1} />,
        <Img src={i2} />,
        <Img src={i3} />,
        <Img src={i4} />,
        <Img src={i5} />,
      ],
    };
  }

  goLeft = () => {
    const { arr } = this.state;

    if (this.state.coordinate === 0) {
      this.setState({ coordinate: -100 * (arr.length - 1) });
    } else {
      this.setState({ coordinate: (this.state.coordinate += 100) });
    }
  };

  goRight = () => {
    const { arr } = this.state;

    if (this.state.coordinate === -100 * (arr.length - 1)) {
      this.setState({ coordinate: 0 });
    } else {
      this.setState({ coordinate: (this.state.coordinate -= 100) });
    }
    
  };

  render() {
    const { coordinate, arr,arr1 } = this.state;
    return (
      <div className="slider-wrapper">
        <button className="goLeft" onClick={this.goLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="slider-img-container">
          {arr.map((item, index) => {
            return (
              <div
                key={index}
                className="single-img-wrapper"
                style={{ transform: `translateX(${coordinate}%)` }}
              >
                {item}
              </div>
            );
          })}
        </div>

        <button className="goRight" onClick={this.goRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  }
}

export default Slider;