import React, { Component } from "react";
import "./Logo.css";
import flower from "../../images/flower1.jpg";
import shevron from "../../images/logo-name1.png";
import anime from "animejs";

class Logo extends Component {
  //Шивашко ателие

  componentDidMount() {
    anime({
      targets: ".center-part .first-part-logo .letter",
      opacity: 1,
      translateY: 40,
      rotate: {
        value: 360,
        duration: 2000,
        easing: "easeInExpo",
      },
      //scale: anime.stagger([0.7, 1.0], { from: "center" }),
      delay: anime.stagger(100, { start: 800 }),
      translateX: [-10, 30],
    });
    anime({
      targets: ".center-part h1",
      delay: "4100",
      opacity: 1,
      duration: "3400",
      
    });
  }

  render() {
    return (
      <div className="logo-wrapper">
        <div className="left-part">
          <img src={flower} />
        </div>
        <div className="center-part">
          <span className="first-part-logo">
            <span className="letter">Ш</span>
            <span className="letter">и</span>
            <span className="letter">в</span>
            <span className="letter">а</span>
            <span className="letter">ш</span>
            <span className="letter">к</span>
            <span className="letter">о</span>
          </span>
          <span className="first-part-logo">
            <span className="letter">а</span>
            <span className="letter">т</span>
            <span className="letter">е</span>
            <span className="letter">л</span>
            <span className="letter">и</span>
            <span className="letter">е</span>
          </span>

          <h1>NIMARI</h1>
        </div>
        <div className="right-part">
          <img src={shevron} />
        </div>
      </div>
    );
  }
}

export default Logo;
